import * as THREE from 'three';
import BasicLights from './Lights.js';
import Bush from './Bush.js';
import Building from './building.js';
import { degToRad } from 'three/src/math/MathUtils';
import Forest from './forest.js';
import PNG from './images/grass.png'
import Road from './road.js';
import Statues from './statues.js';


export default class SeedScene extends THREE.Group {
  constructor() {
    super();

    // add lights same as boilerplate code
    const lights = new BasicLights();
    this.add(lights);

    // make ground
    const geometry = new THREE.BoxGeometry( 300, 0.1, 300 );
    const loader = new THREE.TextureLoader();
    loader.load(PNG, texture => {
      const material = new THREE.MeshBasicMaterial( {map: texture} );
      const ground = new THREE.Mesh( geometry, material );
      ground.position.set(0, -0.06, 0);
      this.add( ground );
    })
    

    const road = new Road();
    this.add(road);

    const bush1 = new Bush();
    bush1.position.set(50,0,0);
    this.add(bush1);

    const building1 = new Building();
    building1.position.set(-50,0,-50)
    this.add(building1)

    const building2 = new Building();
    building2.position.set(-90,0,30)
    building2.rotateY(degToRad(-90));
    this.add(building2)

    const building3 = new Building();
    building3.position.set(-120,0,-50)
    building3.rotateY(degToRad(-180));
    this.add(building3)
  
    const statues = new Statues();
    this.add(statues)

    const forest1 = new Forest();
    this.add(forest1);

    const forest2 = new Forest();
    forest2.position.set(0,0,-120);
    this.add(forest2);

    const forest3 = new Forest();
    forest3.position.set(-120,0,10);
    this.add(forest3);
  }


  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}