import * as THREE from "three";
import { surfacePoint, SURFACE_LINES, SURFACE_SEGMENTS } from "./surface";

/** Owns GPU resources only. No React, content, navigation or application state. */
export function createFlowScene(canvas: HTMLCanvasElement) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: "low-power",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.6));
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(1.5, 8.5, 14);
  camera.lookAt(0, 0, 0);
  const group = new THREE.Group();
  group.rotation.z = -0.25;
  group.rotation.y = -0.25;
  scene.add(group);
  const materials: THREE.Material[] = [];
  const geometries: THREE.BufferGeometry[] = [];
  const rows: THREE.Line[] = [];
  for (let r = 0; r < SURFACE_LINES; r++) {
    const positions = new Float32Array((SURFACE_SEGMENTS + 1) * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometries.push(geometry);
    const material = new THREE.LineBasicMaterial({
      color: r === 20 ? 0xba693f : 0x447783,
      transparent: true,
      opacity: r === 20 ? 0.8 : 0.2 + (0.2 * r) / SURFACE_LINES,
      depthWrite: false,
    });
    materials.push(material);
    const line = new THREE.Line(geometry, material);
    line.frustumCulled = false;
    rows.push(line);
    group.add(line);
  }
  const dotGeo = new THREE.BufferGeometry();
  const dots = new Float32Array(180 * 3);
  dotGeo.setAttribute("position", new THREE.BufferAttribute(dots, 3));
  geometries.push(dotGeo);
  const dotMat = new THREE.PointsMaterial({
    color: 0x255464,
    size: 0.025,
    transparent: true,
    opacity: 0.55,
  });
  materials.push(dotMat);
  const dotObject = new THREE.Points(dotGeo, dotMat);
  dotObject.frustumCulled = false;
  group.add(dotObject);
  function render(time: number, px: number, py: number) {
    for (let r = 0; r < SURFACE_LINES; r++) {
      const positions = rows[r].geometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;
      for (let s = 0; s <= SURFACE_SEGMENTS; s++) {
        const p = surfacePoint(
          s / SURFACE_SEGMENTS,
          r / (SURFACE_LINES - 1),
          time,
        );
        positions.setXYZ(s, ...p);
      }
      positions.needsUpdate = true;
    }
    const pos = dotGeo.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < 180; i++) {
      const p = surfacePoint((i % 20) / 19, Math.floor(i / 20) / 8, time);
      pos.setXYZ(i, ...p);
    }
    pos.needsUpdate = true;
    group.rotation.y = -0.25 + px * 0.07;
    group.rotation.x = py * 0.025;
    renderer.render(scene, camera);
  }
  function resize(width: number, height: number) {
    renderer.setSize(width, height, false);
    camera.aspect = width / Math.max(height, 1);
    camera.updateProjectionMatrix();
  }
  return {
    render,
    resize,
    dispose() {
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
    },
  };
}
