import { React, Suspense, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { PostProcessingPass } from "./components/PostProcessingPass";
import Plane from "./components/Plane";

const Scene = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Plane />
        {/* <PostProcessingPass /> */}
      </Suspense>
    </>
  );
};

export default Scene;
