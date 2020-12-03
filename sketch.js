const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var world,engine
var ground;
var divisions=[];
var plinkos=[];
var particles=[];
var divisionHeight=300;



function setup() {
  createCanvas(480,800);
 engine=Engine.create();
 world=engine.world;
 ground = new Ground(width/2,height,width,20);



 for(var k=0;k <= width;k=k+80){
 divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
      }


for(var j=30; j < width ; j=j+50){
  plinkos.push(new Plinko(j,75));
  plinkos.push(new Plinko(15+j,150));
  plinkos.push(new Plinko(j,225));
  plinkos.push(new Plinko(j+15,300));
}


}

function draw() {
  Engine.update(engine)
  
  background("black");  
  ground.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
   }
 
  for (var k = 0; k < plinkos.length; k++) { 
    plinkos[k].display();
   }

   
if(frameCount%60===0){
  particles.push(new Particle(random(10,width),0))
  }

   for (var k = 0; k < particles.length; k++) { 
    particles[k].display();
   }
}