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
// doMath (10, 8, sub);
const onGetPositionSucces = function (position) {
    console.log('Это вызов onGetPositionSucces');
    console.log(position);
};
const onGetPositionError = function (error) {
    console.log(error);
};
window.navigator.geolocation.getCurrentPosition(
    onGetPositionSucces,
    onGetPositionError
);
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
//              4
const pizzaPalace = {
    pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
    order(pizzaName) {
        if (this.pizzas.includes(pizzaName)) {
            function makePizza(pizzaName)
        }
        else {
            function onOrderError(error)
        }
    },
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
    return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
    return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError);
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError);
pizzaPalace.order('Биг майк', makePizza, onOrderError);
pizzaPalace.order('Венская', makePizza, onOrderError);