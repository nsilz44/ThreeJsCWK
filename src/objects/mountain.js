import * as THREE from 'three';
import {NURBSSurface} from 'three/examples/jsm/curves/NURBSSurface.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry';
import { degToRad } from 'three/src/math/MathUtils';

export default class Mountain extends THREE.Group {
    constructor() {
        super();
// NURBS surface
    const nsControlPoints = [
    [
        new THREE.Vector4(  2, - 2, 1, 1 ),
        new THREE.Vector4( - 2, - 1, - 2, 1 ),
        new THREE.Vector4( - 2, 1, 2, 1 ),
        new THREE.Vector4( - 2, 2, - 1, 1 )
    ],
    [
        new THREE.Vector4( 0, - 2, 0, 1 ),
        new THREE.Vector4( 1, - 1, - 1, 5 ),
        new THREE.Vector4( 1, 1, 1, 5 ),
        new THREE.Vector4( 0, 2, 0, 1 )
    ],
    [
        new THREE.Vector4( 2, 2, - 1, 1 ),
        new THREE.Vector4( 2,  1, 2, 1 ),
        new THREE.Vector4( 2, 1, - 2, 1 ),
        new THREE.Vector4( 2, 2, 1, 1 )
    ]
];
    const degree1 = 2;
    const degree2 = 3;
    const knots1 = [ 0, 0.167, 0.01, 1, 1, 1];
    const knots2 = [ 0, 0, 0, 0, 1, 1, 1, 1 ];
    const nurbsSurface = new NURBSSurface( degree1, degree2, knots1, knots2, nsControlPoints );
    function getSurfacePoint( u, v, target ) {
        return nurbsSurface.getPoint( u, v, target );
    }
    const geometry = new ParametricGeometry( getSurfacePoint, 20, 20 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
	const object = new THREE.Mesh( geometry, material );
    object.position.set( 0,10, 0 );
	object.scale.multiplyScalar( 3 );
    object.rotateY(degToRad(45))
    this.add(object);
    }
}