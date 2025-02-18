import * as THREE from "three";
import { gsap } from "gsap";
import { CSS3DRenderer, CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight );

const cameraPositions = [
    new THREE.Vector3(  0.0,  0.0, 1200 ), // wide
    new THREE.Vector3( -750,  0.0,  500 ), // left
    new THREE.Vector3(  0.0,  0.0,  500 ), // center
    new THREE.Vector3(  750,  0.0,  500 ), // right
    new THREE.Vector3(  0.0, -350,  500 ), // bottom
    new THREE.Vector3(  0.0,  350,  500 )  // top
];


camera.position.copy(cameraPositions[1]);
scene.add(camera);




const geometry = new THREE.BoxGeometry(100,100,100);

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

leftCubeR.position.x = -750;
rightCubeB.position.x = 750;

topCubeP.position.y = 350;
bottomCubeY.position.y = -350;

scene.add(leftCubeR);
scene.add(midCubeG);
scene.add(rightCubeB);
scene.add(topCubeP);
scene.add(bottomCubeY);

const wGLrenderer = new THREE.WebGLRenderer({ antialias: true});
wGLrenderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#webgl').appendChild(wGLrenderer.domElement);

const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);
cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.querySelector('#css3d').appendChild(cssRenderer.domElement);

const planeElement = document.createElement( 'div' );
planeElement.innerHTML = 'testing';
planeElement.style.width =  '10px';
planeElement.style.height = '10px';
planeElement.style.fontSize = '20px';
planeElement.style.color = "orange";

const planeObj = new CSS3DObject( planeElement );
planeObj.position.set( -7.5, 0, 0 );
scene.add(planeObj);
wGLrenderer.setAnimationLoop(animate);


function animate() {
  requestAnimationFrame(animate);
  wGLrenderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}



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