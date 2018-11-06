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

  lightSelect: 'lightSelect',
  lightSelectCurrent: '',
  lightSelectWhite: '#000',

  lightSelectDarkBlue: '#3366ff',
  lightSelectDarkerBlue: '#002db3',
  lightSelectVeryDarkBlue: '#002080',
  lightSelectLightBlue: '#ccd9ff',
  lightSelectBrightBlue: '#3399ff',
  lightSelectDarkBluePurple: '#0000cc', 
  lightSelectLightBluePurple: '#ccccff', 
  lightSelectDarkestBlue: '#000080', 

  selectedColor: this.lightSelectWhite,
  selectedColorTwo: this.lightSelectWhite,

  //Array of Positions and colors to select from, if needed
  //TODO: Convert 0x to Hex or plain text
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

