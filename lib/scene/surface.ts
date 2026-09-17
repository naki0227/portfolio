/** Domain-free parametric surface. Stable geometry for SSR-independent visuals. */
export const SURFACE_LINES = 48;
export const SURFACE_SEGMENTS = 90;
export function surfacePoint(
  u: number,
  v: number,
  time: number,
): [number, number, number] {
  const x = (u - 0.5) * 18;
  const z = (v - 0.5) * 12;
  const envelope = Math.exp(-Math.pow((u - 0.56) * 2, 2));
  const y =
    Math.sin(u * 5.4 + v * 2.7 + time * 0.12) * 2.1 * envelope +
    Math.cos(v * 5.2 - u * 3.4 + time * 0.09) * 1.1;
  return [x, y, z];
}
