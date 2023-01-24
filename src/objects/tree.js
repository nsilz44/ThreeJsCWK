import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/bush.png'

export default class Tree extends THREE.Group {
    constructor() {
        super();
    const loader = new THREE.TextureLoader();
    loader.load(PNG, texture => {
          const material = new THREE.MeshBasicMaterial( {map: texture} );
          const geometry = new THREE.IcosahedronGeometry(4,2);
    const leftbush = new THREE.Mesh( geometry, material );
    const middlebush = new THREE.Mesh (geometry,material);
    const rightbush = new THREE.Mesh (geometry,material);
    leftbush.position.set(0.5, 16, 0);
    middlebush.position.set(0,16.2,0);
    rightbush.position.set(-0.5, 16, 0);
    this.add( leftbush );
    this.add(middlebush);
    this.add(rightbush);

    //trunk
    const trunkgeometry = new THREE.CylinderGeometry( 1, 1.4, 16, 32 )
    const trunkmaterial = new THREE.MeshBasicMaterial( {color: 0x1f0f00} );
    const trunk = new THREE.Mesh(trunkgeometry,trunkmaterial);
    trunk.position.set(0,8,0);
    this.add(trunk);
    
    //branches
    const branchgeometry = new THREE.CylinderGeometry(0.5,0.3,5,32);
    const branch1 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch1.position.set(5,13,0)
    branch1.rotateX(0);
    branch1.rotateY(0);
    branch1.rotateZ(degToRad(45));
    this.add(branch1)
    const bushgeometry = new THREE.IcosahedronGeometry(2.5,2);
    const bush1 = new THREE.Mesh (bushgeometry,material);
    bush1.position.set(7,12,0)
    this.add(bush1)

    const branch2 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch2.position.set(4,13,4)
    branch2.rotateX(0);
    branch2.rotateY(degToRad(-45));
    branch2.rotateZ(degToRad(45));
    this.add(branch2)
    const bush2 = new THREE.Mesh (bushgeometry,material);
    bush2.position.set(5,12,5)
    this.add(bush2)

    const branch3 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch3.position.set(0,13,5)
    branch3.rotateX(0);
    branch3.rotateY(degToRad(-90));
    branch3.rotateZ(degToRad(45));
    this.add(branch3)
    const bush3 = new THREE.Mesh (bushgeometry,material);
    bush3.position.set(0,12,7)
    this.add(bush3)

    const branch4 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch4.position.set(-4,13,4)
    branch4.rotateX(0);
    branch4.rotateY(degToRad(-135));
    branch4.rotateZ(degToRad(45));
    this.add(branch4)
    const bush4 = new THREE.Mesh (bushgeometry,material);
    bush4.position.set(-5,12,5)
    this.add(bush4)

    const branch5 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch5.position.set(-5,13,0)
    branch5.rotateX(0);
    branch5.rotateY(degToRad(-180));
    branch5.rotateZ(degToRad(45));
    this.add(branch5)
    const bush5 = new THREE.Mesh (bushgeometry,material);
    bush5.position.set(-7,12,0)
    this.add(bush5)

    const branch6 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch6.position.set(4,13,-4)
    branch6.rotateX(0);
    branch6.rotateY(degToRad(-135));
    branch6.rotateZ(degToRad(-45));
    this.add(branch6)
    const bush6 = new THREE.Mesh (bushgeometry,material);
    bush6.position.set(5,12,-5)
    this.add(bush6)

    const branch7 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch7.position.set(0,13,-5)
    branch7.rotateX(0);
    branch7.rotateY(degToRad(-90));
    branch7.rotateZ(degToRad(-45));
    this.add(branch7)
    const bush7 = new THREE.Mesh (bushgeometry,material);
    bush7.position.set(0,12,-7)
    this.add(bush7)

    const branch8 = new THREE.Mesh(branchgeometry,trunkmaterial);
    branch8.position.set(-4,13,-4)
    branch8.rotateX(0);
    branch8.rotateY(degToRad(315));
    branch8.rotateZ(degToRad(-45));
    this.add(branch8)
    const bush8 = new THREE.Mesh (bushgeometry,material);
    bush8.position.set(-5,12,-5)
    this.add(bush8)
        })
    

    
    
    
    }
}