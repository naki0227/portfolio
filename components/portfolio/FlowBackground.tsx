"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

export function FlowBackground({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [paused, setPaused] = useState(false);
  const [available, setAvailable] = useState(false);
  const pausedRef = useRef(false);
  useEffect(() => {
    pausedRef.current = paused;
    canvasRef.current?.dispatchEvent(new Event("motionchange"));
  }, [paused]);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Data Saver: keep the CSS backdrop and skip downloading the graphics library.
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (connection?.saveData) return;
    let disposed = false;
    let cleanup: (() => void) | undefined;
    // Keep the graphics library out of the initial content path.
    import("@/lib/scene/create-flow-scene")
      .then(({ createFlowScene }) => {
        if (disposed) return;
        let scene: ReturnType<typeof createFlowScene>;
        try {
          scene = createFlowScene(canvas);
        } catch {
          return;
        }
        setAvailable(true);
        const media = matchMedia("(prefers-reduced-motion: reduce)");
        let hasContext = true;
        let frame = 0,
          time = 0,
          last = 0,
          visible = true,
          px = 0,
          py = 0;
        const canRun = () =>
          hasContext &&
          visible &&
          !document.hidden &&
          !media.matches &&
          !pausedRef.current;
        const paint = () => scene.render(time, px, py);
        const tick = (stamp: number) => {
          if (!canRun()) {
            frame = 0;
            return;
          }
          if (stamp - last > 40) {
            time += 0.04;
            last = stamp;
            paint();
          }
          frame = requestAnimationFrame(tick);
        };
        const reconcile = () => {
          cancelAnimationFrame(frame);
          frame = 0;
          if (hasContext && visible && !document.hidden) paint();
          if (canRun()) frame = requestAnimationFrame(tick);
        };
        const resize = new ResizeObserver(() => {
          const rect = canvas.getBoundingClientRect();
          scene.resize(rect.width, rect.height);
          reconcile();
        });
        resize.observe(canvas);
        const observer = new IntersectionObserver(([entry]) => {
          visible = entry.isIntersecting;
          reconcile();
        });
        observer.observe(canvas);
        const pointer = (event: PointerEvent) => {
          if (media.matches || pausedRef.current) return;
          const rect = canvas.getBoundingClientRect();
          px = (event.clientX - rect.left) / rect.width - 0.5;
          py = (event.clientY - rect.top) / rect.height - 0.5;
        };
        const contextLost = (event: Event) => {
          event.preventDefault();
          hasContext = false;
          cancelAnimationFrame(frame);
          setAvailable(false);
        };
        canvas.addEventListener("webglcontextlost", contextLost);
        canvas.addEventListener("motionchange", reconcile);
        window.addEventListener("pointermove", pointer, { passive: true });
        document.addEventListener("visibilitychange", reconcile);
        media.addEventListener("change", reconcile);
        reconcile();
        cleanup = () => {
          cancelAnimationFrame(frame);
          resize.disconnect();
          observer.disconnect();
          window.removeEventListener("pointermove", pointer);
          document.removeEventListener("visibilitychange", reconcile);
          media.removeEventListener("change", reconcile);
          canvas.removeEventListener("motionchange", reconcile);
          canvas.removeEventListener("webglcontextlost", contextLost);
          scene.dispose();
        };
      })
      .catch(() => {
        /* The CSS backdrop remains readable if WebGL is unavailable. */
      });
    return () => {
      disposed = true;
      cleanup?.();
    };
  }, []);
  return (
    <div className="flow-background" data-ready={available}>
      <div className="flow-fallback" aria-hidden="true" />
      {children}
      <canvas ref={canvasRef} aria-hidden="true" />
      {available && (
        <Button
          variant="ghost"
          className="flow-control"
          aria-label={paused ? "背景の動きを再生" : "背景の動きを停止"}
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
        >
          {paused ? "MOTION OFF" : "MOTION ON"}
          <span>{paused ? "▶" : "Ⅱ"}</span>
        </Button>
      )}
    </div>
  );
}
