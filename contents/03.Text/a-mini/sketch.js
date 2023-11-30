let img;
const grid = 5;

function preload(){
  img = loadImage("../../../assets/night-images/night-03.png")
}

function setup(){
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  for(let x = grid/2; x < width; x += grid){
    for (let y = grid / 2; y < height; y += grid) {
      const c = img.get(x, y);
      noStroke();
      fill(c);

      textAlign(CENTER);
      textSize(grid);
      text("A", x, y);
    }
  }
}