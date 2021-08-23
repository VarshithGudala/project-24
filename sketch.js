const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;

var player, playerArcher, playerBase;
var computer, computerArcher, computerBase;

var arrow;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    200,
    150
  );

  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  computer = new Computer(685, computerBase.body.position.y - 153, 50, 180);

  
  playerArcher=new PlayerArcher(
  320,
  playerBase.body.position.y - 180,
  50,
  100
  );
 
  computerArcher = new ComputerArcher(
    640,
    computerBase.body.position.y - 180,
    50,
    100
  );


  arrow = new PlayerArrow(
   420,
    computerBase.body.position.y - 180,
    80,
    10
  );

  
  
  //Create an arrow Object

}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display();



  //Display arrow();
  arrow.display();
  


  if (keyIsDown(UP_ARROW) && computer.body.angle < 1.77){
    angleValue = 0.1;
  }else{
    angleValue = -0.1;
  }  
    
  if(keyIsDown(DOWN_ARROW) && computer.body.angle > 1.47){
    angleValue = -0.1;
  }else{
    angleValue = 0.1;
  }
  
  //if Space (32) key is pressed call shoot function of playerArrow
  if(keyCode === 32){
    //Call shoot() function and pass angle of playerArcher
    arrow.shoot(playerArcher.body.angle);
  }

  /*function shoot(archerAngle) {
    var velocity = p5.Vector.fromAngle(archerAngle);
    velocity.mult(20);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.SetVolocity(this.body, {x: velocity.x, y: velocity.y})
  }*/

}



