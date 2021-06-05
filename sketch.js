var h,m,s;
var ha,ma,sa;

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {
  background(0);  
  translate(200,200);
  rotate(-90);

  h = hour();
  m = minute();
  s = second();

  sa = map(s,0,60,0,360);
  ma = map(m,0,60,0,360);
  ha = map(h,0,12,0,360);
  
 push();
  rotate(sa);
  strokeWeight(10);
  stroke('red');
  line(0,0,100,0);
 pop();
 
 push();
  rotate(ma);
  strokeWeight(10);
  stroke('blue');
  line(0,0,80,0);
 pop();

 push();
  rotate(ha);
  strokeWeight(10);
  stroke('purple');
  line(0,0,50,0);
 pop();
 
 push();
 strokeWeight(10);
 stroke('yellow');
 point(0,0);
 pop();

 push();
 strokeWeight(10);
 stroke('red');
 noFill();
 arc(0,0,300,300,0,sa);
 pop();

 push();
 strokeWeight(10);
 stroke('blue');
 noFill();
 arc(0,0,270,270,0,ma);
 pop();

 push();
 strokeWeight(10);
 stroke('purple');
 noFill();
 arc(0,0,240,240,0,ha);
 pop();

}