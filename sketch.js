var cat;
var mouse;
var mouseImage,catImage,backgroundImage
function preload() {
    //load the images here
    backgroundImage=loadImage("garden.png");
    mouseanimation=loadAnimation("mouse1.png","mouse2.png","mouse3.png","mouse4.png");
     catanimation=loadAniamtion("cat1.png","cat2.png","cat3.png","cat4.png");
}

function setup(){
    createCanvas(1200,800);
    //create tom and jerry sprites here
mouse=createSprite(0,0,0,0);
mouse.addAnimation("mouse",mouseanimation);

cat=createSprite(200,400,80,50);
cat.addAnimation("cat",catanimation);
}

function draw() {

    background(0,0,0);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      cat.velocityX=-5;
      cat.addAnimation("catRunning",catImage);
      cat.changeAnimation("catRunning");

     text(mouseX + ',' + mouseY,10,45);
  }


}
