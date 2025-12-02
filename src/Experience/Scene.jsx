import { React, Suspense, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { useControls } from "leva";
import { PostProcessingPass } from "./components/PostProcessingPass";

const Scene = () => {
  return (
    <>
      <mesh>
        <boxGeometry attach="geometry" args={[2, 2, 2]} />
        <meshBasicMaterial attach="material" color="#6be092" />
      </mesh>
      <Suspense fallback={null}>
        <Sphere />
        {/* <PostProcessingPass /> */}
      </Suspense>
    </>
  );
};

export default Scene;
