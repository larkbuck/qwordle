let win = false;


let canvasDivInstance = function(p) { // p could be any variable name

  // p.canvas;
  // p.eraseButton = document.querySelector("#eraseButton");


  p.setup = function() {
    p.canvas = p.createCanvas(canvasWidth, canvasHeight);
    p.canvas.parent('overlayCanvas');
    // p.background(100, 100, 100);
  };

  p.draw = function() {
    p.clear();

    if (win) {
      p.ellipse(100, 200, 100);
    }
  };



}

let canvasDiv = new p5(canvasDivInstance, 'canvasDiv');
