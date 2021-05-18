var bullet ,wall , thickness ;
var speed , weight ;

function preload(){

}

function setup() {
  createCanvas(1600,400);

  thickness= random(22,83);

  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = "white";

  wall = createSprite(1350 , 200 , thickness , 100);

  speed = random(223 , 321);
  weight = random(30 , 52);

  bullet.velocityX = speed;

}

function draw() {
  background("black");  

  console.log(speed);

if(keyWentDown("space")){
  bullet.velocityX = speed ;
}
//bullet.x = mouseX ;

bullet.debug = false ;

if(wall.x - bullet.x < wall.width/2 + bullet.width / 2){
    bullet.velocityX = 0 ;
    var deformation = 0.5 * weight * speed * speed/22509;
    
    if(deformation>180){
        bullet.shapeColor = "white";
    }
    
    if(deformation<180 && deformation > 80){
      bullet.shapeColor = "red";
    }
    
    if(deformation<80){
      bullet.shapeColor = "green";
    }
}

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10){
    wall.shapeColor = "red";
  }
  if(damage<10){
    wall.shapeColor = "green";
  }
}

  drawSprites();
}

function hascollided(lbullet,lwall){
  bulletRightEdge=lbullet.X + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}