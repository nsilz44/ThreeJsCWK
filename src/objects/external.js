import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/exteriorwall.png';

export default class External extends THREE.Group {
    constructor() {
        super();
        const loader = new THREE.TextureLoader();
        loader.load(PNG, texture => { 
            const externalmaterial = new THREE.MeshStandardMaterial( {map:texture} );
    const geometry28 = new THREE.BoxGeometry(0.1,10,70);
    const externalwall28 = new THREE.Mesh(geometry28,externalmaterial);
    externalwall28.position.set(10.05, 5, 0);
    this.add(externalwall28);

    const geometry29 = new THREE.BoxGeometry(0.1,8,70);
    const externalwall29 = new THREE.Mesh(geometry29,externalmaterial);
    externalwall29.position.set(-10.05, 6, 0);
    this.add(externalwall29);

    const geometry30 = new THREE.BoxGeometry(20,7.8,0.1);
    const externalwall30 = new THREE.Mesh(geometry30,externalmaterial);
    externalwall30.position.set(0, 6.1, -35.05);
    this.add(externalwall30);

    const geometry31 = new THREE.BoxGeometry(17.5,2.2,0.1);
    const externalwall31 = new THREE.Mesh(geometry31,externalmaterial);
    externalwall31.position.set(-1.25, 1.1, -35.05);
    this.add(externalwall31);

    const geometry32 = new THREE.BoxGeometry(1,2.2,0.1);
    const externalwall32 = new THREE.Mesh(geometry32,externalmaterial);
    externalwall32.position.set(-9.5, 1.1, -35.05);
    this.add(externalwall32);

    const externalwall33 = new THREE.Mesh(geometry31,externalmaterial);
    externalwall33.position.set(-1.25, 1.1, 35.05);
    this.add(externalwall33);

    const externalwall34 = new THREE.Mesh(geometry30,externalmaterial);
    externalwall34.position.set(0, 6.1, 35.05);
    this.add(externalwall34);

    const geometry35 = new THREE.BoxGeometry(0.1,1,70);
    const externalwall35 = new THREE.Mesh(geometry35,externalmaterial);
    externalwall35.position.set(-10.05,0.5, 0);
    this.add(externalwall35);
    })}
        }
