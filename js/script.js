//https://unblast.com/free-corkboard-texture/

import * as THREE from "three";
import { gsap } from "gsap";
import { CSS3DRenderer, CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1 , 3200 );

const cameraPositions = [
    new THREE.Vector3(  0.0,  125.0, 2300 ), // wide
    new THREE.Vector3(  0.0,  125.0,  900 ), // center
    new THREE.Vector3(-1300,  850.0, 1000 ), // top left
    new THREE.Vector3(-1300, -750.0, 1000 ), // bottom left
    new THREE.Vector3( 1300,  850.0, 1000 ), // top right
    new THREE.Vector3( 1300, -750.0, 1000 ), // bottom right
];



camera.position.copy(new THREE.Vector3(  700.0, 70.0, 2900 ));
camera.rotation.y = 0.11;
scene.add(camera);



const gltfLoadr = new GLTFLoader();
gltfLoadr.load('Assets/Models/pinboard.glb', function(gltf) {
    gltf.scene.scale.set(2400,2400,2400);
    gltf.scene.position.z = 0;
    gltf.scene.position.y = 3200;
    gltf.scene.rotation.x = Math.PI*0.5;
    gltf.scene.rotation.z = Math.PI*0.5;
    scene.add(gltf.scene);
})

const al = new THREE.AmbientLight();
scene.add(al);


const wGLrenderer = new THREE.WebGLRenderer({ antialias: true});
wGLrenderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('#webgl').appendChild(wGLrenderer.domElement);
scene.background = new THREE.Color(0xabcdef);

const cssRenderer = new CSS3DRenderer();
cssRenderer.setSize(window.innerWidth, window.innerHeight);

cssRenderer.domElement.style.position = 'absolute';
cssRenderer.domElement.style.top = 0;
document.querySelector('#css3d').appendChild(cssRenderer.domElement);

const planeElement = document.createElement('div');
planeElement.className = "html-plane";


const centerCard = document.createElement('div');
centerCard.className = "profile-card";
centerCard.innerHTML =  `
  <div class="profile-card__row profile-card__row--main">
    <div class="profile-card__col profile-card__col--name">
      <div class="profile-card__name"><b>Faustin Bellow</b></div>
    </div>
    <div class="profile-card__col profile-card__col--icons">
      <a href="https://github.com/fpbellow/" target="_blank" rel="noopener noreferrer">
        <img class="profile-card__icon" src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"/>
      </a>
      <a href="https://www.linkedin.com/in/faustin-bellow-048019188/" target="_blank" rel="noopener noreferrer">
        <img class="profile-card__icon" src="https://www.svgrepo.com/show/157006/linkedin.svg"/>
      </a>
    </div>
  </div>
  <div class="profile-card__divider"></div>
  <div class="profile-card__row profile-card__row--contact">
    <div class="profile-card__col profile-card__col--email">
      <div class="profile-card__email"><b>fpbellow@gmail.com</b></div>
    </div>
    <div class="profile-card__col profile-card__col--resume">
      <div class="profile-card__resume"><b>Resume</b></div>
    </div>
  </div>
`;

const gfxProjectSection = document.createElement('div');
gfxProjectSection.className = "project-card";
gfxProjectSection.innerHTML = `
  <h1 class="project-title">DirectX</h1>
  <div class="project-divider"></div>
  <h2 class="project-subtitle"><a href="https://github.com/fpbellow/CS-6610-Projects" target="_blank" text-decoration: none;"> • CS-6610-Projects<br/> </a> </h2>
  <div class="project-description">
    The series of <a href="https://graphics.cs.utah.edu/courses/cs6610/spring2021/" target="_blank" style="color: #3f12ff; text-decoration: none;"> assignment projects </a> 
    completed following the 
    <a href="https://www.youtube.com/playlist?list=PLplnkTzzqsZS3R5DjmCQsqupu43oS9CFN" target="_blank" style="color: #3f12ff; text-decoration: none;"> course </a> publicly provided by Cem Yuksel and the University of Utah.
    Completed in DirectX 11 rather than OpenGL in order to familiarize myself with the former.
  </div>
  <div class="project-images">
    <img src="https://raw.githubusercontent.com/fpbellow/CS-6610-Projects/refs/heads/main/CS6610-Project8/screenshot.png" height="258" width="458" alt="Project 8 Screenshot"/>
    <img src="https://github.com/fpbellow/CS-6610-Projects/blob/main/CS6610-Project7/screenshot.png?raw=true" height="258" width="458" alt="Project 7 Screenshot"/>
    <img src="https://github.com/fpbellow/CS-6610-Projects/blob/main/CS6610-Project6/screenshot.png?raw=true" height="258" width="458" alt="Project 6 Screenshot"/>
    <img src="https://github.com/fpbellow/CS-6610-Projects/blob/main/CS6610-Project4/screenshot.png?raw=true" height="258" width="458" alt="Project 4 Screenshot"/>
  </div>
`;

