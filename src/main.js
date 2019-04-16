import {Filter} from './filter';
import {Popup} from './pop-up';
import {Card} from './card';
import {Statistic} from './statistic';
import {API} from './api';
import {Search} from './search';
//import {ratingOfUser} from './user-rating';
//import {Store} from './storage';


const filmContainer = document.querySelector(`.films-list__container`);
const filterContainer = document.querySelector(`.main-navigation`);
const body = document.querySelector(`body`);
const searchContainer = document.querySelector(`.header__search`);
const profileRatingContainer = document.querySelector(`.header__profile profile`);
const header = document.querySelector(`.header`);
const hren = document.querySelector(`.profile__rating`);

const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle/`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});



const filterFilms = (nameFilter, dataForFilters) => {
  switch (nameFilter) {
    case `All movies`:
      return dataForFilters;

    case `History`:
      return dataForFilters.filter((it) => it.towatched || it.alreadyWatched === true);

    case `Watchlist`:
      return dataForFilters.filter((it) => it.towatchlist || it.watchlist === true);

    case `Favorites`:
      return dataForFilters.filter((it) => it.favorite || it.favorite === true);

    default:
      return dataForFilters;
  }
};
const filterAmount = (nameFilter, dataForFilters) => {
  switch (nameFilter) {
    case `All movies`:
      return dataForFilters.length;

    case `History`:
      return dataForFilters.filter((it) => it.towatched || it.alreadyWatched === true).length;

    case `Watchlist`:
      return dataForFilters.filter((it) => it.towatchlist || it.watchlist === true).length;

    case `Favorites`:
      return dataForFilters.filter((it) => it.favorite || it.favorite === true).length;

    default:
      return dataForFilters.length;
  }
};
const searchCards = (data, value) => {
  if (value === ``) {
    return data;
  }
  return data.filter((it) => it.title.toUpperCase().includes(value.toUpperCase()));
};  

const renderAll = () => {
  api.getCards()
  .then((movies) => {
    console.log(movies);
    renderFilters(movies);
    renderFilms(movies);
    renderSearch(movies);
  })
  .catch((movies) => {
    renderFilters(movies);
    filmContainer.innerHTML = `Something went wrong while loading movies. Check your connection or try again later`;

  });
  const renderSearch = (cards) => {
    const searchElement = new Search();
    searchElement.render();
    searchContainer.appendChild(searchElement.element);
    searchElement.onSearch = () => {
      const searchValue = searchElement.element.value;
      if (searchValue !== ``) {
        const searchResult = searchCards(cards, searchValue);
        renderFilms(searchResult);
      }
    };
  };
  console.log('test');
  
  const renderFilters = (cards) => {
    filterContainer.innerHTML = ``;
    let amountHistory = Array.from(cards).filter((it) => it.towatched || it.alreadyWatched === true).length;
    let amountFavorite = Array.from(cards).filter((it) => it.favorite || it.favorite === true).length;
    let amountWatchlist = Array.from(cards).filter((it) => it.towatchlist || it.watchlist === true).length;

    const arrOfFilters = [[`Favorites`, `favorites`, amountFavorite], [`Watchlist`, `watchlist`, amountWatchlist], [`History`, `history`, amountHistory], [`All movies`, `all`, cards.length]];
    /* if (amountFavorite < 10) {
      console.log('bll');
      hren.innerHTML = `novichek`;
    };*/
    //const amontFilters = filterContainer.childNodes.length;
    for (let filter of arrOfFilters) {
      const filterItem = new Filter(filter);
      filterItem.render();
      filterContainer.insertAdjacentElement(`afterBegin`, filterItem.element);

      filterItem.onFilter = () => {
        const amountforEach = filterAmount(filter[0], cards);
        filterItem.update(amountforEach);
        const cardsForThisFilter = filterFilms(filter[0], cards);
        renderFilms(cardsForThisFilter);
      };
    }
  };

  const renderFilms = (cards) => {
    filmContainer.innerHTML = ``;

    const statistic = new Statistic(cards);
    statistic.bind();
    statistic.onStatisticRender = () => {
      filmContainer.innerHTML = ``;
      statistic.render();
      filmContainer.appendChild(statistic.element);
      statistic.grauphStatistic();
    };

    for (let dataOneCard of cards) {
      const cardElement = new Card(dataOneCard);
      const popUpElement = new Popup(dataOneCard);

      cardElement.render();
      filmContainer.appendChild(cardElement.element);

      cardElement.onClick = () => {
        popUpElement.render();
        body.appendChild(popUpElement.element);
      };

      cardElement.onAddToWatchList = () => {
        dataOneCard.watchlist = !dataOneCard.watchlist;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
        });
      };

      cardElement.onMarkAsWatched = () => {
        dataOneCard.alreadyWatched = !dataOneCard.alreadyWatched;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          statistic.update(cards);
        });
      };

      cardElement.onMarkAsFavorite = () => {
        dataOneCard.favorite = !dataOneCard.favorite;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          renderFilters(newData);
        });
      };
      popUpElement.onSubmit = (newData) => {
        const block = () => {
          popUpElement.element.querySelector(`.film-details__comment-input`).disabled = true;
          popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = true;
        };
        const unblock = () => {
          popUpElement.element.querySelector(`.film-details__comment-input`).disabled = false;
          popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = false;
        };
        const inputRedWarning = () => {
          popUpElement.element.querySelector(`.film-details__comment-input`).style.borderColor = `#FF0000`;
          popUpElement.element.querySelector(`.film-details__user-rating-label`).style.backgroundColor = `#FF0000`;
        };
        block();
        const load = (isSuccess) => {
          return new Promise((res, rej) => {
            setTimeout(isSuccess ? res : rej, 1000);
          });
        };
        Object.assign(dataOneCard, newData);
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
        load(true)
          .then(() => {
            unblock();
            popUpElement.unrender();
            let oldFilm = cardElement.element;
            filmContainer.replaceChild(cardElement.element, oldFilm);
          })
          .catch(() => {
            popUpElement.shake();
            inputRedWarning();
            unblock();
          });
      };

      popUpElement.onClose = () => {
        popUpElement.unrender();
      };
    }
  };
};

renderAll();

