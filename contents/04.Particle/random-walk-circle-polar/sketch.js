let img;

const n = 1000;

const s = 5;
const grid_r = 10;
const grid_th = 0.2;

let r = 0;
let th = 100;

function preload() {
  img = loadImage("../../../assets/night-images/night-04.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);
}

function draw() {
  for (let i = 0; i < n; i++) {
    const randomNum = floor(random(4));
    if (randomNum == 0) {
      r += grid_r;
    } else if (randomNum == 1) {
      r -= grid_r;
    } else if (randomNum == 2) {
      th += grid_th;
    } else if (randomNum == 3) {
      th -= grid_th;
    }

    if(r < 0){
      r = 0;
    } else if (r > width){
      r = width;
    }

    const px = width/2 + r*cos(th);
    const py = height/2 + r * sin(th);

    const c = img.get(px, py);
    noStroke();
    fill(red(c), green(c), blue(c), 50);

    circle(px, py, s);
  }
}