// Callback

// const fnA = function (message, callback) {
//     console.log(message);
//     console.log(callback(100));
// };

// const fnB = function (number) {
//     console.log('log pri vizove fnB', number);
// };

// fnA('qweqwe', fnB);

// const doMath = function (a, b, callback){
//     const result = callback (a, b);
//     console.log(result);

// }
// const add = function (x, y){
//     return x + y;
// };
// const sub = function (x, y){
// return x - y;
// };

// doMath (2, 3, function (x, y){
//     return x + y;
// });
// // doMath (10, 8, sub);
// const onGetPositionSucces = function (position) {
//     console.log('Это вызов onGetPositionSucces');
//     console.log(position);
// };
// const onGetPositionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSucces,
//     onGetPositionError
// );
// function highOrder(value, callback) {
//     callback(value);
// };
// highOrder('Hello, I am callback', setMessage);
// function setMessage(message) {
//     console.log(message);
// };

//                  2
// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }
// function deliverPizza(pizzaName) {
//     return console.log(`Доставляем пиццу ${pizzaName}.`);
// }

// function makePizza(pizzaName) {
//     return console.log(`Пицца ${pizzaName} готовится, ожидайте...`);

// }

// // Пиши код ниже этой строки


// makeMessage("Salyami", deliverPizza);
// makeMessage("Salyami", makePizza);

//                      3
// 
// function makePizza(pizzaName, callback) {
//     console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//     callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//     console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки
// setTimeout(makePizza, 5000);
// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//     console.log(`Едим пиццу ${pizzaName}`);

// });


// //              4
// const pizzaPalace = {
//     pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//     order(pizzaName, onSuccess, onError) {
//         if(this.pizzas.includes(pizzaName)){
// console.log(true);
//             makePizza(pizzaName);
//         }
//         else {
//             onOrderError(pizzaName);
//         };
//     },
//   };
//   // Пиши код выше этой строки

//   // Колбэк для onSuccess
//   function makePizza(pizzaName) {
//     return console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
//   }

//   // Колбэк для onError
//   function onOrderError(pizzaName) {
//     return console.log(`В ассортименте нет пиццы с названием ${pizzaName}.`);

//   }

//   // Вызовы метода с колбэками
//   pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
//   pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
//   pizzaPalace.order('Биг майк', makePizza, onOrderError);
//   pizzaPalace.order('Венская', makePizza, onOrderError);



// // Заиыкания
// const fnA = function (parametr){
//  const innerVariable = 'значение внутренней переменной функции fnA'   ;
//  const innerFunction = function(){
//     console.log(parametr); 
//     console.log(innerVariable);
//     console.log('Это вызов innerFunction');
//  };
//  return innerFunction;
// };
// const fnB = fnA(555);

// fnB ();

// // console.log(fnB);

// const makeDish = function (sheffname, dish){
// console.log('${sheffname} makes ${dish}');
// };

// function processCall(recipient) {
//     // Имитируем доступность абонента случайным числом
//     const isRecipientAvailable = Math.random() > 0.5;

//     if (!isRecipientAvailable) {
//       console.log(`Абонент ${recipient} недоступен, оставьте сообщение.`);
//       // Логика активации автоответчика
//     } else {
//       console.log(`Соединяем с ${recipient}, ожидайте...`);
//       // Логика принятия звонка
//     }
//   }

//   processCall('Манг');
//   const isRecipientAvailable = 1;
// function todoMeal(prods, zzz) {
//   // console.log(prods);
//   let result = zzz(prods);
//   console.log(result);
//   // console.log(`Your dish -`);

// }
// todoMeal(['bread', 'meat'], todoSandwich);
// todoMeal(['banana', 'meat'], todoSandwich);

// function todoSandwich(arr) {
//   // console.log(arr);
//   let bread = arr.includes('bread')
//   return bread ? 'sandwich is done!' : 'no bread'
// };
// const results = [{mail: '', scores: 10}];
// function getResultByTest (getMax, getMin, mail, ...scores){
//   console.log(mail);
//   console.log(scores);
//   let total = 0;
//   for (const score of scores){
//     total += score;
//   }
//   console.log(total);
//   const obj = {mail, scores: total};
//   results.push(obj);
//   console.log(results);
//   // Перебираем массив результатов
//   const scoresArray = [];
//   for (let obj of results){
//     console.log(obj.scores);
//     scoresArray.push(obj.scores);
//   };
//   console.log(scoresArray);
//   let max = getMax(scoresArray);
//   let min = getMin(scoresArray);
//   console.log('max:', max);
//   console.log('min:', min);


//   };
// getResultByTest(getMaxValue, getMinValue, 'a@hotmail.com', 1, 1, 1, 1, 1)
// getResultByTest(getMaxValue, getMinValue, 'a@hotmail.com', 1, 0, 1, 0, 1)
// function getMaxValue(arr){
//   return Math.max(...arr);
// };
// function getMinValue(arr){
//   return Math.min(...arr);
// };

//      5
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return console.log(`В ассортименте нет пиццы с названием «${pizzaName}».`);


//     }

//     return console.log(`Заказ принят, готовим пиццу «${pizzaName}».`);

//   },
//   // Пиши код выше этой строки
// };
// pizzaPalace.order('Ультрасыр');
// pizzaPalace.order('льтрасыр');

//  Числа Фибоначчи
// let firstNum = 10000;
const toGetFibonacci = (count, cb) => {
  let firstNum = 0;
  let secondNum = 1;
  const arrayWithValues = [firstNum, secondNum];
  // cb(count);
  console.log(arrayWithValues);
  for (let i = 3; i <= count; i += 1) {
    let newNumber = firstNum + secondNum;
    arrayWithValues.push(newNumber);
    firstNum = secondNum;
    secondNum = newNumber;
    console.log(`newNumber: ${newNumber}`);

  };
  console.log(arrayWithValues);
  // // console.log(firstNum);
  // return toGetFibonacci();
};
toGetFibonacci(18);
// console.log(firstNum);






//      6
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;

//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.getBalance();
// console.log(customer.setDiscount(0.15));

// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
