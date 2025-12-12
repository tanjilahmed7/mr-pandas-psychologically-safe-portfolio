import React, { useRef, useEffect, useMemo } from "react";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import Scene from "./Scene";
import * as TSL from "three/tsl";
import * as THREE from "three/webgpu";

import { LinearSRGBColorSpace, NoToneMapping } from "three/webgpu";

const CameraController = () => {
  const camera = useRef();

  const { enableOrbitControls } = useControls({
    enableOrbitControls: {
      value: true,
      label: "Enable Orbit Controls",
    },
  });

  return (
    <>
      <PerspectiveCamera
        ref={camera}
        makeDefault
        fov={35}
        position={[0, 0, 30]}
      />
      {enableOrbitControls && <OrbitControls target={[0, 0, 0]} />}
    </>
  );
};

const Experience = () => {
  //From Fragments Supply
  // const { set } = useThree((state) => state);

  // useEffect(() => {
  //   set((state) => {
  //     const _state = { ...state };
  //     _state.gl.outputColorSpace = LinearSRGBColorSpace;
  //     _state.gl.toneMapping = NoToneMapping;
  //     return _state;
  //   });
  // }, []);

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
      <CameraController />
    </Canvas>
  );
};

export default Experience;
