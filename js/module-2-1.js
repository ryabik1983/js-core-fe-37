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

for (const value of cart) {
    total += value;
}
console.log('Total :', total);