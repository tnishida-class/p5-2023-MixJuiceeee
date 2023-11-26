// ギリシャ国旗
function setup() {
  const blue = color(0, 51, 160);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    if (i % 2 == 0) {
      fill(blue);
      rect(0, i * d, width, d); 
    }
  }
  
  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  rect(2*size/5, 0, size/5, size);

  fill(255);
  rect(0,2*size/5, size, size/5);

}
