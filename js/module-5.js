// const objC = {
//     z: 5,
// }
// console.log(objC);
// console.log(objC.hasOwnProperty('z'));

// const objB = Object.create(objC);
// objB.y = 2;
// console.log(objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log(objA.z);
//  objA.z = 1000;
//  console.log(objA.z);
//  console.log(objA);

const objF = {
    message: 'own property',};
    console.log(objF.message);

    const objJ = Object.create(objF);
    objJ.message = 'prototype property';

    console.log(objJ);