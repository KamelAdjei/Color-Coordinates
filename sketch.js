//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//00_Template
//The purpose of this sketch is to provide a basic template
//for P5.js projects


function setup() {
  createCanvas(400,400);
  stroke(0);

}
var value = 0;
function draw() {
  background(0);
  //red on the left
  var mouse1 = map (mouseX,0,width,0,255);
  var mouse2 = map (mouseY,0,height,0,255);
  var mouse3 = map (mouseX,0,width,255,0);
  var mouse4 = map (mouseY,0,width,255,0);

  var color1= color(255,0,0,mouse1);
  var color2= color(0,255,0,mouse2);
  var color3= color(255,255,0,mouse3);
  var color4= color(0,255,255,mouse4);

  fill(color1);
rect(0,0,width/2,height/2);
//blue on the right below
fill(color2);
rect(200,200,width/2,height/2);
// green on the right below
fill(color3);
rect(0,200,width/2,height/2);
//purple on the top right
fill(color4);
rect(200,0,width/2,height/2);
}
