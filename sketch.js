

//this is me!
var moving_sprite, fixed_sprite;

function setup() {
  createCanvas(800,400);
 fixed_sprite = createSprite(400, 200, 50, 50);
 moving_sprite = createSprite(500,300,30,70);
}

function draw() {
  background(255,255,255);  

  moving_sprite.x = mouseX;
  moving_sprite.y = mouseY;
  //if the difference bet the x positions is <= sum of half widths - 40
  
  if(fixed_sprite.x - moving_sprite.x <= fixed_sprite.width/2 + moving_sprite.width/2 
     && moving_sprite.x - fixed_sprite.x <= fixed_sprite.width/2 + moving_sprite.width/2
     &&fixed_sprite.y - moving_sprite.y <= fixed_sprite.height/2 + moving_sprite.height/2 
     && moving_sprite.y - fixed_sprite.y <= fixed_sprite.height/2 + moving_sprite.height/2){
    fixed_sprite.shapeColor = "Green";
    moving_sprite.shapeColor = "Orange";
  }
  else{
    fixed_sprite.shapeColor = "Grey";
    moving_sprite.shapeColor = "Grey";
  }
  
  drawSprites();
}