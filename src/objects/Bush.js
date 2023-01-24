import * as THREE from 'three';

export default class Bush extends THREE.Group {
    constructor() {
        super();

    const geometry = new THREE.IcosahedronGeometry(1,2);
    const material = new THREE.MeshBasicMaterial( {color: 0x100f00} );
    const leftbush = new THREE.Mesh( geometry, material );
    const middlebush = new THREE.Mesh (geometry,material);
    const rightbush = new THREE.Mesh (geometry,material);
    leftbush.position.set(0.5, 1, 0);
    middlebush.position.set(0,1.2,0);
    rightbush.position.set(-0.5, 1, 0);

    this.add( leftbush );
    this.add(middlebush);
    this.add(rightbush);
    }
}