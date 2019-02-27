'use strict';
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
export {Cards};

