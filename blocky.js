function setup() {
  createCanvas(1920,1080);
  noStroke();
  textAlign(CENTER);
  rectMode(CENTER)

}

let mrrandom = 0;

function draw() {
  background(30);
  var size = 30;
  var rows = width/size;
  var columns = height/size;
  var colters;
  let buttonx = [0,width/2];
  let buttony = [0,height/2+200];
  let buttonsize = [0,60];
  if(mouseX>buttonx[1]-buttonsize[1] && mouseX<buttonx[1]+buttonsize[1] && mouseY>buttony[1]-buttonsize[1]/2 && mouseY<buttony[1]+buttonsize[1]/2){
    colters = 90;
    window.open('/home/money_many/src/LightSandwitch Co./Html/COTD.html');
  }
  else{
    colters = 30;
  }

  for(r=0;r<rows;r++){
    for(c=0; c<columns;c++){
      var red = random(255);
      var green = random(255);
      var blue = random(255);
      
      mrrandom+=random(10);

      if(mrrandom>100){
        fill(red,green,blue);
        mrrandom = 0;
      }
      rect(r*size,c*size,size,size);
    }
  }
  textSize(100);
  textFont('silkscreen');
  fill(0);
  text("Blocky",width/2,height/2);
  button(buttonx[1],buttony[1],buttonsize[1],"Start",colters);
}

function button(buttonx,buttony,buttonsize,buttontext,colosr){
  fill(60);
  rect(buttonx,buttony,buttonsize*2,buttonsize); 
  fill(colosr);
  textSize(buttonsize/2);
  text(buttontext,buttonx,buttony);
}


