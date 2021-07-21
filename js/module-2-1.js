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
console.table(array);

// console.log(array.length);

// console.log(array[3]);
// array[0] = 'HTML';
// console.log(array[0]);

// delete array[1];
// delete array[2];
// console.log(array[1]); 
// console.log(array[2]);
// console.log(array);
for(let i = 0; i < array.length; i += 1){
        if(typeof array[i] === 'string'){
        continue}
        // console.log(`итерация - ${i + 1}`, array[i]);
    
    }
    
for(let i = 0; i < array.length; i += 1){

    if(typeof array[i] === 'string'){
    break}
    // console.log(`итерация - ${i + 1}`, array[i]);
    // console.log('BREAK');

}

const multiArray = [
    [1, 10, 100, 1000],
    [2, 20, 200, 2000],
    [3, 30, 300, 3000],
]
let it = 1;
console.log(multiArray);
for (let array of multiArray){
    console.log(`iteration - ${it}`, array);
    it += 1;
}




