/**
 * entry.js
 * 
 * This is the first file loaded. It sets up the Renderer, 
 * Scene and Camera. It also starts the render loop and 
 * handles window resizes.
 * 
 */

import * as THREE from 'three';
import SeedScene from './objects/Scene.js';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const renderer = new THREE.WebGLRenderer({antialias: true});
const seedScene = new SeedScene();

// scene
scene.add(seedScene);

// camera
camera.position.x = -200;
camera.position.y = 50;
camera.position.z = -200;
camera.lookAt(new THREE.Vector3(0,0,0));
//const controls = new FlyControls(camera, renderer.domElement);
//controls.movementSpeed = 0.0001;
//controls.lookSpeed = 0.00001;
//controls.lookVertical = false;

// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

// render loop
const onAnimationFrameHandler = (delta) => {
  seedScene.update;
  //controls.update(delta);
  renderer.render(scene, camera);
  window.requestAnimationFrame(onAnimationFrameHandler);
}
window.requestAnimationFrame(onAnimationFrameHandler);

// resize
const windowResizeHanlder = () => { 
  const { innerHeight, innerWidth } = window;
  renderer.setSize(innerWidth, innerHeight);
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
};
windowResizeHanlder();
window.addEventListener('resize', windowResizeHanlder);

// dom
document.body.style.margin = 0;
document.body.appendChild( renderer.domElement );
