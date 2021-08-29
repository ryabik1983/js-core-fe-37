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
selectedById.style.textTransform = 'uppercase';
selectedById.style.fontSize = '2rem';
console.log(selectedById); // ...

const menuItemsByTagName = document.querySelectorAll("li");
console.log(menuItemsByTagName); // ...

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log(menuItemsByClass); // ...

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = '#BF4E30';
console.log(firstMenuItem); // ...
const menuItem = document.querySelector(".menu-item-1");
console.log(menuItem);
const navEl = document.querySelector('ul');
console.dir(navEl);
