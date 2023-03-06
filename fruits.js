const fruits = ["cherry", "crown", "strawberry"];
const fruitPoints = {
  cherry: 3,
  crown: 5,
  strawberry: 4,
};

let currentScore = 0;
let totalScore = 0;

const result = document.getElementById("result");
const spinButton = document.getElementById("spin");
const boxes = document.getElementsByClassName("fruit-box");
const scoreDisplay = document.getElementById("score");
const fruitPointsDisplay = document.getElementById("fruit-points");

spinButton.addEventListener("click", spinWheel);

function getRandomFruit() {
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function spinWheel() {
    let fruit1 = getRandomFruit();
    let fruit2 = getRandomFruit();
    let fruit3 = getRandomFruit();
  
    boxes[0].style.backgroundImage = `url(${fruit1}.png)`;
    boxes[1].style.backgroundImage = `url(${fruit2}.png)`;
    boxes[2].style.backgroundImage = `url(${fruit3}.png)`;
  
    let points = 0;
  
    if (fruit1 === fruit2 && fruit2 === fruit3) {
      points = fruitPoints[fruit1] * 3;
      points(points);
      fruitPoints(fruit1, points);
    } else if (fruit1 === fruit2 || fruit2 === fruit3 || fruit1 === fruit3) {
      points = fruitPoints[fruit1] + fruitPoints[fruit2] + fruitPoints[fruit3];
      points(points);
      fruitPoints(`${fruit1}, ${fruit2}, ${fruit3}`, points);
    } else {
      fruitPoints("No match!");
    }
  }
  
