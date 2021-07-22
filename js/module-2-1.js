// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// / console.table(friends);
// friends[1] = 'qweqwe';

// console.log(friends);
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;
// console.log(a);
// console.log(b);

// const a = [1, 2, 3, 4];
// const b = a;
// console.log(a);
// console.log(b);
// a[0] = 500;
// console.log(a);
// console.log(b);

// console.log(a === b);

// // console.log([1, 2, 3] === [1, 2, 3]);
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// // console.table(friends);
// // const lastIndex = friends.length - 1;
// // for (let i = 0; i <= lastIndex; i += 1) {
// //     friends[i] += '-1';
// // }
// // console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

// }

const cart = [54, 28, 105, 70, 92, 17, 120];
let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i];
// }
// console.log('Total :', total);

// for (const value of cart) {
//     total += value;
// }
// console.log('Total :', total);


const array = [1, 2, 3, 'JS', 4, 5, 6];
// console.table(array);

// console.log(array.length);

// console.log(array[3]);
// array[0] = 'HTML';
// console.log(array[0]);

// delete array[1];
// delete array[2];
// console.log(array[1]); 
// console.log(array[2]);
// console.log(array);
for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] === 'string') {
        continue
    }
    // console.log(`итерация - ${i + 1}`, array[i]);

}

for (let i = 0; i < array.length; i += 1) {

    if (typeof array[i] === 'string') {
        break
    }
    // console.log(`итерация - ${i + 1}`, array[i]);
    // console.log('BREAK');

}

const multiArray = [
    [1, 10, 100, 1000],
    [2, 20, 200, 2000],
    [3, 30, 300, 3000],
]
let it = 1;
// console.log(multiArray);
for (let zzz of multiArray) {
    // console.log(`iteration - ${it}`, zzz);
    it += 1;
    for (let xxx of zzz) {
        if (xxx === 1) {
            // console.log(xxx);
        }
    }
}
let age = 30
// console.log('age', age);
let myAge = age;
// console.log('My age', myAge);
age = 31;
// console.log('age', age);
// console.log(age === myAge);

const numbers = [12, 23, 34, 45];
// console.log('numbers: ', numbers);

const myNumbers = numbers;
// console.log('myNumbers: ', myNumbers);
numbers[0] = 100500;
// console.log('numbers: ', numbers);
// console.log('myNumbers: ', myNumbers);
const message = 'Welcome to Bahamas!'
// console.log(message.split(' '));

// console.log(message.split(''));
const clients = ['Toyota', 'BMW', 'VW'];
// console.log(clients.join(' '));

const mySliceNumbers = numbers.slice()
// console.log(mySliceNumbers);
// console.log(numbers === mySliceNumbers);
numbers[0] = 12;
// console.log(numbers);

const firstTwoElems = numbers.slice(0, 2);
// console.log(firstTwoElems);
const myArray = ['I', 'Love', 'JS'];
// console.log(myArray);
let myFavourArray = myArray.join('-');
// console.log(myFavourArray);

console.log(myArray);
console.log(numbers);

//                 ADD
// unshift(); ----------------------- push();
//            | array               |
//            |                     |
//     shift() --------------------- pop();
//                  DELETE

const exampleArray = [1, 1, 2, 3, 4, 4];
console.table(exampleArray);
// const unshiftElem = exampleArray.unshift(0);
// console.log(unshiftElem);
// console.log(exampleArray);
// const pushElem = exampleArray.push(5, 5);
// console.log(exampleArray);

// const shiftElem = exampleArray.shift();
// console.log(exampleArray);

// const popElem = exampleArray.pop();
// console.log(exampleArray);

// let deleteSplice = exampleArray.splice(1, 3);
// console.log(deleteSplice);
// console.log(exampleArray);
// let addSplice = exampleArray.splice(3, 0, 'I', 'LOVE', 'JS');
// // console.log(addSplice);
// console.log(exampleArray);

// let replaseSplice = exampleArray.splice(5, 1, 'React', 'Node JS');
// console.log(replaseSplice);
const firstPiece = [1, 2];
// console.log(firstPiece);
const secondPiece = [3, 4];
// console.log(secondPiece);

const thirdPiece = [5, 6] ;
// console.log(thirdPiece);

const fullArray = firstPiece.concat(secondPiece, thirdPiece);
// console.log(fullArray);










