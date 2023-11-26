

function setup(){
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

let x, y, g, vy, a;

function setup(){
  x = 50;
  y = height / 2;
  vy = 0;
  g = 1;
  a = 1;
}

function draw(){
  
  background(160, 192, 255);
  fill(255);
  ellipse(x, y, 50);
  fill(70);
  //yuka
  rect(0, height/2+25, width/3, height/2-25);
  rect(width/3*2, height/2+25, width/3, height/2-25);
  //Ashiba
  Ashiba(200, 280);
  Ashiba(650, 180);
  
  //red block
  fill(200,20,20);
  for (i=450; i<=width; i = i +400){
    rect(i,height/2 -25, 50, 50);
  }

  rect(1450,height/2 -25, 50, 50);
  

  //goal block
  fill(200, 200, 20);
  rect(1600,200,50,50);

  if(keyIsDown(LEFT_ARROW)){ x -= 5*a; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5*a; }
  if(keyIsDown("A".charCodeAt(0))){ a = 1.5; }
   else{ a = 1;}
  if(y==height/2 && x<=width/3 && keyIsDown(" ".charCodeAt(0) )){ vy = -20 ;}
  if(y==height/2 && x>=width/3*2 && keyIsDown(" ".charCodeAt(0) )){ vy = -20 ;}
  if(y==280-25 && x>=200 && x<=400 && keyIsDown(" ".charCodeAt(0) )){ vy = -20;}
  if(y==180-25 && x>=650 && x<=850 && keyIsDown(" ".charCodeAt(0) )){ vy = -20;}
  if(y==280-25 || y==180-25){g=0;}
   else{g=1;}
   
  vy = vy + g;
  y = y + vy;

  if(x>=0 && x<=200 && y>=280 && y<=330){x = constrain(x, 0, 200-25);}
  if(x>=400 && x<=width/3 && y>=280 && y<=330){x = constrain(x, 400+25, width/3);}

  if(x>=width/3 && x<=650 && y>=180 && y<=230){x = constrain(x, width/3, 650-25);}
  if(x>=850 && x<=width/3*2 && y>=180 && y<=230){x = constrain(x, 850+25, width/3*2);}
  if(x>=width/3 && x<=width/3*2 && y>height/2+25){x = constrain(x, width/3+25, width/3*2-25);}

  if(x<200  || (x>400 && x<width/3)){y = constrain(y, 0, height/2);}
  if(x>width/3*2){y = constrain(y, 0, height/2);}
  if(x>=200 -25 && x<=400 +25 && y<280){y = constrain(y, 0, 280-25);}
  if(x>=200 && x<=400 && y>330){y = constrain(y, 330 + 25, height/2);}
  if(x>=650 -25 && x<=850 +25 && y<180){y = constrain(y, 0, 180-25);}
  if(x>=650 && x<=850 && y>230){y = constrain(y, 230 + 25, height+100);}

//resporn
  if(y>height){x=50;}
  if(x>=450 -25 && x<=500 +25 && y>=height/2 -25){x=50, y=height/2;}
  if(x>=1250 -25 && x<=1300 +25 && y>=height/2 -25){x=50, y=height/2;}
  if(x>=1450 -25 && x<=1500 +25 && y>=height/2 -25){x=50, y=height/2;}
  if(x>=1650 -25 && x<=1700 +25 && y>=height/2 -25){x=50, y=height/2;}
//goal
  if(x>=1600 -25 && x<=1650 +25 && y<=250 +15 && y>=200 -15){
    fill(0);
    text("AAA".toPrecision(3), 650, 300);}

  
  function Ashiba(x, y){
    rect(x, y, 200, 50);
  }
}
