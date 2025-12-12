import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useKTX2Texture } from "../utils/ktxLoader";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/models/Moving_Extras.glb");

  const material = useKTX2Texture("/textures/Moving_extras.ktx2");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mr_Panda.geometry}
        material={material}
        position={[-21.563, 1.36, -1.4]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ship.geometry}
        material={material}
        position={[-2.448, 1.489, -1.378]}
        rotation={[Math.PI / 2, 0.064, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bone_Body.geometry}
        material={material}
        position={[15.084, 2.631, -1.365]}
        rotation={[Math.PI / 2, -0.064, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camel_Body.geometry}
        material={material}
        position={[8.226, 2.754, -1.394]}
        rotation={[Math.PI / 2, 0.013, 0]}
        scale={0.849}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_right_camel.geometry}
        material={material}
        position={[8.503, 2.401, -1.392]}
        rotation={[Math.PI / 2, -0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_right_camel.geometry}
        material={material}
        position={[7.982, 2.511, -1.392]}
        rotation={[Math.PI / 2, -0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.front_left_camel.geometry}
        material={material}
        position={[8.481, 2.48, -1.426]}
        rotation={[Math.PI / 2, -0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.back_left_camel.geometry}
        material={material}
        position={[7.98, 2.531, -1.426]}
        rotation={[Math.PI / 2, -0.054, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike_Pedal_Holder.geometry}
        material={material}
        position={[-21.426, 0.616, -1.381]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike_Stick.geometry}
        material={material}
        position={[-21.388, 0.378, -1.48]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.523, 1, 1.523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike_Body.geometry}
        material={material}
        position={[-21.498, 0.901, -1.391]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike_Bake_Wheel.geometry}
        material={material}
        position={[-21.809, 0.666, -1.392]}
        rotation={[Math.PI / 2, -0.242, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike_Front_Wheel.geometry}
        material={material}
        position={[-20.869, 0.664, -1.395]}
        rotation={[Math.PI / 2, -0.242, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane107.geometry}
        material={material}
        position={[-21.428, 0.615, -1.385]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bike_Pedal.geometry}
        material={material}
        position={[-21.288, 0.618, -1.376]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane110.geometry}
        material={material}
        position={[-22.099, 2.311, -1.406]}
        rotation={[Math.PI / 2, -0.029, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={material}
        position={[-22.043, 4.049, -1.52]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.523, 1, 1.523]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mr_Panda_Stick.geometry}
        material={material}
        position={[-21.553, 0.397, -1.454]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.523, 1, 1.523]}
      />
    </group>
  );
}

useGLTF.preload("/models/Moving_Extras.glb");
