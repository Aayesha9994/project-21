var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
      block1 = createSprite(0,580,360,30)
      block1.shapeColor="blue"

      block2 = createSprite(295,580,360,30)
      block2.shapeColor="yellow"

      block3 = createSprite(515,580,360,30)
      block3.shapeColor="black"

      block4 = createSprite(740,580,360,30)
      block4.shapeColor="pink"

      ball = createSprite(random(50,750),100,40,40)
      ball.shapeColor="white"
      ball.velocityX=4;
      ball.velocityY=7;




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites()
    Edges=createEdgeSprites();
    ball.bounceOff(Edges)
    
 
if(block1.isTouching(ball)){
    ball.shapeColor="blue"
}

if(block2.isTouching(ball)){
    ball.shapeColor="yellow"
}



if(block3.isTouching(ball)){
    ball.shapeColor="black"
}


if(block4.isTouching(ball)){
    ball.shapeColor="pink"
}

ball.bounceOff(block1)
ball.bounceOff(block2)
ball.bounceOff(block3)
ball.bounceOff(block4)



    //add condition to check if box touching surface and make it box
}
