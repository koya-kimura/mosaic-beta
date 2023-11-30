let img;

const n = 1000;
const s = 2;

let px = [];
let py = [];
let vx = [];
let vy = [];

function preload() {
  img = loadImage("../../../assets/night-images/night-04.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  for(let i = 0; i < n; i ++){
    px[i] = random(width);
    py[i] = random(height);
    vx[i] = random(-5, 5);
    vy[i] = random(-5, 5);
  }
}

function draw() {
  for (let i = 0; i < n; i++) {
    px[i] += vx[i];
    py[i] += vy[i];

    if(px[i] < 0 || width < px[i]){
      vx[i] *= -1;
    }
    if (py[i] < 0 || height < py[i]) {
      vy[i] *= -1;
    }

    const c = img.get(px[i], py[i]);
    noStroke();
    fill(red(c), green(c), blue(c), 50);

    circle(px[i], py[i], s);
  }
}