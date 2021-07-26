// OBjects
// const playlist = {
//     name: 'My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//     trackCount: 3, 
//     };

// console.log(playlist);

// // Доступ к свойству обекта:
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// Имя свойства храниться в переменной

const propertyName = "tracks";
// console.log(playlist.rating);
// console.log(playlist["rating"]);


// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

// Короткая запись свойств
const userName = 'Mango';
const email = 'mango@mail.com';
const sighUpData = {
    userName,
    email,
};
// console.log(sighUpData);

// Вычисляемые свойства
const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
[inputName]: inputValue,

}
// console.log(colorPickerData);

// Добавление свойства в обект.
colorPickerData.qwe = 8;

// Ссылочный тип
// console.log([] ===[]);

const a = [1, 2, 3];

a.hello = 100;

// console.log(a);

const fn = function (){
    // console.log('hello');
}
fn.hello = '=)';
// console.dir(fn);

const playlist = {
    name: 'My super playlist',
    rating: 5,
    tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
    trackCount: 3, 
    // OLD SCHOOL!!
    // getName: function (a){
    //    console.log('Ага, это getName!', a);
        
    // },
    // // New SCHOOL
    // getName1 (){
    //    console.log('Так стало getName!');
    // }
    changeName (newName) {
        console.log('This inside changeName:', this);
        this.name = newName;

    },
}



// playlist.getName(5);
// playlist.getName1();
playlist.changeName('Новое имя!');
console.log(playlist);