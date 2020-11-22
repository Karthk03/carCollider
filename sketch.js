var wall,car,speed,mass,deformation;
// var ent;
// var imp1,imp2;

function setup() 
{
  createCanvas(800,400);

  // let button = createButton('Enter');
  // button.position(600, 350);
  // button.mousePressed(enter);

  // inp1 = createInput('');
  // inp1.position(20,350);
  // if(ent == true)
  // {
  //   inp1.input(myInputEvent1);

  //   car = createSprite(100,200,50,20);
  //   car.shapeColor = "blue"
  //   wall= createSprite(700,200,75,100);
  //   wall.shapeColor = "red"
  // }

  // inp2 = createInput('');
  // inp2.position(200,350);
  // if(ent == true)
  // {
  //   inp2.input(myInputEvent2);
  // }

  speed = random(55,90);
  mass = random(400,1500);

  car = createSprite(100,200,50,20);
  car.shapeColor = "blue"
  wall= createSprite(700,200,75,100);
  wall.shapeColor = "red"

  car.velocityX= speed;
}
  
function draw() 
{
  background(255,255,255);  

  if(wall != null && car!=null)
  {
    if(wall.x-car.x<=wall.width/2+car.width/2 &&
    car.x-wall.x<=wall.width/2+car.width/2 &&
    wall.y-car.y<=wall.height/2+car.height/2 &&
    car.y-wall.y<=wall.height/2+car.height/2)
    {
      car.velocityX = 0;
        
      deformation = (0.5*mass*speed*speed)/22500
      if(deformation>180)
      {
        text(deformation + " Not Safe",400,50);
      }
      else if(deformation<180 && deformation>80)
      {
        text(deformation + " Avrage",400,50);
      }
      else if(deformation<80)
      {
        text(deformation + " Good!",400,50);
      }
    }
  }

  drawSprites();
}

function myInputEvent1() 
{
  speed = this.value();
  if(car!=null)
  {
    car.velocityX= speed;
  }
}

function myInputEvent2()
{
  mass = this.value();
}

function enter()
{
  ent = true;
}