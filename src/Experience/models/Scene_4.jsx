import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene_4.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane120.geometry}
        material={nodes.Plane120.material}
        position={[19.462, 3.327, -2.48]}
        rotation={[1.566, -0.053, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ghost.geometry}
        material={nodes.Ghost.material}
        position={[18.485, 1.879, -1.236]}
        rotation={[1.566, -0.053, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane122.geometry}
        material={nodes.Plane122.material}
        position={[15.905, 4.474, -2.751]}
        rotation={[1.566, -0.053, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane123.geometry}
        material={nodes.Plane123.material}
        position={[20.852, 4.776, -2.754]}
        rotation={[Math.PI / 2, -0.064, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane125.geometry}
        material={nodes.Plane125.material}
        position={[16.29, 3.282, -2.754]}
        rotation={[Math.PI / 2, -0.007, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane126.geometry}
        material={nodes.Plane126.material}
        position={[17.918, 4.052, -2.754]}
        rotation={[Math.PI / 2, -0.114, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane127.geometry}
        material={nodes.Plane127.material}
        position={[18.891, 4.813, -2.624]}
        rotation={[1.566, -0.334, -0.005]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane128.geometry}
        material={nodes.Plane128.material}
        position={[17.281, 2.381, -2.624]}
        rotation={[1.566, -0.062, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane131.geometry}
        material={nodes.Plane131.material}
        position={[17.414, 2.686, -2.609]}
        rotation={[1.566, -0.062, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane132.geometry}
        material={nodes.Plane132.material}
        position={[21.188, 2.448, -2.624]}
        rotation={[1.566, -0.062, -0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane133.geometry}
        material={nodes.Plane133.material}
        position={[17.656, 2.177, -0.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane134.geometry}
        material={nodes.Plane134.material}
        position={[-20.599, 4.634, -2.755]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Skeleton_Stick.geometry}
        material={nodes.Skeleton_Stick.material}
        position={[15.013, 1.819, -1.48]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.523, 1, 1.523]}
      />
    </group>
  );
}

useGLTF.preload("/scene_4.glb");
