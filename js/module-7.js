// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site_nav__item')

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site_nav__link')
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = "/profile";

// console.log(navLinkEl);
// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);
// const selectedById = document.querySelector('#menu');
// // selectedById.style.textTransform = 'uppercase';
// // selectedById.style.fontSize = '2rem';
// console.log(selectedById); // ...

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log(menuItemsByTagName); // ...

// // const menuItemsByClass = document.querySelectorAll(".menu-item-2");
// // console.log(menuItemsByClass); // ...

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = '#BF4E30';
// console.log(firstMenuItem); // ...
// const menuItem = document.querySelector(".menu-item-1");
// console.log(menuItem);
// // const navEl = document.querySelector('ul');
// // console.dir(navEl);
// const navEl = menu.querySelector("li");
// console.log(navEl);
// const heroTitleEl = document.querySelector('.hero_title');
// console.log(heroTitleEl);
// console.log(heroTitleEl.textContent);
// heroTitleEl.textContent = 'How do you do?';
// const actions = document.querySelectorAll('.js-actions button');
// console.log(actions[1].dataset.action);
// const inputEl = document.querySelector('.js-input');

// inputEl.value = 'qweqwe';
// console.log(inputEl.value);
// const menuEl = document.querySelector('.menu');
// console.log(menuEl.classList);
// menuEl.classList.add('super-cool');
// console.log(menuEl.classList);
// menuEl.classList.toggle('fusk');
// console.log(menuEl.classList);
// // menuEl.classList.toggle('fusk');
// // console.log(menuEl.classList);
// menuEl.classList.replace('fusk', 'fuck');
// console.log(menuEl.classList);
// console.log(menuEl.classList.contains('fuck'));
// console.log(menuEl.classList.contains('fusk'));

// const currentPageUrl = '/blog';
// const linkEl = document.querySelector(`.menu-item-link[href="${currentPageUrl}"]`);
// console.log(linkEl);
// linkEl.classList.add('menu-item-link__current');
// console.log(linkEl);

const navEl = document.querySelector('.menu');
console.log(navEl);
// const firstNavEl = navEl.firstElementChild;
// console.log(firstNavEl);
const navElFirsrChild = navEl.firstChild;
console.log(navElFirsrChild);

const navElLastChild = navEl.lastChild;
console.log(navElLastChild);

const navElementLastChild = navEl.lastElementChild;
console.log(navElementLastChild);

const navElementFirstChild = navEl.firstElementChild;
console.log(navElementFirstChild);
const menuItem2 = document.querySelector('.menu-item-2');
console.log(menuItem2);
const prevSib = menuItem2.previousElementSibling;
console.log(prevSib);
const nextSib = menuItem2.nextElementSibling;
console.log(nextSib);

const elTitle = document.createElement('h2');
console.log(elTitle);
elTitle.classList.add('page-title');
elTitle.textContent = 'Это дополнительный заголовок!';
const imgEl = document.createElement('img');
console.log(imgEl);
// https://pixabay.com/photos/boy-buffalo-herder-ha-giang-vietnam-6559419/
// imgEl.src = 'https://pixabay.com/photos/boy-buffalo-herder-ha-giang-vietnam-6559419/';
// document.body.appendChild(imgEl);

document.body.appendChild(elTitle);
const imageEl = document.createElement('img');
console.log(imageEl);

// const title = document.querySelector('h1');
// console.log(title);
// console.dir(title); 
const titleById = document.querySelector('#title');
console.log(titleById);
const titleByClass = document.querySelector('.hero_title');
console.log(titleByClass);
const titleByDataAtribute = document.querySelector('[data-name = "data-title"]');
console.log(titleByDataAtribute);
const selectedByParent = document.querySelector ('body>input');
console.log(selectedByParent);
