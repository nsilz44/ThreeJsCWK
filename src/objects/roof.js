import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/roof.png';

export default class Roof extends THREE.Group {
    constructor() {
        super();
        const loader = new THREE.TextureLoader();
        loader.load(PNG, texture => { 
            const geometry36 = new THREE.BoxGeometry(15,1,70);
        const roofmaterial = new THREE.MeshBasicMaterial( {map:texture} );
        const floorgeometry = new THREE.BoxGeometry(20,0.01,70)
        const roof3 = new THREE.Mesh(floorgeometry,roofmaterial);
        roof3.position.set(0,10,0);
        this.add(roof3);
        const roof1 = new THREE.Mesh(geometry36,roofmaterial);
    roof1.position.set(-5,15.5, 0);
    roof1.rotateZ(degToRad(45));
    this.add(roof1);
    const roof2 = new THREE.Mesh(geometry36,roofmaterial);
    roof2.position.set(5,15.5, 0);
    roof2.rotateZ(degToRad(-45));
    this.add(roof2);})
        }}
