var bg,bg_img;
var astronaut,astronaut_img;
var gameState="PLAY";
const accessCode1="Hi We are aliens from another planet are there any aliens in this planet."
function preload(){

  bg_img=loadImage("images/stars.gif")
  astronaut_img=loadAnimation("images/a1.png","images/a2.png","images/a3.png","images/a4.png","images/a5.png","images/a6.png")
  ufo_Image=loadImage("images/alienUfo.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bg_img)
  bg.scale=3.5;
  bg.velocityX=-4

  astronaut=createSprite(200, 400, 50, 50);
  astronaut.addAnimation("walking",astronaut_img)

  
}

function draw() {
  background("white");  
  drawSprites();
if(gameState==="PLAY"){
  if(bg.x<600){
    bg.x=670
  }

  if(frameCount===100){
    gameState="TASK 1"
    
  }
}



if(gameState==="TASK 1"){
  task1();
  if(accessCode1===actualCode){

  }
}

}

function task1(){
  gameState="PLAY"
  ufo=createSprite(windowWidth/2+140,windowHeight/2)
  ufo.addImage(ufo_Image)
  ufo.scale=1.5
  message1=createElement('h1');
  message1.position(180,10)
  message1.html("DECODE THE ALIEN'S MESSAGE: ")
  message1.style('background','white');
  message2=createElement('h1')
  message2.position(10,45)
  message2.html(".... .. / .-- . / .- .-. . / .- .-.. .. . -. ... / ..-. .-. --- -- / .- -. --- - .... . .-. / .--. .-.. .- -. . - / .- .-. . / - .... . .-. . / .- -. -.-- / .- .-.. .. . -. ... / .. -. / - .... .. ... / .--. .-.. .- -. . - .-.-.-")
  message2.style('color','red');
  input1 = createInput("Code1")
  input1.position(180,180);
  input1.style('background', 'white');  
  actualCode=input1.value()
  button1 = createButton('Check');
  button1.position(180,220);
  button1.style('background', 'lightgrey');
  button1.mousePressed(()=>{
    accessCode1=actualCode
    text("decoded!",180,220)
  })
  
  message3=createElement('h1');
  message3.position(180,windowHeight-100)
  message3.html("HINT: https://morsecode.world/international/translator.html USE THIS LINK TO DECODE")
  message3.style('background','white');
  
  
}