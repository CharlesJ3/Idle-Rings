//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true, 
  alpha: true,
});

renderer.setSize(799, 599);
renderer.setClearColor( '#fff', 0.1 ); // the default

// Configure renderer clear color
// renderer.setClearColor("#FF4C4C");

//Camera
const camera = new THREE.PerspectiveCamera(
  updateCam.cameraPerspectiveChange,
  16 / 10,
  .1,
  1000
);
camera.position.z = updateCam.cameraZPos;


// Build the controls.
var controls = new THREE.OrbitControls( camera );
// controls.autoRotate = true;
controls.maxDistance = 100;
controls.minDistance = 10;

// Help with left mouse speed
controls.enableDamping = true;
controls.dampingFactor = .15;

// controls.maxAzimuthAngle = 100;
controls.maxPolarAngle = 2.0;

controls.mouseButtons = {
	LEFT: THREE.MOUSE.LEFT,
}


// controls.panSpeed = 0;
camera.lookAt( camera );

//Scene
const scene = new THREE.Scene();

//Lights

//**IN PROGRESS **/
// let dirLight = new THREE.DirectionalLight(mainLights.selectedColor);
// dirLight.position.set(43, -5, 5);
// dirLight.name = 'dirLight';
// scene.add(dirLight);

let dirLightTwo = new THREE.DirectionalLight(mainLights.selectedColorTwo);
dirLightTwo.position.set(-43, 5, 5);
dirLightTwo.name = 'dirLightTwo';
scene.add(dirLightTwo);

let spotLight = new THREE.SpotLight('#002080');
spotLight.position.set(43, -5, 133);
scene.add(spotLight);

let light = new THREE.PointLight( '#002080', 1, 100 );
light.position.set( 5, 5, 50 );
scene.add( light );

let lightTwo = new THREE.PointLight( '#0000cc', 1, 100 );
lightTwo.position.set( -5, -5, 50 );
scene.add( lightTwo );

//OBJECTS (Game Objects, not OOP/Programming Objects, although they are not exactly mutually exclusive)
let mainSphere = new THREE.SphereGeometry( 3, 64, 64 );

let sphere = new THREE.Mesh( mainSphere, material );
scene.add( sphere );


//RENDER LOOP 1
requestAnimationFrame(render);

function render() {

  if(player.torusOneActivated){
    let xa = scene.getObjectByName('torus');
    xa.rotation.x += 0.01;
    // xa.rotation.y -= 0.01;
  }

  if(player.torusTwoActivated){
    let xb = scene.getObjectByName('torusTwo');
    xb.rotation.y += 0.01;
  }
  
  if(player.torusThreeActivated){
    let xc = scene.getObjectByName('torusThree');
    xc.rotation.x += 0.01;
    // xc.rotation.y -= 0.01;
  }
  
  if(player.torusFourActivated){
    let xd = scene.getObjectByName('torusFour');
    xd.rotation.y += 0.01;
  }
  
  if(player.torusFiveActivated){
    let xe = scene.getObjectByName('torusFive');
    xe.rotation.x += 0.01;
    // xe.rotation.y -= 0.01;
  }
  
  if(player.torusSixActivated){
    let xf = scene.getObjectByName('torusSix');
    xf.rotation.y += 0.01;
  }
  
  if(player.torusSevenActivated){
    let xg = scene.getObjectByName('torusSeven');
    xg.rotation.x += 0.01;
    // xg.rotation.y -= 0.01;
  }
  
  if(player.torusEightActivated){
    let xh = scene.getObjectByName('torusEight');
    xh.rotation.y += 0.01;
  }
  
  if(player.torusNineActivated){
    let xi = scene.getObjectByName('torusNine');
    xi.rotation.x += 0.01;
    // xi.rotation.y -= 0.01;
  }
  
  if(player.torusTenActivated){
    let xj = scene.getObjectByName('torusTen');
    xj.rotation.y += 0.01;
  }
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
