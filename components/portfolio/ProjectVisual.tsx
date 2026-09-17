import type { Project } from "@/content/portfolio";
export function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "frames")
    return (
      <div
        className="project-art art-frames"
        aria-label="時間の記録を表す概念図"
      >
        <div className="frame-ticks">
          00:00 <span>00:30</span> 01:00
        </div>
        <div className="film">
          {Array.from({ length: 7 }, (_, i) => (
            <div key={i}>
              <span style={{ height: `${22 + i * 9}%` }} />
            </div>
          ))}
        </div>
        <div className="art-caption">SMALL MOMENTS. VISIBLE PROGRESS.</div>
      </div>
    );
  if (type === "score")
    return (
      <div
        className="project-art art-score"
        aria-label="コードから音楽への変換を表す概念図"
      >
        <span className="art-code">fn create() → ♪</span>
        <div className="score-lines">
          {Array.from({ length: 28 }, (_, i) => (
            <i
              key={i}
              style={{ height: `${18 + Math.sin(i * 1.7) ** 2 * 70}%` }}
            />
          ))}
        </div>
        <div className="art-caption">CODE → STRUCTURE → SOUND</div>
      </div>
    );
  return (
    <div
      className="project-art art-pipeline"
      aria-label="入力・解析・動画処理の構成図"
    >
      <div className="pipeline">
        <span>
          INPUT<small>Go</small>
        </span>
        <b>→</b>
        <span>
          ANALYZE<small>Python</small>
        </span>
        <b>→</b>
        <span>
          RENDER<small>Rust</small>
        </span>
      </div>
      <div className="art-caption">ONE IDEA. CONNECTED RESPONSIBILITIES.</div>
    </div>
  );
}
