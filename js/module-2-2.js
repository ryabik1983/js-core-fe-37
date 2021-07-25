// const add = function (a, b) { }
//     console.log(a);
//     console.log(b);
//     console.log('Выполняется функция add!');
//     // const result = a + b;
//     // console.log('x + y: ', result);
//     return a + b;
// }

// const r1 = add(5, 3);
// console.log('r1 :', r1);

// const r2 = add(10, 20);
// console.log('r2 :', r2);

// const r3 = add(25, 35);
// console.log('r3 :', r3);

// const fn = function () {

//     console.log(1);

//     console.log(2);

//     console.log(3);
//     return 555;
// };
// console.log('Результат функции: ', fn());
// const fnA = function () {
//     console.log('Выполняется функция A');
// }
// const fnB = function () {
//     console.log('Выполняется функция B');
// }
// const fnC = function () {
//     console.log('Выполняется функция C');
// }

// fnA();
// fnB();
// fnC();

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (const value of cart) {
//     total += value;
// }
// // console.log('Total :', total);

// const calculateTotalPrice = function (items) {
//     console.log(items);
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }
//     return total;

// }
// // console.log(total);
// console.log(calculateTotalPrice([1, 2, 3]));
// console.log(calculateTotalPrice([5, 10, 15, 20]));
// console.log(calculateTotalPrice([100, 200, 300]));

// const logItems = function (items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems(['Mango', 'Poly', 'Kiwi']);
// logItems([1, 2, 3]);
// logItems(['клавиатуры', 'мыши', 'мониторы'])

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line

//     let message;

//     if (password === ADMIN_PASSWORD) {
//         message = "Welcome!";
//     } else {
//         message = "Access denied, wrong password!";
//     }

//     return message;
//     // Change code above this line
// }

// const findLogin = function (allLogins, loginToFind) {
//     console.log(allLogins);
// }
// console.log(findLogin(logins, 'sgfsgf'));
// console.log(findLogin(logins, 'erteyy'));
// console.log(findLogin(logins, 'jkljl'));
// console.log(findLogin(logins, 'jkiop'));

// FUNCTION EXPRESSION
// myFunc(); Нельзя вызывать до обявления.

const myFunc = function (param1, param2) {
    // console.log(`Это функциональное выражение с параметрами: ${param1}, ${param2}`,);
}
// // FUNCTION DECLARATION


function myFuncDeclar() {
    // console.log('Это декларативное обявление :');

};

// ARROW FUNCTION

const myArrowFunc = () => {
    // console.log('Это Стрелочная функция :');

};

// Вызовы функций
// myFunc('Hello!', 'Baby!');
// myFuncDeclar();
// // myArrowFunc();
// let user;
// function  toSayHello (username = 'User') {
//     alert (`${username}, рады вас приветствовать!`)
// };

// toSayHello ();

// function showInfo (userName, userAge) {
// console.log(`Hello, my name is ${userName}. I am ${userAge} years old.`);
// }
// showInfo ('Alexandr', 31);

// function getResult() {
//     // console.log(arguments);
//     for (let elem of arguments) {
//         // console.log(elem);
//     }
//     const myArg = Array.from(arguments);
//     // console.log(myArg);
//     myArg.shift(1);
//     // console.log(myArg);
// }
// getResult(0, 1);
// // Преобразование псевдомасива в полноценный массив
// const getArrayResult = (...allParams) => {
//     // console.log(arguments);
//     // console.log(allParams);


// }
// getArrayResult(1, 2, 3, 4, 5, 6);

function getOddValues(array, value) {
    console.log(array);
    for (let i = 0; i < array.length; i += 1) {
        console.log(array[i]);
        if (array[i] === value) {
            return console.log(`Значение ${value} ecть в массиве`);
        }
        else {
            return (`Значение ${value} отсутствует в массиве`);
        }
    }
}
getOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 5);

// function checkStorage(available, ordered) {
//     // Change code below this line
//     for (let i = 0; i < available.length; i += 1) {
//         console.log(array[i]);
//         if (array[i] === value) {
//             return console.log(`Значение ${value} ecть в массиве`);
//         }
//         else {
//             return {`Значение ${value} отсутствует в массиве`
//         }

//         if (ordered === 0) return "Your order is empty!";
//         else if (ordered > available) return "Your order is too large, not enough goods in stock!"
//         return "The order is accepted, our manager will contact you";





//         // Change code above this line
//     }

// 


// const oder = [35, 17, 28, 24];
// let total = 0;
// for (const item of oder) {
//     total += item;
// }
// console.log(total);

// let string = "The quick brown fox jumped over the lazy dog";
// let strSplit = string.split(" ");
// let longestWord = 0;
// for (let i = 0; i < strSplit.length; i += 1) {
//     if (strSplit[i].length > longestWord) { // If strSplit[i].length больше, чем сравнимое слово...
//         longestWord = strSplit[i].length; // ...затем longestWord принимает новое значение
//     }
//     console.log(longestWord);
// }

// function findLongestWord(string) {
//     // Change code below this line
//     let stringSplit = string.split(" ");
//     let longestWord = stringSplit[0];
//     for (const newWord of stringSplit) {
//         if (newWord >= longestWord) {
//             longestWord = newWord;

//         }
//     }
//     return longestWord;


// let biggestNumber = 3;
// let numbers = [1, 2, 3, 4, 5];
// // Change code below this line
// let biggestNumbers = [];
// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumbers.push(number);
//         // break;
//     }
//     // console.log(numbers);

//     // Change code above this line

// }

// // console.log(biggestNumbers);
// let fruit = "pea";
// const fruits = ["apple", "plum", "pear", "orange"];
// if (fruits.includes(fruit)) {
//     console.log("true");
// }
// else {
//     console.log("false");
// }

// const start = 12;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//     if (i % 5 === 0) {
//         number = i;
//         break;

//     }
// }
// console.log(number);

function findNumber(start, end, divisor) {
    // Change code below this line
    let number;

    for (let i = start; i < end; i += 1) {
        if (i % divisor === 0) {
            number = i;
            break;
        }
    }

    return number;
    // Change code above this line
}
findNumber(2, 6, 5)

let array = [2, 6, 5];
let value = 7;
// Change code below this line
for (const item of array) {
    if (item === value) {
        console.log(true);
        break;

    }
    else if (item !== value) {
        console.log(false);
    }


}








