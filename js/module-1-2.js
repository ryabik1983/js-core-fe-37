// // &&
// console.log('I love JS' && 1);
// //               true && true  
// console.log("react" && 1 && true);
// console.log(0 && "react" && 1);
// // false && 
// console.log(0 && false && "react" && 1);

// let minPrice = 100;
// let maxPrice = 200;
// let currentPrice = 60;

// ||
// console.log("true" || true);
// console.log("true" || false);
// let minPrice = 100;
// let maxPrice = 200;
// let currentPrice = 210;
// if (currentPrice >= minPrice || currentPrice <= maxPrice) { console.log('Этот товар я могу купить сейчас') }
// else {
//     console.log('Эта цена нам не подходит');
// }
// console.log(
//     minPrice <= currentPrice <= maxPrice
// );


// !
// console.log(!true);
// console.log(0);

// let enterPrompt = null;
// if (!enterPrompt) {
//     console.log("Пользователь нажал ОТМЕНА");
// }
// console.log(!!1);
// console.log(!!0);


// Ветвления
// if (condition) { statement };

// if (minPrice <= currentPrice <= maxPrice) { console.log('Этот товар я могу купить сейчас') }
// else {
//     console.log('Эта цена нам не подходит');
// }
// console.log(
//     minPrice <= currentPrice <= maxPrice
// );

// let a = 8;
// if (a > 5 && a < 20) {
//     console.log('5-20');
// }

// Тернарный оператор
// (condition) true ? false;
// let a = 4;
// (a > 5 && a < 20) ? console.log('5-20') : console.log('Значение не подходит под выбранный диапазон');

// let age = 21;
// (age >= 18) ? console.log('Вам можно!') : console.log('Вам нельзя!');

// let b = 5;
// switch (b) {
//     case (b > 0):
//         console.log(`0-5`);
//         break;
//     case (b > 5):
//         console.log('5-10');
//         break;
//     case (b > 10):
//         console.log('10-15');
//         break;
//     case (b > 15):
//         console.log('15-20');
//         break;
//     default:
//         console.log(`число больше 20`);


// }
// if (b > 0 && b <= 5) {
//     console.log('0-5');
// }
// else if (b > 5 && b <= 10) {
//     console.log('5-10');
// }
// else if (b > 10 && b <= 15) {
//     console.log('10-15');
// }
// else if (b > 15 && b <= 20) {
//     console.log('15-20');
// }

// SWITCH
// let day = 'sun';
// switch (day) {
//     case 'mon':
//     case 'tue':
//     case 'wed':
//     case 'thur':
//     case 'fri':
//         console.log(`${day} - будний день!`)
//         break;
//     default:
//         console.log(`${day} - выходной день!`)
// }

// console.log(isNaN(NaN));
// console.log(isNaN(0));
// console.log(isNaN('0.4'));
// console.log(isNaN(Infinity));
// console.log(isNaN('Infinity'));

// let result = 1;
// if (result > 0) {
//     let result = 111;
//     result += 10; 
//     console.log ("LOCAL :", result);
// }
// console.log('GLOBAL :', result);

// const max = 10;
// let y = 10;
// let i = 0;
// // while(y<max){
// //     y = y + 1;
// //     i += 1;
// //     console.log(`итерация  ${i}:`, y);
// // }
// // do {y = y + 1;
// //     i += 1;
// //     console.log(`итерация  ${i}:`, y);}
// // while(y < max)
// for (let i = 0; i <= 10; i += 3) {
//     console.log(`${i}`)
// }
// clg

