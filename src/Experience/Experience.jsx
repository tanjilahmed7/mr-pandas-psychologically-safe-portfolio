import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Scene from "./Scene";
import * as TSL from "three/tsl";
import * as THREE from "three/webgpu";

import { LinearSRGBColorSpace, NoToneMapping } from "three/webgpu";

const Experience = () => {
  return (
    <Canvas
      shadows
      flat={true}
      gl={(props) => {
        extend(THREE);
        const renderer = new THREE.WebGPURenderer(props);
        return renderer.init().then(() => renderer);
      }}
      style={{ width: "100vw", height: "100vh" }}
    >
      <Scene />

      <PerspectiveCamera
        ref={camera}
        makeDefault
        fov={35}
        position={[0, 0, 30]}
      />
    </Canvas>
  );
};

export default Experience;
