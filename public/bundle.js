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

/***/ "./src/Card.js":
/*!*********************!*\
  !*** ./src/Card.js ***!
  \*********************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ "./src/createElem.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");



class Card extends _component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(data) {
    super();
      this._title = data.title;
      this._rating = data.rating;
      this._year = data.year;
      this._duration = data.duration;
      this._genre = data.genre;
      this._picture = data.picture;
      this._description = data.description;
      this._comments = data.comments;
  }
  set onClick(fn) {
    this._onClick = fn;
  }
  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onOpenButtonClick.bind(this));
  }
  update(data) {
  }
  get template() {
    return `<article class="film-card">
      <h3 class="film-card__title">${this._title}</h3>
    <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
      <span class="film-card__year">${this._year}</span>
      <span class="film-card__duration">${moment().format('dddd')}</span>
    <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._picture}" alt="" class="film-card__poster">
      <p class="film-card__description">${this._description}</p>
    <button class="film-card__comments">${this._comments} comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
  }
}




/***/ }),

/***/ "./src/Pop-up.js":
/*!***********************!*\
  !*** ./src/Pop-up.js ***!
  \***********************/
/*! exports provided: Popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Popup", function() { return Popup; });
/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ "./src/createElem.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./src/component.js");



class Popup extends _component__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(data) {
    super();
      this._title = data.title;
      this._rating = data.rating;
      this._year = data.year;
      this._duration = data.duration;
      this._genre = data.genre;
      this._picture = data.picture;
      this._description = data.description;
      this._comments = data.comments;
      this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
      this._onSubmit = null;
  }
  _processForm(formData) {
    const entry = {
      title: ``,
      color: ``
    };
    const popUpMapper = Popup.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      popUpMapper[property] && popUpMapper[property](value);
    }

    return entry;
  }
  //важно!!!!!!!!!!!
  _onSubmitButtonClick(evt) {
    if (evt.keyCode === ( true && 17)) {
      console.log('hhhh');
      const formData = new FormData(this._element.querySelector(`.film-details__inner`));
      const newData = this._processForm(formData);
      typeof this._onSubmit === `function` && this._onSubmit(newData);

      //this.update(newData);
    };
  }

  get element() {
    return this._element;
  }
  set onClick(fn) {
    this._onClick = fn;
  }
  set onSubmit(fn) {
    this._onSubmit = fn;
  }
  bind() {
    this._element.querySelector(`.film-details__close-btn`).addEventListener(`click`, this._onCloseButtonClick.bind(this));
    this._element.querySelector(`.film-details__inner`).addEventListener(`keydown`, this._onSubmitButtonClick.bind(this));
  }
  unbind() {
    this._element.querySelector(`.film-details__close-btn`).removeEventListener(`click`, this._onCloseButtonClick.bind(this));
  }
  static createMapper(target) {
    return {
      comments: (value) => target.comments.add(value),
      rating: (value) => target.rating.add(value)
    }
  }
  get template() {
    return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${this._picture}" alt="incredables-2">

        <p class="film-details__age">18+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${this._title}</h3>
            <p class="film-details__title-original">${this._title}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${this._rating}</p>
            <p class="film-details__user-rating">Your rate 8</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">Brad Bird</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">Brad Bird</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">Samuel L. Jackson, Catherine Keener, Sophia Bush</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">15 June 2018 (USA)</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">118 min</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">USA</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
              <span class="film-details__genre">Animation</span>
              <span class="film-details__genre">Action</span>
              <span class="film-details__genre">Adventure</span></td>
          </tr>
        </table>

        <p class="film-details__film-description">
          The Incredibles hero family takes on a new mission, which involves a change in family roles:
          Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.
        </p>
      </div>
    </div>

    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>

    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments}</span></h3>

      <ul class="film-details__comments-list">
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">😴</span>
          <div>
            <p class="film-details__comment-text">So long-long story, boring!</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">Tim Macoveev</span>
              <span class="film-details__comment-day">3 days ago</span>
            </p>
          </div>
        </li>
      </ul>

      <div class="film-details__new-comment">
        <div>
          <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
          <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">😴</label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-neutral-face" value="neutral-face" checked>
            <label class="film-details__emoji-label" for="emoji-neutral-face">😐</label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-grinning" value="grinning">
            <label class="film-details__emoji-label" for="emoji-grinning">😀</label>
          </div>
        </div>
        <label class="film-details__comment-label">
          <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here" name="comment"></textarea>
        </label>
      </div>
    </section>

    <section class="film-details__user-rating-wrap">
      <div class="film-details__user-rating-controls">
        <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
        <button class="film-details__watched-reset" type="button">undo</button>
      </div>

      <div class="film-details__user-score">
        <div class="film-details__user-rating-poster">
          <img src="images/posters/blackmail.jpg" alt="film-poster" class="film-details__user-rating-img">
        </div>

        <section class="film-details__user-rating-inner">
          <h3 class="film-details__user-rating-title">Incredibles 2</h3>

          <p class="film-details__user-rating-feelings">How you feel it?</p>

          <div class="film-details__user-rating-score">
            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1">
            <label class="film-details__user-rating-label" for="rating-1">1</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2">
            <label class="film-details__user-rating-label" for="rating-2">2</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3">
            <label class="film-details__user-rating-label" for="rating-3">3</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4">
            <label class="film-details__user-rating-label" for="rating-4">4</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5" checked>
            <label class="film-details__user-rating-label" for="rating-5">5</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6">
            <label class="film-details__user-rating-label" for="rating-6">6</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7">
            <label class="film-details__user-rating-label" for="rating-7">7</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8">
            <label class="film-details__user-rating-label" for="rating-8">8</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9">
            <label class="film-details__user-rating-label" for="rating-9">9</label>

          </div>
        </section>
      </div>
    </section>
  </form>
</section>`;
  };

}





/***/ }),

