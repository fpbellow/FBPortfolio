//https://unblast.com/free-corkboard-texture/

import * as THREE from "three";
import { gsap } from "gsap";
import { CSS3DRenderer, CSS3DObject } from "three/addons/renderers/CSS3DRenderer.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 55, window.innerWidth / window.innerHeight, 0.1 , 3200 );

const cameraPositions = [
    new THREE.Vector3(  0.0,  100.0, 2300 ), // wide
    new THREE.Vector3(  60.0, 90.0,  900 ), // center
    new THREE.Vector3(-1250,  800.0, 1100 ), // top left
    new THREE.Vector3(-1250, -750.0, 1100 ), // bottom left
    new THREE.Vector3( 1250,  800.0, 1100 ), // top right
    new THREE.Vector3( 1250, -750.0, 1100 ), // bottom right
];



camera.position.copy(new THREE.Vector3(  700.0, 70.0, 2900 ));
camera.rotation.y = 0.11;
scene.add(camera);



const gltfLoadr = new GLTFLoader();
gltfLoadr.load('assets/Models/pinboard.glb', function(gltf) {
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
        <img class="profile-card__icon" src="https://raw.githubusercontent.com/fpbellow/FBPortfolio/main/public/Assets/Images/GitHub-Mark-ea2971cee799.png"/>
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
      <div class="profile-card__resume"><b><a href="https://github.com/fpbellow/FBPortfolio/blob/main/private/Resume.pdf" target="_blank target="_blank" style="color: rgba(0, 0, 0, 0.41); text-decoration: none;">Resume</a></b></div>
    </div>
  </div>
`;

const dxProjectTitleSection = document.createElement('div');
dxProjectTitleSection.className = "project-title-card";
dxProjectTitleSection.innerHTML = `
  <h1 class="project-title">DirectX</h1>
  <div class="project-divider"></div>
`;

const dxProject1Section = document.createElement('div');
dxProject1Section.className = "project-card-1";
dxProject1Section.innerHTML = `
  <h2 class="project-subtitle"><a href="https://github.com/fpbellow/probe-gl" target="_blank" text-decoration: none;"> • Global Illumination Demo<br/> </a> </h2>
  <div class="project-description">
    A small demo using the <a href="https://superhivemarket.com/products/light-bake/" target="_blank" style="color: #3f12ff; text-decoration: none;">Light Bake</a>  Blender addon to generate an irradiance map from the probes of an irradiance volume and implementing such in DirectX 11 along with physical based rendering based off of Frostbite's implementation.
  </div>
  <div class="project-images">
    <img src="https://raw.githubusercontent.com/fpbellow/probe-gl/main/screenshot_image.png" height="412" width="732" alt="Project 8 Screenshot"/>
  </div>
`;

const dxProject2Section = document.createElement('div');
dxProject2Section.className = "project-card-2";
dxProject2Section.innerHTML = `
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
    <iframe frameborder="0" scrolling="no" src="https://www.shadered.org/embed?id=LOzB7CqQGt&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
    <iframe frameborder="0" scrolling="no" src="https://www.shadered.org/embed?id=afoq6eCv47&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
    <iframe frameborder="0" scrolling="no" src="https://www.shadered.org/embed?id=SnXK_BMyNP&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
    <iframe frameborder="0" scrolling="no" src="https://www.shadered.org/embed?id=Rtmz1N9nCL&amp;rotate=1&amp;paused=1" height="258" width="458"></iframe>
  </div>
`;

const pastProjectsSection1 = document.createElement('div');
pastProjectsSection1.className = "past-projects-card-1";
pastProjectsSection1.innerHTML =`
  <h1 class="project-title">Other projects</h1>
  <div class="project-divider"></div>
  <h2 class="project-subtitle"> Unity: </h2>
  <div class="project-description">
    Previous project experimenting with Unity's URP and shader graph. Full repo can be found <a href="https://github.com/fpbellow/UnityGraph" target="_blank" style="color: #3f12ff; text-decoration: none;"> here<a/>.
  </div>
  <div class="project-images">
    <img src="assets/Images/unitygraph.gif"  height="258" width="458"/>
  </div>
   <h2 class="project-subtitle" > Raytracing: </h2>
  <div class="project-description">
    Following the Ray Tracing in One Weekend series by Peter Shirley, this my collection of projects of which I made personal changes and optimizations. <a href="https://github.com/fpbellow/RT-Basics-Projects" target="_blank" style="color: #3f12ff; text-decoration: none;"> Github repo </a>.
  </div>
  <div class="project-images">
    <img src="https://github.com/fpbellow/RT-Basics-Projects/raw/main/RTWeekend/result.png"  height="258" width="458"/>
  </div>
`;

const pastProjectsSection2 = document.createElement('div');
pastProjectsSection2.className = "past-projects-card-2";
pastProjectsSection2.innerHTML =`
  <h2 class="project-subtitle"> OpenGL: </h2>
  <div class="project-description">
    A simplified form of planetary bodies rendered in OpenGL with the use of the Assimp model loading library. <a href="https://github.com/fpbellow/SolarSimGL" target="_blank" style="color: #3f12ff; text-decoration: none;"> Github repo </a>.  
  </div>
  <div class="project-images">
    <img src="https://github.com/user-attachments/assets/18eca795-0e11-4564-b171-bddba803ba0a"  height="258" width="458"/>
  </div>
`;

const blenderProjectSection = document.createElement('div');
blenderProjectSection.className = "blender-card";
blenderProjectSection.innerHTML = `
  <h2 class="project-subtitle" > Blender: </h2>
  <div class="project-images">
    <img src="assets/Images/frame147render.png"  height="316" width="916"/>
    <img src="assets/Images/blender_preview.png"  height="316" width="916"/>
  </div>
`;

const stickyNotes = document.createElement('div');
stickyNotes.innerHTML =`
<!-- Profile Navigation -->
  <div class="sticky-note" style="left:718px; top:365px; padding-top:15px; padding-bottom:40px;">
    <a>Navigation</a>
    <a data-nav="directX-slide" class="sticky-nav">• DirectX Projects</a>
    <a data-nav="shader-slide" class="sticky-nav">• Shaders</a>
    <a data-nav="pProjects-slide" class="sticky-nav">• Other Projects</a>
    <a data-nav="blender-slide" class="sticky-nav">• Blender</a>
  </div>

  <!-- DirectX Navigation -->
  <div class="sticky-note" style="left:-720px; top:-200px">
    <a data-nav="about-me" class="sticky-nav">• About Me</a>
    <a data-nav="shader-slide" class="sticky-nav">• Shaders</a>
    <a data-nav="pProjects-zoom" class="sticky-nav">• Other Projects</a>
    <a data-nav="blender-zoom" class="sticky-nav">• Blender</a>
  </div>

  <!-- Shaders Navigation -->
  <div class="sticky-note" style="left:-1250px; top:1050px">
    <a data-nav="about-me" class="sticky-nav">• About Me</a>
    <a data-nav="directX-slide" class="sticky-nav">• DirectX Projects</a>
    <a data-nav="pProjects-zoom" class="sticky-nav">• Other Projects</a>
    <a data-nav="blender-zoom" class="sticky-nav">• Blender</a>
  </div>

  <!-- Other Projects Navigation -->
  <div class="sticky-note" style="left:1770px; top:-400px">
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


planeElement.append(centerCard, dxProjectTitleSection, dxProject1Section, dxProject2Section, shaderProjectSection, pastProjectsSection1, pastProjectsSection2, blenderProjectSection, stickyNotes);

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