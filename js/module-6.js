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
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
    firstArray.forEach((element) => {
        if (secondArray.includes(element)) {
            commonElements.push(element);
        };
    });

    console.log(commonElements);

    // Пиши код выше этой строки
}
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
// filterArray([1, 2, 3, 4, 5], 3)
const numbers = [5, 10, 15, 20, 25];
const total = numbers.reduce((acc, value) => {
    console.log('number', value);
    console.log('total', acc);
    return acc + value;
}, 0);
console.log(total);