let win = false;
let lose = true;
let word = "";



let canvasDivInstance = function(p) { // p could be any variable name

  // p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");


  p.setup = function() {
    p.canvas = p.createCanvas(canvasWidth, canvasHeight);
    p.canvas.parent('overlayCanvas');
    p.textSize(48);
    p.textAlign(CENTER, CENTER);
    p.textFont("Helvetica");
    // p.colorMode(HSB, 100);
    // p.fill(213, 66, 109)
  };

  p.draw = function() {
    // p.clear();


    if (win) {
      // p.background(213, 66, 109, 2);
      p.background(129, 62, 188, 1.6);
      p.fill(255);

      p.text(
`YES
VERY GAY`, 20, 20, canvasWidth - 20, canvasHeight - 20);

      // for(let i = 0; i < 200; i++){
      //   let hue = i / 2;
      //   p.fill(color(hue, 126, 255));
      //   p.text('YES', 20, 20 + fontAnimationFrame/(i), canvasWidth - 20, canvasHeight - 20);
      // }
      // fontAnimationFrame++;
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
