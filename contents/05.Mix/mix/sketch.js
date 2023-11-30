let img = [];

const grid = 1;
const n = 3000;

let px = [];
let py = [];

function preload() {
  img[0] = loadImage("../../../assets/night-images/night-05.png");
  img[1] = loadImage("../../../assets/night-images/night-06.png");
}

function setup() {
  createCanvas(600, 600);
  background(0);

  rectMode(CENTER);

  for (let i = 0; i < img.length; i++) {
    img[i].resize(width, height);
    px[i] = width / 2;
    py[i] = height / 2;
  }
}

function draw() {
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < img.length; i++) {

      const randomNum = floor(random(4));
      if (randomNum == 0) {
        px[i] += grid;
      } else if (randomNum == 1) {
        px[i] -= grid;
      } else if (randomNum == 2) {
        py[i] += grid;
      } else if (randomNum == 3) {
        py[i] -= grid;
      }

      if (px[i] < 0) {
        px[i] = 0;
      } else if (px[i] > width) {
        px[i] = width;
      }
      if (py[i] < 0) {
        py[i] = 0;
      } else if (py[i] > height) {
        py[i] = height;
      }

      const c = img[i].get(px[i], py[i]);
      noStroke();
      fill(red(c), green(c), blue(c), 50);

      circle(px[i], py[i], grid, grid);
    }
  }
}