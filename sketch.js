
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground;
var Survival;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
monkey = createSprite(80,315,20,20);
monkey.addAnimation("running",monkey_running);
monkey.scale=0.1;

ground = createSprite(400,350,900,10);

  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
  
  ground.velocityX=-4;
 ground.x=ground.width/2;
  
  stroke("black");
  textSize(20);
  fill("black");
  Survival=Math.ceil(frameCount/frameRate());
  text("Survival Time: " + Survival,100,50);
  
  monkey.collide(ground);
  
  if(keyDown("space") && (monkey.y>313))
    {
      monkey.velocityY=-15;
    }
  
    monkey.velocityY = monkey.velocityY+0.8;
  

  if(frameCount%80===0)
    {
      banana = createSprite(350,Math.round(random(170,200)),20,20)
      banana.addImage(bananaImage);
      banana.scale=0.1;
      banana.velocityX=-4;
      banana.lifetime=100;
      foodGroup.add(banana);
      
      
    }
  
  if(frameCount%300===0)
    {
      obstacle = createSprite(350,310,20,20)
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.2;
      obstacle.velocityX=-6;
      obstacle.lifetime=100;
      obstacleGroup.add(obstacle);
      
      
    }
  
  drawSprites();
  
}






