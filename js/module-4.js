// Callback

// const fnA = function(message,   callback) {
//     console.log(message);
//     console.log(callback(100));
// };

// const fnB = function(number){
//     console.log('log pri vizove fnB', number);
// };

// fnA ('qweqwe', fnB);

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
window.navigator.geolocation.getCurrentPosition (
    onGetPositionSucces,
    onGetPositionError
);