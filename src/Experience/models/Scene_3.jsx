import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/scene_3.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane072.geometry}
        material={nodes.Plane072.material}
        position={[13.378, 2.616, -2.127]}
        rotation={[Math.PI / 2, 0.026, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={nodes.Plane073.material}
        position={[9.987, 2.4, -2.5]}
        rotation={[Math.PI / 2, -0.051, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane095.geometry}
        material={nodes.Plane095.material}
        position={[11.683, 2.326, -2.296]}
        rotation={[Math.PI / 2, -0.072, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane096.geometry}
        material={nodes.Plane096.material}
        position={[12.548, 2.414, -2.296]}
        rotation={[Math.PI / 2, 0.023, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane111.geometry}
        material={nodes.Plane111.material}
        position={[10.511, 2.48, -2.362]}
        rotation={[Math.PI / 2, 0.023, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane112.geometry}
        material={nodes.Plane112.material}
        position={[8.405, 4.947, -2.744]}
        rotation={[Math.PI / 2, 0.023, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane113.geometry}
        material={nodes.Plane113.material}
        position={[8.363, 3.436, -2.754]}
        rotation={[Math.PI / 2, 0.073, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane114.geometry}
        material={nodes.Plane114.material}
        position={[10.062, 3.516, -2.754]}
        rotation={[Math.PI / 2, -0.127, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane115.geometry}
        material={nodes.Plane115.material}
        position={[10.712, 2.177, -0.262]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane117.geometry}
        material={nodes.Plane117.material}
        position={[-20.599, 4.634, -2.755]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane118.geometry}
        material={nodes.Plane118.material}
        position={[12.525, 2.178, -1.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pyramid_Door.geometry}
        material={nodes.Pyramid_Door.material}
        position={[12.525, 3.03, 0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Camel_Stick.geometry}
        material={nodes.Camel_Stick.material}
        position={[8.138, 1.997, -1.48]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.523, 1, 1.523]}
      />
    </group>
  );
}

useGLTF.preload("/scene_3.glb");
