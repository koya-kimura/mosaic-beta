let img;

const n = 100;
const s = 5;

let px = [];
let py = [];

function preload() {
  img = loadImage("../../../assets/night-images/night-04.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  for (let i = 0; i < n; i++) {
    px[i] = 0;
    py[i] = height * i / n;;
  }
}

function draw() {
  for (let i = 0; i < n; i++) {
    px[i] += noise(px[i], py[i], frameCount/100);
    py[i] += (noise(px[i], py[i], frameCount/200) - 0.5)*5;

    const c = img.get(px[i], py[i]);
    noStroke();
    fill(red(c), green(c), blue(c), 50);

    circle(px[i], py[i], s);
  }
}