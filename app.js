//TASK 14
console.log("hello world!")
//TASK 14


//TASK 15
let myBoolean = true
let myNull = null
let myNumber = 2.5
let myString = "hello"

console.log(myBoolean)
console.log(myNull)
console.log(myNumber)
console.log(myString)
//TASK 15


//TASK 16
let isHungry = false
let isThirsty = true

const message = isHungry || isThirsty
    ? !isThirsty
        ? "Hungry but not thirsty"
        : !isHungry 
        ?"Not hungry, but thirsty"
        : "Hungry and thirsty"
    : "Neither hungry nor thirsty"
console.log(message)
//TASK 16

//TASK 17
let i = 0;
let x = "*"

while (i < 5){
    console.log(x)
    x += "*"
    i++
}

for (i=0, x="*"; i<5; i++){
    console.log(x)
    x += "*"
}
//TASK 17

//TASK 18 & 19
function square(number){
    return number * number
}

function calculateDistance(pointA, pointB){
    const deltaXSquared = square(pointB.x-pointA.x)
    const deltaYSquared = square(pointB.y-pointA.y)
    const distance = Math.sqrt(deltaXSquared + deltaYSquared)
    console.log(distance)
}

const pointA = {x: 1, y: 1}
const pointB = {x: -1, y: -1}

calculateDistance(pointA,pointB)
pointA.x = 10
calculateDistance(pointA,pointB)
pointA["x"] = 1
calculateDistance(pointA,pointB)
//TASK 18

//TASK 20
var myArray = []

for (i = 2; i <= 11; i++) {
    const numberAndSquare = {
        num: i,
        square: i * i,
    };
    myArray.push(numberAndSquare)
}
console.log(myArray);
//TASK 20

//TASK 21 (LAST PART 0)
const myImage1 = document.querySelector(".newBlock-A")
const myImage2 = document.querySelector(".newBlock-B")

function imageHigher(){
    myImage1.classList.toggle("blockDown")
    myImage2.classList.toggle("blockUp")
    myImage2.classList.toggle("blockDown")
}

//TASK 21 