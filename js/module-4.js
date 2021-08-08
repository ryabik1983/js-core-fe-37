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
// const toGetFibonacci = (count, cb) => {
//   let firstNum = 0;
//   let secondNum = 1;
//   const arrayWithValues = [firstNum, secondNum];
//   // cb(count);
//   // console.log(arrayWithValues);
//   for (let i = 3; i <= count; i += 1) {
//     let newNumber = firstNum + secondNum;
//     arrayWithValues.push(newNumber);
//     // console.log(`newNumber: ${newNumber}`);
//     firstNum = secondNum;
//     secondNum = newNumber;
//   };
//   console.log(arrayWithValues);
//   let result = cb(arrayWithValues);
//   return result;

//   // // console.log(firstNum);
//   // return toGetFibonacci();
// };
// console.log('Только четные:', toGetFibonacci(18, getEvenValues));
// console.log('Сумма всех:', toGetFibonacci(7, getSum)); 
// // console.log(firstNum);
// function getEvenValues(arr){
//   const arrValues = [];
// for (let num of arr){
//   if (num % 2 === 0) {
//     arrValues.push(num);
//   }
// }
// return arrValues;
// };
// function getSum(arr){
// let total = 0;
// for (let j of arr) {
//   total += j;
// }
// return total;
// };







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
// first();
// function first(){
//   console.log(`this is 1 function STARTED`);
//   second ();
//   console.log(`this is 1 function FINISHED`);
// };

// function second(){
//   console.log(`this is 2 function STARTED`);
//   third ();
//   console.log(`this is 2 function FINISHED`);
// };

// function third(){
//   console.log(`this is 3 function STARTED`);
//   fourth ();
//   console.log(`this is 3 function FINISHED`);
// };

// function fourth(){
//   console.log(`this is 4 function STARTED`);
//   fifth ();
//   console.log(`this is 4 function FINISHED`);
// };

// function fifth(){
//   console.log(`this is 5 function STARTED`);
//   sixth ();
//   console.log(`this is 5 function FINISHED`);
// };
// function sixth(){
//   console.log(`this is 6 function STARTED`);
//   console.log(`this is 6 function FINISHED`);
// };


// const productCounter = createCounter();
// document.getElementById('count').textContent = productCounter.current;
// console.log(productCounter);

// function createCounter() {
//   let current = 0;
//   function increment(value) {
//     return (current += value)
//   };
//   function decrement(value) {
//     if (current <= 0) return;
//     return (current -= value);

//   };
//   return { increment, decrement };
// }
// export default createCounter;

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`
// }

// const messages = [];
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i + 1))
// }
// console.log(messages);

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const mango = { username: "Манго" };
// const poly = { username: "Поли" };


// greetGuest.apply(mango, ["С приездом"]);
// greetGuest.apply(poly, ["С приездом"]); // С приездом, Поли.
//      8

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply([orders[i], i + 1]);
//   messages.push(msg);

// }
// console.log(messages);

//      10
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// let userMinutes = prompt('Введите количество минут, которые нужно преобразить в формат "часы:минуты"');
// let hours = Math.floor(userMinutes / 60);
// console.log(hours);
// let minutes = userMinutes - hours * 60;
// // s = hours < 10 ? 0${ hours } : ${ hours };
// // s += minutes < 10 ? : 0${ minutes } : : ${ minutes };
// alert(${ userMinutes } минут в формате "часы:минуты" это - ${ s });
// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log('showTag -> this', this);
//   },
// };
// user.showTag();

// const foo = function () {
//   console.log('foo -> this', this);
// };
// foo();

// const user = {
//   tag: 'Mango',
//   showTag() {
//     console.log('showTag -> this', this);
//     console.log('showTag -> this.tag', this.tag);
//   },
// };



// const invokeAktion = function (action) {
//   console.log(action);
//   action();
// };
// invokeAktion(user.showTag);

// user.showTag();
// const outerShowTag = user.showTag;
// outerShowTag();
// console.log('user', user);
// showUserTag();
// user.showUserTag();
// const showThis = function () {
//   console.log('showThis -> this', this);
// };
// console.dir(showThis);

console.log(document);
const inc = document.querySelector('.js-inc');
console.log(inc);