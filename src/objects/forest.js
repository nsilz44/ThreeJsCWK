import * as THREE from 'three';
import Tree from './tree';

export default class Forest extends THREE.Group {
    constructor() {
        super();

    const tree1 = new Tree();
    tree1.position.set(110,0,110)
    this.add(tree1);

    const tree2 = new Tree();
    tree2.position.set(101,0,140)
    this.add(tree2);

    const tree3 = new Tree();
    tree3.position.set(89,0,78)
    this.add(tree3);

    const tree4 = new Tree();
    tree4.position.set(80,0,110)
    this.add(tree4);

    const tree5 = new Tree();
    tree5.position.set(65,0,120)
    this.add(tree5);

    const tree6 = new Tree();
    tree6.position.set(130,0,120)
    this.add(tree6);

    const tree7 = new Tree();
    tree7.position.set(140,0,145)
    this.add(tree7);

    const tree8 = new Tree();
    tree8.position.set(140,0,90)
    this.add(tree8);

    const tree9 = new Tree();
    tree9.position.set(110,0,80)
    this.add(tree9);

    const tree10 = new Tree();
    tree10.position.set(50,0,80)
    this.add(tree10);

    const tree11 = new Tree();
    tree11.position.set(30,0,76)
    this.add(tree11);

    const tree12 = new Tree();
    tree12.position.set(45,0,45)
    this.add(tree12);
    }
}