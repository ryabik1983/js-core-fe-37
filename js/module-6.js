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

// const books = [
//     {
//         title: 'Последнее королевство',
//         author: 'Бернард Корнуэлл',
//         genres: ['приключения', 'историческое']
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт Шекли',
//         genres: ['фантастика']
//     },
//     {
//         title: 'Красна как кровь',
//         author: 'Ли Танит',
//         genres: ['ужасы', 'мистика']
//     }
// ];
// // Пиши код ниже этой строки

// // const genres = books.flatMap(book => book.genres);
// // console.log(genres);
// const allGenres = books.reduce((genres, book) => [...genres, ...book.genres], []);

// console.log(allGenres);
//          13
//          14

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);
//          21

// const allCourses = students.flatMap(student => student.courses);
// const uniqueCourses = allCourses.filter(
//     (course, index, array) => array.indexOf(course) === index
// // // );
const users = [
    {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
        age: 37
    },
    {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
        age: 34
    },
    {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
        age: 24
    },
    {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
        age: 21
    },
    {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
        age: 27
    },
    {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
        age: 38
    },
    {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
        age: 39
    }
];
// console.log(users);
// const allFriends = users.flatMap(user => user.friends).filter((el, index, arr) => arr.indexOf(el) === index);
// console.log(allFriends);
//          22

// const activeUsers = users.filter(user => user.isActive === true);
// console.log(activeUsers);
//          23
// const getInactiveUsers = users.filter(user => user.isActive === false);
// console.log(getInactiveUsers);
//          24
// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookByAuthor);
//          26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// // const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);

// // const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// // console.log(eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

//          27

// const activeUsers = users.every(user => user.isActive === true);
// console.log(activeUsers);
// const unactiveUsers = users.every(user => user.isActive === false);
// console.log(unactiveUsers);
//          28
// const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
// console.log(anyElementInFirstIsEven);

// const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 !== 0);
// console.log(anyElementInFirstIsOdd);

// const anyElementInSecondIsEven = secondArray;
// const anyElementInSecondIsOdd = secondArray;

// const anyElementInThirdIsEven = thirdArray;
// const anyElementInThirdIsOdd = thirdArray;
//          30

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players);

// console.log(playtimes);
// // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((acc, value) => { console.log(acc += value); return acc }, 0);
// console.log(totalPlayTime);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(averagePlayTime);
//          31
// const players = [
//     { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//     { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//     { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     total += player.playtime / player.gamesPlayed;
//     return total
// }, 0);
// console.log(totalAveragePlaytimePerGame);
//          32

// const calculateTotalBalance = users.reduce((total, user) => {
//     total += user.balance;
//     return total;
// }, 0);
// console.log(calculateTotalBalance);
//          33
const getTotalFriendCount = users.reduce((allFriends, user) => {
    allFriends.push(...user.friends);
    // return allFriends;
    return allFriends;
}, []);
console.log(getTotalFriendCount);





// class Samurai {
//     constructor(name) {
//         this.name = name;
//     }
//     hello() { alert(this.name) }
// };
// console.log(({}).prototype === ({}).__proto__);
// let shogun = new Samurai('Dimmich');
// console.log(shogun.__proto__.__proto__);
// console.log(shogun.__proto__.constructor.__proto__);
// console.log(shogun.__proto__.__proto__.__proto__);
