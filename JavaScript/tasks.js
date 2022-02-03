// First task
console.log("Hello, world!");

// Third task
'use strict';

// Fourth task
let userName = "Student";
console.log(userName);
// You should never proceed like this!
const adminName = "Admin";
console.log(adminName);

// Fifth task
let whaaaat;
let truth = true;
let number = 15;
let line = "something";
let objectExample = {};

console.log(whaaaat);
console.log(truth);
console.log(number);
console.log(line);
console.log(objectExample);

// Sixth task

//Small easter egg a saw films
alert("I wanna play a game...");
let answer = prompt("Unfortunately you have only 2 hours to death ", "Nooooo!");
answer == "Nooooo!" ? alert("If you don't locate the key in time, the mask will close") : alert("So listen carefully...");
confirm("Well, you'll die anyway...");

// Seventh task
console.log(typeof whaaaat);
console.log(typeof truth);
console.log(typeof number);
console.log(typeof line);
console.log(typeof objectExample);

// The end of theoretical part

let enteredNumber = +prompt("Enter a digit | Введите цифру", 0);
switch (enteredNumber) {
    case 0:
        alert("Zero | Ноль");
        break;
    case 1:
        alert("One | Один");
        break;
    case 2:
        alert("Two | Два");
        break;
    case 3:
        alert("Three | Три");
        break;
    case 4:
        alert("Four | Четыре");
        break;
    case 5:
        alert("Five | Пять");
        break;
    case 6:
        alert("Six | Шесть");
        break;
    case 7:
        alert("Seven | Семь");
        break;
    case 8:
        alert("Eight | Восемь");
        break;
    case 9:
        alert("Nine | Девять");
        break;
    default:
        alert("Out of barrier | Выход за границы условия");
        break;
}