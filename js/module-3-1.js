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

// const a = [1, 2, 3];

// a.hello = 100;

// console.log(a);

const fn = function () {
    // console.log('hello');
}
fn.hello = '=)';
// console.dir(fn);

// МЕТОДЫ МАССИВА!
// const playlist = {
//     name: 'My super playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3', 'track-4'],
//     trackCount: 3,
// OLD SCHOOL!!
// getName: function (a){
//    console.log('Ага, это getName!', a);

// },
// // New SCHOOL
// getName1 (){
//    console.log('Так стало getName!');
// }
// changeName(newName) {
//     console.log('This inside changeName:', this);
//     this.name = newName;
// };
// addTrack(track) {
//     this.tracks.push(track);
//     this.trackCount = this.tracks.length;
// },
// updateRating(newRating) {
//     this.rating = newRating;
// }
// }



// playlist.getName(5);
// playlist.getName1();
// playlist.changeName('Новое имя!');
// playlist.addTrack('Новый трек!');
// playlist.updateRating(10);
// console.log(playlist);

// ПЕРЕБОР ОБЕКТА

const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
}
let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);
//     totalFeedback += feedback[key];

// }
// console.log('totalFeedback:', totalFeedback);
// const values = Object.values(feedback);
// console.log(feedback);
// for (const value of values) {
//     console.log(value);
//     totalFeedback += value;
// }
// console.log('totalFeedback:', totalFeedback);

// 
// Массив обектов

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
//     { name: 'Kong', online: false },
// ];
// // friends[1].newprop = 555;
// console.table(friends);

// for (const friend of friends){
//     console.log(friend);
// friend.newprop = 555;

// }
// console.log(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         // console.log(friend);
//         // console.log(friend.name);
//         if (friend.name === friendName) {
//             return 'Нашли!!';
//         }
//         return 'NOT FINNED! :('
//     }
// console.log(allfriends.includes(name));

// }

// console.log(findFriendByName(friends, 'Mango'));
// console.log(findFriendByName(friends, 'Chelsy'));

// const getAllNames = function (allFriends) {
//     const allNames = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         allNames.push(friend.name);
//     }
//     return console.log(allNames);
// }
// getAllNames(friends);

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);
//         // onlineFriends.push(friend)
//         if (friend.online) {
//             onlineFriends.push(friend);
//         }

//     }
//     return onlineFriends;
// }
// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//     const offlineFriends = [];
//     for (const friend of allFriends) {
//         console.log(friend);
//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }
//     return console.log(offlineFriends);
// }
// getOfflineFriends(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         ofline: [],
//     };
//     for (const friend of allFriends) {
//         console.log(friend);
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;   // }
// else if (!friend.online) {
//     offlineFriends.push(friend);
// }
//         }

// friendsByStatus.ofline.push(friend);


//         //     return console.log(offlineFriends);

//     }
// return console.log(friendsByStatus);
// }

// console.log({});
// const obj = {
//     prop_a: 'A',
//     prop_b: 'B',
//     prop_c: 2,
//     prop_d: null,
//     prop_e: true,
//     name: 'Alex',
//     age: 31,
//     isOnline: false,
//     isStudent: true,
// };
// console.log(obj);

// console.log(obj.name);
// console.log(obj['prop_b']);

// obj.age = 35;

// obj.languages = ['ukr', 'ru', 'en', 'bg'];
// console.log(obj.languages);

// delete obj.age;
// let response = prompt('question')
// console.log(response);

// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// }
// console.log(Object.keys(x));
// console.log(Object.values(x));
// console.log(Object.entries(x));

// const cart = {
//     items: [],
//     getItems() { },
//     add(produck) { },
//     remove(productName) { },
//     clear() { },
//     countTotalPrice() { },
//     increaseQuantity() { },
//     decreaseQuantity() { },
// };
// console.table(cart.getItems());

