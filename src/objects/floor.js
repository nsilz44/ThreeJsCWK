import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/floor.png';

export default class Floor extends THREE.Group {
    constructor() {
        super();
        const loader = new THREE.TextureLoader();
        loader.load(PNG, texture => { 
            const floorgeometry = new THREE.BoxGeometry(20,0.01,70)
            const floormaterial = new THREE.MeshStandardMaterial( {map:texture} );
            const floor = new THREE.Mesh(floorgeometry,floormaterial);
            this.add(floor);})
        }}
