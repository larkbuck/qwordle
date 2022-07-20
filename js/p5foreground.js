let win = false;
let lose = false;
let word = "";
// fireworks
let fireworks = [];
let gravity;



let canvasDivInstance = function(p) { // p could be any variable name

  // p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");


  p.setup = function() {
    p.canvas = p.createCanvas(canvasWidth, canvasHeight);
    p.canvas.parent('overlayCanvas');
    p.frameRate(60);
    p.textSize(48);
    p.textAlign(CENTER, CENTER);
    p.textFont("Helvetica");
    // p.colorMode(HSB, 100);
    // p.fill(213, 66, 109)


  // fireworks
  gravity = createVector(0, 0.2);

  firework = new Particle(random(width), height);
  // colorMode(RGB);
  };

  p.draw = function() {
    // p.clear();


    if (win) {
      // p.background(213, 66, 109, 2);
      // p.background(129, 62, 188, 1.6);
      p.stroke(0, 255, 0)
      p.strokeWeight(7);
      p.fill(0, 255, 0);
      // p.fill(213, 66, 109);
      p.textSize(50);
      p.text(
        `YES
VERY GAY`, 20, 20, canvasWidth - 20, canvasHeight - 20);

p.fill(213, 66, 109);
p.textSize(48);
p.text(
  `YES
VERY GAY`, 20, 20, canvasWidth - 20, canvasHeight - 20);

      // stroke(255);
      // strokeWeight(0);

      if (random(1) < .07) {
        fireworks.push(new Firework());
      }
      for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
          fireworks.splice(i, 1);
        }
      }
    }

    if (lose) {
      // p.background(213, 66, 109, 2);
      p.background(129, 62, 188, 1.6);
      p.fill(255);

      p.text(
        `Nope.
Answer was:
${word}`, canvasWidth / 2, canvasHeight / 2);

    }
  };



}

let canvasDiv = new p5(canvasDivInstance, 'canvasDiv');
