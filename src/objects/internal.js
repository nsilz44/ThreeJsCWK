import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/interiorwall.png';

export default class Internal extends THREE.Group {
    constructor() {
        super();
        const loader = new THREE.TextureLoader();
        loader.load(PNG, texture => {
            const internalmaterial = new THREE.MeshStandardMaterial( {map:texture} );
            const floorgeometry = new THREE.BoxGeometry(20,0.01,70)
    const geometry1 = new THREE.BoxGeometry( 0.1, 3, 70 );
    const internalwall1 = new THREE.Mesh( geometry1, internalmaterial );
    internalwall1.position.set(10, 1.5, 0);
    this.add(internalwall1);

    const geometry2 = new THREE.BoxGeometry( 1, 3, 0.1 );
    const internalwall2 = new THREE.Mesh( geometry2, internalmaterial );
    internalwall2.position.set(9.5, 1.5, -35);
    this.add(internalwall2);

    const internalwall3 = new THREE.Mesh( geometry2, internalmaterial );
    internalwall3.position.set(9.5, 1.5, -25);
    this.add(internalwall3);

    const internalwall4 = new THREE.Mesh( geometry2, internalmaterial );
    internalwall4.position.set(9.5, 1.5, 35);
    this.add(internalwall4);

    const geometry5 = new THREE.BoxGeometry( 17.5, 3, 0.1 );
    const internalwall5 = new THREE.Mesh( geometry5, internalmaterial );
    internalwall5.position.set(-1.25, 1.5, -35);
    this.add(internalwall5);

    const geometry6 = new THREE.BoxGeometry(1.5,0.8,0.1);
    const internalwall6 = new THREE.Mesh( geometry6, internalmaterial );
    internalwall6.position.set(8.25, 2.6, -35);
    this.add(internalwall6);

    const geometry7 = new THREE.BoxGeometry(0.1,3,1);
    const internalwall7 = new THREE.Mesh( geometry7, internalmaterial );
    internalwall7.position.set(5, 1.5, -34.5);
    this.add(internalwall7);

    const geometry8 = new THREE.BoxGeometry(0.1,3,7.5);
    const internalwall8 = new THREE.Mesh( geometry8, internalmaterial );
    internalwall8.position.set(5, 1.5, -28.75);
    this.add(internalwall8);

    const geometry9 = new THREE.BoxGeometry(2.5,3,0.1);
    const internalwall9 = new THREE.Mesh( geometry9, internalmaterial );
    internalwall9.position.set(6.25, 1.5, -25);
    this.add(internalwall9);

    const internalwall10 = new THREE.Mesh(geometry8,internalmaterial);
    internalwall10.position.set(5, 1.5, -8.75);
    this.add(internalwall10);

    const internalwall11 = new THREE.Mesh(geometry8,internalmaterial);
    internalwall11.position.set(5, 1.5, 11.25);
    this.add(internalwall11);

    const internalwall12 = new THREE.Mesh(geometry8,internalmaterial);
    internalwall12.position.set(5, 1.5, 31.25);
    this.add(internalwall12);

    const internalwall13 = new THREE.Mesh(geometry8,internalmaterial);
    internalwall13.position.set(5, 1.5, -21.25);
    this.add(internalwall13);

    const internalwall14 = new THREE.Mesh(geometry8,internalmaterial);
    internalwall14.position.set(5, 1.5, -1.25);
    this.add(internalwall14);

    const internalwall15 = new THREE.Mesh(geometry8,internalmaterial);
    internalwall15.position.set(5, 1.5, 18.75);
    this.add(internalwall15);

    const internalwall16 = new THREE.Mesh(geometry7,internalmaterial);
    internalwall16.position.set(5, 1.5, -15.5);
    this.add(internalwall16);

    const internalwall17 = new THREE.Mesh(geometry7,internalmaterial);
    internalwall17.position.set(5, 1.5, -14.5);
    this.add(internalwall17);

    const internalwall18 = new THREE.Mesh(geometry7,internalmaterial);
    internalwall18.position.set(5, 1.5, 4.5);
    this.add(internalwall18);

    const internalwall19 = new THREE.Mesh(geometry7,internalmaterial);
    internalwall19.position.set(5, 1.5, 5.5);
    this.add(internalwall19);

    const internalwall20 = new THREE.Mesh(geometry7,internalmaterial);
    internalwall20.position.set(5, 1.5, 25.5);
    this.add(internalwall20);

    const internalwall21 = new THREE.Mesh(geometry7,internalmaterial);
    internalwall21.position.set(5, 1.5, 24.5);
    this.add(internalwall21);
    
    const geometry22 = new THREE.BoxGeometry(15,3,0.1);
    const internalwall22 = new THREE.Mesh(geometry22,internalmaterial);
    internalwall22.position.set(-2.5, 1.5, -25);
    this.add(internalwall22);

    const internalwall23 = new THREE.Mesh(geometry22,internalmaterial);
    internalwall23.position.set(-2.5, 1.5, -15);
    this.add(internalwall23);

    const internalwall24 = new THREE.Mesh(geometry22,internalmaterial);
    internalwall24.position.set(-2.5, 1.5, 5);
    this.add(internalwall24);

    const internalwall25 = new THREE.Mesh(geometry22,internalmaterial);
    internalwall25.position.set(-2.5, 1.5, 25);
    this.add(internalwall25);

    const internalwall26 = new THREE.Mesh(geometry22,internalmaterial);
    internalwall26.position.set(-2.5, 1.5, 35);
    this.add(internalwall26);

    const geometry27 = new THREE.BoxGeometry(0.1,0.8,70);
    const internalwall27 = new THREE.Mesh(geometry27,internalmaterial);
    internalwall27.position.set(5, 2.6, 0);
    this.add(internalwall27);

    
    const ceiling = new THREE.Mesh(floorgeometry,internalmaterial)
    ceiling.position.set(0, 3, 0);
    this.add(ceiling);
        });}}
