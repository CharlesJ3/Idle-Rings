//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("battleArea"),
  antialias: true
});

renderer.setSize(799, 599);

//Camera
const camera = new THREE.PerspectiveCamera(
  updateCam.cameraPerspectiveChange,
  window.innerWidth / window.innerHeight,
  5,
  5000
);

//Scene
const scene = new THREE.Scene();

//Lights
//possibly rotate the lighting later
let dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(435, -15, -15);
scene.add(dirLight);

let dirLight2 = new THREE.DirectionalLight(0xffffff);
dirLight2.position.set(-435, -5, -15);
scene.add(dirLight2);

//OBJECT
const geometry = new THREE.SphereGeometry(40, 20, 10);
const geometry2 = new THREE.SphereGeometry(40, 20, 10);


const material = new THREE.MeshPhongMaterial({
  color: 0x000000,
  specular: 0xbb2301,
  shininess: 122
});

const material2 = new THREE.MeshPhongMaterial({
  color: 0x0079ce,
  specular: 0x00fffa,
  shininess: 150
});


const mesh = new THREE.Mesh(geometry, material);
const mesh2 = new THREE.Mesh(geometry2, material2);


mesh.position.set(0, 0, -2000);
mesh2.position.set(0, 0, -2000);


renderer.render(scene, camera);

scene.add(mesh, mesh2);

//RENDER LOOP
requestAnimationFrame(render);

//GUI Controls
let gui;

function displayGUI() {
  let gui = new dat.GUI();

  parameters = {};
}

function render() {
  mesh.rotation.x += Math.sin(-0.05);
  mesh.rotation.y += 0.15;
  mesh.rotation.z += Math.PI / 32;
  mesh2.rotation.x += Math.sin(-0.05);
  mesh2.rotation.y += 0.005;
  mesh2.rotation.z += Math.PI / 32;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

// Sets the Opening Scene Up
// const reelInCloser = () => {
//   setTimeout(
//     () => {
//         if (camera.fov > 15) {
//         camera.fov = camera.fov - .5;
//         camera.updateProjectionMatrix();
//         reelInCloser();
//       }
//     }
//     ,150)
// }

// reelInCloser();