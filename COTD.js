let b1 = 0;
let c1 = [];
let parameter = 0;
let noc = 0;
let pg = 1;
let fillco = 0;
let fg = 1;

function setup() {
  createCanvas(1920, 1080);
  textAlign(CENTER);
  rectMode(CENTER);
  noStroke();

  b1 = new box(width/2,height/2,200,100,'Pressme',"https://www.youtube.com/watch?v=qerlEgoEcxc");
  for(let i = 0; i<54; i++){
    parameter+=pg;
    noc+=20;
    c1[i] = new cube(width/2-parameter*parameter/2,noc,20,20,parameter);
  }
}
function draw() {
  background(0);
  for(let j = 0; j<width/20; j++){
    fill(0,0,fillco-j);
    rect(width/2,j*20,width,20);
  }
  fillco+=fg;
  if(fillco>100){
    fg=-1;
  }
  if(fillco<0){
    fg=1;
  }
  for(let i = 0; i<c1.length; i++){
    c1[i].display();
    c1[i].move();
  }
  b1.move();
  b1.display();
}
class box{
  constructor(bx,by,bwidth,bheight,text,link){
    this.bx = bx;
    this.by = by;
    this.bwidth = bwidth;
    this.bheight = bheight;
    this.shine = 40;
    this.text = text;
    this.link = link;
  }
  move(){
    if(mouseX>this.bx-this.bwidth/2 && mouseX<this.bx+this.bwidth/2 && mouseY>this.by-this.bheight/2 && mouseY<this.by+this.bheight/2){
      this.shine = 90;
      if(mouseIsPressed){
        window.open(this.link);
      }
    }
    else{
      this.shine = 40;
    }
  }
  display(){
    fill(this.shine);
    rect(this.bx,this.by,this.bwidth,this.bheight);
    fill(0);
    textFont('silkscreen');
    textSize(20);
    text(this.text,this.bx,this.by);
  }
}

class cube{
  constructor(cx,cy,cwidth,cheight,cp){
    this.cx = cx;
    this.cy = cy;
    this.cwidth = cwidth;
    this.cheight = cheight;
    this.cxspeed = 0;
    this.r = random(144,233);
    this.g = random(12,19);
    this.b = random(144,233);
    this.tr = 1;
    this.cp = cp;
  }
  move(){
    this.cx+=this.cxspeed;
    this.cxspeed+=this.tr;
    if(this.cxspeed>this.cp){
      this.tr = -1;
    }
    if(this.cxspeed<this.cp*-1){
      this.tr = 1;
    }
  }
  display(){
    fill(this.r,this.g,this.b);
    rect(this.cx,this.cy,this.cwidth,this.cheight);
  }
}