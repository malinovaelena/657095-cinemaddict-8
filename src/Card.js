import createElement from './createElem';
import {Component} from './component';

class Card extends Component {
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
      <span class="film-card__year">${moment().format('YYYY')}</span>
      <span class="film-card__duration">${moment().add().subtract().hours(1).minutes(50).format('h:mm')}</span>
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
export {Card};

