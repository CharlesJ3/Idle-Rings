/**
 * 
 * Objects
 * 
 */

const player = {
  // Ring Speed Checks 
  torusOneActivated: false,
  
  // Player Statistics  (essential)
 
  // Player Information (non-essential)
  name: '',
  id: '',
  currentRingCount: 1,
  permanentRingCountForVariableNames: 1,
  // Stats Area

}

const enemy = {
  // Enemy Statistics  (essential)
 
  // Enemy Information (non-essential)
  name: '',
  id: '',
}

const updateCam = {
  cameraPerspectiveChange: 50,
  cameraZPos: 50,
}

const mainLights = {
  color: [0xffffff, 0xffffff],
  xPos: [10, 0],
  yPos: [0, 10],
  zPos: [0, 0],
}

let rings = {
  currentRings: [],
  ringOne: [

  ]
}

