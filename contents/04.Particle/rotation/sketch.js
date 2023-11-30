let img;

const n = 20000;
const s = 5;

let r = [];
let th = [];
let c = [];

function preload() {
  img = loadImage("../../../assets/night-images/night-04.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  for(let i = 0; i < n; i ++){
    r[i] = random(width);
    th[i] = random(TAU);

    const px = width/2 + r[i] * cos(th[i]);
    const py = height/2 + r[i] * sin(th[i]);
    c[i] = img.get(px, py)
  }
}

function draw() {
  for (let i = 0; i < n; i++) {
    th[i] += 0.01;
    r[i] -= 0.1;

    noStroke();
    fill(c[i]);

    const px = width / 2 + r[i] * cos(th[i]);
    const py = height / 2 + r[i] * sin(th[i]);
    circle(px, py, s);
  }
}