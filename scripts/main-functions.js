/**
 * Main Functions
 */

// Removes all objects 

//TODO : REMOVE ONE
//TODO ISSUE: unable to correctly snag the player.torus???Activated and set it to false; will cause game-freezing bug

const removeAllObjects = () => {
  for( var i = scene.children.length - 1; i >= 0; i--) { 
    obj = scene.children[i];
    scene.remove(obj);
  }

  player.permanentRingCountForVariableNames = 1;
}

// Removes all objects then add main sphere back
const removeAllObjectsExceptMainSphere = () => {
  for( var i = scene.children.length - 1; i >= 1; i--) { 
    obj = scene.children[i];
    scene.remove(obj);
  }

  player.torusOneActivated = false;
  player.torusTwoActivated = false;
  player.torusThreeActivated = false;
  player.torusFourActivated = false;
  player.torusFiveActivated = false;
  player.torusSixActivated = false;
  player.torusSevenActivated = false; 
  player.torusEightActivated = false; 
  player.torusNineActivated = false;
  player.torusTenActivated = false;

  let sphere = new THREE.Mesh( mainSphere, material );
  scene.add( sphere );
  player.permanentRingCountForVariableNames = 1;
}

/**
 * Adding Torus' to the Canvas
 */

const addNewRingToArray = () => {

  // For reference, a Torus is the following:

  // radius             - Radius of the torus, from the center of the torus to the center of the tube. Default is 1. 
  // tube               - Radius of the tube. Default is 0.4. 
  // radialSegments     - Default is 8 
  // tubularSegments    - Default is 6. 
  // arc                - Central angle. Default is Math.PI * 2.

  //TODO : Change to object.js for dynamic values, currently static
  let setVariableNameForTorus = `torus${player.permanentRingCountForVariableNames}`;

  switch(setVariableNameForTorus) {
    case 'torus1':
      runTorusOne();
      break;
    case 'torus2':
      runTorusTwo();
      break;
    case 'torus3':
      runTorusThree();
      break;
    case 'torus4':
      runTorusFour();
      break;
    case 'torus5':
      runTorusFive();
      break;
    case 'torus6':
      runTorusSix();
      break;
    case 'torus7':
      runTorusSeven();
      break;
    case 'torus8':
      runTorusEight();
      break;
    case 'torus9':
      runTorusNine();
      break;
    case 'torus10':
      runTorusTen();
      break;
}

  player.permanentRingCountForVariableNames++;
}


// Torus One

const runTorusOne = () => {
  // This is the standard "Create-an-Object" template
  let mainTorus = new THREE.TorusGeometry( 5, 1, 4, 100 );
  let torus = new THREE.Mesh( mainTorus, material );
  torus.name = 'torus';
  scene.add(torus);

  // Turn the spinner on when you activate the torus
  player.torusOneActivated = true;

  torusAddOne = torus1;
  torus.add(torusAddOne);
}

// Torus Two

const runTorusTwo = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusTwo = new THREE.TorusGeometry( 7, 1, 4, 100 );
  let torusTwo = new THREE.Mesh( mainTorusTwo, material );
  torusTwo.name = 'torusTwo';
  scene.add(torusTwo);

  // Turn the spinner on when you activate the torus
  player.torusTwoActivated = true;

  torusAddTwo = torus2;
  torusTwo.add(torusAddTwo);
}

// Torus Three

const runTorusThree = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusThree = new THREE.TorusGeometry( 9, 1, 4, 100 );
  let torusThree = new THREE.Mesh( mainTorusThree, material );
  torusThree.name = 'torusThree';
  scene.add(torusThree);

  // Turn the spinner on when you activate the torus
  player.torusThreeActivated = true;

  torusAddThree = torus3;
  torusThree.add(torusAddThree);
}

// Torus Four

const runTorusFour = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusFour = new THREE.TorusGeometry( 11, 1, 4, 100 );
  let torusFour = new THREE.Mesh( mainTorusFour, material );
  torusFour.name = 'torusFour';
  scene.add(torusFour);

  // Turn the spinner on when you activate the torus
  player.torusFourActivated = true;

  torusAddFour = torus4;
  torusFour.add(torusAddFour);
}

// Torus Five

const runTorusFive = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusFive = new THREE.TorusGeometry( 13, 1, 5, 100 );
  let torusFive = new THREE.Mesh( mainTorusFive, material );
  torusFive.name = 'torusFive';
  scene.add(torusFive);

  // Turn the spinner on when you activate the torus
  player.torusFiveActivated = true;

  // On Torus Five and above, we'll start increasing the max camera distance
  // camera.fov = 65;
  // camera.updateProjectionMatrix();

  torusAddFive = torus5;
  torusFive.add(torusAddFive);
}

