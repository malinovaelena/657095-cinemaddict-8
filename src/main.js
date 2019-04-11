import {Filter} from './Filter';
import {Popup} from './Pop-up';
import {Card} from './Card';
import {Statistic} from './statistic';
import {API} from './api';

const filmContainer = document.querySelector(`.films-list__container`);
const filterContainer = document.querySelector(`.main-navigation`);
const body = document.querySelector(`body`);

const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle/`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});


const filterFilms = (nameFilter, cards) => {
  switch (nameFilter) {
    case `All movies`:
      return cards;

    case `History`:
      return cards.filter((it) => it.towatched || it.alreadyWatched === true);

    case `Watchlist`:
      return cards.filter((it) => it.towatchlist || it.watchlist === true);

    case `Favorites`:
      return cards.filter((it) => it.favorite || it.favorite === true);

    default:
      return cards;
  }
};


const renderAll = () => {
  const arrOfFilters = [[`Favorites`, `favorites`, 5], [`Watchlist`, `watchlist`, 5], [`History`, `history`, 2], [`All movies`, `all`, 10]];
  api.getCards()
    .then((movies) => {
      renderFilters(arrOfFilters, movies);
      filmContainer.innerHTML = `Loading movies...`;
      renderFilms(movies);
    })
    .catch(() => {
      renderFilters(arrOfFilters);
      filmContainer.innerHTML = `Something went wrong while loading movies. Check your connection or try again later`;
    });

  const renderFilters = (Arr, cards) => {
    for (let filter of Arr) {
      const filterItem = new Filter(filter);
      filterItem.render();
      filterContainer.insertAdjacentElement(`afterBegin`, filterItem.element);
      filterItem.onFilter = () => {
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
          filterFilms(arrOfFilters, cards);
        });
      };

      cardElement.onMarkAsWatched = () => {
        dataOneCard.alreadyWatched = !dataOneCard.alreadyWatched;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          filterFilms(arrOfFilters, cards);
          statistic.update(cards);
        });
      };

      cardElement.onMarkAsFavorite = () => {
        dataOneCard.favorite = !dataOneCard.favorite;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          filterFilms(arrOfFilters, cards);
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