/***/ "./src/component.js":
/*!**************************!*\
  !*** ./src/component.js ***!
  \**************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _createElem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElem */ "./src/createElem.js");

class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
  }
  get template() {
    throw new Error(`You have to define template.`);
  }
  _onOpenButtonClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
  _onCloseButtonClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
  _onSubmitButton() {
    this._onSubmit = this._onSubmit.bind(this);
  }
  set onClick(fn) {
    this._onClick = fn;
  }
  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onOpenButtonClick.bind(this));
  }
  unbind() {
    this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onOpenButtonClick.bind(this));
  }

  render() {
    this._element = Object(_createElem__WEBPACK_IMPORTED_MODULE_0__["default"])(this.template);
    this.bind();
    return this._element;
  }
  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }
};



/***/ }),

/***/ "./src/createElem.js":
/*!***************************!*\
  !*** ./src/createElem.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ((template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;
  return newElement.firstChild;
});


/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const AMOUNT_OF_CARDS = 15;


const generateData = {
  title: () => {
    const arrOfTitles = ['Harry Potter','Intouchables','Inception','Fight Club','Knockin\' on Heaven\'s Door','Pulp Fiction','Interstellar','Lock, Stock and Two Smoking Barrels','The Matrix','Catch Me If You Can','The Departed','Snatch.','Shutter Island','The Dark Knight'];
    const randomIndexOfArrOfName = Math.round(Math.random()*(arrOfTitles.length));
    return arrOfTitles[randomIndexOfArrOfName];
    },
  rating: () => {
    let rating = Math.random()*10;
    return rating.toFixed(1);
  },
  year: () => {
    const  dateOfFilm = '199' + Math.floor(Math.random()*10);
    return dateOfFilm;
  },
  duration: () => {
    const time = '1 h ' + Math.floor(Math.random()*59)+ ' m';
    return time;
  },
  genre: () => {
    const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
    const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
    return arrGenre[getRandomAmout];
  },
  picture: () => {
    const arrPicture = [`accused`,`blackmail`,`blue-blazes`,`fuga-da-new-york`,`moonrise`,`three-friends`];
    const getRandomAmout = Math.floor(Math.random() * ((arrPicture.length - 1) + 1));
    return '/images/posters/' + arrPicture[getRandomAmout] + '.jpg';
  },
  description: () => {
    const textForDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;
    const arrOfSentences = textForDescription.split('.');
    const randomAmountSentences = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    const description = [];
    for (let i = 0; i < randomAmountSentences; i++) {
      const getRandomSentence = Math.floor(Math.random() * (arrOfSentences.length + 1));
      description.push(arrOfSentences[getRandomSentence]);
     }
    return description;
    },
  comments:() => {
    const setRandomAmountComments = Math.round(Math.random()*10);
    return setRandomAmountComments;
  }
};
const data = {
  title: '1955',
  rating: generateData.rating(),
  year: generateData.year(),
  duration:generateData.duration(),
  genre:generateData.genre(),
  picture:generateData.picture(),
  description:generateData.description(),
  comments:generateData.comments()
}




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
/* harmony import */ var _Pop_up__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pop-up */ "./src/Pop-up.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./src/Card.js");





Object(_filter_element__WEBPACK_IMPORTED_MODULE_0__["getFilterElement"])();

const filmContainer = document.querySelector(`.films-list__container`);
const cardElement = new _Card__WEBPACK_IMPORTED_MODULE_3__["Card"](_data__WEBPACK_IMPORTED_MODULE_2__["data"]);
const popUpElement = new _Pop_up__WEBPACK_IMPORTED_MODULE_1__["Popup"](_data__WEBPACK_IMPORTED_MODULE_2__["data"]);
const body = document.querySelector(`body`);

const renderAll = () => {
  filmContainer.appendChild(cardElement.render());
  cardElement.onClick = () => {
    popUpElement.render();
    body.appendChild(popUpElement.element);
    //popUpElement.onSubmit();
  };
  popUpElement.onClick = () => {
    body.removeChild(popUpElement.element);
  };
  popUpElement.onSubmit = (newObject) => {
    console.log('bbbbb');
    _data__WEBPACK_IMPORTED_MODULE_2__["data"].comments = newObject.comments;
    _data__WEBPACK_IMPORTED_MODULE_2__["data"].rating = newObject.rating;

    cardElement.render();
    popUpElement.unrender();
  };
};
renderAll();


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map