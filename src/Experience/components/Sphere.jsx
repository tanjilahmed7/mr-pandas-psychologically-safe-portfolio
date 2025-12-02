import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useMemo } from "react";
import * as THREE from "three/webgpu";
import {
  length,
  clamp,
  uv,
  mix,
  cross,
  float,
  Fn,
  normalize,
  normalLocal,
  positionLocal,
  varying,
  transformNormalToView,
  vec3,
  abs,
  If,
  negate,
  add,
  uniform,
} from "three/tsl";
import { cnoise } from "../shaders/utils/perlin";

extend(THREE);

export default function Sphere() {
  const { nodes: backgroundNodes } = useMemo(() => {
    const gradientNode = Fn(() => {
      const color1 = vec3(0.01, 0.0, 0.0);
      const color2 = vec3(0.1, 0.1, 0.1);
      const t = clamp(length(abs(uv().sub(0.5))), 0.0, 0.8);
      return mix(color1, color2, t);
    });

    const sphereColorNode = gradientNode();

    return {
      nodes: {
        sphereColorNode,
      },
    };
  }, []);

  return (
    <mesh>
      <sphereGeometry args={[50, 16, 16]} />
      <meshBasicNodeMaterial
        colorNode={backgroundNodes.sphereColorNode}
        side={THREE.BackSide}
      />
    </mesh>
  );
}
