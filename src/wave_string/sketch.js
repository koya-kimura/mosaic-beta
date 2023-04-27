let pg;
let w = 800;
let tf;

function preload() {
  tf = loadFont("assets/Harenosora.otf")
}

function setup() {
  createCanvas(w, w);

  pg = createGraphics(w, w);
}

function draw() {
  let t = frameCount;
  // 背景色は黄色
  background(100);

  let c;
  let chr;

  if (t % 1200 < 250) {
    c = "#0387B1"
    chr = "終"
  } else if (t % 1200 < 500) {
    c = "#feda6a"
    chr = "眠"
  } else if (t % 1200 < 700) {
    c = "#E4491C"
    chr = "起"
  } else {
    c = "#003246"
    chr = "爆"
  }

  pg.background(255);
  pg.erase();
  pg.textFont(tf)
  pg.textSize(500);
  pg.textAlign(CENTER, CENTER);
  pg.text(chr, pg.width / 2, pg.height / 2);
  pg.noErase();

  noStroke();
  fill(c);
  beginShape();
  vertex(w, w);
  vertex(0, w);
  for (let x = 0; x < w; x++) {
    vertex(x, 200 + 150 * (sin(t / 100) + 1) + 200 * noise(t / 200, x / 300))
  }
  endShape();

  // pgをimageとして配置
  image(pg, 0, 0);
}