const shaderProjectSection = document.createElement('div');
shaderProjectSection.className = "shader-card";
shaderProjectSection.innerHTML = `
  <h2 class="project-subtitle" > Shaders: </h2>
  <div class="project-description">
    Shaders are paused for performance reasons. You can view them fully on my<a href="https://shadered.org/profile?u=fpbellow" target="_blank" style="color: #3f12ff; text-decoration: none;"> SHADERed profile </a>.
  </div>
  <div class="project-images">
    <iframe frameborder="0" scrolling="no" src="http://www.shadered.org/embed?id=LOzB7CqQGt&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
    <iframe frameborder="0" scrolling="no" src="http://www.shadered.org/embed?id=afoq6eCv47&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
    <iframe frameborder="0" scrolling="no" src="http://www.shadered.org/embed?id=SnXK_BMyNP&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
    <iframe frameborder="0" scrolling="no" src="http://www.shadered.org/embed?id=Rtmz1N9nCL&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
  </div>
`;

const pastProjectsSection = document.createElement('div');
pastProjectsSection.className = "past-projects-card";
pastProjectsSection.innerHTML =`
  <h1 class="project-title">Past projects</h1>
  <div class="project-divider"></div>
  <h2 class="project-subtitle"> Unity: </h2>
  <div class="project-description">
    Previous project experimenting with Unity's URP and shader graph. Full repo can be found <a href="https://github.com/fpbellow/UnityGraph" target="_blank" style="color: #3f12ff; text-decoration: none;"> here<a/>.
  </div>
  <div class="project-images">
    <img src="Assets/Images/unitygraph.gif"  height="258" width="458"/>
  </div>
   <h2 class="project-subtitle" > Raytracing: </h2>
  <div class="project-description">
    Project following Peter Shirley's "Ray Tracing in One Weekend" book. <a href="https://github.com/fpbellow/HelloRayTracing" target="_blank" style="color: #3f12ff; text-decoration: none;"> Github repo </a>.
  </div>
  <div class="project-images">
    <img src="https://github.com/fpbellow/HelloRayTracing/raw/main/result.png"  height="258" width="458"/>
  </div>
`;

const blenderProjectSection = document.createElement('div');
blenderProjectSection.className = "blender-card";
blenderProjectSection.innerHTML = `
  <h2 class="project-subtitle" > Blender: </h2>
  <div class="project-images">
    <img src="Assets/Images/frame147render.png"  height="316" width="916"/>
    <img src="Assets/Images/blender_preview.png"  height="316" width="916"/>
  </div>
`;

const stickyNotes = document.createElement('div');
stickyNotes.innerHTML =`
<!-- Profile Navigation -->
  <div class="sticky-note" style="left:718px; top:265px; padding-top:15px; padding-bottom:40px;">
    <a>Navigation</a>
    <a data-nav="directX-slide" class="sticky-nav">• DirectX Projects</a>
    <a data-nav="shader-slide" class="sticky-nav">• Shaders</a>
    <a data-nav="pProjects-slide" class="sticky-nav">• Past Projects</a>
    <a data-nav="blender-slide" class="sticky-nav">• Blender</a>
  </div>

  <!-- DirectX Navigation -->
  <div class="sticky-note" style="left:-270px; top:-550px">
    <a data-nav="about-me" class="sticky-nav">• About Me</a>
    <a data-nav="shader-slide" class="sticky-nav">• Shaders</a>
    <a data-nav="pProjects-zoom" class="sticky-nav">• Past Projects</a>
    <a data-nav="blender-zoom" class="sticky-nav">• Blender</a>
  </div>

  <!-- Shaders Navigation -->
  <div class="sticky-note" style="left:-1300px; top:1050px">
    <a data-nav="about-me" class="sticky-nav">• About Me</a>
    <a data-nav="directX-slide" class="sticky-nav">• DirectX Projects</a>
    <a data-nav="pProjects-zoom" class="sticky-nav">• Past Projects</a>
    <a data-nav="blender-zoom" class="sticky-nav">• Blender</a>
  </div>

  <!-- Past Projects Navigation -->
  <div class="sticky-note" style="left:1850px; top:-400px">
    <a data-nav="about-me" class="sticky-nav">• About Me</a>
    <a data-nav="directX-zoom" class="sticky-nav">• DirectX Projects</a>
    <a data-nav="shader-zoom" class="sticky-nav">• Shaders</a>
    <a data-nav="blender-slide" class="sticky-nav">• Blender</a>
  </div>

  <!-- Blender Navigation -->
  <div class="sticky-note" style="left:2610px; top:1250px">
    <a data-nav="about-me" class="sticky-nav">• About Me</a>
    <a data-nav="directX-zoom" class="sticky-nav">• DirectX Projects</a>
    <a data-nav="shader-zoom" class="sticky-nav">• Shaders</a>
    <a data-nav="pProjects-slide" class="sticky-nav">• Past Projects</a>
  </div>
`;


