const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hr,mn,sc;

function setup() {
  createCanvas(800,400);
  
  
}

function draw() {
  hr=hour();
  mn=minute();
  sc=second();
  background(255,255,255);  
  translate(200,200);
  angleMode(DEGREES);
  scAngle=map(sc,0,60,0,360);
  mnAngle=map(mn,0,60,0,360);
  hrAngle=map(hr%12,0,12,0,360);
  push();
  rotate(scAngle);  
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();
  push();
  rotate(mnAngle);  
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  push();
  rotate(hrAngle);  
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();
  drawSprites();
}