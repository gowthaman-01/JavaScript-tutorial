# JavaScript Tutorial

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

## Arrow functions

const mult = (num1, num2) => num1 \* num2;

const printHelloWorld = () => console.log("Hello World");

## Map and Filter using Arrow functions

## Default parameters

## Spread operator

## Template literals

## Classes

## Array methods

## forEach()

## map()

## filter()

## reduce()

## some

## every

## find

## findIndex
