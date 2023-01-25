import * as THREE from 'three';
import {NURBSSurface} from 'three/examples/jsm/curves/NURBSSurface.js';
import { ParametricGeometry } from 'three/examples/jsm/geometries/ParametricGeometry';
import { degToRad } from 'three/src/math/MathUtils';
import PNG from './images/gold.png'

export default class Statues extends THREE.Group {
    constructor() {
        super();

    // NURBS surface to create statues
    const loader = new THREE.TextureLoader();
    loader.load(PNG, texture => {
        const material = new THREE.MeshBasicMaterial( {map:texture} );
        const nsControlPoints = [
        [new THREE.Vector4(  2, - 2, 1, 1 ),new THREE.Vector4( - 2, - 1, - 2, 1 ),new THREE.Vector4( - 2, 1, 2, 1 ),new THREE.Vector4( - 2, 2, - 1, 1 )],
        [new THREE.Vector4( 0, - 2, 0, 1 ),new THREE.Vector4( 1, - 1, - 1, 5 ),new THREE.Vector4( 1, 1, 1, 5 ),new THREE.Vector4( 0, 2, 0, 1 )],
        [new THREE.Vector4( 2, 2, - 1, 1 ),new THREE.Vector4( 2,  0, 2, 1 ),new THREE.Vector4( 2, 1, - 2, 1 ),new THREE.Vector4( 2, 2, 1, 1 )]];
        const deg1 = 2;
        const deg2 = 3;
        const knots1 = [ 0, 0.167, 0.01, 1, 1, 1];
        const knots2 = [ 0, 0, 0, 0, 1, 1, 1, 1 ];
        const nurbsSurface = new NURBSSurface( deg1, deg2, knots1, knots2, nsControlPoints );
        function getSurfacePoint( u, v, target ) {
        return nurbsSurface.getPoint( u, v, target );
        }
        const geometry = new ParametricGeometry( getSurfacePoint, 20, 20 ); 
	    const object = new THREE.Mesh( geometry, material );
        object.position.set( -75,1, -50 );
	    object.scale.multiplyScalar( 3 );
        object.rotateY(degToRad(45))
        this.add(object);

        const nsControlPoints2 = [
        [new THREE.Vector4(  2, - 2, 1, 1 ),new THREE.Vector4( - 2, 1, - 2, 1 ),new THREE.Vector4( - 2, 1, 2, 1 ),new THREE.Vector4( - 2, 2, - 1, 1 )],
        [new THREE.Vector4( 0,  2, 0, 1 ),new THREE.Vector4( 1, - 1, - 1, 5 ),new THREE.Vector4( 1, 1, 1, 5 ),new THREE.Vector4( 0, 2, 0, 1 )],
        [new THREE.Vector4( 2, 2, - 1, 1 ),new THREE.Vector4( 7,  0, 1, 1 ),new THREE.Vector4( 9, 1, - 2, 1 ),new THREE.Vector4( 12, 2, 1, 1 )]];
        const nurbsSurface2 = new NURBSSurface( deg1, deg2, knots1, knots2, nsControlPoints2 );
        function getSurfacePoint2( u, v, target ) {
            return nurbsSurface2.getPoint( u, v, target );
        }
        const geometry2 = new ParametricGeometry( getSurfacePoint2, 20, 20 ); 
        const object2 = new THREE.Mesh( geometry2, material );
        object2.position.set( -75,1, -70 );
        object2.scale.multiplyScalar( 3 );
        object2.rotateY(degToRad(45))
        this.add(object2);
        const nsControlPoints3 = [
        [new THREE.Vector4(  2, - 2, 1, 1 ),new THREE.Vector4(  2, 1, - 2, 1 ),new THREE.Vector4( 2, 1, 2, 1 ),new THREE.Vector4(  2, 2, - 1, 1 )],
        [new THREE.Vector4( 0,  2, 0, 1 ),new THREE.Vector4( 1, - 1, - 1, 5 ),new THREE.Vector4( 1, 1, 1, 5 ),new THREE.Vector4( 0, 2, 0, 1 )],
        [new THREE.Vector4( 2, 2, - 1, 1 ),new THREE.Vector4( 7,  0, 1, 1 ),new THREE.Vector4( 9, 1, - 2, 1 ),new THREE.Vector4( 12, 2, 1, 1 )]];
        const nurbsSurface3 = new NURBSSurface( deg1, deg2, knots1, knots2, nsControlPoints3 );
        function getSurfacePoint3( u, v, target ) {
            return nurbsSurface3.getPoint( u, v, target );
        }
        const geometry3 = new ParametricGeometry( getSurfacePoint3, 20, 20 ); 
        const object3 = new THREE.Mesh( geometry3, material );
        object3.position.set( -75,1, -100 );
        object3.scale.multiplyScalar( 3 );
        object3.rotateY(degToRad(45))
        this.add(object3);
   
        const geometry4 = new ParametricGeometry( getSurfacePoint, 20, 20 ); 
	    const object4 = new THREE.Mesh( geometry4, material );
        object4.position.set( -100,1, -50 );
	    object4.scale.multiplyScalar( 3 );
        this.add(object4);

        const geometry5 = new ParametricGeometry( getSurfacePoint2, 20, 20 ); 
        const object5 = new THREE.Mesh( geometry5, material );
        object5.position.set( -100,1, -70 );
        object5.scale.multiplyScalar( 1 );
        this.add(object5);

        const geometry6 = new ParametricGeometry( getSurfacePoint3, 20, 20 ); 
        const object6 = new THREE.Mesh( geometry6, material );
        object6.position.set( -100,3, -100 );
        object6.scale.multiplyScalar( 1 );
        this.add(object6);
    }
    )
}
}