//import {getFilterElement} from './filter-element';
import {Filter} from './Filter';
import {Popup} from './Pop-up';
import {data} from './data';
import {Card} from './Card';

const filmContainer = document.querySelector(`.films-list__container`);
const filterContainer = document.querySelector(`.main-navigation`);
const cardElement = new Card(data);
const popUpElement = new Popup(data);
//const filterItem = new Filter(data);
const body = document.querySelector(`body`);
const arrOfFilters = [[`All movies`,`all`,10],[`Watchlist`,`watchlist`,5], [`History`,`history`,2], [`Favorites`,`favorites`,1]];

const renderAll = () => {
  const renderFilters = (filterList) => {
    for (let filter of filterList) {
      const filterItem = new Filter(filter);
      filterItem.render();
      filterContainer.insertAdjacentElement(`beforeEnd`, filterItem.element);
    }
  };
  renderFilters(arrOfFilters);
  filmContainer.appendChild(cardElement.render());
  cardElement.onClick = () => {
    popUpElement.render();
    body.appendChild(popUpElement.element);
  };
  cardElement.onAddToWatchList = () => {
    //data.watchlist = newObject.watchlist;
    data.towatchlist =!data.towatchlist;
    //cardElement.update(data);
    //popUpElement.update(data);
    console.log('test');
  };
  cardElement.onMarkAsWatched = () => {
    console.log('test2');
  };
  popUpElement.onClick = () => {
    body.removeChild(popUpElement.element);
  };
  popUpElement.onSubmit = (newObject) => {
    data.comment = newObject.comment;
    data.score = newObject.score;
    data.watchlist = newObject.watchlist;
    data.favorite = newObject.favorite;
    popUpElement.update(data);
    cardElement.render();
    body.replaceChild(cardElement.element, popUpElement.element);
    popUpElement.unrender();
  };
};
renderAll();
