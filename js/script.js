import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight);
camera.position.z = 12;
scene.add(camera);


const geometry = new THREE.BoxGeometry(1,1,1);

const redMat = new THREE.MeshBasicMaterial({color: 'red'})
const blueMat = new THREE.MeshBasicMaterial({color: 'blue'});
const greenMat = new THREE.MeshBasicMaterial({color: 'green'});
const purpleMat = new THREE.MeshBasicMaterial({color: 'purple'});
const yellowMat = new THREE.MeshBasicMaterial({color: 'yellow'});

const leftCubeR = new THREE.Mesh(geometry, redMat);
const midCubeG = new THREE.Mesh(geometry, greenMat);
const rightCubeB = new THREE.Mesh(geometry, blueMat);
const topCubeP = new THREE.Mesh(geometry, purpleMat);
const bottomCubeY = new THREE.Mesh(geometry, yellowMat);

leftCubeR.rotation.y = 0.5;
leftCubeR.position.x = -7.5;

rightCubeB.position.x = 7.5;

topCubeP.position.y = 3.5;
bottomCubeY.position.y = -3.5;

scene.add(leftCubeR);
scene.add(midCubeG);
scene.add(rightCubeB);
scene.add(topCubeP);
scene.add(bottomCubeY);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
