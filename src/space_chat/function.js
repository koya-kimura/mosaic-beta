//-----------------------------------------
//新しい言語の作成
//部首か作りかのパーツを描く
//1以上の整数→パーツ
function drawingUpperPart(partNum, x, y, s) {
  push();
  rectMode(CORNER);

  const partsCount = 20;

  switch (partNum % partsCount) {
    case 0:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + s / 2, y + s / 4, x + s / 2, y + s / 8);
      break;

    case 1:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + s / 2, y + (s * 3) / 8, x + s / 2, y + s / 8);
      break;

    case 2:
      line(x + s / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + s / 8);
      break;

    case 3:
      line(x + s / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      break;

    case 4:
      line(x + s / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + s / 2, y + (s * 3) / 8, x + s / 2, y + s / 8);
      break;

    case 5:
      line(x + s / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + s / 2, y + (s * 3) / 8, x + s / 2, y + s / 8);
      break;

    case 6:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + s / 4, y + s / 4, x + s / 4, y + s / 8);
      line(x + (s * 3) / 4, y + s / 4, x + (s * 3) / 4, y + s / 8);
      break;

    case 7:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + s / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;

    case 8:
      line(x + s / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + s / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;
    case 9:
      line(x + s / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + s / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;

    case 10:
      line(x + s / 10, y + (s * 2) / 10, x + (s * 9) / 10, y + (s * 2) / 10);
      line(x + s / 10, y + (s * 3) / 10, x + (s * 9) / 10, y + (s * 3) / 10);
      break;

    case 11:
      line(x + s / 10, y + (s * 2) / 10, x + (s * 9) / 10, y + (s * 2) / 10);
      line(x + s / 10, y + (s * 3) / 10, x + (s * 9) / 10, y + (s * 3) / 10);
      line(x + s / 2, y + (s * 3) / 8, x + s / 2, y + s / 8);
      break;

    case 12:
      line(x + s / 10, y + (s * 2) / 10, x + (s * 9) / 10, y + (s * 2) / 10);
      line(x + s / 10, y + (s * 3) / 10, x + (s * 9) / 10, y + (s * 3) / 10);
      line(x + s / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;

    case 13:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + s / 4, y + s / 4, x + (s * 3) / 4, y + s / 8);
      break;

    case 14:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + s / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;

    case 15:
      line(x + s / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + s / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;

    case 16:
      line(x + s / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + s / 4, y + (s * 3) / 8, x + (s * 3) / 4, y + s / 8);
      break;

    case 17:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + (s * 3) / 4, y + s / 4, x + s / 4, y + s / 8);
      break;

    case 18:
      line(x + s / 10, y + s / 4, x + (s * 9) / 10, y + s / 4);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      break;

    case 19:
      line(x + s / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + s / 8);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      break;

    case 20:
      line(x + s / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + (s * 9) / 10, y + s / 4, x + s / 2, y + (s * 3) / 8);
      line(x + (s * 3) / 4, y + (s * 3) / 8, x + s / 4, y + s / 8);
      break;
  }
  pop()
}

function drawingLowerPart(partNum, x, y, s) {
  push();
  rectMode(CORNER);

  const partsCount = 5;

  switch (partNum % partsCount) {
    case 0:
      push();
      noFill();
      rect(x + s / 10, y + s / 2, (s * 8) / 10, s / 3);
      pop();
      break;

    case 1:
      push();
      noFill();
      rect(x + s / 10, y + s / 2, (s * 8) / 10, s / 3);
      rect(x + (s * 2) / 10, y + s / 2, (s * 6) / 10, s / 3);
      pop();
      break;

    case 2:
      line(x + s / 10, y + (s * 3) / 4, x + (s * 9) / 10, y + (s * 3) / 4);
      break;

    case 3:
      line(x + s / 10, y + (s * 3) / 4, x + (s * 9) / 10, y + (s * 3) / 4);
      line(x + s / 2, y + (s * 5) / 8, x + s / 2, y + (s * 7) / 8);
      break;

    case 4:
      push();
      noFill();
      triangle(
        x + s / 2,
        y + (s * 5) / 8,
        x + s / 4,
        y + (s * 7) / 8,
        x + (s * 3) / 4,
        y + (s * 7) / 8
      );
      pop();
      break;
  }
  pop();
}

function toTenthRank(num) {
  return floor(num / 10)
}

function toOneRank(num) {
  return floor(num % 10)
}


//-----------------------------------------
//文字列の変換（originalLanguageArrからchangeLanguageArrに変換する）
function languageShapeArr(word, originalLanguageArr, languageShape) {
  const wordArr = [...word];
  let returnWordArr = [];
  for (let i in wordArr) {
    let index = originalLanguageArr.indexOf(wordArr[i]);
    returnWordArr.push(languageShape[index])
  }
  return returnWordArr;
}

//-----------------------------------------
//チャットの吹き出し部分

