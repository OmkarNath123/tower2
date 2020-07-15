const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var sling;
var score=0;
function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  var options={
    restitution:2
    
  }
  
 

 ground=new Ground(400,790,800,20)

//fill ("red")
base=new Ground(600,600,200,20)


block1=new Block(540,580,20,20)


block2=new Block(560,580,20,20)


block3=new Block(580,580,20,20)


block4=new Block(600,580,20,20)


block5=new Block(620,580,20,20)


block6=new Block(640,580,20,20)


block7=new Block(660,580,20,20)


block8=new Block(570,560,20,20)


block9=new Block(590,560,20,20)


block10=new Block(610,560,20,20)


block11=new Block(630,560,20,20)


block12=new Block(650,560,20,20)


block13=new Block(550,560,20,20)


block14=new Block(560,540,20,20)


block15=new Block(580,540,20,20)


block16=new Block(600,540,20,20)


block17=new Block(620,540,20,20)


block18=new Block(640,540,20,20)


block19=new Block(570,520,20,20)


block20=new Block(590,520,20,20)


block21=new Block(610,520,20,20)


block22=new Block(630,520,20,20)


block23=new Block(580,500,20,20)


block24=new Block(600,500,20,20)


block25=new Block(620,500,20,20)


block26=new Block(590,480,20,20)


block27=new Block(610,480,20,20)


block28=new Block(600,460,20,20)


block29=new Block(520,580,20,20)


block30=new Block(680,580,20,20)


block31=new Block(530,560,20,20)


block32=new Block(670,560,20,20)


block33=new Block(540,540,20,20)


block34=new Block(660,540,20,20)


block35=new Block(550,520,20,20)


block36=new Block(650,520,20,20)


block37=new Block(560,500,20,20)


block38=new Block(640,500,20,20)


block39=new Block(570,480,20,20)


block40=new Block(630,480,20,20)


block41=new Block(580,460,20,20)


block42=new Block(620,460,20,20)


block43=new Block(590,440,20,20)


block44=new Block(610,440,20,20)


block45=new Block(600,420,20,20)


ball= Bodies.circle(100,400,20,options);
World.add(world,ball);

sling = new Slingshot(ball,{x:100, y:400});
}

function draw() {
  Engine.update(engine);  
  background("yellow");
ellipseMode(RADIUS);
 fill("#af0f0fff");
 ellipse(ball.position.x,ball.position.y,20,20);
 ground.display();
 base.display();
 fill ("black")
 block1.display();
 block2.display();
 block3.display();
 block4.display();
 block5.display();
 block6.display();
block7.display();
fill ("red")
 block8.display();
 block9.display();
 block10.display();
 block11.display();
 block12.display();
 block13.display();
 fill ("orange")
 block14.display();
 block15.display();
 block19.display();
 block20.display();
 block16.display();
 fill ("yellow")
 block17.display();
 block18.display();
 block21.display();
 block22.display();
 fill ("green")
 block23.display();
 block24.display();
 block25.display();
 fill ("blue")
 block26.display();
 block27.display();
 fill ("indigo")
 block28.display();
 fill ("black")
 block29.display();
 block30.display();
 fill ("red")
 block31.display();
 block32.display();
 fill ("orange")
 block33.display();
 block34.display();
 fill ("yellow")
 block35.display();
 block36.display();
 fill ("green")
 block37.display();
 block38.display();
 fill ("blue")
 block39.display();
 block40.display();
 fill ("indigo")
 block41.display();
 block42.display();
 fill ("violet")
 block43.display();
 block44.display();
 fill ("white")
 block45.display();
 sling.display();
 fill ("red")
 text("score:"+score,700,40);
 block1.score();
 block2.score();
 block3.score();
 block4.score();
 block5.score();
 block6.score();
 block7.score();
 block8.score();
 block9.score();
 block10.score();
 block11.score();
 block12.score();
 block13.score();
 block14.score();
 block15.score();
 block16.score();
 block17.score();
 block18.score();
 block19.score();
 block20.score();
 block21.score();
 block22.score();
 block23.score();
 block24.score();
 block25.score();
 block26.score();
 block27.score();
 block28.score();
 block29.score();
 block30.score();
 block31.score();
 block32.score();
 block33.score();
 block34.score();
 block35.score();
 block36.score();
 block37.score();
 block38.score();
 block39.score();
 block40.score();
 block41.score();
 block42.score();
 block43.score();
 block44.score();
 block45.score();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
if(keyCode===32){  
sling.attach(this.ball);
}
}
async function GetTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson=await response.json();
 // console.log(responseJson);
  var DT=responseJson.datetime
 // console.log(DT) 
   var hour=DT.slice(11,13)
  // console.log(hour)
   if( hour>=07&&hour<=19){
     background="yellow"  
   }
   else{
    background="indigo"   
   }
   //backgroundImg=loadImage(bg)
   console.log(background)
}