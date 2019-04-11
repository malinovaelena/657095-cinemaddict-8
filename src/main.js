import {Filter} from './Filter';
import {Popup} from './Pop-up';
import {arrOfData} from './data';
import {Card} from './Card';
import {Statistic} from './statistic';


const filmContainer = document.querySelector(`.films-list__container`);
const filterContainer = document.querySelector(`.main-navigation`);
const body = document.querySelector(`body`);
const arrOfFilters = [[`Favorites`, `favorites`, 1], [`Watchlist`, `watchlist`, 5], [`History`, `history`, 2], [`All movies`, `all`, 10]];

const updateFilms = (films, filmForUpdate, newCard) => {
  const i = films.findIndex((it) => it === filmForUpdate);
  films[i] = Object.assign({}, filmForUpdate, newCard);
  return films[i];
};

const filterFilms = (nameFilter) => {
  switch (nameFilter) {
    case `All movies`:
      return arrOfData;

    case `History`:
      return arrOfData.filter((it) => it.towatched === true);

    case `Watchlist`:
      return arrOfData.filter((it) => it.towatchlist === true);

    default:
      return arrOfData;
  }
};


const renderAll = () => {

  const statistic = new Statistic(arrOfData);
  statistic.bind();
  statistic.onStatisticRender = () => {
    filmContainer.innerHTML = ``;
    statistic.render();
    filmContainer.appendChild(statistic.element);
    statistic.grauphStatistic();
  };

  const renderFilters = (filterList) => {
    for (let filter of filterList) {
      const filterItem = new Filter(filter);
      filterItem.render();
      filterContainer.insertAdjacentElement(`afterBegin`, filterItem.element);
      filterItem.onFilter = () => {
        const cardsForThisFilter = filterFilms(filter[0]);
        renderFilms(cardsForThisFilter);
      };
    }
  };

  const renderFilms = (arr) => {
    filmContainer.innerHTML = ``;
    for (let data of arr) {
      const cardElement = new Card(data);
      const popUpElement = new Popup(data);

      cardElement.render();
      filmContainer.appendChild(cardElement.element);
      cardElement.onClick = () => {
        popUpElement.render();
        body.appendChild(popUpElement.element);
      };

      cardElement.onAddToWatchList = () => {
        data.towatchlist = !data.towatchlist;
        const updateFilm = updateFilms(arr, data);
        cardElement.update(updateFilm);
        statistic.update(arr);
      };

      cardElement.onMarkAsWatched = () => {
        data.towatched = !data.towatched;
        const updateFilm = updateFilms(arr, data);
        cardElement.update(updateFilm);
        statistic.update(arr);
      };

      popUpElement.onClick = () => {
        popUpElement.unrender();
        cardElement.bind();
      };

      popUpElement.onSubmit = () => {
        updateFilms(arr, data);
        popUpElement.update(data);
        cardElement.render();
        body.replaceChild(cardElement.element, popUpElement.element);
        popUpElement.unrender();

        let oldFilm = cardElement.element;
        cardElement.render();
        cardElement.bind();
        filmContainer.replaceChild(cardElement.element, oldFilm);
        popUpElement.unrender();
      };
    }
  };
  renderFilters(arrOfFilters);
  renderFilms(arrOfData);
};
renderAll();