class ChatBubble {
  constructor(person, chatTxt, textColor, chatColor) {
    this.position = createVector(width / 2, height * 0.83);
    this.size = createVector(width * 0.6, height * 0.05);
    this.round = height * 0.015;
    this.person = person;
    this.chatSounrceTxt = chatTxt;
    this.chatChangeArr = languageShapeArr(this.chatSounrceTxt, HiraganaArr, LanguageShape);
    this.textColor = textColor;
    this.chatColor = chatColor;
  }

  up() {
    this.position.y -= this.size.y * 1.5;
  }

  draw(isChange) {
    //ここ変更するのあり
    fill(this.chatColor);
    const iconDist = width * 0.4;
    switch (this.person) {
      case "me":
        circle(this.position.x + iconDist, this.position.y, this.size.y * 0.7);
        triangle(this.position.x + iconDist * 0.85, this.position.y, this.position.x + this.size.x / 3, this.position.y - this.size.y / 3, this.position.x + this.size.x / 3, this.position.y + this.size.y / 3);
        break;
      case "you":
        circle(this.position.x - iconDist, this.position.y, this.size.y * 0.7);
        triangle(this.position.x - iconDist * 0.85, this.position.y, this.position.x - this.size.x / 3, this.position.y - this.size.y / 3, this.position.x - this.size.x / 3, this.position.y + this.size.y / 3)
        break;
    }

    //改行どうするの問題ある
    rectMode(CENTER);
    fill(this.chatColor);
    rect(
      this.position.x,
      this.position.y,
      this.size.x,
      this.size.y,
      this.round,
      this.round
    );

    push();
    if (isChange) {
      stroke(this.textColor);
      strokeWeight(1);
      for (let i in this.chatChangeArr) {
        drawingUpperPart(toTenthRank(this.chatChangeArr[i]), this.position.x - this.size.x * 0.41 + height * 0.03 * i, this.position.y - this.size.y * 0.23, height * 0.025);
        drawingLowerPart(toOneRank(this.chatChangeArr[i]), this.position.x - this.size.x * 0.41 + height * 0.03 * i, this.position.y - this.size.y * 0.23, height * 0.025);
      }
    } else {
      noStroke();
      fill(this.textColor);
      text(this.chatSounrceTxt, this.position.x - this.size.x * 0.4, this.position.y + this.size.y * 0.1)
    }
    pop();
  }
}

//-----------------------------------------
//フレームについてこれ以下
//スマホのフレーム
function drawingiPhoneFrame(frameColor, buttonColor) {
  //rectMode
  rectMode(CORNER);
  //一番外側のフレーム
  noFill();
  stroke(frameColor);
  strokeWeight(width * 0.1);
  rect(0, 0, width, height);

  //上下のフレーム
  fill(frameColor);
  noStroke();
  rect(0, 0, width, height * 0.07);
  rect(0, height * 0.93, width, height * 0.07);

  //下のボタン
  fill(buttonColor);
  noStroke();
  circle(width / 2, height * 0.965, height * 0.05);

  //rectMode
  rectMode(CENTER);
  //上の長細めの四角
  fill(buttonColor);
  noStroke();
  rect(
    width / 2,
    height * 0.035,
    width * 0.4,
    height * 0.02,
    height * 0.01,
    height * 0.01
  );
}

//チャットのフレーム
function drawingChatFrame(
  upperFrameColor,
  lowerFrameColor,
  chatBoxColor,
  addressName,
  addressNameTextColor,
  chatBoxText,
  chatBoxTextColor
) {
  //rectMode
  rectMode(CORNER);
  //上の名前のとこと下のチャットのとこ
  noStroke();
  fill(upperFrameColor);
  rect(0, height * 0.07, width, height * 0.07);
  fill(lowerFrameColor);
  rect(0, height * 0.88, width, height * 0.05);

  //上のところのチャット宛先
  push();
  fill(addressNameTextColor);
  noStroke();
  textAlign(CENTER);
  textSize(height * 0.022);
  text(addressName, width / 2, height * 0.112);
  pop();

  //rectMode
  rectMode(CENTER);
  //下のチャットのとこの文字入力部分背景
  fill(chatBoxColor);
  noStroke();
  rect(
    width / 2,
    height * 0.905,
    width * 0.7,
    height * 0.03,
    height * 0.015,
    height * 0.015
  );

  //チャットのところの文字入力サンプル。
  fill(chatBoxTextColor);
  noStroke();
  textSize(height * 0.015);
  text(chatBoxText, width * 0.2, height * 0.91);
}

//背景部分
class BackgroundAnimation {
  constructor() {
    this.position = createVector(random(width), random(-150, -100));
    this.velocity = createVector(0, random(0.1, 1));
    this.rotateSpeed = random([-1, 1]) * random(100, 300);
    this.size = random(5, 10);
    this.color = random(240, 255)
  }
  draw() {
    this.position.add(this.velocity);
    if (this.position.y > height + 200) {
      this.position.y = random(-200, -100);
    }
    push();
    translate(this.position.x, this.position.y);
    rotate(frameCount / this.rotateSpeed);
    rectMode(CENTER);
    fill(this.color, 150);
    rect(0, 0, this.size, this.size);
    pop();
  }
}

//-----------------------------------------
//マウスクリックで言語変更
function mouseClicked() {
  isChange = !isChange;
}