// let key1 = 'name';
// let key2 = 'lastName';
// let key3 = 'skills';
// const nextUser = {
//     [key1]: 'user',
// }
// console.log(nextUser);

// // const numbers = [1, 2, 3].concat([4, 5, 6], [7, 8, 9]);
// const numbers = [0, 5, 10, ...[1, 2, 3, 1000, 500], 4, 5];

// console.log(numbers);
// const temp = [18, 14, 12, 21, 17, 29, 24];
// // console.log(Math.min(1, 2, 3, 4, 5, 6, 81));
// console.log(Math.max(...temp));
// console.log(temp);

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = Object.assign({}, a, b);
// console.log(c);

// console.log(...'qwe');

// const c = {
//     name: 'Mango',
//     ...a,
//     ...b,
// };
// console.log(c);
// const playlist = {
//     name: 'Super',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// }
// const { rating, tracks, name, track, author = 777 } = playlist;
// // console.log(name);
// console.log(author);
// console.log(tracks);

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this l
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// const book = {
//     title: "Последнее королевство",
//     author: "Бернард Корнуэлл",
//     genres: ["историческая проза", "приключения"],
//     public: true,
//     rating: 8.38,
// };

// book.rating = 9;
// book.public = false;
// book.genres.push("драма");
// book.rating = 10;
// book.title = 'untitled';


// console.log(book);
// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };


// console.log(apartment);
// const naame = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//     // Change code below this line
//     naame,
//     price,
//     image,
//     tags,
//     // Change code above this line
// };
// console.log(product);
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//     // Change code below this line
//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",


//     // Change code above this line
// };
// console.log(credentials);

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const product = {
//     price: 10,
// };

// const newProduct = Object.create(product);
// // newProduct.price = 150;

// for (const key in newProduct) {
//     console.log(newProduct[key]);
// };

// console.log(newProduct);

// const newNewProd = Object.create(newProduct);
// console.log(newNewProd);
// for (const key in newNewProd) {
//     console.log(newNewProd[key]);
// }
// console.log(newNewProd.hasOwnProperty('price'));
// console.log(newProduct.hasOwnProperty('price'));
// console.log(product.hasOwnProperty('price'));

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line
//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//     console.log(apartment);
//     // Change code above this line
// }

// function countProps(object) {
//     let propCount = 0;

//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//         console.log(Count);
//     }
//     // Change code above this line
//     return propCount;

// }
// countProps({ name: "Mango", age: 2 });
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 });

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     // if (apartment.hasOwnProperty(key)) {
//     values.push(apartment[key]);
//     // }
//     // console.log(key);
//     console.log(values);
//     // console.log(apartment);
// }

// function countProps(object) {
//     // Change code below this line
//     let propCount = 0;
//     const keys = Object.keys(object);

//     return keys.length;



//     // Change code above this line
// }
// let object = { name: "Mango", age: 2 };

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// console.log(keys);
// console.log(values);

// const colors = [
//     { hex: '#f44336', rgb: '244,67,54' },
//     { hex: '#2196f3', rgb: '33,150,243' },
//     { hex: '#4caf50', rgb: '76,175,80' },
//     { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line
//     for (const product of products) {
//         if (productName === product.name) {


//         }
//         else
//             return null;

//     }
//     return product.price;
//     // Change code above this line
// }
// getProductPrice("Scanner");

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line

//     const newArray = [];
//     for (const product of products) {
//         if (product.hasOwnProperty(propName)) {
//             newArray.push(product[propName]);
//         }
//     }
//     return newArray;
//     console.log(newArray);


//     // Change code above this line
// }

// getAllPropValues(Scanner)

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// console.log(products[3].price * products[1].quantity);


// function calculateTotalPrice(productName) {
//     // Пиши код ниже этой строки
//     let totalPrice = 0;
//     for (const product of products) {
//         if (product.hasOwnProperty(productName)) {
//             totalPrice = products.price * products.quantity;
//         }
//     }
//     return totalPrice;
//     console.log(totalPrice)

