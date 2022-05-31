
// OTHER VARIABLES ------------------------------------------------------------

let images = [];
var index = 0;

let source;
let target;
let result;
let buffer;
let currImage;
let comp;
let capture;
let overlay;

var POSTER_W = 695;
var POSTER_H = 850;

var offsetX = 0;
var offsetY = 0;

var img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24;

var sx, sy, sw, sh, dx, dy, dw, dh;
var scalar = 1;

var x, y;

 let font;


// PRELOAD ------------------------------------------------------------

function preload(){

  font = loadFont('assets/HandjetVF-All.ttf');

  img1 = loadImage('assets/n1.jpg');
  img2 = loadImage('assets/n2.jpg');
  img3 = loadImage('assets/n3.jpg');
  img4 = loadImage('assets/n4.jpg');
  img5 = loadImage('assets/n5.jpg');
  img6 = loadImage('assets/n6.jpg');
  img7 = loadImage('assets/n7.jpg');
  img8 = loadImage('assets/n8.jpg');
  img9 = loadImage('assets/n9.jpg');
  img10 = loadImage('assets/n10.jpg');
  img11 = loadImage('assets/n11.jpg');
  img12 = loadImage('assets/n12.jpg');
  img13 = loadImage('assets/n13.jpg');
  img14 = loadImage('assets/n14.jpg');
  img15 = loadImage('assets/n15.jpg');
  img16 = loadImage('assets/n16.jpg'); 
  img17 = loadImage('assets/n17.jpg');
  img18 = loadImage('assets/n18.jpg');
  img19 = loadImage('assets/n19.jpg');
  img20 = loadImage('assets/n20.jpg');
  img21 = loadImage('assets/n21.jpg');
  img22 = loadImage('assets/n22.jpg');
  img23 = loadImage('assets/n23.jpg');
  img24 = loadImage('assets/n24.jpg');
}

// SETUP ------------------------------------------------------------

function setup() {
  createCanvas(windowWidth - 50, windowHeight - 80);
  noCursor();

  capture = createCapture(VIDEO);
  capture.hide();

  source = createGraphics(POSTER_W, POSTER_H);
  target = createGraphics(POSTER_W, POSTER_H);
  overlay = createGraphics(POSTER_W, POSTER_H);

  img1.resize(POSTER_W,0);
  img2.resize(0,POSTER_H);
  img3.resize(0,POSTER_H);
  img4.resize(0,POSTER_H);
  img5.resize(POSTER_W,0);
  img6.resize(POSTER_W,0);
  img7.resize(POSTER_W,0);
  img8.resize(POSTER_W,0);
  img9.resize(POSTER_W,0);
  img10.resize(POSTER_W,0);
  img11.resize(POSTER_W,0);
  img12.resize(POSTER_W,0);
  img13.resize(POSTER_W,0);
  img14.resize(POSTER_W,0);
  img15.resize(POSTER_W,0);
  img16.resize(POSTER_W,0);
  img17.resize(POSTER_W,0);
  img18.resize(POSTER_W,0);
  img19.resize(POSTER_W,0);
  img20.resize(POSTER_W,0);
  img21.resize(POSTER_W,0);
  img22.resize(POSTER_W,0);
  img23.resize(POSTER_W,0);
  img24.resize(POSTER_W,0);

  images[0] = img1;
  images[1] = img2;
  images[2] = img3;
  images[3] = img4;
  images[4] = img5;
  images[5] = img6;
  images[6] = img7;
  images[7] = img8;
  images[8] = img9;
  images[9] = img10;
  images[10] = img11;
  images[11] = img12;
  images[12] = img13;
  images[13] = img14;
  images[14] = img15;
  images[15] = img16;
  images[16] = img17;
  images[17] = img18;
  images[18] = img19;
  images[19] = img20;
  images[20] = img21;
  images[21] = img22;
  images[22] = img23;
  images[23] = img24;


  currImage = images[int(random(images.length))];
  
  comp = createGraphics(POSTER_W, POSTER_H);
}

// DRAW ------------------------------------------------------------

function draw() {
  background(255, 0, 0);
   drawSource();
   drawTarget();
   drawOverlay();

   image(source, 0, 0);
   image(target, POSTER_W, 0);
   image(overlay, POSTER_W, 0);

noFill();
stroke(0);
strokeWeight(2);

rect(mouseX, mouseY, sw, sh);
rect(mouseX + POSTER_W, mouseY, sw, sh);

}

// SOURCE ------------------------------------------------------------

function drawSource(){
source.background(0);
source.imageMode(CENTER);
source.push();
source.translate(source.width/2, source.height/2);
source.scale(scalar);
source.image(currImage,offsetX,offsetY);
source.pop();
}

// TARGET ------------------------------------------------------------

function drawTarget(){

  buffer = source.get();

  if (frameCount == 1){
  target.background('#ffffff');
  }

  sx = mouseX;
  sy = mouseY;
  sw = 100;
  sh = 100;

  dx = mouseX;
  dy = mouseY;
  dw = 100;
  dh = 100;

  if (mouseIsPressed === true){ // ---------------------- DRAWING FUNCTION
    
    target.copy(buffer, sx, sy, sw, sh, dx, dy, dw, dh);
  }

}

// OVERLAY -------------------------------------------------------

function drawOverlay(){
  overlay.push();
  overlay.stroke(0);
  overlay.strokeWeight(2);
  overlay.line(mouseX + sw/2, mouseY + sh/2, pmouseX + sw/2, pmouseY + sh/2);
  overlay.pop();
}


// INPUTS ------------------------------------------------------------

function keyReleased(){ // ---------------------- IMAGE TOGGLE


if (key === 'p'){
  target.textFont(font);
  target.textSize(20);
  target.textAlign(CENTER);
  target.fill(200);
  target.noStroke();
  target.text("Made with An Array of Constraint " + day() + '.' + month() + '.' + year() + '-' + hour()+ '.' + minute() , POSTER_W/2, POSTER_H - 10);
  target.save('image at ' + day() + '.' + month() + '.' + year() + '-' + hour()+ '.' + minute() + '.jpg');
  overlay.text("Made with An Array of Constraint " + day() + '.' + month() + '.' + year() + '-' + hour()+ '.' + minute() , POSTER_W/2, POSTER_H - 10);
  overlay.save('image at ' + day() + '.' + month() + '.' + year() + '-' + hour()+ '.' + minute() + '.png');
}

if (key === '1'){
  scalar = random(1,5);
          
  if (scalar > 2){
    offsetX = random(100);
    offsetY = random(100);
  }

  currImage = images[int(random(images.length))];

  }

  if (key === '3'){
	target.clear();
	target.background(255);
  }

  if (key === '2'){
  scalar = 1.8;
  offsetX = 0;
  offsetY = 0;
  currImage = capture;
  }

  if (key === '4'){
    overlay.clear();
  }
}


function windowResized() {
  resizeCanvas(windowWidth - 50, windowHeight - 80);
}