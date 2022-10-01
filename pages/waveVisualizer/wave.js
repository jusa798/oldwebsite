let xspacing = 12// Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 30.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave
let width = 1600; //Make sure they're the same as <div Container/>
let height = 900; //Make sure they're the same as <div Container/>


//SETUP
function setup() {   
  // -------------------------Sliders-------------------------//
  
  //widthWaves Slider
  let s = 'The quick brown fox jumped over the lazy dog.';
  fill(50);
  text(s, 10, 10, 70, 80); // Text wraps within text box
  widthWaves = createSlider(12, 120, 12);
  widthWaves.position(50, 50);
  widthWaves.style('width', '80px')

  //Angular Velocity Slider
  thetaSlider = createSlider(1, 30, 1);
  thetaSlider.position(50, 150);
  thetaSlider.style('width', '80px');

  //-------------------------Canvas-------------------------//
  
  let theCanvas = createCanvas(width, height, WEBGL);
  theCanvas.parent('container'); //Make sure canvas and container size are the same so canvas is centered on screen

  w = width + 16;
  dx = (TWO_PI * 2 / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

//DRAW
function draw() {
  widthWaveValue = widthWaves.value() //XSpacer
  thetaIncrease = thetaSlider.value() / 100 //Theta
  background(0);
  calcWave(thetaIncrease);
  renderWave(widthWaveValue);
}

function calcWave(thetaIncrease) {
  // Increment theta (try different values for 'angular velocity' here)  
  theta += thetaIncrease;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

let renderWave = (widthWaveValue) => {
    noStroke();
    fill(255);
    wave(widthWaveValue);
}


let wave = (widthWaveValue) => {  

    for (let x = 0; x < yvalues.length; x++) {
        fill(getRandomColor())
        ellipse(x * widthWaveValue - (width / 2) ,(height / yvalues[x]), 16, 16)
        /* A way to draw the wave with an ellipse at each location */
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  let mySphere = () => {
    fill('#fed203'); 
   
    sphere(200, 16, 16);
}
  