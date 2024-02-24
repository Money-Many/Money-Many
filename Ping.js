let circles = [];
let speed1 = 4;
let size1 = 0;
let fillco = 15;

function setup() {
  createCanvas(1920, 1080);
  let randometer = random(-10,10);
  for(let i = 0;i<25;i++){
    speed1 += 1;
    size1+=2;
    fillco+=8;
    circles[i] = new mouseb(150,100,speed1,speed1,size1,fillco,randometer);
  }
  noStroke();
}

function draw() {
  background(10);
  for(let i = 0; i<circles.length; i++){
    circles[i].move();
    circles[i].display();
  }
}

class mouseb{
  constructor(bx,by,bxspeed,byspeed,size,fillco,rando){
    this.bx = bx;
    this.by = by;
    this.bxspeed = bxspeed;
    this.byspeed = byspeed;
    this.size = size;
    this.fillco = fillco;
    this.bxrandom = random(-20,20);
    this.byrandom = random(-20,20);
    this.randometer = rando;
  }
  move(){
    if(mouseIsPressed){
      this.bx += (mouseX-this.bx)/100*this.bxspeed;
      this.by += (mouseY-this.by)/100*this.byspeed;
      this.bxrandom = random(-20,20);
      this.byrandom = random(-20,20);
    }
    else{
      this.bx += this.bxrandom;
      this.by += this.byrandom;

      if(this.randometer>0){
        if(this.bx>2300 || this.bx<-300 || this.by>1300 || this.by<-300){
          this.bx = mouseX;
          this.by = mouseY;
        }
      }
      else{
        if (this.bx < 0 || this.bx > width) {
          this.bxrandom *= -1;
        }
        if (this.by < 0 || this.by > height) {
          this.byrandom *= -1;
        }
      }
    }
  }
  display(){
    fill(this.fillco,this.fillco/2,this.fillco/4);
    circle(this.bx,this.by,this.size);
  }
}
