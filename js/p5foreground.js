let win = false;


let canvasDivInstance = function(p) { // p could be any variable name

  // p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");


  p.setup = function() {
    p.canvas = p.createCanvas(canvasWidth, canvasHeight);
    p.canvas.parent('overlayCanvas');
    p.textSize(width / 5);
    p.textAlign(CENTER, CENTER);
  };

  p.draw = function() {
    p.clear();

    if (win) {
      // p.text(canvasWidth / 3, canvasHeight / 6);
      // p.ellipse(canvasWidth / 2, canvasHeight / 2, 100);
      p.text('YES', canvasWidth / 2, canvasHeight / 2);
    }
  };



}

let canvasDiv = new p5(canvasDivInstance, 'canvasDiv');
