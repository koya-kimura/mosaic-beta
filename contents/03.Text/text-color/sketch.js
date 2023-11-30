let img;
const grid = 10;

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

      textAlign(CENTER);
      textSize(grid);

      const r = red(c);
      const g = green(c);
      const b = blue(c);

      if(max(r, g, b) == r){
        fill(r * 1.3, g * 0.9, b * 0.9);
        text("R", x, y);
      } else if (max(r, g, b) == g) {
        fill(r * 0.9, g * 1.3, b * 0.9);
        text("G", x, y);
      } else if (max(r, g, b) == b) {
        fill(r*0.9, g*0.9, b*1.3);
        text("B", x, y);
      }
  

      index ++;
    }
  }
}