// Всплытие событий
// const refs = {
//     parent: document.querySelector('#parent'),
//     child: document.querySelector('#child'),
//     innerChild: document.querySelector('#inner-child')
// }


// function onParentClick(evt) {
//     console.log('onParentClick');
//     console.log('onParentClick -> evt.target', evt.target);
//     console.log('onParentClick -> evt.current.target', evt.currentTarget);
// };

// function onChildClick(evt) {
//     console.log('onChildClick');
//     console.log('onChildClick -> evt.target', evt.target);
//     console.log('onChildClick -> evt.current.target', evt.currentTarget);
// }
// function onInnerClickChild(evt) {
//     console.log('onInnerClickChild');
//     console.log('onInnerClickChild -> evt.target', evt.target);
//     console.log('onInnerClickChild -> evt.current.target', evt.currentTarget);
// };

// refs.parent.addEventListener('click', onParentClick);
// refs.child.addEventListener('click', onChildClick);
// refs.innerChild.addEventListener('click', onInnerClickChild);

// Делегирование событий
// const nav = document.querySelector(".js-nav");

// nav.addEventListener("click", onClick);

// function onClick(evt) {
//     // Фильтр цели клика
//     if (evt.target.nodeName !== 'A') {
//         return
//     }
//     console.log(evt.target.nodeName);
//     console.log(evt.target.textContent);

// }
// Добавление элементов 
// const addEl = document.querySelector('.js-add-button');
// console.log(addEl);
// const elCounter = 9;
// addEl.addEventListener('click', onAddElClick);
// function onAddElClick() {
//     const elem = document.createElement('li');
//     elem.textContent = `<a href="#" class="btn">Дополнительная ${elCounter}</a>`;
//     nav.appendChild(elem);
// }
// const tagsContainer = document.querySelector('.js-nav');
// // let selectedBtn = null;
// console.log(tagsContainer);
// const selectedTags = new Set();
// tagsContainer.addEventListener('click', ontagsContainerClick);

// function ontagsContainerClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   // console.log(evt.target.textContent);
//   const btn = evt.target;
//   const tag = btn.dataset.value;
//   const isActive = btn.classList.contains('active');
//   if (isActive) {
//     selectedTags.delete(tag)
//   }
//   else {
//     selectedTags.add(tag)
//   }


//   btn.classList.toggle('active')
//   console.log(selectedTags);

//   // selectedTags.add(btn.dataset.value)
//   // console.log(selectedTags);
//   // console.log(selectedTags.size);
//   // console.log(selectedTags.has('css'));

// }


//     const currentActiveBtn = document.querySelector('.active');

//     if (currentActiveBtn) {
//         currentActiveBtn.classList.remove('active');
//     }
//     const nextActiveBtn = evt.target;
//     // console.log(evt.target);
//     nextActiveBtn.classList.add('active');
//     // console.log(nextActiveBtn);
//     selectedBtn = nextActiveBtn.dataset.value;
//     console.log(selectedBtn);
// }

// function handleNavClick(event) {
//     event.preventDefault();

//     const target = event.target;
//     console.log("event target: ", target); // посмотрите что тут

//     // Проверяем тип узла, если не ссылка выходим из функции
//     if (target.nodeName !== "A") return;

//     setActiveLink(target);
// }

// function setActiveLink(nextActiveLink) {
//     const currentActiveLink = nav.querySelector("a.active");

//     if (currentActiveLink) {
//         currentActiveLink.classList.remove("active");
//     }

//     nextActiveLink.classList.add("active");
// }

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

function createItems(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
      <a
        class="gallery__link"
        href= ${original}
      >
        <img
          class="gallery__image"
          src= ${preview}
          data-source=${original}
          alt=${description}
        />
      </a>
    </li>`
    })
    .join('');
};
const markup = createItems(galleryItems);
// console.log(markup);
const galleryList = document.querySelector('.js-gallery');
// console.log(galleryList);
galleryList.insertAdjacentHTML("afterbegin", markup);
// console.log(galleryList);
const options = {
  root: galleryList,
  rootMargin: '0px',
  threshold: 0,

}
const observer = new IntersectionObserver(callback, options);
function callback(entries) {
  entries.forEach((entry) => {
    console.log(entry);
  })
};
// console.log(galleryList.children);
const items = [...galleryList.children];
console.log(items);

items.forEach((item) => observer.observe(item));


// const galleryList = document.querySelector('.js-gallery');
// // console.log(galleryList);
// // Вешаем слушателя события на список
// galleryList.addEventListener('click', onGalleryListClick)
// function onGalleryListClick(evt) {
//   //     // Фильтр цели клика
//   const isGalleryImageEl = evt.target.classList.contains('gallery__image');
//   if (!isGalleryImageEl) {
//     return;
//   }
//   console.log(evt.target.dataset.source);
// };

// const galleryMarkup = createGalleryCardsMarkup(galleryItems);
// // console.log(galleryMarkup);
// galleryList.insertAdjacentHTML('beforeend', galleryMarkup)

// // console.log(createGalleryCardsMarkup(galleryItems));
// function createGalleryCardsMarkup(items) {
//   return items
//     .map(({ preview, original, description }) => {
//       return `

//     <li class="gallery__item">
//         <a
//           class="gallery__link"
//           href="${original}"
//         >
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </li>
//     `;
//     }
//     )
//     .join('');
// }




// const markup = galleryItems.map(item =>
//   `Это метод!`
// );
// console.log(markup);

