import { React, Suspense, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Environment, Sphere } from "@react-three/drei";

import { useControls } from "leva";

import { PostProcessingPass } from "./components/PostProcessingPass";

const Scene = ({ camera }) => {
  const { ambientLightIntensity, enableEnvironment } = useControls("Lighting", {
    ambientLightIntensity: { value: 0.6, min: 0, max: 10, step: 0.1 },
    enableEnvironment: false,
  });

  const {
    directionalLightIntensity,
    positionX,
    positionY,
    positionZ,
    directionalLightColor,
    castShadow,
    enableDirectionalLight,
    shadowBias,
    shadowNormalBias,
    shadowMapSize,
  } = useControls("Directional Light", {
    enableDirectionalLight: true,
    directionalLightIntensity: { value: 1.2, min: 0, max: 10, step: 0.1 },
    positionX: { value: 10, min: -20, max: 20, step: 0.5 },
    positionY: { value: 10, min: -20, max: 20, step: 0.5 },
    positionZ: { value: 5, min: -20, max: 20, step: 0.5 },
    directionalLightColor: "#ffffff",
    castShadow: true,
    shadowBias: { value: -0.0001, min: -0.01, max: 0.01, step: 0.0001 },
    shadowNormalBias: { value: 0.02, min: 0, max: 0.1, step: 0.001 },
    shadowMapSize: { value: 4096, options: [512, 1024, 2048, 4096] },
  });

  return (
    <>
      {enableEnvironment && (
        <Environment
          background={false}
          backgroundRotation={[0, Math.PI / 2, 0]}
          preset="city"
        />
      )}

      <ambientLight intensity={ambientLightIntensity} />

      {enableDirectionalLight && (
        <directionalLight
          intensity={directionalLightIntensity}
          position={[positionX, positionY, positionZ]}
          color={directionalLightColor}
          castShadow={castShadow}
          shadow-bias={shadowBias}
          shadow-normalBias={shadowNormalBias}
          shadow-mapSize={[shadowMapSize, shadowMapSize]}
          shadow-camera-near={0.1}
          shadow-camera-far={50}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
        />
      )}

      <Suspense fallback={null}>
        <Sphere />
        <PostProcessingPass />
      </Suspense>
    </>
  );
};

export default Scene;
