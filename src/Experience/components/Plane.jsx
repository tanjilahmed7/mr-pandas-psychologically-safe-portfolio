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

extend(THREE);

export default function Plane() {
  const { nodes: backgroundNodes } = useMemo(() => {
    const gradientNode = Fn(() => {
      const color1 = vec3(0.01, 0.0, 0.0);
      const color2 = vec3(0.1, 0.1, 0.1);
      const t = clamp(length(abs(uv().sub(0.5))), 0.0, 0.8);
      return mix(color1, color2, t);
    });

    const planeColorNode = gradientNode();

    return {
      nodes: {
        planeColorNode,
      },
    };
  }, []);

  return (
    <mesh>
      <planeGeometry args={[1, 1]} />
      <meshBasicNodeMaterial
        colorNode={backgroundNodes.planeColorNode}
        side={THREE.BackSide}
      />
    </mesh>
  );
}
