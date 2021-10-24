var background_img;
var backGround;
var back_ground;
var chappy;
var chappy_img;
var coin_img;
var coin;
var stone_img;
var score = 0;
var coinGroup;
var stoneGroup;

function preload(){
  background_img = loadImage("backgroundImg.jpg");
  back_ground = loadImage("backgroundImg (2).jpg");
  chappy_img = loadAnimation("robotImg1.png","robotImg2.png","robotImg3.png","robotImg4.png","robotImg5.png","robotImg6.png");
  coin_img = loadImage("coinImg.png");
  stone_img = loadImage("stoneImg.png");
}

function setup() {
  createCanvas(600,400);

  backGround = createSprite(400, 100, 1000, 20);
  backGround.addImage("ground", back_ground);
  backGround.x = 600;
  backGround.scale = 4;
  backGround.velocityX = -6;

  chappy = createSprite(65, 220, 50, 50);
  chappy.addAnimation("run",chappy_img);
  chappy.scale = 1.5;

  coinGroup = new Group();
  stoneGroup = new Group();
}

function draw() {

  //background(back_ground);

  //if(coinGroup.isTouching(chappy)){
    //score = score + 2;
  //}

  if(keyDown(UP_ARROW)){
    chappy.y = 150;
  }

  if(keyDown(DOWN_ARROW)){
    chappy.y = 220;
  }

  if(backGround.x < 0){
    backGround.x = backGround.width;
  }

  spawnCoins();
  spawnStone();

  drawSprites();

  textSize(20);
  fill("black")
  text("Score: "+ score, 500,50);

  textSize(10);
  fill("black");
  text("*Press up and down arrow key to jump*", 100, 50);

  if(coinGroup.isTouching(chappy)){
    textSize(20);
    fill("yellow");
    text("GOOD JOB", 100,100);
    score = score + 2
    coinGroup.destroyEach()
  }

}

function spawnCoins(){
  if(frameCount % 200 === 0){
    coin = createSprite(800, 230, 50, 50); 
    coin.addImage(coin_img);  
    coin.velocityX = -3;
    coin.scale = 0.1;
    coinGroup.add(coin);
  }
}

function spawnStone(){
  if(frameCount % 160 === 0){
    stone = createSprite(800, 275,50,50);
    stone.addImage(stone_img);
    stone.velocityX = -3;
    stone.scale = 0.1;
    stoneGroup.add(stone);
  }
}