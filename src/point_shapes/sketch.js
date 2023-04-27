function setup() {
  createCanvas(800, 800);

  background(230);

  const grid = 40;
  stroke(200, 230);
  for (let x = 0; x < width; x += grid) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += grid) {
    line(0, y, width, y);
  }

  const step = 100;
  for (let x = 0; x < width; x += step) {
    for (let y = 0; y < height; y += step) {
      push();
      stroke(0);
      translate(step * 0.1, step * 0.1);
      pointShape(x, y, step * 0.8, floor(random(5, 10)) * 10);
      pop();
    }
  }
}

//-------------------------------

function pointShape(_x, _y, _s, _n) {
  push();
  translate(_x + _s / 2, _y + _s / 2);

  strokeWeight(_s / 30);
  stroke(10);

  const a = random(1),
    b = random(5),
    c = random(1),
    d = random(5);
  for (let i = 0; i < _n; i++) {
    point(_s / 2 * a * sin(b * i * TAU / _n), _s / 2 * c * cos(d * i * TAU / _n))
  }

  pop();
}