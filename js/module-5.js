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

// const objF = {
//     message: 'own property',};
//     console.log(objF.message);

//     const objJ = Object.create(objF);
//     objJ.message = 'prototype property';

//     console.log(objJ);

// const Car = function ({ brand, model, price } = {}) {
//     // console.log(config);
//     // const  = cofig;
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     // this.changePrice = function (newPrice) {
//     //     this.price = newPrice;
//     // };
//     // this.a = value;
// };

// Car.prototype.sayHi = function () {
//     console.log('Car.prototype.sayHi -> this', this);
//     console.log('Hello');
// };
// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// }
// console.log(Car.prototype);

// const myCar = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });

// myCar.sayHi();
// myCar.changePrice(30000);
// // const = {
// console.log(myCar);

// // 'Audi', 'Q3', 35000

// const myCar2 = new Car({ brand: 'BMW', model: 'X6', price: 45000 });

// myCar2.sayHi();
// console.log(myCar2);

// const myCar3 = new Car({ brand: 'AUDI', model: 'A6', price: 65000 });
// console.log(myCar3);
// myCar3.sayHi();


// const User = function ({ email, password } = {}) {
//     this.email = email;
//     this.password = password;
// };
// const mango = new User({ email: 'mangomail.com', password: 1111 });
// console.log(User);
// console.log(mango);

// User.prototype.changeEmail = function (newEmail) {
//     this.email = newEmail;
//     console.log(User);
// };
// // User.changeEmail();



// //          6

// function Storage (items){
//     this.items = items;
//       };
// Storage.prototype.getItems = function (){
// return this.items;
// };
// Storage.prototype.addItem = function (newItem){
//      this.items.push(newItem);
    
// };
// Storage.prototype.removeItem = function (newItem){
//     this.items.splice(this.items.indexOf(newItem), 1);

// };
  
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// // storage.getItems();

// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// // console.log(items.includes("Дроид"));
// // console.log(items.indexOf("Дроид"));


// storage.removeItem("Нанитоиды");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// console.log(Storage.prototype.hasOwnProperty('getItems'));
// console.log(Storage.prototype.hasOwnProperty('addItem'));
// console.log(Storage.prototype.hasOwnProperty('removeItem'));
// new Storage([ 'Нанитоиды', 'Пролонгер', 'Антигравитатор' ])
// console.log(storage);
// console.log(storage.hasOwnProperty(items));

//          7

function StringBuilder(baseValue){
   this.baseValue;
};

StringBuilder.prototype.getValue = function (){
    return this.value;
    console.log(this.value);
}    
    
    // Пиши код выше этой строки
    const builder = new StringBuilder('.');
    console.log(builder.getValue()); // '.'
    // builder.padStart('^');
    // console.log(builder.getValue()); // '^.'
    // builder.padEnd('^');
    // console.log(builder.getValue()); // '^.^'
    // builder.padBoth('=');
    // console.log(builder.getValue()); // '=^.^='

