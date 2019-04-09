import {Filter} from './Filter';
import {Popup} from './Pop-up';
import {Card} from './Card';
import {Statistic} from './statistic';

import {API} from './api';
import {ModelCards} from './model-data';


const filmContainer = document.querySelector(`.films-list__container`);
const filterContainer = document.querySelector(`.main-navigation`);
const body = document.querySelector(`body`);
const arrOfFilters = [[`Favorites`, `favorites`, 5], [`Watchlist`, `watchlist`, 5], [`History`, `history`, 2], [`All movies`, `all`, 10]];

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

    case 'Favorites':
    return cards.filter((it) => it.favorite === true);

    default:
      return cards;
  }
};


const renderAll = () => {

  api.getCards()
  .then((movies) => {
    renderFilms(movies);
    renderFilters(arrOfFilters,movies);
    console.log(movies, 'строка 48 renderFilms и renderFilters');
  });

  const renderFilters = (filterList,cards) => {
    for (let filter of filterList) {
      const filterItem = new Filter(filter);
      filterItem.render();
      filterContainer.insertAdjacentElement(`afterBegin`, filterItem.element);
      filterItem.onFilter = () => {
        const cardsForThisFilter = filterFilms(filter[0],cards);
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
        popUpElement.bind();
        body.appendChild(popUpElement.element);
        cardElement.unbind();
      };

      cardElement.onAddToWatchList = () => {
        dataOneCard.watchlist = !dataOneCard.watchlist;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          renderFilters(filterList,cards);
        });
      };

      cardElement.onMarkAsWatched = () => {
        dataOneCard.alreadyWatched = !dataOneCard.alreadyWatched;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          renderFilters(filterList,cards);
        });
      };

      cardElement.onMarkAsFavorite = () => {
        dataOneCard.favorite = !dataOneCard.favorite;
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          renderFilters(filterList,cards);
        });
      }
      popUpElement.onSubmit = (newData) => {
        Object.assign(dataOneCard, newData);
        api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then(() => {
          popUpElement.unrender();
          console.log(dataOneCard.toRAW(), '119 строка кнопка submit');
          let oldFilm = cardElement.element;
          console.log(popUpElement.element, 'вывод попапа перед submit');
          cardElement.render();
          cardElement.bind();
          filmContainer.replaceChild(cardElement.element, oldFilm);
          
        });
      };
      popUpElement.onClose = () => {
        console.log(dataOneCard.toRAW(), '128 строка кнопка close');
        console.log(popUpElement.element, 'вывод попапа перед close');
        popUpElement.unrender();
        cardElement.bind();
        
      };
    }
  };


  
};
renderAll();
