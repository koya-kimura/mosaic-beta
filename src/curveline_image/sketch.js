let positions = [];
let angles = [];
let radius = 1;
let n = 1000;

let img;

function preload() {
  img = loadImage("assets/woman.jpg");
}

function setup() {
  createCanvas(600, 600);
  background(255);

  img.resize(width, height);

  for (let i = 0; i < n; i++) {
    let h = map(i, 0, n, 0, height);
    positions[i] = createVector(0, h);
    angles[i] = 0;
  }
}

function draw() {
  for (let i = 0; i < n; i++) {
    let c = img.get(positions[i].x, positions[i].y)
    stroke(c)

    line(
      positions[i].x,
      positions[i].y,
      positions[i].x + radius * cos(angles[i]),
      positions[i].y + radius * sin(angles[i])
    );

    positions[i].x = positions[i].x + radius * cos(angles[i]);
    positions[i].y = positions[i].y + radius * sin(angles[i]);

    angles[i] += random(-PI / 10, PI / 10);
  }
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas('myCanvas', 'jpeg');
  }
}