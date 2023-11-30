let img;
const grid = 10;

const message = "hello world"
const message_arr = Array.from(message);

function preload() {
  img = loadImage("../../../assets/night-images/night-03.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  let index = 0;
  for (let y = grid / 2; y < height; y += grid) {
    for (let x = grid / 2; x < width; x += grid) {
      const c = img.get(x, y);
      noStroke();
      fill(c);

      textAlign(CENTER);
      textSize(grid);
      text(message_arr[index % message_arr.length], x, y);

      index ++;
    }
  }
}