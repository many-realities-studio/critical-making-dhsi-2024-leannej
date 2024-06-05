function setup() {
  createCanvas(windowWidth,windowHeight)
  print("Hello world")
}

function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);

  // Pink Circles
  for (let i = 0; i < 4; i++) {
    let pinkColor = lerpColor(color(255, 192, 203), color(255, 105, 180), i / 3);
    fill(pinkColor);
    let xPos = 50 + i * 100;
    circle(xPos, 100, 80);
  }

  // Blue Circles
  for (let i = 0; i < 4; i++) {
    let blueColor = lerpColor(color(173, 216, 230), color(0, 191, 255), i / 3);
    fill(blueColor);
    let xPos = 50 + i * 100;
    circle(xPos, 200, 80);
  }

  // Black Circles
  for (let i = 0; i < 4; i++) {
    let blackColor = lerpColor(color(0), color(0), i / 3);
    fill(blackColor);
    let xPos = 50 + i * 100;
    circle(xPos, 300, 80);
  }

}