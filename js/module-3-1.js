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

const fn = function () {
    // console.log('hello');
}
fn.hello = '=)';
// console.dir(fn);

// МЕТОДЫ МАССИВА!
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
    changeName(newName) {
        console.log('This inside changeName:', this);
        this.name = newName;


    },
    addTrack(track) {
        this.tracks.push(track);
        this.trackCount = this.tracks.length;
    },
    updateRating(newRating) {
        this.rating = newRating;
    }
}



// playlist.getName(5);
// playlist.getName1();
playlist.changeName('Новое имя!');
playlist.addTrack('Новый трек!');
playlist.updateRating(10);
console.log(playlist);

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

const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: true },
    { name: 'Ajax', online: false },
    { name: 'Kong', online: false },
];
// friends[1].newprop = 555;
console.table(friends);

// for (const friend of friends){
//     console.log(friend);
// friend.newprop = 555;

// }
// console.log(friends);

const findFriendByName = function (allFriends, friendName) {
    for (const friend of allFriends) {
        // console.log(friend);
        // console.log(friend.name);
        if (friend.name === friendName) {
            return 'Нашли!!';
        }
        return 'NOT FINNED! :('
    }
    // console.log(allfriends.includes(name));

}

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

const getFriendsByOnlineStatus = function (allFriends) {
    const friendsByStatus = {
        online: [],
        ofline: [],
    };
    for (const friend of allFriends) {
        console.log(friend);
        if (friend.online) {
            friendsByStatus.online.push(friend);
            continue;   // }
            // else if (!friend.online) {
            //     offlineFriends.push(friend);
            // }
        }

        friendsByStatus.ofline.push(friend);


        //     return console.log(offlineFriends);

    }
    return console.log(friendsByStatus);
}





