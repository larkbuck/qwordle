function createTriangleArray() { // triangle animation
  for (let i = 0; i < numOfTriangles; i++) {
    triangleArray.push(new Triangle(0, windowWidth));
  //   triangleArray.push(new Triangle(20, 50));
  //   triangleArray.push(new Triangle(windowWidth / 10, windowWidth / 10 + 10));
  //   triangleArray.push(new Triangle(windowWidth / 5, windowWidth / 5 + 10));
  //   triangleArray.push(new Triangle(windowWidth * 3 / 5, windowWidth * 3 / 5 + 10));
  //   triangleArray.push(new Triangle(windowWidth * 5 / 6, windowWidth * 5 / 6 + 10));
  //   triangleArray.push(new Triangle(windowWidth - 33, windowWidth - 50));
  }

  triangleArrayLength = triangleArray.length;
}


function drawTriangles() {
  for (let i = 0; i < triangleArrayLength; i++) {
    triangleArray[i].drawTriangle();

    triangleArray[i].moveTriangle();

    triangleArray[i].checkBounds();
  }
}


class Triangle {
  constructor(_xStart, _xEnd) {
    this.xStart = _xStart;
    this.xEnd = _xEnd
    this.x = random(this.xStart, this.xEnd);
    // this.x = random(0, windowWidth);
    this.y = random(0, windowHeight);
    // this.y = random(windowHeight + 50, windowHeight * 2);
    this.speedX = 0;
    this.speedY = -1;
    this.accelX = 0;
    this.accelY = random(-0.0050, -0.0010);
    this.rotation = 0;
    this.rotationSpeed = random(-.03, .03);
    this.diam = random(4, 8);
    this.c = color(random(180, 215), random(60, 70), random(110, 200), 200);
  }

  drawTriangle() {
    noStroke();
    fill(this.c);
    push();
    translate(this.x, this.y);
    this.rotation += this.rotationSpeed;
    rotate(this.rotation);
    triangle(-10, 10, 0, -10, 10, 10);
    pop();
  }

  moveTriangle() {
    this.y = this.y - this.speedY;
    this.speedY = this.speedY + this.accelY;

    this.x = this.x + this.speedX;
    this.speedX = this.speedX + this.accelX;

    // Select a random amount to change the accelX.
    // This will produce a gentle wiggle effect.
    this.accelX += random(-0.00005, 0.00005);

    this.diam = this.diam + 0.02;
  }

  checkBounds() {
    if (this.y > windowHeight + 20) {
      this.y = random(-10, -20);
      // this.y = random(windowHeight + 10, windowHeight + 100);
      this.speedY = -1;
      this.x = random(this.xStart, this.xEnd);
      this.diam = random(3, 7);
      this.speedX = 0;
      this.accelX = 0;
      this.c = color(random(180, 215), random(60, 70), random(110, 200), 200);
    }
  }
}
