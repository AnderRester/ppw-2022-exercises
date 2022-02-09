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

const chooseTask = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

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

const a = 5;
const b = 8;
const c = 2;

alert(((a > b) && (b > c)) ? "Макс - a, Мин - c" : ((a > c) && (c > b)) ? "Макс - a, Мин - b" : ((b > a) && (a > c)) ? "Макс - b, Мин - c" : ((b > c) && (c > a)) ? "Макс - b, Мин - a" : ((c > a) && (a > b)) ? "Макс - c, Мин - b" : ((c > b) && (b > a)) ? "Макс - c, Мин - a" : 1);

//alert("Мин - " + Math.min(a, b, c) + " Макс - " + Math.max(a, b, c));

const nickname = prompt("Введите имя", "Некто");

const ucFirst = (nickname) => {
    let word = "";
    for (let i = 1; i <= nickname.length; i++) {
        word += nickname.charAt(i);
    }
    return (nickname.charAt(0).toUpperCase() + word);

}
alert(ucFirst(nickname));

const CurrencyValue = prompt("Введите тип валюты и размер транзакции", "$5");

const extractCurrencyValue = (CurrencyValue) => {
    let num = "";
    for (let i = 1; i <= CurrencyValue.length; i++) {
        num += CurrencyValue.charAt(i);
    }
    return (num);
}
alert(extractCurrencyValue(CurrencyValue));

const a = Number(prompt("Введите число в диапазоне от -1 до 1, включая 0", 0));

if (a < 0) {
    alert("Меньше нуля");
} else {
    if (a > 0) {
        alert("Больше нуля");
    } else {
        alert("Равно нулю");
    }
}


const min = 14;
const max = 90;

const age = Number(prompt(`Введите возраст в диапазоне от ${min} до ${max}`, 14));

const check = () => {
    let option = document.getElementById("variant").value;
    switch (Number(option)) {
        case 1:
            if (!(age < 14) && !(age > 90)) {
                alert("Число принадлежит интервалу");
            } else {
                alert("Число не принадлежит интервалу");
            }
            break;
        case 2:
            if (age >= 14 && age <= 90) {
                alert("Число принадлежит интервалу");
            } else {
                alert("Число не принадлежит интервалу");
            }
            break;
    }
}

// //C оператором НЕ

// if (!(age <= 14) && !(age >= 90)) {
//     alert("Число принадлежит интервалу");
// } else {
//     alert("Число не принадлежит интервалу");
// }

// //Без оператора НЕ

// if (age >= 14 && age <= 90) {
//     alert("Число принадлежит интервалу");
// } else {
//     alert("Число не принадлежит интервалу");
// }

const user = {
    name: "John",
    pass: "ads2123"
}

const username = prompt("Введите имя пользователя", "User");
const password = prompt("Введите пароль", "password");

if (user.name == username && user.pass == password) {
    alert("Привет");
} else {
    if (user.name == username && user.pass != password) {
        alert("Неправильный пароль");
    } else {
        if (user.name != username && user.pass == password) {
            alert("Неправильный username");
        } else {
            alert("Ошибка Валидации");
        }
    }
}

const username = prompt("Введите имя пользователя", "User");

alert(`Привет ${username}`);

const result = confirm("Вы знакомы с JavaScript");
if (result == true) {
    alert("Молодец");
} else {
    alert("Можно начать изучение прямо сейчас");
}

const num = Number(prompt("Введите число"));

function dividers(num) {
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            console.log(i);
        }
    }
}
dividers(num) + console.log(num);