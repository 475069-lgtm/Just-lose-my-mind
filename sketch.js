let myFont;
let gap = 5;
let modules = []  //199
let car = {x:0,y:0};
let dr = 0;

async function setup() {
  
  myFont = await loadFont ('https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap');
  
  createCanvas(400, 400);
  background(255);
  
  textFont(myFont);
  textSize(130);
  textAlign(CENTER,CENTER);
  text("Just lose \n my mind", width/2, height/2);
  
  let colors = [color ("cyan"), color("magenta"), color("yellow")];
  
  //세로방향으로 가로줄을 일정 간격으로 훑는 반복문
  for (let y = 0; y<height; y = y+gap) {
  //가로줄을 일정 간격으로 훑는 반복문
   for (let x=0; x<width; x = x+gap) {
     let c = get (x, y);
     
     //brightness(색깔값) 0~100
     let b = brightness(c);

     if (b==0){
       rect(x, y, 3,3);
       modules.push( {
         x:x,
         y:y,
         originX : x,
         originY : y,
         moveX : x+random(-40,40),
         moveY : y+random(-40,40),
         color:"black"
         // color:color("black"),
         // colorOrigin : color("black"),
         // colorChange: random(colors)
       } );
     }
   }
  }
  // //console에 데이터를 출력하는 메소드(함수)
  // console.log(modules);
  console.log(modules.length);
}

function draw(){
  background(220);
  for(let i = 0; i < modules.length; i = i+1){
    let m = modules[i];
    
    drawModule(m);
  }
  
  drive();
  
  dr = dist(pmouseX, mouseX, 1, 45);
}

function drawModule(m){
  
    let d = dist(m.originX,m.originY, mouseX, mouseY);
  
  //거리 변화
  if (d<30){
    m.x = lerp(m.x, m.moveX,0.1);
    m.y = lerp(m.y, m.moveY,0.1);
    m.color = "white"
  }else{
    m.x = lerp(m.x, m.originX,0.1);
    m.y = lerp(m.y, m.originY,0.1);
    m.color = "black"
  }
  
  //크기 변화
//     d= map (d, 100, 0, 0, 20);
//     d = constrain (d, 5, 20);
  
  //색상 변화

    //if(d<50){
      //목표 색상으로 현재 색상을 전환함.
//       m.color = lerpColor(m.color,m.colorChange, 0.5);
//     }else{
//       m.color = lerpColor(m.color,m.colorOrigin, 0.5);
//     }
  
  
  fill(m.color);
  rectMode(CENTER);
  rect(m.x, m.y,gap,gap);
}

function drive(){
  noStroke();

  push();
  //rotate(dr);
  car.x =lerp(car.x,mouseX,0.05);
  car.y =lerp(car.y,mouseY,0.05);
  
  fill("black")
  rect(car.x+5, car.y-12, 3, 6);
  rect(car.x-5 , car.y-12, 3, 6);
  rect(car.x+5, car.y-2, 3, 6);
  rect(car.x-5 , car.y-2, 3, 6);
  
  stroke("red")
  strokeWeight(10);
  line(car.x, car.y-15, car.x, car.y);
  
  noStroke();
  fill("skyblue");
  rect(car.x, car.y-4, 8, 4);
  pop;
  
  
}