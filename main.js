
gsap.set("body", {
  css:{
    display: "flex",
    justifyContent : "center"
  }
});

gsap.set(".buttons", {
  css:{
    marginTop: "20px"
  }
});

gsap.set(".container", {
  css:{
    height: "400px",
    width: "950px",
    position:"relative",
    overflow: "hidden",
    border : "5px solid black",
    borderRadius : "10px"
  }
});

// START POSITIONS
gsap.set("#camera", {
  css:{
    position: "absolute",
   x: "150%",
   y: "700%",
  }
});

gsap.set("#phone", {
  css:{
    position: "absolute",
   x: "100%",
   y: "66%",
   scale: .35
  }
});

gsap.set("#monitor", {
  css:{
   position: "absolute",
   x: "70%",
   y: "34%",
  }
});

gsap.set("#laptop", {
  css:{
   position: "absolute",
   x: "210%",
   y: "167%",
  }
});

gsap.set("#mouse", {
  css:{
   position: "absolute",
   x: "2650%",
   y: "2572%",
  }
});

gsap.set("#book", {
  css:{
   position: "absolute",
   x: "2200%",
   y: "2540%",  
   scale: 1.8
  }
});
gsap.set("#mug", {
  css:{
   position: "absolute",
   x: "1625%",
   y: "735%",  
  }
});

//====ATTEMPT 1
const camera = document.querySelector("#camera")
const phone = document.querySelector("#phone")
const monitor = document.querySelector("#monitor")
const laptop = document.querySelector("#laptop")
const mouse = document.querySelector("#mouse")
const book = document.querySelector("#book")
const mug = document.querySelector("#mug")

//====HELPER FUNCTIONS
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(8, 12);
const randomDuration = random(3, 6)

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}
function dirRandom (array){
  return array[Math.floor(Math.random() * array.length)];
}

// DIRECTION: Number
const arrayNum = [-1,1] 
const dirNum = arrayNum => arrayNum[Math.floor(Math.random() * arrayNum.length)]
const dirNums = [dirNum(arrayNum), dirNum(arrayNum), dirNum(arrayNum) ]

// BUTTON COMMAND
const levitateAll = () =>{
  levitate(camera, ...dirNums, 250 ,50,100,200)
  levitate(phone, ...dirNums, 250 ,50,100,200)
  levitate(monitor, ...dirNums, 250, 300, 50, 70)
  levitate(laptop, ...dirNums, 600, 650, 150, 200)
  levitate(phone, ...dirNums, 250 ,50,100,200)
  levitate(mouse, ...dirNums, 400 ,50,100,200)
  levitate(mug, ...dirNums, 400,200,250,400)
  levitate(book, ...dirNums, 300,600,300,400)  
}

// LEVITATE: PUTTING ALL TOGETHER
function levitate(item, dir1, dir2, dir3, xmin, xmax, ymin, ymax){
  sway(item, dir1);
  movelat(item, dir2, xmin, xmax);
  movelong(item, dir3, ymin, ymax);
}

// MOVEMENT FUNCTIONS
function sway(item, direction){
  gsap.to(item, randomDuration(), {
    rotation : randomAngle(direction),
    ease: Sine.easeInOut,
    onComplete: sway,
    onCompleteParams: [item, direction * -1]
  })
}
function movelat(item, direction, min, max) {
    gsap.to(item, randomDuration(), {
    x: Math.floor(Math.random() * (min - max + 1) + min),
    ease: Sine.easeInOut,
    onComplete: movelat,
    onCompleteParams: [item, direction * -1, min, max]
  });
}
function movelong( item, direction, min, max){
  gsap.to(item, randomTime(), {
    y: Math.floor(Math.random() * (min - max + 1) + min),
    ease: Sine.easeInOut,
    onComplete: movelong,
    onCompleteParams: [item, direction * -1, min, max]
  });
}


// EVENT LISTENER 
document.querySelector("#levitate").onclick = function(){
  levitateAll();
}