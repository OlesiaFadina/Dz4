import { greet } from "./module/greet.js";
import { celsiusToFahrenheit } from "./module/celsius.js";
import { calculateFallDistance } from "./module/distance.js";
import { calculateAverage } from "./module/average.js";
import { concatStrings } from "./module/strings.js";

let myName = 'Олеся';
greet(myName);
// console.log(myName)

let n = prompt('Введите температуру в градусах Цельсия');
celsiusToFahrenheit(n);

let t = prompt('Введите время падения обьекта в секундах');
let g = 9.8;
let d = (1/2) * g * t^2;
calculateFallDistance(t, g, d);

let a = +prompt('Введите число №1');
let b = +prompt('Введите число №2');
let c = +prompt('Введите число №3');
calculateAverage(a, b, c);

let wordOne = prompt('Введите первое слово');
let wordTwo = prompt('Введите второе слово');
concatStrings(wordOne, wordTwo);

// let myName = 'Олеся';

// function greet(){
// alert(`Привет ${myName}!`);
// }
// greet();


// function celsiusToFahrenheit() {
//     let n = prompt('Введите температуру в градусах Цельсия');
//     alert(`По Фаренгейту t = ${(n * 9 / 5) + 32} F`);
// }
// celsiusToFahrenheit();


// function calculateFallDistance() {
//     let t = prompt('Введите время падения обьекта в секундах');
//     let g = 9.8;
//     let d = (1/2) * g * t^2;
//     alert( `${d} м расстояние, которое объект пролетел за ${t} секунд свободного падения, со скоростью ${g} м/с` );
//     }
// calculateFallDistance();



// function calculateAverage() {
//     let a = +prompt('Введите число №1');
//     let b = +prompt('Введите число №2');
//     let c = +prompt('Введите число №3');
//     let result = (a + b + c) / 3;
//     alert(`Среднее значение = ${result}`);
//     }
// calculateAverage();


// function concatStrings() {
//     let wordOne = prompt('Введите первое слово');
//     let wordTwo = prompt('Введите второе слово');
//     alert( ` ${wordOne} ${wordTwo}` );
// }
// concatStrings();