// Torus Six

const runTorusSix = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusSix = new THREE.TorusGeometry( 15, 1, 6, 100 );
  let torusSix = new THREE.Mesh( mainTorusSix, material );
  torusSix.name = 'torusSix';
  scene.add(torusSix);

  // Turn the spinner on when you activate the torus
  player.torusSixActivated = true;

  // On Torus Five and above, we'll start increasing the max camera distance
  // camera.fov = 70;
  // camera.updateProjectionMatrix();

  torusAddSix = torus6;
  torusSix.add(torusAddSix);
}

// Torus Seven

const runTorusSeven = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusSeven = new THREE.TorusGeometry( 17, 1, 7, 100 );
  let torusSeven = new THREE.Mesh( mainTorusSeven, material );
  torusSeven.name = 'torusSeven';
  scene.add(torusSeven);

  // Turn the spinner on when you activate the torus
  player.torusSevenActivated = true;

  // On Torus Five and above, we'll start increasing the max camera distance
  // camera.fov = 80;
  // camera.updateProjectionMatrix();

  torusAddSeven = torus7;
  torusSeven.add(torusAddSeven);
}

// Torus Eight

const runTorusEight = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusEight = new THREE.TorusGeometry( 19, 1, 8, 100 );
  let torusEight = new THREE.Mesh( mainTorusEight, material );
  torusEight.name = 'torusEight';
  scene.add(torusEight);

  // Turn the spinner on when you activate the torus
  player.torusEightActivated = true;

  // On Torus Five and above, we'll start increasing the max camera distance
  // camera.fov = 90;
  // camera.updateProjectionMatrix();

  torusAddEight = torus8;
  torusEight.add(torusAddEight);
}


// Torus Nine

const runTorusNine = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusNine = new THREE.TorusGeometry( 21, 1, 9, 100 );
  let torusNine = new THREE.Mesh( mainTorusNine, material );
  torusNine.name = 'torusNine';
  scene.add(torusNine);

  // Turn the spinner on when you activate the torus
  player.torusNineActivated = true;

  // On Torus Five and above, we'll start increasing the max camera distance
  // camera.fov = 100;
  // camera.updateProjectionMatrix();

  torusAddNine = torus9;
  torusNine.add(torusAddNine);
}

// Torus Ten

const runTorusTen = () => {
  // This is the standard "Create-an-Object" template
  let mainTorusTen = new THREE.TorusGeometry( 23, 1, 10, 100 );
  let torusTen = new THREE.Mesh( mainTorusTen, material );
  torusTen.name = 'torusTen';
  scene.add(torusTen);

  // Turn the spinner on when you activate the torus
  player.torusTenActivated = true;

  // On Torus Five and above, we'll start increasing the max camera distance
  // camera.fov = 110;
  // camera.updateProjectionMatrix();

  torusAddTen = torus10;
  torusTen.add(torusAddTen);
}
/**
 * Rotational Functions
 */

const checkRotations = () => {
  torus.position.x += .01;
}

/**
 * Light Controls
 */
const spawnLightOne = () => {
  const lightColorSelector = document.querySelector('#selectColor').value;

  if(lightColorSelector != null) {
    mainLights.selectedColor = lightColorSelector;

    const removeLight = scene.getObjectByName('dirLight');

    scene.remove(removeLight);

    let dirLight = new THREE.DirectionalLight(mainLights.selectedColor);
    dirLight.position.set(-43, 5, 5);
    dirLight.name = 'dirLight';
    scene.add(dirLight);
  }
}

const spawnLightTwo = () => {
  const lightColorSelector = document.querySelector('#selectColor').value;

  if(lightColorSelector != null) {
    mainLights.selectedColorTwo = lightColorSelector;

    const removeLightTwo = scene.getObjectByName('dirLightTwo');

    scene.remove(removeLightTwo);

    let dirLightTwo = new THREE.DirectionalLight(mainLights.selectedColorTwo);
    dirLightTwo.position.set(43, -5, 5);
    dirLightTwo.name = 'dirLightTwo';
    scene.add(dirLightTwo);
  }
}


const removeLights = () => {
  const removeLight = scene.getObjectByName('dirLight');
  // console.log(removeLight)
  scene.remove(scene.getObjectByName('dirLight'));

  const removeLightTwo = scene.getObjectByName('dirLightTwo');
  // console.log(removeLight)
  scene.remove(scene.getObjectByName('dirLightTwo'));
}
/**
 * On Load Functions
 */

