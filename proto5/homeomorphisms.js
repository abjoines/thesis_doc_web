function setup() {
    var myCanvas = createCanvas(1200, 500);
    myCanvas.parent('p2');
    // createCanvas(windowWidth, windowHeight);
    noLoop();
    background(255);
}

function draw() {
    stroke(0);
    strokeWeight(2);
    fill(255) ;


for (x=50; x < windowWidth; x+=100){
    for(y=50; y <windowHeight; y +=100){
        for (i=0; i < 6; i++){
            var x2 = random(x-30, x+30);
            var y2 = random(y-30, y+30);
            
            stroke(0);
            line(x, y, x2, y2);
            ellipse(x2, y2, 7);

            stroke(58, 152, 57);
            ellipse(x, y, 7);
        }
    }
}
}

function mousePressed() {
    background(255);
    redraw();
  }