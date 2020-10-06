
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var Ground;
var survivalTime=0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(200,350,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  Ground=createSprite(200,390,600,20);
  Ground.x = Ground.width /2;
  Ground.velocityX=-5
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
background("white");
    if (Ground.x < 100) {
    Ground.x = Ground.width / 2;
  }
  monkey.collide(Ground);
  monkey.velocityY = monkey.velocityY + 0.8
    if (keyDown("space") && monkey.y>=340) {
    monkey.velocityY = -10;
  }
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime, 100, 50);
  
  
  drawSprites();
  spawnBananas();
  spawnObstacles();
}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400,100,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(250,350))
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 200
    FoodGroup.add(banana);
    }
  
}
function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400,370,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.1;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200
    obstacleGroup.add(obstacle);
    }
  
}



