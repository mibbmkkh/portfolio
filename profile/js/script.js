const colors = ["#ffbdea", "#ff00fd", "#4e84ee", "#90f3f9"];
const backgroundColor = "#31AFD4";
let width, height;
const totalFrames = 1000;
let frameCount = 0;
let recording = false;
let recordingStarted = false;
let frameDelta = 0;

let s;

function setup() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas = createCanvas(width, height, WEBGL);
  noiseSeed(20);
  rectMode(CENTER);
  noStroke();

  let vert = document.getElementById('vertShader').innerText;
  let frag = document.getElementById('fragShader').innerText;
  s = createShader(vert, frag);
}

function draw() {
  frameCount += 1;
  frameDelta = (2 * Math.PI * (frameCount % totalFrames)) / totalFrames;

  background(backgroundColor);
  shader(s);

  s.setUniform('uResolution', [width, height]);
  s.setUniform('uTime', millis() / 100);
  s.setUniform('uLowGpu', false);
  s.setUniform('uVeryLowGpu', false);
  s.setUniform('uSpeedColor', 20.0);

  let rectWidth = width / colors.length;
  let rectHeight = height;

  for (let i = 0; i < colors.length; i++) {
    let x = i * rectWidth - width / 2 + rectWidth / 2;
    let y = 0;
    s.setUniform(`uColor${i + 1}`, hex2rgb(colors[i]));
    rect(x, y, rectWidth, rectHeight);
  }
}

const hex2rgb = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return [r / 255, g / 255, b / 255];
}

function windowResized() {
  width = window.innerWidth;
  height = window.innerHeight;
  resizeCanvas(width, height);
}