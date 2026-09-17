import { surfacePoint } from "@/lib/scene/surface";
/** Server-rendered geometric fallback: visible before JS and without WebGL. */
export function FlowFallback() {
  const lines = Array.from({ length: 42 }, (_, row) =>
    Array.from({ length: 81 }, (_, s) => {
      const [x, y, z] = surfacePoint(s / 80, row / 41, 0);
      const px = 670 + x * 53 + z * 16;
      const py = 270 + z * 23 - y * 43 + x * 12;
      return `${s ? "L" : "M"}${px.toFixed(1)},${py.toFixed(1)}`;
    }).join(" "),
  );
  return (
    <svg
      className="flow-static"
      viewBox="0 0 1300 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" strokeWidth=".8">
        {lines.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke={i === 20 ? "#b06a46" : "#648d9e"}
            opacity={i === 20 ? 0.7 : 0.26}
          />
        ))}
      </g>
    </svg>
  );
}
