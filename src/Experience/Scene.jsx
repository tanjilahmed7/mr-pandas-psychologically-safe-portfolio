import { React, Suspense, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { PostProcessingPass } from "./components/PostProcessingPass";
import Panda from "./models/Panda";
import MovingObjects from "./models/Moving_Objects";
import { SoftShadows } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      {/* <ambientLight intensity={1} /> */}
      {/* <directionalLight position={[3.3, 1.0, 4.4]} castShadow intensity={4} /> */}

      <Suspense fallback={null}>
        <MovingObjects />
        {/* <Plane /> */}
        {/* <Panda /> */}
        {/* <Test /> */}
        {/* <PostProcessingPass /> */}
      </Suspense>
    </>
  );
};

export default Scene;
