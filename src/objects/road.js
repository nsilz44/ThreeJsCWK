import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/road.png'

export default class Road extends THREE.Group {
    constructor() {
        super();
    const loader = new THREE.TextureLoader();
    loader.load(PNG, texture => {
        const material = new THREE.MeshBasicMaterial( {map: texture} );
        const geometry = new THREE.BoxGeometry( 10, 0.01, 130 );
        const road = new THREE.Mesh( geometry, material );
        road.position.set(-85,0.1,-80)
        this.add(road);
})
}}