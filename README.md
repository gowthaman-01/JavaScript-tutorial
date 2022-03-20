# JavaScript Tutorial

/_
This is a multiline comment
_/

## Importing

const { re, mode } = require('mathjs');

const Math = require('mathjs');

let floorDivide = Math.floor(5 / 2); // 2

let random = Math.random() // Random decimal number from 0 to 1

random = Math.randomInt(0, 100) // Random int from 0 to 100

random = Math.floor(Math.random() \* 10) // Random whole number from 1 to 10

## Backticks

number = 5;

toPrint = `This is my number: ${number}`;

## Booleans

true

false

## String methods

str = 'Hello';

strLen = str.length;

## Parse string to int

parseInt("65"); // 65

parseInt("10011", 2); // 19 (binary)

## Array Methods

myArray = [1, 2, 3, 4, 5];

myArray.push(6); // [1, 2, 3, 4, 5 , 6]

let popback = myArray.pop(); // [1, 2, 3, 4, 5]

let shiftfront = myArray.shift(); // [2, 3, 4, 5]

myArray.unshift(1); // [1, 2, 3, 4, 5]

myArray.unshift(0); // [0, 1, 2, 3, 4, 5]

## Functions

function addSub(addition, number1, number2) {

if (addition) {

return number1 + number2;

}

else {

return number1 - number2;

}

}

let result = addSub(true, 1, 2) // 3

## Switch statments

`
switch (key) {

case value:

        break;

    default:

        break;

}
`

## Objects

let Person = {

name: "Gowthaman",

"age now": 22,

};

let ageNow = Person["age now"];

let myName = Person.name;

b = Person.hasOwnProperty("name"); // true

Person.isMale = true;

delete Person.isMale;

## Do while loops

do {

} while (condition);

// Try catch blocks

try {

} catch (error) {

}

## Object freezing

## Arrow functions

const mult = (num1, num2) => num1 \* num2;

const printHelloWorld = () => console.log("Hello World");

## Map and Filter using Arrow functions

toBeSquared = [1, 2, 3, 4, 5];

const square = (toBeSquared) =>{ // Function to square even numbers

const squared = toBeSquared.filter(num => num % 2 == 0).map(num => num \* num)

return squared

}

## Default parameters

const multdiv = (num1, num2, multiply=true) => {

return multiply ? num1 \* num2 : num1 / num2

};

## Spread operator

let arr1 = [1, 2, 3];

let arr2 = [...arr1];

## Rest operator

## Destructuring

Coordinate = {

X: 1,

Y: 2,

};

const {X: x, Y: y} = Coordinate // x = 1, y = 2

const arr3 = [1, 2, 3, 4, 5]

const [i, , j, , k] = arr3 // i = 1, j = 3, k = 5

const [, , ...arr4] = arr3 // [3, 4, 5]

const stats = {

max: 4,

min: 1,

median: 2,

mode: 3,

ave : 2

}

const half = ({max, min}) => (max + min) / 2 // 2.5

## Template literals

const createPerson = (age, gender) => ({age, gender}) // { age: 22, gender: 'Male' }

## Classes

class Student {

constructor(name, age, gender){

this.name = name;

this.age = age;

this.gender = gender;

}

}

let Gowthaman = new Student("Gowthaman", 22, "Male")

## Array methods

## forEach()

## map()

## filter()

## reduce()

## some

## every

## find

## findIndex
