import * as THREE from "three";

const depthZValue = 10;

export const cameraCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-23.702141, -0.183518, depthZValue),
  new THREE.Vector3(-17.8032, 0.336296, depthZValue),
  new THREE.Vector3(-11.971144, 0.803873, depthZValue),
  new THREE.Vector3(-4.681061, 0.775572, depthZValue),
  new THREE.Vector3(1.54859, 2.177679, depthZValue),
  new THREE.Vector3(8.42627, 2.505159, depthZValue),
  new THREE.Vector3(14.909897, 2.617222, depthZValue),
  new THREE.Vector3(21.697693, 2.617222, depthZValue),
  new THREE.Vector3(26.066216, 4.106054, depthZValue),
  new THREE.Vector3(31.030914, 4.106054, depthZValue),
  new THREE.Vector3(36.005978, 3.91222, depthZValue),
]);

export const rotationTargets = [
  {
    progress: 0,
    rotation: new THREE.Euler(
      -0.038597514321675644,
      0.8154055301533364,
      0.02810569163183589
    ),
  },
  {
    progress: 0.055,
    rotation: new THREE.Euler(
      2.2047942930161795,
      1.4880863769407249,
      -2.2064294165723446
    ),
  },
];
