//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・
/*
本当は実装したいこと
 - 言語を変更するのであれば、言語の構造も変更したい→LanguageShapeの値を生成するようにすれば、言語構造自体も変更できる。
 - 5*10みたいになってるところを適当な数で変更したい。
*/
//・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・・


const iPhoneFramePalette = {
  frame: "#111122",
  button: "#eeeeee"
}
const colorPalettes = [{
  base: "#CAE7ED",
  upper: "#CAE7ED",
  lower: "#FFFBD5",
  chat: "#FFFBBD",
  text: "#6B8A87",
  upperTxt: "#49809E"
}, ];
let colorPalette;

const JapaneseSyllabaryHiragana = "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをんがぎぐげござじずぜぞだぢづでどばびぶべぼぱぴぷぺぽぁぃぅぇぉっゃゅょ";
const HiraganaArr = [...JapaneseSyllabaryHiragana];
const JapaneseSyllabaryKatakana = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲンガギグゲゴザジズゼゾダヂヅデドバビブベボパピプペポァィゥェォッャュョ"
const KatakanaArr = [...JapaneseSyllabaryKatakana];

const LanguageShape = [0, 1, 2, 3, 4, 10, 11, 12, 13, 14, 20, 21, 22, 23, 24, 30, 31, 32, 33, 34, 40, 41, 42, 43, 44, 50, 51, 52, 53, 54, 60, 61, 62, 63, 64, 70, 72, 74, 80, 81, 82, 83, 84, 90, 91, 93, 94, 100, 110, 111, 112, 113, 114, 120, 121, 122, 123, 124, 130, 131, 132, 133, 134, 140, 141, 142, 143, 144, 150, 151, 152, 153, 154, 160, 161, 162, 163, 164, 172, 180, 182, 184];

let upperPartsNumArr = [];
let lowerPartsNumArr = [];

const ChatTxtArr = ["こんにちは", "おはよう", "さようなら", "こんばんは", "たのしいです", "なんでやねん", "さむいです"]

const person = ["me", "you"];
let chatBubbles = [];
let isChange = true;

const animetionCount = 40;
let backgroundAnimations = [];

let font;

function preload() {
  font = loadFont("assets/SawarabiGothic-Regular.ttf");
}

function setup() {
  createCanvas(400, 800);
  textFont(font);

  colorPalette = random(colorPalettes);

  //関数側から値を渡せたらいいんやけどなああ
  for (let i = 0; i < 20; i++) {
    upperPartsNumArr.push(i);
  }
  for (let i = 0; i < 5; i++) {
    lowerPartsNumArr.push(i);
  }
  upperPartsNumArr = shuffle(upperPartsNumArr);
  lowerPartsNumArr = shuffle(lowerPartsNumArr);

  //背景classのpush
  for (let i = 0; i < animetionCount; i++) {
    backgroundAnimations.push(new BackgroundAnimation());
  }
}

function draw() {
  background(colorPalette.base);

  //背景アニメーション
  for (let i in backgroundAnimations) {
    backgroundAnimations[i].draw();
  }

  //チャットの吹き出し
  if (frameCount % 200 == 100) {
    for (let i in chatBubbles) {
      chatBubbles[i].up();
    }
    chatBubbles.push(new ChatBubble(random(person), random(ChatTxtArr), colorPalette.text, colorPalette.chat));
  }

  for (let i in chatBubbles) {
    chatBubbles[i].draw(isChange);
    if (chatBubbles[i].position.y < 0) {
      chatBubbles.splice(i, 1);
    }
  }

  //フレームの部分
  drawingChatFrame(
    (upperFrameColor = colorPalette.upper),
    (lowerFrameColor = colorPalette.lower),
    (chatBoxColor = colorPalette.text),
    (addressName = "Click, and you'll change languages"),
    (addressNameTextColor = colorPalette.upperTxt),
    (chatBoxText = "- - - - - -"),
    (chatBoxTextColor = colorPalette.chat)
  );

  drawingiPhoneFrame((frameColor = iPhoneFramePalette.frame), (buttonColor = iPhoneFramePalette.button));

  //マウスカーソルを変更
  noCursor();
  push();
  noStroke();
  fill(255, 100);
  circle(mouseX, mouseY, width / 30)
  pop();
}

function keyPressed() {
  if (key == 's' || key == 'S') {
    saveCanvas('myCanvas', 'jpeg');
  }
}