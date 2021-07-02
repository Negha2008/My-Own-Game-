var girl,girl_jumping ;
var tower , towerImage ;
var climberImage;

function preload(){
girljumping = loadAnimation("1.png","2.png", "3.png","4.png");
girlImage = loadImage("1.png");
towerImage = loadImage("tower.png");
climberImage = loadImage( "climber.png");
}

function setup(){
createCanvas (400, 400);
girl = createSprite(width/2,height-50,50,50);
//girl.addAnimation("jumping",girl_jumping)
girl.addImage(girlImage);
}

function draw(){
background(0);
tower.velocity.y = 0
if(tower>400 ){
    
}
drawSprites();
}