import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useKTX2Texture } from "../utils/ktxLoader";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";

export default function Model({ scrollProgress, ...props }) {
  const { nodes, materials } = useGLTF("/models/Moving_Extras.glb");

  const material = useKTX2Texture("/textures/Moving_extras.ktx2");
  const camelGroupRef = useRef();
  const camelFrontRightRef = useRef();
  const camelBackRightRef = useRef();
  const camelFrontLeftRef = useRef();
  const camelBackLeftRef = useRef();
  const bikeGroupRef = useRef();
  const frontWheelRef = useRef();
  const backWheelRef = useRef();
  const bikePedalHolderRef = useRef();
  const gearRef = useRef();
  const bikePedalRef = useRef();
  const shipGroupRef = useRef();
  const skeletonGroupRef = useRef();

  useFrame(() => {
    if (
      scrollProgress.current >= 0 &&
      scrollProgress.current <= 0.3 &&
      bikeGroupRef.current
    ) {
      const normalizedProgress = scrollProgress.current / 0.3;

      const targetX = normalizedProgress * 16.89;
      bikeGroupRef.current.position.x = THREE.MathUtils.lerp(
        bikeGroupRef.current.position.x,
        targetX,
        0.1
      );

      const wheelTargetRotation = normalizedProgress * Math.PI * -16;

      if (frontWheelRef.current) {
        frontWheelRef.current.rotation.y = THREE.MathUtils.lerp(
          frontWheelRef.current.rotation.y,
          wheelTargetRotation,
          0.1
        );
      }

      if (backWheelRef.current) {
        backWheelRef.current.rotation.y = THREE.MathUtils.lerp(
          backWheelRef.current.rotation.y,
          wheelTargetRotation,
          0.1
        );
      }

      const bikePedalTargetRotation = normalizedProgress * Math.PI * 16 * 2;

      if (bikePedalHolderRef.current) {
        bikePedalHolderRef.current.rotation.y = THREE.MathUtils.lerp(
          bikePedalHolderRef.current.rotation.y,
          bikePedalTargetRotation,
          0.1
        );
      }

      if (bikePedalRef.current) {
        bikePedalRef.current.rotation.y = THREE.MathUtils.lerp(
          bikePedalRef.current.rotation.y,
          -bikePedalTargetRotation / 2,
          0.1
        );
      }

      if (gearRef.current) {
        gearRef.current.rotation.y = THREE.MathUtils.lerp(
          gearRef.current.rotation.y,
          bikePedalTargetRotation,
          0.1
        );
      }
    }

    console.log(scrollProgress);

    if (
      scrollProgress.current >= 0.31 &&
      scrollProgress.current <= 0.49 &&
      shipGroupRef.current
    ) {
      const normalizedProgress =
        (scrollProgress.current - 0.31) / (0.49 - 0.31);

      const targetX = normalizedProgress * 10;
      const targetY = normalizedProgress * 1.5;
      shipGroupRef.current.position.x = THREE.MathUtils.lerp(
        shipGroupRef.current.position.x,
        targetX,
        0.1
      );
      shipGroupRef.current.position.y = THREE.MathUtils.lerp(
        shipGroupRef.current.position.y,
        targetY,
        0.1
      );
    }

    if (
      scrollProgress.current >= 0.508 &&
      scrollProgress.current <= 0.6 &&
      camelGroupRef.current
    ) {
      const normalizedProgress =
        (scrollProgress.current - 0.508) / (0.6 - 0.508);

      const targetX = normalizedProgress * 6.5;
      camelGroupRef.current.position.x = THREE.MathUtils.lerp(
        camelGroupRef.current.position.x,
        targetX,
        0.1
      );

      const oscillationFrequency = 3;
      const maxRotation = THREE.MathUtils.degToRad(35);

      const rightLegOscillation =
        Math.sin(normalizedProgress * Math.PI * 2 * oscillationFrequency) *
        maxRotation;
      const leftLegOscillation =
        Math.sin(
          normalizedProgress * Math.PI * 2 * oscillationFrequency + Math.PI
        ) * maxRotation;

      if (camelFrontRightRef.current) {
        const targetRotation = rightLegOscillation;
        camelFrontRightRef.current.rotation.y = THREE.MathUtils.lerp(
          camelFrontRightRef.current.rotation.y,
          targetRotation,
          0.1
        );
      }

      if (camelBackRightRef.current) {
        const targetRotation = rightLegOscillation;
        camelBackRightRef.current.rotation.y = THREE.MathUtils.lerp(
          camelBackRightRef.current.rotation.y,
          targetRotation,
          0.1
        );
      }

      if (camelFrontLeftRef.current) {
        const targetRotation = leftLegOscillation;
        camelFrontLeftRef.current.rotation.y = THREE.MathUtils.lerp(
          camelFrontLeftRef.current.rotation.y,
          targetRotation,
          0.1
        );
      }

      if (camelBackLeftRef.current) {
        const targetRotation = leftLegOscillation;
        camelBackLeftRef.current.rotation.y = THREE.MathUtils.lerp(
          camelBackLeftRef.current.rotation.y,
          targetRotation,
          0.1
        );
      }
    }

    if (
      scrollProgress.current >= 0.609 &&
      scrollProgress.current <= 0.69 &&
      skeletonGroupRef.current
    ) {
      const normalizedProgress =
        (scrollProgress.current - 0.609) / (0.69 - 0.609);

      const targetX = normalizedProgress * 6.3;
      skeletonGroupRef.current.position.x = THREE.MathUtils.lerp(
        skeletonGroupRef.current.position.x,
        targetX,
        0.1
      );
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={camelGroupRef}>
        <mesh
          geometry={nodes.Camel_Stick.geometry}
          material={material}
          position={[8.138, 1.997, -1.48]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.523, 1, 1.523]}
        />
        <mesh
          geometry={nodes.Camel_Body.geometry}
          material={material}
          position={[8.226, 2.754, -1.394]}
          rotation={[Math.PI / 2, 0.013, 0]}
          scale={0.849}
        />
        <mesh
          ref={camelFrontRightRef}
          geometry={nodes.front_right_camel.geometry}
          material={material}
          position={[8.434, 2.572, -1.392]}
          rotation={[Math.PI / 2, -0.054, 0]}
        />
        <mesh
          ref={camelBackRightRef}
          geometry={nodes.back_right_camel.geometry}
          material={material}
          position={[7.97, 2.547, -1.392]}
          rotation={[Math.PI / 2, -0.054, 0]}
        />
        <mesh
          ref={camelFrontLeftRef}
          geometry={nodes.front_left_camel.geometry}
          material={material}
          position={[8.392, 2.703, -1.426]}
          rotation={[Math.PI / 2, -0.054, 0]}
        />
        <mesh
          ref={camelBackLeftRef}
          geometry={nodes.back_left_camel.geometry}
          material={material}
          position={[7.97, 2.609, -1.426]}
          rotation={[Math.PI / 2, -0.054, 0]}
        />
      </group>

      <group ref={bikeGroupRef} position={[0, 0.15, 0]}>
        <group
          ref={bikePedalHolderRef}
          position={[-20.535, 0.616, -1.381]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        >
          <mesh
            geometry={nodes.Bike_Pedal_Holder.geometry}
            material={material}
          />
          <mesh
            ref={bikePedalRef}
            geometry={nodes.Bike_Pedal.geometry}
            material={material}
            position={[-0.138, 0.002, 0.005]}
            rotation={[0, 0, 0]}
          />
        </group>
        <mesh
          geometry={nodes.Bike_Stick.geometry}
          material={material}
          position={[-20.497, 0.378, -1.48]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.523, 1, 1.523]}
        />
        <mesh
          geometry={nodes.Bike_Body.geometry}
          material={material}
          position={[-20.607, 0.901, -1.391]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
        <mesh
          ref={backWheelRef}
          geometry={nodes.Bike_Bake_Wheel.geometry}
          material={material}
          position={[-20.918, 0.666, -1.392]}
          rotation={[Math.PI / 2, -0.242, 0]}
        />
        <mesh
          ref={frontWheelRef}
          geometry={nodes.Bike_Front_Wheel.geometry}
          material={material}
          position={[-19.978, 0.664, -1.395]}
          rotation={[Math.PI / 2, -0.242, 0]}
        />
        <mesh
          ref={gearRef}
          geometry={nodes.Plane107.geometry}
          material={material}
          position={[-20.537, 0.615, -1.385]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
      </group>

      <mesh
        geometry={nodes.Actual_Plane.geometry}
        material={material}
        position={[-20.812, 8.181, -1.406]}
        rotation={[Math.PI / 2, -0.029, 0]}
      />
      <group position={[-0.2, 0, 0]} ref={skeletonGroupRef}>
        <mesh
          geometry={nodes.Skeleton_Stick.geometry}
          material={material}
          position={[15.013, 1.303, -1.48]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.523, 1, 1.523]}
        />
      </group>

      <group position={[-0.2, 0, 0]} ref={shipGroupRef}>
        <mesh
          geometry={nodes.Ship_Stick.geometry}
          material={material}
          position={[-2.512, 0.41, -1.48]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.523, 1, 1.523]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/Moving_Extras.glb");
