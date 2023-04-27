let pg;
let noisePg;
let ft;

let fr_x = 0;
let fr_y = 1;
let fr_z = 0;

let rotateXSpeed = 100;
let rotateYSpeed = 100;
let rotateZSpeed = 100;

function preload() {
  ft = loadFont("assets/PrintClearly.otf");
}

function setup() {
  createCanvas(windowWidth, (windowWidth * 9) / 16, WEBGL);

  pg = createGraphics(width, height);
  noisePg = createGraphics(300, 300);

  //------------------

  noisePg.background("#5F5E64")
}

function draw() {
  background("#C8C7CC");

  if (noise(frameCount / 100) > 0.4 && frameCount % 30 == 0) {
    fr_x = random([0, 1]);
    fr_y = random([0, 1]);
    fr_z = random([0, 1]);
  }

  pointLight(255, 255, 255, 300, 300, -200);
  pointLight(255, 255, 255, 0, -300, -200);
  pointLight(255, 255, 255, -300, 300, -200);

  push();
  specularMaterial(255);
  translate(0, 0, -500);
  rotateX(fr_x * frameCount / rotateXSpeed);
  rotateY((fr_y + 1) * frameCount / rotateYSpeed);
  rotateZ(fr_z * frameCount / rotateZSpeed);
  stroke(255, 50);
  texture(noisePg);
  box(200 * (fr_x + 1), 200 * (fr_y + 1), 200 * (fr_z + 1));
  pop();

  rotateXSpeed = (noise(frameCount / 1000, 1) + 0.5) * 150;
  rotateYSpeed = (noise(frameCount / 1000, 2) + 0.5) * 150;
  rotateZSpeed = (noise(frameCount / 1000, 3) + 0.5) * 150;

  //------------------------------------------

  pg.textFont(ft);
  pg.strokeWeight(1);

  pg.rectMode(CENTER);
  pg.noFill();
  pg.stroke("#5F5E64");
  pg.line(width / 2, 0, width / 2, height * 0.15);
  pg.line(width / 2, height * 0.85, width / 2, height);

  pg.line(width / 4, height * 0.5, width / 4 - height * 0.15, height * 0.5);
  pg.line(width * 3 / 4, height * 0.5, width * 3 / 4 + height * 0.15, height * 0.5);

  pg.noStroke();
  pg.fill(230);
  pg.textSize(30);
  pg.textAlign(CENTER, CENTER);
  pg.text("BOX", width / 2, height / 2);

  pg.textSize(20);
  pg.textAlign(LEFT);
  pg.fill("#5F5E64");
  pg.text("rotateX : " + floor(fr_x * frameCount / rotateXSpeed * 100) / 100, width * 4 / 5, height * 3 / 4);
  pg.text("rotateY : " + floor((fr_y + 1) * frameCount / rotateYSpeed * 100) / 100, width * 4 / 5, height * 3 / 4 + 25);
  pg.text("rotateZ : " + floor(fr_z * frameCount / rotateZSpeed * 100) / 100, width * 4 / 5, height * 3 / 4 + 50);

  //------------------------------------------

  image(pg, -width / 2, -height / 2);

  pg.clear();

  pg.remove();
  noisePg.remove();
}