let img;

function preload() {
  img = loadImage("../../../assets/night-images/night-01.png")
}

function setup() {
  createCanvas(600, 600);
  background(0);

  img.resize(width, height);

  rectMode(CENTER);

  let grid = 5;

  for (let x = grid / 2; x < width; x += grid) {
    for (let y = grid / 2; y < height; y += grid) {
      const c = img.get(x, y);
      noStroke();
      fill(c);

      rect(x, y, grid);
    }
  }

  grid *= 2;

  for (let x = grid / 2; x < width; x += grid) {
    for (let y = grid / 2; y < height; y += grid) {
      if (random(1000) < 100) {
        const c = img.get(x, y);
        noStroke();
        fill(c);

        rect(x, y, grid);
      }
    }
  }

  grid *= 2;

  for (let x = grid / 2; x < width; x += grid) {
    for (let y = grid / 2; y < height; y += grid) {
      if (random(1000) < 100) {
        const c = img.get(x, y);
        noStroke();
        fill(c);

        rect(x, y, grid);
      }
    }
  }

    grid *= 2;

    for (let x = grid / 2; x < width; x += grid) {
      for (let y = grid / 2; y < height; y += grid) {
        if (random(1000) < 100) {
          const c = img.get(x, y);
          noStroke();
          fill(c);

          rect(x, y, grid);
        }
      }
    }
}