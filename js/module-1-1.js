//Variables
//ES5
// console.log(`myFirstVar`, myFirstVar); //undefined
// var myFirstVar


// ES6

// let mySecondVar
// console.log(`mySecondVar`, mySecondVar); //undefined

// mySecondVar = "var by let"
// console.log(`mySecondVar`, mySecondVar);

// const myThirdVar = `variable by const`
// console.log(`myThirdVar`, myThirdVar);
// myThirdVar = `dfdf`; //нельзя переписать имя переменной обявленной через конст

// Значения переменных
// Primitives & operator typeof
// console.log(undefined);
// console.log(typeof undefined);

// console.log(`Ryabovol`);
// console.log(typeof `Ryabovol`);

// console.log(100.12345);
// console.log(typeof 100.12345);

// console.log(true);
// console.log(typeof true);

// console.log(false);
// console.log(typeof false);

// console.log(null);
// console.log(typeof null);

//Сложные типы: обекты, массивы, функции
// string
// let value;
// console.log(value, typeof value);
// value = String(value);
// console.log(value, typeof value);

// value = 77;
// console.log(value, typeof value);
// value = String(value);
// console.log(value, typeof value);

// value = true;
// console.log(value, typeof value);
// value = String(value);
// console.log(value, typeof value);

// number
// alert("Hello");

// confirm("JJJ&");

// let topSpeed;
// topSpeed = 160;
// console.log(topSpeed, typeof topSpeed);

// const x = 10;
// const y = 5;

// Сложение
// console.log(x + y); // 15

// // Вычитание
// console.log(x - y); // 5

// // Умножение
// console.log(x * y); // 50

// // Деление
// console.log(x / y); // 2

// alert("Hello");
// let response = alert("Вам есть 18?");


// let response = prompt("Введите пожалйуста число");
// console.log(response);

//Операторы
// математические
// console.log(2 * 4);
// //сравнеия
// console.log(2 >= 4);
// //не строгое равенство
// console.log("2" == 2);
// // строгое равенство
// console.log("2" === 2);

//строки
// console.log(`Hello`);
// console.log("Hello");

// const name = 'Mango';
// console.log('My name is: ', name);

// alert('Welcome!');

// const isComing = confirm('PPP');
// console.log(isComing);

// alert('Attension!')

// const hotelName = prompt('Please enter desired hotel name:');
// console.log(hotelName);
// const value = Number("xbckj");
// console.log(Number.isNaN(value));
// // console.log(typeof Number(value));
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 === 0.3);
// console.log(Math.floor(1.1));
// console.log(Math.ceil(1.1));
// console.log(Math.round(1.5));
// let age = prompt('Your age');
// console.log(age, typeof age);
// const message = 'Welcome to Hell!';
// console.log(message.toLowerCase());
// console.log(message.toUpperCase());
// console.log(message.indexOf('hell'));
// console.log(message.includes('Hell'));
// // console.log('There is nothing impossible to him who will try'.length);

// const num = 5;
// const result = num > 10 || num > 30;
// console.log(result); // true

// const numb = 10;
// const resultt = numb < 5 && numb > 8;
// console.log(resultt);

// console.log(!1);
// Change code below this line
// function mult(a, b, c) {
//     console.log(`multition result equals ${(a * b) + c}`);
//     // Change code above this line
// }

// mult(2, 2, 10);
// mult(10, 20, 30);
// mult(5, 10, 15);

// function add(a, b, c) {
//     // Change code below this line
//     return a + b + c;


//     // Change code above this line
// }

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// const num1 = 5;
// const num2 = 10;
// let biggerNumber;

// if (num1 > num2) {
//     biggerNumber = num1;
// } else {
//     biggerNumber = num2;
// }

// console.log(biggerNumber);

// const num1 = 10;
// const num2 = 10;
// const biggerNumber = num1 > num2 ? num1 : num2;

// console.log(biggerNumber); // 10
// function makeMessage(name, price) {
//     // Change code below this line
//     const message = "You picked $name, price per item is $price credits";
//     // Change code above this line
//     return message;
// };

// // userInput.toUpperCase()(productName.includes("driod"))

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter <= maxClients) {
//     console.log(clientCounter);
//     clientCounter += 1;
// }

// let goodsCounter = 5
// const maxGoods = 25
// while (goodsCounter <= maxGoods) {
//     console.log(goodsCounter);
//     goodsCounter += 5;
// }


// let password = '';

// do {
//     password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);


// let password = '';
// do {
//     password = prompt('Input password', '');
// } while (password.length < 5);
// console.log('Inputed password', password);

// const max = 10;

// for (let i = 0; i <= max; i += 1) {
//     console.log(i);
// }

// const target = 5;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//     sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//     console.log(`${max} % ${i} = `, max % i);
// }

// for (let i = 0; i < 10; i += 1) {
//     if (i === 5) {
//         console.log('Дошли до 5-й итерации, прерываем цикл!');
//         break;
//     }
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//     if (i % 2 === 0) {
//         continue;
//     }

//     console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }