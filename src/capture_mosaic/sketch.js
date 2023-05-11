let capture;
let capture_pg;
let pg;
let seed;

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
  frameRate(10);

  seed = random(1000);

  capture = createCapture();
  capture.hide();

  capture_pg = createGraphics(width, height);
  pg = createGraphics(width, height);
}

function draw() {
  capture_pg.image(capture, 0, 0, width, height);

  pg.background(0);
  pg.noStroke();
  pg.rectMode(CENTER);
  const n = 50;
  const step = height / n;
  for (let x = step / 2; x < width; x += step) {
    for (let y = step / 2; y < height; y += step) {
      const c = capture_pg.get(x, y);
      pg.fill(c);
      pg.rect(x, y, step, step);
    }
  }

  background(0);

  const startNum = -10
  const stacksNum = 20;
  randomSeed(seed);
  blendMode(ADD);
  for (let i = startNum; i < stacksNum + startNum; i++) {
    tint(random([0, 255]), random([0, 255]), random([0, 255]), 255 / stacksNum + 25);
    image(pg, width / 2, height / 2, width - i * 10, height - i * 10);
  }

  pg.remove();
  blendMode(BLEND);
}