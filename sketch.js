

let playerX = 200;
let playerY = 200;

let targetX = 200;
let targetY = 200;

let enemyX = 300;
let enemyY = 200;

let playerRadius = 12.5
let targetSpeed = 1;
let score = 0;



function setup() {
  createCanvas(400, 400);
  drawBackground('😈')
}

function draw() {  
  
  if(playerY + playerRadius >= targetY && 
     playerY - playerRadius <= targetY){
    score = score + 1;
    targetSpeed = score;
    console.log('your score is', score);
    
    if(playerX + playerRadius >= targetX && 
       playerX - playerRadius <= targetX) {
      
      targetX = Math.random() * width;
      targetY = Math.random() * height;
          
    } 
      
  }
    
  noStroke();
  fill('yellow')
  text('👹', targetX,targetY)
  text('👽', playerX, playerY);
  text('💀', enemyX, enemyY);
  
  targetX = targetX + getMovementAmount();
  targetY = targetY + getMovementAmount();
  
  enemyX = enemyX + getMovementAmount();
  enemyY = enemyY + getMovementAmount();
  
  
  fill('yellow');
  circle(targetX,targetY,10);
 
  let randomNumber = Math.random();
  
  if(randomNumber > 0.5) {
    
    targetX = targetX + Math.random() * 10;
  } else {
    
    targetX = targetX - Math.random() * 10;
  }
  
  randomNumber = Math.random();
  
  if(randomNumber > 0.5) {
    // move down
    targetY = targetY + Math.random() * 10;
  } else {
    // move up
    targetY = targetY - Math.random() * 10;
  }
  
  
  
  
  //targetX = targetX + Math.random() * 
  //-(targetSpeed * 2) + targetSpeed;
  //targetY = targetY + Math.random() * 
  //-(targetSpeed * 2) + targetSpeed;

  
  if(keyIsDown(LEFT_ARROW) == true) {
   playerX = playerX - 5;
  }
  
  if(keyIsDown(RIGHT_ARROW) == true) {
   playerX = playerX + 5;
  }
  
  if(keyIsDown(UP_ARROW) == true) {
   playerY = playerY - 5;
  }
  
  if(keyIsDown(DOWN_ARROW) == true) {
   playerY = playerY + 5;
    console.log('quandale dingle')
  }
  

  
  function mouseClicked() {
  drawBackground('😈');
}

    
}


   
function drawBackground(backgroundText){
  background('white');
     for(let count = 0; count < 100; count = count + 1) {
    text(backgroundText, Math.random() * width, Math.random() * height);
  }   
}

function getMovementAmount() {
  let randomNumber = Math.random();
  
  if(randomNumber > 0.5) {

  return Math.random() * targetSpeed;
       } else {
         return Math.random() * targetSpeed * -1;
       
    
    //text(backgroundText, Math.random() * width, Math.ramdon() * height);
  }
}

