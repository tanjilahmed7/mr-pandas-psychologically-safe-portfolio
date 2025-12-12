import React, { useRef } from "react";
import { useGLTF, useKTX2 } from "@react-three/drei";
import { useKTX2Texture } from "../utils/ktxLoader";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/scene_1.glb");

  const waterfallone = useKTX2Texture("/textures/waterfall_one.ktx2");
  const waterfalltwo = useKTX2Texture("/textures/waterfall_two.ktx2");
  const not_waterfall = useKTX2Texture("/textures/not_waterfall.ktx2");
  const scene_1_bg = useKTX2Texture("/textures/scene_1_bg.ktx2");
  const scene_1 = useKTX2Texture("/textures/scene_1.ktx2");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={scene_1}
        position={[-3.042, 3.941, -2.322]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane037.geometry}
        material={scene_1}
        position={[-5.243, 4.082, -2.267]}
        rotation={[Math.PI / 2, -0.082, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane089.geometry}
        material={scene_1}
        position={[-3.93, 3.518, -2.266]}
        rotation={[Math.PI / 2, 0.065, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane090.geometry}
        material={scene_1}
        position={[-3.974, 3.587, -2.409]}
        rotation={[Math.PI / 2, -0.19, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane116.geometry}
        material={scene_1}
        position={[-5.845, 1.066, -2.671]}
        rotation={[-1.501, -0.42, -3.093]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane124.geometry}
        material={scene_1}
        position={[-9.272, 0.977, -1.861]}
        rotation={[Math.PI / 2, -0.102, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane129.geometry}
        material={scene_1}
        position={[-2.078, 3.564, -2.266]}
        rotation={[Math.PI / 2, 0.272, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane130.geometry}
        material={scene_1}
        position={[-2.121, 3.596, -2.451]}
        rotation={[Math.PI / 2, 0.781, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["First_Scene_-_Bg001"].geometry}
        material={scene_1_bg}
        position={[-21.188, 0.605, -0.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.not_waterfall.geometry}
        material={not_waterfall}
        position={[-7.867, 2.012, -2.444]}
        rotation={[Math.PI / 2, 0.025, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Waterfall001.geometry}
        material={waterfallone}
        position={[-10.609, 1.507, -2.46]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Waterfall_Foam001.geometry}
        material={waterfallone}
        position={[-10.711, 0.873, -2.351]}
        rotation={[-Math.PI / 2, 0.134, -Math.PI]}
      />
    </group>
  );
}

useGLTF.preload("/models/scene_1.glb");
