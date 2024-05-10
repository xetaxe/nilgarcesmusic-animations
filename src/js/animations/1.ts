import * as THREE from 'three'
import { init } from '../shared/init';

// Constants and relevant variables
const MAX_POINTS = 5000;

// ========================================
// Initialize setup
// ========================================
const {scene, camera, renderer} = init();

// Camera
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

// Light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(1, 2, 0);
directionalLight.castShadow = true;
scene.add(directionalLight);


// ========================================
// Add objects
// ========================================
// Test line
const lineGeometry = new THREE.BufferGeometry();
const lineGeometry2 = new THREE.BufferGeometry();
const positions = new Float32Array( MAX_POINTS * 3 );
const positions2 = new Float32Array( MAX_POINTS * 3 );
lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
lineGeometry2.setAttribute('position', new THREE.BufferAttribute(positions2, 3));

const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
const lineMaterial2 = new THREE.LineBasicMaterial({ color: 0x00ff00 });

const line = new THREE.Line(lineGeometry, lineMaterial);
const line2 = new THREE.Line(lineGeometry2, lineMaterial2);
scene.add(line);
scene.add(line2);

// ========================================
// Animate
// ========================================
const positionAttribute = line.geometry.getAttribute('position');
const positionAttribute2 = line2.geometry.getAttribute('position');
let x = 0, y = 0, z = 0;

let numDraw = 0;

const tick = () => {
  if( numDraw < MAX_POINTS ) {
    x += (Math.random() - 0.5) * 2;
    y += (Math.random() - 0.5) * 2;
    z += (Math.random() - 0.5) * 2;

    positionAttribute.setXYZ( numDraw, x, y, z );
    positionAttribute2.setXYZ( numDraw, -x, -y, -z);
    
    numDraw++;
    line.geometry.setDrawRange(0, numDraw);
    line2.geometry.setDrawRange(0, numDraw);
  }
  // Render
  line.geometry.rotateY(0.01);
  line.geometry.rotateX(0.015);
  line2.geometry.rotateY(0.01);
  line2.geometry.rotateX(0.015);

  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
//   setTimeout(() => {
//     requestAnimationFrame(tick);
//   }, 1000 / 100);
}

tick();