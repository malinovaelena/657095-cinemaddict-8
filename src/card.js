import {Component} from './component';
import moment from 'moment';

class Card extends Component {
  constructor(data) {
    super();
      this._title = data.title;
      this._rating = data.rating;
      this._duration = data.duration;
      this._genre = data.genre;
      this._poster = data.poster;
      this._description = data.description;
      this._dateOfFilm = data.dateOfFilm;
      this._userComments = data.userComments;
      
      this._alreadyWatched = data.alreadyWatched;
      this._favorite = data.favorite;
      this._watchlist = data.watchlist;
    
      this._onOpenButtonClick = this._onOpenButtonClick.bind(this);
      this._onAddToWatchList = this._onAddToWatchList.bind(this);
      this._onMarkAsWatched = this._onMarkAsWatched.bind(this);
      this._onMarkAsFavorite = this._onMarkAsFavorite.bind(this);
  }
  _onOpenButtonClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
  _onMarkAsWatched(event) {
    event.preventDefault();
    return typeof this._onMarkAsWatched === `function` && this._onMarkAsWatched();
  }
  _onAddToWatchList(event) {
    event.preventDefault();
    return typeof this._onAddToWatchList === `function` && this._onAddToWatchList();
  }
  _onMarkAsFavorite(event) {
    event.preventDefault();
    return typeof this._onMarkAsFavorite === `function` && this._onMarkAsFavorite();
  }

  set onClick(fn) {
    this._onClick = fn;
  }
  set onAddToWatchList(fn) {
    this._onAddToWatchList = fn;
  }
  set onMarkAsWatched(fn) {
    this._onMarkAsWatched = fn;
  }
  set onMarkAsFavorite(fn) {
    this._onMarkAsFavorite = fn;
  }

  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onOpenButtonClick.bind(this));
    this._element.querySelector(`.film-card__controls-item--add-to-watchlist`).addEventListener(`click`, this._onAddToWatchList.bind(this));
    this._element.querySelector(`.film-card__controls-item--mark-as-watched`).addEventListener(`click`, this._onMarkAsWatched.bind(this));
    this._element.querySelector(`.film-card__controls-item--favorite`).addEventListener(`click`, this._onMarkAsFavorite.bind(this));
  }
  unbind() {
    this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onOpenButtonClick.bind(this));
    this._element.querySelector(`.film-card__controls-item--add-to-watchlist`).removeEventListener(`click`, this._onAddToWatchList.bind(this));
    this._element.querySelector(`.film-card__controls-item--mark-as-watched`).removeEventListener(`click`, this._onMarkAsWatched.bind(this));
    this._element.querySelector(`.film-card__controls-item--favorite`).removeEventListener(`click`, this._onMarkAsFavorite.bind(this));
  }

  get template() {
    const filmDuration = moment.duration(this._duration, `m`);
    return `<article class="film-card">
      <h3 class="film-card__title">${this._title}</h3>
    <p class="film-card__rating">${this._rating}</p>
      <p class="film-card__info">
      <span class="film-card__year">${moment(this._dateOfFilm).year()}</span>
      <span class="film-card__duration">${filmDuration.hours()}:${filmDuration.minutes()}</span>
     
    <span class="film-card__genre">${this._genre}</span>
      </p>
      <img src="${this._poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${this._description}</p>
    <button class="film-card__comments">${this._userComments.length} comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
  }
};
export {Card};

