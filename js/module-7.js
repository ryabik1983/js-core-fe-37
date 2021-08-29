// const navItemEl = document.createElement('li');
// navItemEl.classList.add('site_nav__item')

// const navLinkEl = document.createElement('a');
// navLinkEl.classList.add('site_nav__link')
// navLinkEl.textContent = 'Личный кабинет';
// navLinkEl.href = "/profile";

// console.log(navLinkEl);
// navItemEl.appendChild(navLinkEl);
// console.log(navItemEl);
const selectedById = document.querySelector('#menu');
// selectedById.style.textTransform = 'uppercase';
// selectedById.style.fontSize = '2rem';
console.log(selectedById); // ...

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName); // ...

// const menuItemsByClass = document.querySelectorAll(".menu-item-2");
// console.log(menuItemsByClass); // ...

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = '#BF4E30';
console.log(firstMenuItem); // ...
const menuItem = document.querySelector(".menu-item-1");
console.log(menuItem);
// const navEl = document.querySelector('ul');
// console.dir(navEl);
const navEl = menu.querySelector("li");
console.log(navEl);
const heroTitleEl = document.querySelector('.hero_title');
console.log(heroTitleEl);
console.log(heroTitleEl.textContent);
heroTitleEl.textContent = 'How do you do?';
const actions = document.querySelectorAll('.js-actions button');
console.log(actions[1].dataset.action);
const inputEl = document.querySelector('.js-input');

inputEl.value = 'qweqwe';
console.log(inputEl.value);
const menuEl = document.querySelector('.menu');
console.log(menuEl.classList);
menuEl.classList.add('super-cool');
console.log(menuEl.classList);