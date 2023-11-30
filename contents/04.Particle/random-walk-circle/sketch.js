let img;

const n = 1000;

let px;
let py;

function preload() {
  img = loadImage("../../../assets/night-images/night-04.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  px = width/2;
  py = height/2;
}

function draw() {
  for (let i = 0; i < n; i++) {
    const grid = random(10);

    const randomNum = floor(random(4));
    if (randomNum == 0) {
      px += grid;
    } else if (randomNum == 1) {
      px -= grid;
    } else if (randomNum == 2) {
      py += grid;
    } else if (randomNum == 3) {
      py -= grid;
    }

    if(px < 0){
      px = 0;
    } else if (px > width){
      px = width;
    }
    if (py < 0) {
      py = 0;
    } else if (py > height) {
      py = height;
    }

    const c = img.get(px, py);
    noStroke();
    fill(red(c), green(c), blue(c), 50);

    circle(px, py, grid, grid);
  }
}