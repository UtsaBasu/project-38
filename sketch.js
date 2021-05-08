var back;
var bg;


function preload() {
   backimg = loadImage("sprites/Road.png");
   dmdimg = loadImage("sprites/coin.png");
   grimg= loadAnimation("sprites/gran2.png","sprites/gran3.png","sprites/gran4.png")
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
  bg=createSprite(width/2,height/2);
  bg.addImage(backimg);
  bg.scale=0.4;

  gr = createSprite(100,height/2);
  gr.addAnimation("run",grimg);

  dmdgrp=new Group();
  
 
  bg.velocityX=-1;
 

  
}

function draw(){
   // background(76,77,79)
   background("white")
   if(bg.x<0){
       bg.x=width/2
   }

   diamond();

    //strokeWeight(4);

    
   
    drawSprites();
}

function diamond(){
    if(frameCount%30===0){
        dmd=createSprite(600,Math.round(random(150,width-150)));
        dmd.addImage(dmdimg);
        dmd.scale=0.1;
        dmd.velocityX=-1;
        dmdgrp.add(dmd);
        dmd.lifetime=1000
    if(gr.isTouching(dmd)){
        dmd.destroy();
    }
    }
}



/*async function time(){
var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responsejson = await response.json();
console.log(responsejson);
var datim = responsejson.datetime;
console.log(datim);
var hour = datim.slice(11,13);

if(hour<=19&&hour>=06){
  var bg="sprites/bg.png";
  console.log("hi");
}
else{
    bg="sprites/bg2.jpg";
    console.log("bye");
}

backgroundImg=loadImage(bg);
}*/
