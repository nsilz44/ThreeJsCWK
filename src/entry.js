
import * as THREE from 'three';
import SeedScene from './objects/Scene.js';
import { PointerLockControls} from 'three/examples/jsm/controls/PointerLockControls'
import Stats from 'three/examples/jsm/libs/stats.module';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera();
const renderer = new THREE.WebGLRenderer({antialias: true});
const seedScene = new SeedScene();

// scene
scene.add(seedScene);

let stats;
stats = new Stats();
document.body.appendChild( stats.dom );

// camera
camera.position.x = -85;
camera.position.y = 1.5;
camera.position.z = -130;
camera.lookAt(new THREE.Vector3(-90,1,-90));
//const controls = new FirstPersonControls(camera, renderer.domElement);
let moveForward = false;
let moveBackward = false;
let moveLeft = false;
let moveRight = false;
let canJump = false;

const velocity = new THREE.Vector3();
const direction = new THREE.Vector3();
const controls = new PointerLockControls( camera, renderer.domElement );
controls.movementSpeed = 10;
controls.lookSpeed = 0.05;
document.addEventListener( 'click', function () {
  controls.lock();
} );
const onKeyDown = function ( event ) {
  switch ( event.code ) {
    case 'ArrowUp':
    case 'KeyW':
      moveForward = true;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = true;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = true;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = true;
      break;
    case 'Space':
      if ( canJump === true ) velocity.y += 350;
      canJump = false;
      break;
  }
};

const onKeyUp = function ( event ) {
  switch ( event.code ) {
    case 'ArrowUp':
    case 'KeyW':
      moveForward = false;
      break;
    case 'ArrowLeft':
    case 'KeyA':
      moveLeft = false;
      break;
    case 'ArrowDown':
    case 'KeyS':
      moveBackward = false;
      break;
    case 'ArrowRight':
    case 'KeyD':
      moveRight = false;
      break;
  }
};
document.addEventListener( 'keydown', onKeyDown );
document.addEventListener( 'keyup', onKeyUp );

const clock = new THREE.Clock();  
// renderer
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x7ec0ee, 1);

// render loop
animate()
function animate() {
  requestAnimationFrame( animate );
  render();
  stats.update();
}

function render() {
      const delta = clock.getDelta( );
			velocity.x -= velocity.x * 10.0 * delta;
			velocity.z -= velocity.z * 10.0 * delta;
      velocity.y -= 9.8 * 100.0 * delta; // 100.0 = mass
      direction.z = Number( moveForward ) - Number( moveBackward );
			direction.x = Number( moveRight ) - Number( moveLeft );
			direction.normalize(); // this ensures consistent movements in all direction
			if ( moveForward || moveBackward ) velocity.z -= direction.z * 400.0 * delta;
			if ( moveLeft || moveRight ) velocity.x -= direction.x * 400.0 * delta;
      controls.moveRight( - velocity.x * delta );
			controls.moveForward( - velocity.z * delta );
      renderer.render( scene, camera );
}
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
