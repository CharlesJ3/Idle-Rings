//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(799, 599);

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
//Scene
const scene = new THREE.Scene();

//Lights

//**IN PROGRESS **/
// let dirLight = new THREE.DirectionalLight("red");
// dirLight.position.set(43, -5, 5);
// scene.add(dirLight);

// let dirLightTwo = new THREE.DirectionalLight("red");
// dirLightTwo.position.set(-43, 5, 5);
// scene.add(dirLightTwo);

// let spotLight = new THREE.SpotLight("blue");
// spotLight.position.set(43, -5, 133);
// scene.add(spotLight);

var light = new THREE.PointLight( 'red', 1, 100 );
light.position.set( 5, 5, 50 );
scene.add( light );

var lightTwo = new THREE.PointLight( 'maroon', 1, 100 );
lightTwo.position.set( -5, -5, 50 );
scene.add( lightTwo );

//OBJECTS
let mainSphere = new THREE.SphereGeometry( 3, 64, 64 );

let material = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  specular: 0xbb2301,
  shininess: 125,
  transparency: true,
  reflectivity: 0.96,
  depthWrite: false,
});
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
    xe.rotation.y += 0.01;
    // xe.rotation.y -= 0.01;
  }
  
  if(player.torusSixActivated){
    let xf = scene.getObjectByName('torusSix');
    xf.rotation.x += 0.01;
  }
  
  if(player.torusSevenActivated){
    let xg = scene.getObjectByName('torusSeven');
    xg.rotation.y += 0.01;
    // xg.rotation.y -= 0.01;
  }
  
  if(player.torusEightActivated){
    let xh = scene.getObjectByName('torusEight');
    xh.rotation.x += 0.01;
  }
  
  if(player.torusNineActivated){
    let xi = scene.getObjectByName('torusNine');
    xi.rotation.y += 0.01;
    // xi.rotation.y -= 0.01;
  }
  
  if(player.torusTenActivated){
    let xj = scene.getObjectByName('torusTen');
    xj.rotation.x += 0.01;
  }
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
