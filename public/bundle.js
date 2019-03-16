/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/card-element.js":
/*!*****************************!*\
  !*** ./src/card-element.js ***!
  \*****************************/
/*! exports provided: cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
const cards = () => {
  const filtersArr = document.querySelectorAll('.main-navigation__item');
  for (let i = 0; i < filtersArr.length; i++) {
    const removeCards = () => {
      const arrContainers = document.querySelectorAll('.films-list__container');
      for (let j = 0; j < arrContainers.length; j++) {
        const arrCards = arrContainers[j].querySelectorAll('.film-card');
        for (let k = 0; k < arrCards.length; k++) {
          arrContainers[j].removeChild(arrCards[k]);
        }
      }
    };
    const renderCard = () => {
      const arrContainersforFilm = document.querySelectorAll('.films-list__container');
      const randomNumber = Math.ceil(Math.random()*10);
      for (let l = 0; l < arrContainersforFilm.length; l++) {
        const renderFilterElement = (filter) => {
          filter.onclick = () => {
            removeCards();
            renderCard();
          }
        };
        renderFilterElement(filtersArr[i]);

        for (let t = 0; t < randomNumber; t++) {
          const getFilmCard = () => ({
            title: () => {
              const titleArr = ['Harry Potter',
                'Intouchables',
                'Inception',
                'Fight Club',
                'Knockin\' on Heaven\'s Door',
                'Pulp Fiction',
                'Interstellar',
                'Lock, Stock and Two Smoking Barrels',
                'The Matrix',
                'Catch Me If You Can',
                'The Departed',
                'Snatch.',
                'Shutter Island',
                'The Dark Knight'
              ];
              const getRandomTitle = Math.round(Math.random()*(titleArr)-1);
              return titleArr[getRandomTitle];
            },
            //rating: Math.round(Math.random()*10),
            year:'1995',
            duration: '1 h 26 m',
            genre: function() {
              const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
              const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
              return arrGenre[getRandomAmout];
            },
            picture:function(){
              const arrPicture = [`accused`,`blackmail`,`blue-blazes`,`fuga-da-new-york`,`moonrise`,`three-friends`];
              const getRandomAmout = Math.round(Math.random()* (arrPicture.length));
              return './public/images/posters/' + arrPicture[getRandomAmout] + '.jpg';
            },
            decription:function(){
              const descriptionArr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.
      Fusce tristique felis at fermentum pharetra.
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
      Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
      In rutrum ac purus sit amet tempus.`.split('.');
              const getRandomAmount = Math.round((Math.random()*2)+1);
              for(let i = 0; i < getRandomAmount; i++) {
                const getRandomSentence = Math.round(Math.random()*(descriptionArr.length - 1)+1);
                return descriptionArr[getRandomSentence];
              }
            },
            comments:Math.round(Math.random()*10)
          });
          const objFilmCard = {
            title:getFilmCard.title(), //и тд.
            rating:getFilmCard.rating(),
            year:getFilmCard.year,
            duration: getFilmCard.duration,
            genre:getFilmCard.genre(),
            picture:getFilmCard.picture(),
            description:getFilmCard.description(),
            comments:getFilmCard.comments()
          };
          const cardHtml = (objFilmCard) => {
            return ` <article class="film-card">
      <h3 class="film-card__title">${objFilmCard.title}</h3>
    <p class="film-card__rating">${objFilmCard.rating}</p>
      <p class="film-card__info">
      <span class="film-card__year">${objFilmCard.year}</span>
      <span class="film-card__duration">${objFilmCard.duration}</span>
    <span class="film-card__genre">${objFilmCard.genre}</span>
      </p>
      <img src="${objFilmCard.picture}" alt="" class="film-card__poster">
      <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
    <button class="film-card__comments">${objFilmCard.comments} comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
          };
          arrContainersforFilm[l].insertAdjacentHTML(`beforeEnd` ,cardHtml());
        }
      }
    };
  }
};
const getFilmCard = {
  title: () => {
    const titleArr = ['Harry Potter',
      'Intouchables',
      'Inception',
      'Fight Club',
      'Knockin\' on Heaven\'s Door',
      'Pulp Fiction',
      'Interstellar',
      'Lock, Stock and Two Smoking Barrels',
      'The Matrix',
      'Catch Me If You Can',
      'The Departed',
      'Snatch.',
      'Shutter Island',
      'The Dark Knight'
    ];
    const getRandomTitle = Math.round(Math.random()*(titleArr)-1);
    return titleArr[getRandomTitle];
  },
    rating: Math.round(Math.random()*10),
    year:'1995',
    duration: '1 h 26 m',
    genre: function() {
    const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
    const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
    return arrGenre[getRandomAmout];
  },
  picture:function(){
    const arrPicture = [`accused`,`blackmail`,`blue-blazes`,`fuga-da-new-york`,`moonrise`,`three-friends`];
    const getRandomAmout = Math.round(Math.random()* (arrPicture.length));
    return './public/images/posters/' + arrPicture[getRandomAmout] + '.jpg';
  },
  decription:function(){
    const descriptionArr = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget.
      Fusce tristique felis at fermentum pharetra.
      Aliquam id orci ut lectus varius viverra.
      Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
      Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
      Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
      Sed sed nisi sed augue convallis suscipit in sed felis.
      Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.
      In rutrum ac purus sit amet tempus.`.split('.');
    const getRandomAmount = Math.round((Math.random()*2)+1);
    for(let i = 0; i < getRandomAmount; i++) {
      const getRandomSentence = Math.round(Math.random()*(descriptionArr.length - 1)+1);
      return descriptionArr[getRandomSentence];
    }
  },
  comments:Math.round(Math.random()*10)
};




/***/ }),

/***/ "./src/filter-element.js":
/*!*******************************!*\
  !*** ./src/filter-element.js ***!
  \*******************************/
/*! exports provided: getFilterElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterElement", function() { return getFilterElement; });
const getFilterElement = () => {
  const container = document.querySelector('.main-navigation');
  const amountFilters = 4;
  const filter = {
    HREF:[`all`, `watchlist`, `history`, `favorites`],
    NAME:[`All movies` ,`Watchlist`, `History`, `Favorites`],
    AMOUNT: [39,12,13,14]
  };
  const elementHtml = (href,name, amount) => {
    return `
    <a href="#${href}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${amount}</span></a>
        `;
  };
  for (let i = 0; i < amountFilters; i++ ) {
    container.insertAdjacentHTML(`beforeEnd`, elementHtml(filter.HREF[i],filter.NAME[i],filter.AMOUNT[i]));
  };
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filter_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter-element */ "./src/filter-element.js");
/* harmony import */ var _card_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-element */ "./src/card-element.js");


Object(_filter_element__WEBPACK_IMPORTED_MODULE_0__["getFilterElement"])();
Object(_card_element__WEBPACK_IMPORTED_MODULE_1__["cards"])();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map