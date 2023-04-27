let particles = [];

let colorNum = 0;

let step = 40;

let font;
let t = 0;
let pg;

function preload() {
  font = loadFont("assets/DSEG14ClassicMini-BoldItalic.ttf");
}

function setup() {
  createCanvas(800, 800);
  pg = createGraphics(width, height);

  colorNum = random([0, 1, 2]);
}

function draw() {
  pg.background(0);

  if (frameCount % 30 == 0 && particles.length < 200) {
    particles.push(new Particle(colorNum));
  }

  for (let i in particles) {
    particles[i].move();
    particles[i].draw();
  }

  //-------------------------------------------------------------------

  rectMode(CENTER);

  if (noise(t / 2) > 0.57) {
    for (let x = step / 2; x < width; x += step) {
      for (let y = step / 2; y < height; y += step) {
        let c = pg.get(x, y);
        let gray_ = (red(c) + green(c) + blue(c)) / 3;
        fill(gray_);
        rect(x, y, step, step);
      }
    }
  } else {
    image(pg, 0, 0);
    step = random([20, 40, 50]);
  }

  //-------------------------------------------------------------------

  let hour = floor(t / 3600);
  let minute = floor(t / 60);
  let second = floor(t % 60);
  if (hour < 10) {
    hour = "0" + str(hour);
  }
  if (minute < 10) {
    minute = "0" + str(minute);
  }
  if (second < 10) {
    second = "0" + str(second);
  }

  textSize(30);
  textFont(font);
  noStroke();
  fill(100);
  //位置はベタ打ち
  text(hour + " : " + minute + " : " + second, width - 220, height - 40);

  //-------------------------------------------------------------------

  t += deltaTime / 1000;
}

class Particle {
  constructor(cn) {
    this.angle = random(2 * PI);
    this.radius = width;
    this.velocity = random(1, 3);

    this.radiusBorder = random([90, 190, 290]);
    this.isPoint = true;

    this.angleAdd = 0;
    this.angleSpeed = this.velocity / 1000;

    this.weight = random(1, 50);

    if (cn == 0) {
      this.c = color(50, random(100, 255), random(100, 255));
    } else if (cn == 1) {
      this.c = color(random(100, 255), 50, random(100, 255));
    } else {
      this.c = color(random(100, 255), random(100, 255), 50);
    }
  }

  move() {
    this.isPoint = this.radius >= this.radiusBorder;
    if (this.isPoint) {
      this.radius -= this.velocity;
    } else {
      this.angleAdd += this.angleSpeed;
    }
  }

  draw() {
    pg.noFill();
    pg.strokeCap(PROJECT);
    pg.strokeWeight(this.weight);
    pg.stroke(this.c);
    if (this.isPoint) {
      pg.point(
        width / 2 + this.radius * cos(this.angle),
        height / 2 + this.radius * sin(this.angle)
      );
    } else {
      //引数が半径ではない
      pg.arc(
        width / 2,
        height / 2,
        this.radius * 2,
        this.radius * 2,
        this.angle - this.angleAdd,
        this.angle + this.angleAdd
      );
    }
  }
}