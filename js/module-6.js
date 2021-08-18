// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function(number){
// console.log('number', number);
// console.log(this);
// },
// {a: 5, b: 10},
// );
//          1
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });


//   // Пиши код выше этой строки
//   return console.log(totalPrice);
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);

//        2
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Пиши код выше этой строки
//   return console.log(filteredNumbers);
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);

// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];

// const userNames = users.map(user => user.name);
// console.log(userNames);
// const userId = users.map(user => user.id);
// console.log(userId);

//          3
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         };
//     });

//     console.log(commonElements);

// Пиши код выше этой строки
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19])
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])

//          6
// const numbers = [5, 10, 15, 20, 25];
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });

//     console.log(totalPrice);
// }
// calculateTotalPrice(numbers);

//          7
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Пиши код выше этой строки
//     console.log(filteredNumbers);
//     // return filteredNumbers;
// }
// // filterArray([1, 2, 3, 4, 5], 3)
// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, value) => {
//     console.log('number', value);
//     console.log('total', acc);
//     return acc + value;
// }, 0);
// console.log(total);

//          9

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newNumbers = numbers.map(function (num) {

//         if (num % 2 === 0) {
//             return num = num + value;
//         }
//         return num;

//     });
//     console.log(numbers);
//     console.log(newNumbers);
// };

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newNumbers = [];
//     numbers.forEach(function (num) {

//         if (num % 2 === 0) {
//             return newNumbers.push(num + value);
//         }
//         else { return newNumbers.push(num) };


//     });
//     console.log(numbers);
//     console.log(newNumbers);
// };


// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     const newNumbers = [];
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             newNumbers.push(numbers[i] + value);
//         }
//         else { newNumbers.push(numbers[i]) };

//     }
//     console.log(numbers);
//     console.log(newNumbers);
//     // Пиши код выше этой строки
// }

// changeEven([1, 2, 3, 4, 5], 10);
// changeEven([2, 8, 3, 7, 4, 6], 10);
// changeEven([17, 24, 68, 31, 42], 100);
// changeEven([15, 8, 10, 11, 9, 22, 11, 19, 18, 20, 24, 9, 14, 12, 15, 5, 12, 14, 7, 13, 11, 13, 24], 23);

//          10

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet =>
//     planet.length
// );
// console.log(planetsLengths);

//          11
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
// console.log(titles);
//          12

const books = [
    {
        title: 'Последнее королевство',
        author: 'Бернард Корнуэлл',
        genres: ['приключения', 'историческое']
    },
    {
        title: 'На берегу спокойных вод',
        author: 'Роберт Шекли',
        genres: ['фантастика']
    },
    {
        title: 'Красна как кровь',
        author: 'Ли Танит',
        genres: ['ужасы', 'мистика']
    }
];
// Пиши код ниже этой строки

const genres = books.flatMap(book => book.genres);
console.log(genres);