planeElement.append(centerCard, gfxProjectSection, shaderProjectSection, pastProjectsSection, blenderProjectSection, stickyNotes);

const planeObj = new CSS3DObject( planeElement );
planeObj.position.set( 150, -100, 0 );
scene.add(planeObj); 


wGLrenderer.setAnimationLoop(animate);

function animate() {
  wGLrenderer.render(scene, camera);
  cssRenderer.render(scene, camera);
}


//camera transition variables
let transitionCompleted = true;
const tl = gsap.timeline({onComplete: function() {transitionCompleted=true;}});


//camera transition functions

window.onload = function() {
  transitionCompleted = false;
  tl.to(camera.position, 
    {
      x: cameraPositions[1].x,
      y: cameraPositions[1].y,
      z: cameraPositions[1].z,
      ease: "power1.in",
      duration: 1.2,
      delay: 1.0
    },0)
    .to(camera.rotation,{
      y: 0.0,
      duration: 1.2,
      delay: 1.0
    }, 0);
  transitionCompleted = true;
}


function moveCameraZoom(camPos)
{
    transitionCompleted = false;
    var mdpt = new THREE.Vector2((camPos.x + camera.position.x)*0.5, (camPos.y + camera.position.y)*0.5);
    tl.to(camera.position,
    {
      x: mdpt.x,
      y: mdpt.y,
      z: cameraPositions[0].z,
      duration: 0.8,
      ease: "power1.out"
    });
    tl.to(camera.position, 
    {
      x: camPos.x,
      y: camPos.y,
      z: camPos.z,
      ease: "power1.in",
      duration: 0.9,
      delay: 0.1
    });
};

function moveCameraSlide(camPos)
{
  transitionCompleted = false;
    tl.to(camera.position, 
    {
    x: camPos.x,
    y: camPos.y,
    z: camPos.z,
    duration: 1.5,
    ease: "power1.inOut",
  });
};

//camera transition events
const navLinks = stickyNotes.querySelectorAll('.sticky-nav');

navLinks.forEach(link => {
  link.addEventListener('click', function(){
    handleNavigation(link.getAttribute('data-nav'))
  });
});


function handleNavigation(moveTargetType)
{
  if(transitionCompleted)
  {
    switch(moveTargetType){
      case 'about-me':
        moveCameraSlide(cameraPositions[1]);
        break;
      case 'directX-slide':
        moveCameraSlide(cameraPositions[2]);
        break;
      case 'shader-slide':
        moveCameraSlide(cameraPositions[3]);
        break;
      case 'pProjects-slide':
        moveCameraSlide(cameraPositions[4]);
        break;
      case 'blender-slide':
        moveCameraSlide(cameraPositions[5]);
        break;
      case 'directX-zoom':
        moveCameraZoom(cameraPositions[2]);
        break;
      case 'shader-zoom':
        moveCameraZoom(cameraPositions[3]);
        break;
      case 'pProjects-zoom':
        moveCameraZoom(cameraPositions[4]);
        break;
      case 'blender-zoom':
        moveCameraZoom(cameraPositions[5]);
        break;
    }
  }
};


//blocking zoom
// 1) Prevent Ctrl+'+' and Ctrl+'-'
window.addEventListener('keydown', e => {
  if (e.ctrlKey && (e.key === '+' || e.key === '-' || e.key === '=')) {
    e.preventDefault();
  }
});

// 2) Prevent Ctrl+Wheel (zoom by scroll)
window.addEventListener('wheel', e => {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

//handle resize
window.addEventListener('resize', onWindowResize, false);

function onWindowResize()
{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  wGLrenderer.setSize(window.innerWidth, window.innerHeight);
  cssRenderer.setSize(window.innerWidth, window.innerHeight);
}