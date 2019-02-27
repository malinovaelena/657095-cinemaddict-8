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

/***/ "./src/cardElement.js":
/*!****************************!*\
  !*** ./src/cardElement.js ***!
  \****************************/
/*! exports provided: Cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return Cards; });

/*const getcardElement = () => {

  const cardHtml = () => {
    return ` <article class="film-card">
      <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
    <p class="film-card__rating">9.8</p>
      <p class="film-card__info">
      <span class="film-card__year">2018</span>
      <span class="film-card__duration">1h&nbsp;13m</span>
    <span class="film-card__genre">Comedy</span>
      </p>
      <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
    <button class="film-card__comments">13 comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
  };
  const random = 7;
  const containersforCard = document.querySelectorAll('.films-list__container');
  for (let i = 0; i < containersforCard.length; i++) {
  containersforCard[i].insertAdjacentHTML('beforeend', cardHtml());
  };

};
//export {getcardElement};
*/
/*
const BIGG = () => {
  const filterelements = document.querySelectorAll('.main-navigation__item');
  filterelements.forEach(function(elem, i, arr) {
    const removeCards = () => {
      const containerForFilms = document.querySelector('.films-list__container');
      const filmCard = containerForFilms.querySelectorAll('.film-card');
      for (let r = 0; r < filmCard.length; r++) {
        containerForFilms.removeChild(filmCard[r]);
      }
    };
    const renderCards = () => {
      const cardHtml = () => {
        return ` <article class="film-card">
      <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
    <p class="film-card__rating">9.8</p>
      <p class="film-card__info">
      <span class="film-card__year">2018</span>
      <span class="film-card__duration">1h&nbsp;13m</span>
    <span class="film-card__genre">Comedy</span>
      </p>
      <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
    <button class="film-card__comments">13 comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
      };
      const randomAmount = Math.round(Math.random() * (100));
      const containersCard = document.querySelector('.films-list__container');
      for (let k = 0; k < randomAmount; k++) {
        containersCard.insertAdjacentHTML('beforeend', cardHtml());
      }
    };
    const bindFilterElement = (elem) => {
      elem.onclick = () => {
        removeCards();
        renderCards();
      };
    };
  });
  let elem = filterelements[i];
  bindFilterElement(elem);
};
export {BIGG};
*/
const Cards = (where, html) => {
  const filtersArr = document.querySelectorAll('.main-navigation__item');
  for (let k = 0; k < filtersArr.length; k++) {
    const removeCards = () => {
      const arrContainers = document.querySelectorAll('.films-list__container');
      for (let i = 0; i < arrContainers.length; i++) {
        const arrCards = arrContainers[i].querySelectorAll('.film-card');
        for (let j = 0; j < arrCards.length; j++) {
          arrContainers[i].removeChild(arrCards[j]);
        }
      }
    };
    const renderCard = () => {

      const arrContainersforFilm = document.querySelectorAll('.films-list__container');
      const randomNumber = Math.ceil(Math.random()*10);
      for (let r = 0; r < arrContainersforFilm.length; r++) {
        for (let l = 0; l < randomNumber; l++) {
          const cardHtml = () => {
            return ` <article class="film-card">
      <h3 class="film-card__title">The Assassination Of Jessie James By The Coward Robert Ford</h3>
    <p class="film-card__rating">9.8</p>
      <p class="film-card__info">
      <span class="film-card__year">2018</span>
      <span class="film-card__duration">1h&nbsp;13m</span>
    <span class="film-card__genre">Comedy</span>
      </p>
      <img src="./images/posters/three-friends.jpg" alt="" class="film-card__poster">
      <p class="film-card__description">A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.</p>
    <button class="film-card__comments">13 comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
          };
          arrContainersforFilm[r].insertAdjacentHTML(`beforeEnd` ,cardHtml());
        }
      }
    };
    const render = (filter) => {
      filter.onclick = () => {
        removeCards();
        renderCard();
      }
    };
    render(filtersArr[k]);
  }
};




/***/ }),

/***/ "./src/filterElement.js":
/*!******************************!*\
  !*** ./src/filterElement.js ***!
  \******************************/
/*! exports provided: getFilterElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFilterElement", function() { return getFilterElement; });

const getFilterElement = () => {
  const container = document.querySelector('.main-navigation');
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
  for (let i = 0; i < 4; i++ ) {
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
/* harmony import */ var _filterElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filterElement */ "./src/filterElement.js");
/* harmony import */ var _cardElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardElement */ "./src/cardElement.js");



Object(_filterElement__WEBPACK_IMPORTED_MODULE_0__["getFilterElement"])();
Object(_cardElement__WEBPACK_IMPORTED_MODULE_1__["Cards"])();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map