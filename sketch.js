var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var bomb, coin,coin2, energyDrink, power;
var bombImg, coinImg, energyDrinkImg, powerImg;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  bombImg = loadImage("bomb.png");
  coinImg = loadImage("coin.png");
  energyDrinkImg = loadImage("energyDrink.png");
  powerImg = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  // Moving background
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  // Coins
  coin=createSprite(random(50,350),random(0,215));
  coin.addImage(coinImg);
  coin.velocityY = 4;
  coin.scale=0.5;

  // Coins
  coin2=createSprite(random(50,350),random(0,215));
  coin2.addImage(coinImg);
  coin2.velocityY = 4;
  coin2.scale=0.5;

  //Bomb
  bomb=createSprite(random(50,350),random(0,215));
  bomb.addImage(bombImg);
  bomb.velocityY = 4;
  bomb.scale=0.1;

  //EnergyDrink
  energyDrink=createSprite(random(50,350),random(0,215));
  energyDrink.addImage(energyDrinkImg);
  energyDrink.velocityY = 4;
  energyDrink.scale=0.1;

  //creating boy running
  boy = createSprite(180,340,30,30);
  boy.scale=0.08;
  boy.addAnimation("JakeRunning",boyImg);
    

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;


  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
    path.y = height/2;
  }

  //Code to reset the coin's position
  if(coin.y>400){
    coin.y=0;
    coin.x=random(50,350)
  }

  if(coin2.y>400){
    coin2.y=0;
    coin2.x=random(50,350)
  }

  //Bomb
  if(bomb.y>400){
    bomb.y=0;
    bomb.x=random(50,350)
  }


  if(energyDrink.y>400){
    energyDrink.y=0;
    energyDrink.x=random(50,350)
  }

    
  drawSprites();
}


