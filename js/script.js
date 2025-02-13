import * as THREE from "three";
import { gsap } from "gsap";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth/ window.innerHeight);

const cameraPositions = [
    new THREE.Vector3(  0.0,  0.0, 12.0 ),
    new THREE.Vector3(  0.0,  0.0,  5.0 ),
    new THREE.Vector3( -7.5,  0.0,  5.0 ),
    new THREE.Vector3(  7.5,  0.0,  5.0 ),
    new THREE.Vector3(  0.0, -3.5,  5.0 ),
    new THREE.Vector3(  0.0,  3.5,  5.0 )
];
var camIndex = 0;

camera.position.copy(cameraPositions[camIndex]);
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


function moveCamera(camPos)
{
    gsap.to(camera.position, 
        {
            x: camPos.x,
            y: camPos.y,
            z: camPos.z,
            duration: 1.0
        });
};

window.addEventListener('mousedown', function(){

    if(camera.position.z != cameraPositions[0].z)
        moveCamera(cameraPositions[0]);

    else if(camIndex<cameraPositions.length-1)
    {
        camIndex+=1;
        moveCamera(cameraPositions[camIndex]);
    }
    else
    {
        console.log("cam reset");
        camIndex=1;
        moveCamera(cameraPositions[camIndex]);
    } 
    console.log(camIndex);
});