//     // Пиши код выше этой строки
// // }
// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// console.log(highTemperatures);
// Change code below this line

// const meanTemperature { yesterday: highYesterday, today: highToday, tomorrow: highTomorrow } = highTemperatures;


// // console.log(high);
// const temperatures = {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
// }
// console.log(temperatures);

// // const { today: { low: lowToday, high: highToday }, tomorrow: { low: lowtomorrow, high: hightomorrow } } = temperatures;

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// 29
// const defaultSettings = {
//     theme: 'light',
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings);

// 30
// const data = { category: "Homemade", priority: "Low", text: "Take out the trash" };
// const completed = false;
// const category = 'General';
// const priority = 'Normal';
// // Change code below this line
// const newData = { completed, category, priority, ...data };
// // return newData;
// console.log(newData);
//     // Change code above this line
// 31
// function multiply() {
//     // ...
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);
// function multiply(...args) {
//     console.log(multiply); // массив всех аргументов
// }
// function multiply()
// function add(...args) {
//     return add;
//     // Change code above this line

// }
// function add();
// console.log(add);
// const potionIndex = this.potions.indexOf(potionName);
// potions.splice(potionIndex, 1);

const atTheOldToad = {
    potions: [
      { name: 'Speed potion', price: 460 },
      { name: 'Dragon breath', price: 780 },
      { name: 'Stone skin', price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },
    addPotion(potionName) {
      if (this.potions.includes(potionName)) {
        return `Potion ${potionName} is already equipped!`;
      }
  
      this.potions.push(potionName);
    },
    removePotion(potionName) {
      
        const potionIndex = this.potions.indexOf(potionName);
  
      if (potionIndex === -1) {
        return `Potion ${potionName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1);

      removePotion(potionName) {
        for (const potion of this.potions){
        if (potion.name === potionName){
        this.potions.splice(this.potions.indexOf(potion), 1);}
        }
    },
    updatePotionName(oldName, newName) {
      const potionIndex = this.potions.indexOf(oldName);
  
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
  
      this.potions.splice(potionIndex, 1, newName);
    },
    countTotalPrice(){
        const { potions } = this;
        let total = 0;
        for (const { price } of potions){
            total += price;
            
        } 
        return total;
    },
    clearPotionName(){
        this.potions = [];
    },
    // Change code above this line
    // console.log(potions).
  };
  
//   console.log(atTheOldToad.potions);
  
console.log(atTheOldToad.addPotion('ganj'));
console.log(atTheOldToad.removePotion('Dragon breath'));
console.log(atTheOldToad.countTotalPrice());

console.log(atTheOldToad.clearPotionName());


  console.log(atTheOldToad.getPotions());


// const rgb = [255, 100, 80];
// let a, b, c, alfa;
// [a, b, c, alfa = 50] = rgb;
// console.log(a, b, c, alfa);
// console.log(`red: ${a}, green: ${b}, blue: ${c}`);
// const [aa, ...colors] = rgb;
// console.log(aa, colors);
// const [aaa, , ccc] = rgb;
// console.log(aaa, ccc);
// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6, 
// };

// const entries = Object.entries(authors);
// for (const [name, rating] of entries){
//     // console.log(entry);
//     // const name = entry [0];
//     // const rating = entry [1];
//     // const  = entry;
//     console.log(name, rating);

// }
// console.log(Math.max(...rating));
// console.log(Math.min(...rating));
// const showProfileInfo = function(userProfile){
// console.log(userProfile);
// };

// const profile = {
//     name: 'Jacues',
//     tag: 'jgLuke',
//     location: 'Jamaica',
//     avatar: 'https',
//     stats: {
//         folowers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo (profile);
// const {name, tag, location, ...restProps} = profile;
// console.log(name, tag, location);
// console.log(restProps);


