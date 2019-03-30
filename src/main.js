import {getFilterElement} from './filter-element';
import {Popup} from './Pop-up';
import {data} from './data';
import {Card} from './Card';

getFilterElement();

const filmContainer = document.querySelector(`.films-list__container`);
const cardElement = new Card(data);
const popUpElement = new Popup(data);
const body = document.querySelector(`body`);

const renderAll = () => {
  filmContainer.appendChild(cardElement.render());
  cardElement.onClick = () => {
    popUpElement.render();
    body.appendChild(popUpElement.element);
  };
  popUpElement.onClick = () => {
    body.removeChild(popUpElement.element);
  };
  popUpElement.onSubmit = (newObject) => {
    data.comment = newObject.comment;
    data.score = newObject.score;
    popUpElement.update(data);
    cardElement.render();
    body.replaceChild(cardElement.element, popUpElement.element);
    popUpElement.unrender();
  };
};
renderAll();
