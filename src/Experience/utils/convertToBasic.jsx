import { MeshBasicMaterial } from "three";
import * as THREE from "three";

export const convertMaterialsToMeshBasicMaterial = (
  materials,
  alphaTestValue = 0.55,
  brightness = 1.5 // New parameter: 1.0 is normal, 1.5 is 50% brighter, etc.
) => {
  Object.keys(materials).forEach((materialKey) => {
    const sourceMaterial = materials[materialKey];
    let newMaterial;

    // 1. Create the material normally first
    if (sourceMaterial.emissiveMap) {
      newMaterial = new MeshBasicMaterial({
        map: sourceMaterial.emissiveMap,
      });
    } else {
      newMaterial = new MeshBasicMaterial({
        map: sourceMaterial.map,
        transparent: true,
        alphaTest: alphaTestValue,
        side: THREE.DoubleSide,
      });
    }

    // 2. "Overdrive" the color to make it brighter
    // This multiplies the texture color by this value.
    // Setting this to > 1.0 will boost the brightness.
    newMaterial.color.setScalar(brightness);

    // 3. (Optional) Check Color Space
    // Often, materials look dark because of a color space mismatch.
    // Ensuring the map is sRGB is a safe bet for brightness.
    if (newMaterial.map) {
      newMaterial.map.colorSpace = THREE.SRGBColorSpace;
    }

    // Assign back to the object
    materials[materialKey] = newMaterial;
  });

  return materials;
};
