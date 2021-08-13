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

// function StringBuilder(baseValue) {
//     this.value = baseValue;
//     console.log(this);

// };
// StringBuilder.prototype.getValue = function (value) {
//     return this.value;
// };

// StringBuilder.prototype.padEnd = function (str) {
//     this.value = this.value + str;
// };
// StringBuilder.prototype.padStart = function (str) {
//     this.value = str + this.value;
// };
// StringBuilder.prototype.padBoth = function (str) {
//     this.value = str + this.value + str;
// };


// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder);
// console.log(builder.getValue()); // '.'
// // console.log(StringBuilder.prototype.hasOwnProperty('getValue'));


// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// console.log(Math.PI);





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
// class myCar1 {
//     constructor({ brand, model, price } = {}) {
//         console.log('Performed constructor');
//         console.log(this);
//         this.a = 5;
//         this.b = 10;
//     }
// };
// console.log(myCar1);
// const carInstance = new myCar1();
// console.log(carInstance);


// class Car {
//     constructor() {

//     };

// };
// console.dir(Car);


// //          9
// class Car {
//     static description = 'AAA';
//     static logInfo(carObj) {
//         console.log(carObj);
//     };

//     constructor({ brand, model, price }) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// console.log(Car);
// console.log(Car.description);
// Car.logInfo(carObj)

//          12
// class Storage {
//     #items;
//       constructor(items){
//       this.#items = items;
//       }
//       getItems () {
//       return this.#items;
//     }
//       addItem (newItem) {
//       this.#items.push(newItem);
//       }
//       removeItem (item) {
//       const itemIndex = this.#items.indexOf(item);
//       this.#items.splice(itemIndex, 1);
//     }
//     }

//     // Пиши код выше этой строки
//     const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
//     console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
//     storage.addItem("Дроид");
//     console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
//     storage.removeItem("Пролонгер");
//     console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//          13

// class StringBuilder{
// #value;
// constructor(baseValue){
//     this.#value = baseValue;
// }
// getValue  () {
//     return this.#value;
// }
// padEnd (str) {
//     this.#value += str;
// }
// padStart (str) {
//     this.#value = str + this.#value;
// }
// padBoth (str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }

// }

//   // Пиши код выше этой строки
//   const builder = new StringBuilder('.');
//   console.log(builder.getValue()); // '.'
//   builder.padStart('^');
//   console.log(builder.getValue()); // '^.'
//   builder.padEnd('^');
//   console.log(builder.getValue()); // '^.^'
//   builder.padBoth('=');
//   console.log(builder.getValue()); // '=^.^='

// //          14
// class Car {
//     #brand;
//     #model;
//     #price;


//     constructor ({brand, model, price}) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;

//     }

//     get brand() {
//       return this.#brand;
//     }

//     set brand(newBrand) {
//       this.#brand = newBrand;
//     }

//     get model() {
//         return this.#model;
//       }

//     set model(newModel) {
//         this.#model = newModel;
//       }

//     get price() {
//         return this.#price;
//       }

//     set price(newPrice) {
//         this.#price = newPrice;
//       }
// }
// const car = new Car ({brand: 'AUDI', model: 'Q3', price: 35000});
// console.log(car.brand);
// car.brand = 'BMW';
// console.log(car.brand);

//          15

// class Car {
//     // Пиши код ниже этой строки
//     static MAX_PRICE = 50000;
//     #price;

//     constructor({ price }) {
//         this.#price = price;
//     }

//     get price() {
//         return this.#price;
//     }

//     set price(newPrice) {
//         if (newPrice <= Car.MAX_PRICE) {
//             this.#price = newPrice;
//         }
//         return;
//     }
//     // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 50000;
// console.log(audi.price); // 49000

//          16
// class Car {
//     static #MAX_PRICE = 50000;
//     // Пиши код ниже этой строки
//     static checkPrice(price) {
//         if (price <= Car.#MAX_PRICE) {
//             return 'Всё хорошо, цена в порядке.'
//         };
//         return 'Внимание! Цена превышает допустимую.'
//     };

//     // Пиши код выше этой строки
//     constructor({ price }) {
//         this.price = price;
//     }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

//          17