//6.20 画像を使ったコードを書いてください。

let pg;
let pg_step = 5;
let img_arr = [];
let img_color_arr = [];

const colorPalette = ["#005e55", "#fff9bf", "#edb50c", "#b8003d", "#5e001f"]


function preload() {
  pg = loadImage("../../../assets/night-images/night-07.png");
  img_arr[0] = loadImage("img/img_00.jpg");
  img_arr[1] = loadImage("img/img_01.jpg");
  img_arr[2] = loadImage("img/img_02.jpg");
  img_arr[3] = loadImage("img/img_03.jpg");
  img_arr[4] = loadImage("img/img_04.jpg");
  img_arr[5] = loadImage("img/img_05.jpg");
  img_arr[6] = loadImage("img/img_06.jpg");
  img_arr[7] = loadImage("img/img_07.jpg");
  img_arr[8] = loadImage("img/img_08.jpg");
  img_arr[9] = loadImage("img/img_09.jpg");
  img_arr[10] = loadImage("img/img_10.jpg");
}

function setup() {
  createCanvas(600, 600);

  for (let i in img_arr) {
    img_color_arr[i] = pick_color_from_image(img_arr[i], width / 10, 5);
  }

  pg.resize(width, height);
  img_arr_resize(img_arr, width, 0);

   //適当な間隔でpgの描画と近い色をサーチして、その添字から画像持ってくる
  for (let x = 0; x < pg.width; x += pg_step) {
    for (let y = 0; y < pg.width; y += pg_step) {
      let pg_c = pg.get(x, y);
      let pg_near_c = color_near_distanse(pg_c, img_color_arr);
      let pg_near_c_index = img_color_arr.indexOf(pg_near_c);
      image(img_arr[pg_near_c_index], x, y, pg_step, pg_step);
    }
  }

  tint(255, 100);
  image(pg, 0, 0);
}

//--------------- create function ---------------

//画像から近しい色を返す（ピクセルから平均値を取るのは簡単だが、最頻値にすることで見た目の差を減らす)
function pick_color_from_image(img, step, class_count) {
  let class_step = 256 / class_count;
  //color_class_arrには各カラーバリューのクラスをベクトルの形で入れる
  let color_class_arr = [];
  let color_value_arr = [];

  for (let x = 0; x < img.width; x += step) {
    for (let y = 0; y < img.height; y += step) {
      let c = img.get(x, y);
      let r = red(c);
      let g = green(c);
      let b = blue(c);

      let c_class = createVector(
        floor(r / class_step),
        floor(g / class_step),
        floor(b / class_step)
      );
      color_class_arr.push(c_class);

      //ここは形をベクトルに直しているだけ
      let c_value = createVector(r, g, b);
      color_value_arr.push(c_value);
    }
  }

  // ベクトルのところを配列に変換
  let color_red_class_arr = [];
  let color_green_class_arr = [];
  let color_blue_class_arr = [];
  for (let i = 0; i < color_class_arr.length; i++) {
    color_red_class_arr.push(color_class_arr[i].x);
    color_green_class_arr.push(color_class_arr[i].y);
    color_blue_class_arr.push(color_class_arr[i].z);
  }

  //それぞれのカラーバリューで一番集中しているクラスを特定
  let color_red_mode_class = find_mode(color_red_class_arr);
  let color_green_mode_class = find_mode(color_green_class_arr);
  let color_blue_mode_class = find_mode(color_blue_class_arr);

  let color_red_mode_values = [];
  let color_green_mode_values = [];
  let color_blue_mode_values = [];

  for (let i = 0; i < color_class_arr.length; i++) {
    if (color_class_arr[i].x == color_red_mode_class) {
      color_red_mode_values.push(color_value_arr[i].x);
    }
    if (color_class_arr[i].y == color_green_mode_class) {
      color_green_mode_values.push(color_value_arr[i].y);
    }
    if (color_class_arr[i].z == color_blue_mode_class) {
      color_blue_mode_values.push(color_value_arr[i].z);
    }
  }

  let color_mode_average = color(
    arr_avg(color_red_mode_values),
    arr_avg(color_green_mode_values),
    arr_avg(color_blue_mode_values)
  );

  return color_mode_average;
}


//配列から最頻の値を配列で作って(最頻のものが複数あるかもしれない)、その中からランダムで返す
//arr→最頻のクラス
//ex.[0, 1, 2, 0, 2, 3, 3, 2, 2]→random([2, 3])
function find_mode(arr) {
  let save_arr = [];
  let save_x_arr = [];
  let save_y_arr = [];

  for (let i in arr) {
    if (save_x_arr.includes(arr[i])) {
      let index = save_x_arr.indexOf(arr[i]);
      save_y_arr[index]++;
    } else {
      let set_vec = createVector(arr[i], 1);
      save_arr.push(set_vec);
      save_x_arr.push(set_vec.x);
      save_y_arr.push(set_vec.y);
    }
  }

  let max_value = max(save_y_arr);

  let max_classes = [];
  for (let i in save_x_arr) {
    if (save_y_arr[i] == max_value) {
      max_classes.push(save_x_arr[i]);
    }
  }

  //バグ防止のシード値設定
  push();
  randomSeed(32);
  let random_max_class = random(max_classes);
  pop();

  return random_max_class;
}

//配列の平均値返す
function arr_avg(arr) {
  let sum = 0;
  for (let i in arr) {
    sum += arr[i];
  }
  return sum / arr.length;
}

//色を受け取ってcolor_arrから一番近い色をサーチする
//対象の色、色配列→色配列の中で一番近い「色」(not インデックス)
function color_near_distanse(target_color, color_arr) {
  let color_dis_arr = [];
  for (let i in color_arr) {
    let d = dist(
      red(target_color),
      green(target_color),
      blue(target_color),
      red(color_arr[i]),
      green(color_arr[i]),
      blue(color_arr[i])
    );
    color_dis_arr.push(d);
  }

  let min_dis = min(color_dis_arr);
  let return_color;
  for (let i in color_dis_arr) {
    if (color_dis_arr[i] == min_dis) {
      return_color = color_arr[i];
    }
  }

  return return_color;
}

//画像の配列から、全て画像のリサイズ
function img_arr_resize(img_arr, img_width, img_height) {
  for (let i in img_arr) {
    img_arr[i].resize(img_width, img_height);
  }
}