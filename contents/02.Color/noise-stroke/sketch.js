let img;
const grid = 5;

function preload(){
  img = loadImage("../../../assets/night-images/night-02.png")
}

function setup(){
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  for(let x = grid/2; x < width; x += grid){
    for (let y = grid / 2; y < height; y += grid) {
      const c = img.get(x, y);
      stroke(red(c) + noise(x / 10, y / 10, 17) * 100, green(c) + noise(x / 10, y / 10, 23) * 100, blue(c) + noise(x / 10, y / 10, 43) * 100);
      noFill();

      rect(x, y, grid);
    }
  }
}