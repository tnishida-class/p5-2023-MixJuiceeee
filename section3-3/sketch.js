// テキスト「キーボード操作に反応する」
let x, y, g, vy, a;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vy = 0;
  g = 1;
  a = 1;
}

function draw(){

  background(160, 192, 255);
  ellipse(x, y, 50);
  if(keyIsDown(LEFT_ARROW)){ x -= 5*a; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5*a; }
  if(keyIsDown("A".charCodeAt(0))){ a = 2; }
   else{ a = 1;}
  if(y==height/2 && keyIsDown(" ".charCodeAt(0) )){ vy = -20;}
  vy = vy + g;
  y = y + vy;
  y = constrain(y, 0, height/2)
}

