const cp_arr = [
  // ["#3A1078", "#4E31AA", "#2F58CD", "#3795BD"],
  ["#005e55", "#fff9bf", "#edb50c", "#b8003d", "#5e001f"],
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  frameRate(1);
}

function draw() {
  background(240);

  const cp = random(cp_arr);

  for (let x = 0; x <= width * 2; x += width / 2) {
    for (let th = 0; th <= PI; th += PI) {
      let cep = -height;
      while (cep < height * 2) {
        const r = width * random(0.2, 0.5);
        const dn = floor(random(10, 20));

        patternArc(x, cep + r / 2, r, -PI / 2 + th, PI / 2 + th, dn, cp);

        cep += r;
      }
    }
  }
}

function patternArc(_x, _y, _r, _sth, _eth, _dn, _cp) {
  const sw = _r / _dn;
  for (let r = _r; r > sw; r -= sw) {
    let sth = _sth;
    while (sth < _eth) {
      const th = random(PI / 5);
      let eth = sth + th;

      if (eth > _eth) {
        eth = _eth;
      }

      noStroke();
      fill(random(_cp));

      strokeWeight(sw);
      arc(_x, _y, r, r, sth, eth);

      sth = eth;
    }
  }
}