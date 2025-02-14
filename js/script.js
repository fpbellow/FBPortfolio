import * as THREE from "three";
import { gsap } from "gsap";
import { Easing } from "three/examples/jsm/libs/tween.module.js";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight);

const cameraPositions = [
    new THREE.Vector3(  0.0,  0.0, 12.0 ), // wide
    new THREE.Vector3( -7.5,  0.0,  5.0 ), // left
    new THREE.Vector3(  0.0,  0.0,  5.0 ), // center
    new THREE.Vector3(  7.5,  0.0,  5.0 ), // right
    new THREE.Vector3(  0.0, -3.5,  5.0 ), // bottom
    new THREE.Vector3(  0.0,  3.5,  5.0 )  // top
];


var camIndex = 0;

camera.position.copy(cameraPositions[1]);
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

leftCubeR.position.x = -7.5;
rightCubeB.position.x = 7.5;

topCubeP.position.y = 3.5;
bottomCubeY.position.y = -3.5;

scene.add(leftCubeR);
scene.add(midCubeG);
scene.add(rightCubeB);
scene.add(topCubeP);
scene.add(bottomCubeY);


const canvas = document.querySelector("#world");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(window.innerWidth, window.innerHeight);


function animate(){
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

const tl = gsap.timeline();
let transitionCompleted = true;

function moveCamera(camPos)
{
    transitionCompleted = false;
    var mdpt = new THREE.Vector2((camPos.x + camera.position.x)*0.5, (camPos.y + camera.position.y)*0.5);
    if(camPos === cameraPositions[0])
        tl.to(camera.position, 
            {
                x: camPos.x,
                y: camPos.y,
                z: camPos.z,
                ease: "power1.in"
            });
    else
    {
        tl.to(camera.position,
            {
                x: mdpt.x,
                y: mdpt.y,
                z: cameraPositions[0].z,
                ease: "power1.out"
            });
        tl.to(camera.position, 
            {
                x: camPos.x,
                y: camPos.y,
                z: camPos.z,
                ease: "power1.in",
                delay: 0.1
            });
    
    }
    transitionCompleted = true;
};

window.addEventListener('keydown', function(event){
    if(transitionCompleted = true) 
    {
        if(event.key === 'q')
            moveCamera(cameraPositions[1]);

        if(event.key === 'w')
            moveCamera(cameraPositions[2]);

        if(event.key === 'e')
            moveCamera(cameraPositions[3]);

        if(event.key === 'r')
            moveCamera(cameraPositions[4]);

        if(event.key === 't')
            moveCamera(cameraPositions[5]);
    }

});