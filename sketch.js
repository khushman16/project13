var garden;gardenImg;
var rabbit,rabbitImg;
var apple,appleImg;
var orangeL,orangeImg;
var redL,redImg;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   redL.depth=apple.depth;
redL.depth=orangeL.depth;
redL.depth=apple.depth+1;
// var select_sprites = Math(random(1,3));

// var select_sprites = Math.random(random(1,3));

// var select_sprites = Math.round(1,3);

// var select_sprites = Math.round(random(1,3));

  
  // if (frameCount % 50 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if (frameCount % 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }
  // }

  // if (frameCount / 80 == 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  // if'(framecountframeCount % 80 = 0) {
  //   if (select_sprites == 1) {
  //     createApples();
  //   } else if (select_sprites == 2) {
  //     createOrange();
  //   }else {
  //     createRed();
  //   }
  // }

  






}



function createApples() {
  if(framecount%80==0){
  
  apple = createSprite(40,100, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY =-3;
apple.lifetime = 150;
 apple.y=Math.round(random(1,3));
apple.depth=orangeL.depth;
apple.depth=redL.depth;
apple.depth=apple.depth+1;
}  
}

function createOrange() {
  if(framecount%80==0){ 
orangeL = createSprite(80,100 ,10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY =-3;
orangeL.lifetime = 150
orangeL.y=Math.round(randaom(1,3))

}
}
function createRed() {
  if(framecount%80==0){
redL = createSprite(160,120, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = -3;
  redL.lifetime = 150;
  redL.y=Math.round(random(1,3))
  
}
}