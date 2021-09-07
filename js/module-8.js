// Всплытие событий
const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child')
}


function onParentClick(evt) {
    console.log('onParentClick');
    console.log('onParentClick -> evt.target', evt.target);
    console.log('onParentClick -> evt.current.target', evt.currentTarget);
};

function onChildClick(evt) {
    console.log('onChildClick');
    console.log('onChildClick -> evt.target', evt.target);
    console.log('onChildClick -> evt.current.target', evt.currentTarget);
}
function onInnerClickChild(evt) {
    console.log('onInnerClickChild');
    console.log('onInnerClickChild -> evt.target', evt.target);
    console.log('onInnerClickChild -> evt.current.target', evt.currentTarget);
};

refs.parent.addEventListener('click', onParentClick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click', onInnerClickChild);

// Делегирование событий
const nav = document.querySelector(".js-nav");

nav.addEventListener("click", onClick);

function onClick(evt) {
    // Фильтр цели клика
    if (evt.target.nodeName !== 'A') {
        return
    }
    console.log(evt.target.nodeName);
    console.log(evt.target.textContent);

}
// Добавление элементов 
const addEl = document.querySelector('.js-add-button');
console.log(addEl);
const elCounter = 9;
addEl.addEventListener('click', onAddElClick);
function onAddElClick() {
    const elem = document.createElement('li');
    elem.textContent = `<a href="#" class="btn">Дополнительная ${elCounter}</a>`;
    nav.appendChild(elem);
}
const tagsContainer = document.querySelector('.js-nav');
let selectedBtn = null;
// console.log(tagsContainer);
tagsContainer.addEventListener('click', ontagsContainerClick);

function ontagsContainerClick(evt) {
    if (evt.target.nodeName !== "BUTTON") {
        return;
    }
    const currentActiveBtn = document.querySelector('.active');

    if (currentActiveBtn) {
        currentActiveBtn.classList.remove('active');
    }
    const nextActiveBtn = evt.target;
    // console.log(evt.target);
    nextActiveBtn.classList.add('active');
    // console.log(nextActiveBtn);
    selectedBtn = nextActiveBtn.dataset.value;
    console.log(selectedBtn);
}

// function handleNavClick(event) {
//     event.preventDefault();

//     const target = event.target;
//     console.log("event target: ", target); // посмотрите что тут

//     // Проверяем тип узла, если не ссылка выходим из функции
//     if (target.nodeName !== "A") return;

//     setActiveLink(target);
// }

function setActiveLink(nextActiveLink) {
    const currentActiveLink = nav.querySelector("a.active");

    if (currentActiveLink) {
        currentActiveLink.classList.remove("active");
    }

    nextActiveLink.classList.add("active");
}
