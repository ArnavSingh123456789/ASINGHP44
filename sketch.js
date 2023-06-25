var elonmusk, elonmuskImg;
var twitter, twitterImg;
var tesla, telsaImg;
var road, roadImg;
var gameover, gameoverImg;
var tesla, teslaImg;
var gameState = "play";
var score = 0;

function preload() {
  elonmuskImg = loadImage("ElonMuskForGame.png");
  twitterImg = loadImage("TwitterImageForGame.png");
  roadImg = loadImage("RoadImageForGame.webp");
  teslaImg = loadImage("TeslaLogoForGame.png");
  gameoverImg = loadImage("GameOverImageForGame.png");
}

function setup() {
  createCanvas(600, 600);
  textSize(20);
  fill("red");
  text("Score",300,300);
  //set up the sprites
  road = createSprite(300, 300);
  road.addImage("road", roadImg);
  road.velocityY = -4;
  road.scale = 3;

  elonmusk = createSprite(300, 300);
  elonmusk.addImage(elonmuskImg);
  elonmusk.scale = 0.2;

  spawnTwitter();
  spawnTesla();
}
function draw() {
  background(200);

  if (road.y < 195) {
    road.y = 300;
  }

  if (keyDown("right_arrow")) {
    elonmusk.x = elonmusk.x + 5;
  }

  if (keyDown("left_arrow")) {
    elonmusk.x = elonmusk.x - 5;
  }

  if (keyDown("up_arrow")) {
    elonmusk.y = elonmusk.y - 5;
  }

  if (keyDown("down_arrow")) {
    elonmusk.y = elonmusk.y + 5;
  }

  if (elonmusk.isTouching(twitter)) {
    twitter.destroy();
    score += 5
    spawnTwitter();
  }

  if(elonmusk.isTouching(tesla)){
    tesla.destroy();
    score += 5;
    spawnTesla();
  }

  if (twitter.y> 600) {
    twitter.destroy();
    elonmusk.destroy();
    tesla.destroy();
    road.velocityY = 0;
    }

    if(tesla.y > 600){
      tesla.destroy();
      twitter.destroy()
      elonmusk.destroy();
      road.velocityY = 0;
    }

  drawSprites();
}

function spawnTwitter() {
  twitter = createSprite(20, 20);
  twitter.addImage(twitterImg);
  twitter.y = Math.round(random(0, 300));
  twitter.x = Math.round(random(0, 600));
  twitter.scale = 0.1;
  twitter.velocityY = 2;
}

function spawnTesla() {
  tesla = createSprite(20, 20);
  tesla.addImage(teslaImg);
  tesla.y = Math.round(random(0, 300));
  tesla.x = Math.round(random(0, 600));
  tesla.scale = 0.2;
  tesla.velocityY = 2;
}
