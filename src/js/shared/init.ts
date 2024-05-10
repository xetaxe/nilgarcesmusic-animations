import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl') as HTMLCanvasElement;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

function resizeScene() {
  console.log("hola");
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// Export generated objects
export function init() {
  window.addEventListener('resize', resizeScene);
  return {scene, camera, renderer}
}