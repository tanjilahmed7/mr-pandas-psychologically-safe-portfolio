import { useEffect, useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import * as THREE from "three/webgpu";
import { pass, mrt, output, emissive } from "three/tsl";
import { bloom } from "three/addons/tsl/display/BloomNode.js";

export const PostProcessingPass = () => {
  const { gl: renderer, scene, camera } = useThree();
  const postProcessingRef = useRef();
  const bloomPassRef = useRef();

  const { enableBloom, strength, radius, threshold } = useControls(
    "Post Processing",
    {
      enableBloom: { value: false, label: "Enable Bloom" },
      strength: { value: 1.4, min: 0, max: 10, step: 0.1 },
      radius: { value: 0.5, min: 0, max: 10, step: 0.1 },
      threshold: { value: 0.07, min: 0, max: 1, step: 0.01 },
    }
  );

  useEffect(() => {
    if (!renderer || !scene || !camera) return;

    const scenePass = pass(scene, camera);
    scenePass.setMRT(
      mrt({
        output,
        emissive,
      })
    );

    const outputPass = scenePass.getTextureNode("output");
    const emissivePass = scenePass.getTextureNode("emissive");

    let finalOutput = outputPass;

    if (enableBloom) {
      const bloomPass = bloom(emissivePass, strength, radius, threshold);
      bloomPassRef.current = bloomPass;
      finalOutput = outputPass.add(bloomPass);
    }

    const postProcessing = new THREE.PostProcessing(renderer);
    postProcessing.outputColorTransform = false;
    postProcessing.outputNode = finalOutput;

    postProcessingRef.current = postProcessing;

    return () => {
      postProcessingRef.current = null;
      bloomPassRef.current = null;
    };
  }, [renderer, scene, camera, enableBloom]);

  useFrame(() => {
    if (bloomPassRef.current && enableBloom) {
      bloomPassRef.current.strength.value = strength;
      bloomPassRef.current.radius.value = radius;
      bloomPassRef.current.threshold.value = threshold;
    }

    if (postProcessingRef.current) {
      postProcessingRef.current.render();
    }
  }, 1);

  return null;
};
