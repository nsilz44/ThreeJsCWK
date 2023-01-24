import * as THREE from 'three';
import { degToRad } from 'three/src/math/MathUtils';
import Internal from './internal';
import Floor from './floor';
import External from './external';
import Roof from './roof';

export default class Building extends THREE.Group {
    constructor() {
        super();
    const internal = new Internal();
    this.add(internal);
    const floor =  new Floor();
    this.add(floor);
    const external = new External();
    this.add(external);   
    const roof = new Roof();
    this.add(roof)


}   
}