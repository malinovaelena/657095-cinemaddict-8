import {Component} from './component';

const Emoji = {
  'grinning': `😀`,
  'neutral-face': `😐`,
  'sleeping': `😴`
};

class Popup extends Component {
  constructor(data) {
    super();
      this._title = data.title;
      this._userrating = data.userrating;
      this._rating = data.rating;
      this._ageRating = data.age_rating;
      this._year = data.year;
      this._duration = data.duration;
      this._genre = data.genre;
      this._poster = data.poster;
      this._description = data.description;
      
      this._towatchlist = data.watchlist;
      this._tofavorite = data.favorite;
      this._towatched = data.alreadyWatched;

      this._actors = data.actors;
      this._director = data.director;
      this._writers = data.writers;
      this._country = data.country;
      this._dateOfFilm = data.dateOfFilm;
      this._alternativeTitle = data.alternativeTitle;
      this._myPersonalRating = data.personalRating;
      this._userComments = data.userComments;

      this._onCloseButtonClick = this._onCloseButtonClick.bind(this);
      this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
  }
  _processForm(formData) {
    const entry = {
      personalRating: this._myPersonalRating,
      userComments: this._userComments,
      alreadyWatched: false,
      watchlist: false,
      favorite: false,
    };
    const filmDetailsMapper = Popup.createMapper(entry);
    for (let pair of formData.entries()) {
      let [property, value] = pair;
      if (filmDetailsMapper[property]) {
        filmDetailsMapper[property](value);
      }
    }
    return entry;
  }
  static createMapper(target) { //Его задача - сопоставить поля формы с полями структуры и записать в них полученные значения
    this._comment = undefined;
    return {
      'watchlist': (value) => (target.watchlist = (value === `on`)),
      'watched': (value) => (target.alreadyWatched = (value === `on`)),
      'favorite': (value) => (target.favorite = (value === `on`)),
      'score': (value) => (target.personalRating = +value),
      'comment': (value) => {
        if (this._comment) {
          let emoji = this._comment.emotion;
          this._comment.comment = value;
          target.userComments.push({author: `Me`, emotion: emoji, comment: value, date: moment().valueOf()});
        } else {
          this._comment = {author: `Me`, emotion: undefined, comment: value, date: moment().valueOf()};
        }
      },
      'comment-emoji': (value) => {
        if (this._comment) {
          let comment = this._comment.comment;
          let emoji = value;
          this._comment.emotion = value;
          target.userComments.push({author: `Me`, emotion: emoji, comment, date: moment().valueOf()});
        } else {
          this._comment = {author: `Me`, emotion: value, comment: undefined, date: moment().valueOf()};
        }
      }
    };
  }
  update(data) {
    this._myPersonalRating = data.personalRating;
    this._towatchlist = data.watchlist;
    this._favorite = data.favorite;
    this._userComments = data.userComments;
  }
  set onSubmit(fn) {
    this._onSubmit = fn;
  }
  set onClose(fn) {
    this._onClose = fn;
  }
  _onSubmitButtonClick(evt) {
    if (evt.keyCode === (13 && 17)) {
      const formData = new FormData(this._element.querySelector(`.film-details__inner`));
      const newData = this._processForm(formData);
      if (typeof this._onSubmit === `function`) {
        this._onSubmit(newData);
      }
      this.update(newData);
    }
  }
  _onCloseButtonClick() {
    return typeof this._onClose === `function` && this._onClose();
  }
  get element() {
    return this._element;
  }
  
  bind() {
    this._element.querySelector(`.film-details__close-btn`).addEventListener(`click`, this._onCloseButtonClick);  
    this._element.querySelector(`.film-details__inner`).addEventListener(`keydown`, this._onSubmitButtonClick);
    //this._element.querySelector(`.film-details__comment-input`).addEventListener(`keydown`, this._onSubmitButtonClick.bind(this));
  }
  unbind() {
    this._element.querySelector(`.film-details__close-btn`).removeEventListener(`click`, this._onCloseButtonClick);
    this._element.querySelector(`.film-details__inner`).removeEventListener(`keydown`, this._onSubmitButtonClick);
    //this._element.querySelector(`.film-details__comment-input`).removeEventListener(`keydown`, this._onSubmitButtonClick.bind(this));
  }

  get template() {
    return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${this._poster}" alt="incredables-2">

        <p class="film-details__age">${this._ageRating}</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${this._title}</h3>
            <p class="film-details__title-original">${this._alternativeTitle}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${this._rating}</p>
            <p class="film-details__user-rating">Your rate ${this._myPersonalRating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${this._director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${this._writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${this._actors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${moment(this._dateOfFilm).year()}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${Math.round(this._duration / 60)} h ${this._duration % 60} m</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${this._country}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
            ${this._genre.map((genre) => `<span class="film-details__genre">${genre}</span>`).join(``)}
            </td>
          </tr>
        </table>

        <p class="film-details__film-description">${this._description}</p>
      </div>
    </div>

    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${this._towatchlist === 'checked'}>
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${this._towatched === 'checked'}>
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${this._tofavorite === 'checked'}>
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>

    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._userComments.length}</span></h3>

      <ul class="film-details__comments-list">
      ${this._userComments.map((comment) => {
        return `
        <li class="film-details__comment">
            <span class="film-details__comment-emoji">${Emoji[comment.emotion]}</span>
          <div>
          <p class="film-details__comment-text">${comment.comment}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${comment.author}</span>
          <span class="film-details__comment-day">${moment(comment.date).fromNow()}</span>
          </p>
          </div>
          </li>
          `;
      }
      ).join(``)}
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
        <span class="film-details__watched-status ${this._alreadyWatched && `film-details__watched-status--active`}">Already watched</span>
        <button class="film-details__watched-reset" type="button">undo</button>
      </div>

      <div class="film-details__user-score">
        <div class="film-details__user-rating-poster">
          <img src="${this._poster}" alt="film-poster" class="film-details__user-rating-img">
        </div>

        <section class="film-details__user-rating-inner">
          <h3 class="film-details__user-rating-title">${this._title}</h3>

          <p class="film-details__user-rating-feelings">How you feel it?</p>

          <div class="film-details__user-rating-score">
            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1" ${this._myPersonalRating === `1` && 'checked'} >
            <label class="film-details__user-rating-label" for="rating-1">1</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2" ${this._myPersonalRating === `2` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-2">2</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3" ${this._myPersonalRating === `3` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-3">3</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4" ${this._myPersonalRating === `4` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-4">4</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5" ${this._myPersonalRating === `5` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-5">5</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6" ${this._myPersonalRating === `6` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-6">6</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7" ${this._myPersonalRating === `7` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-7">7</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8" ${this._myPersonalRating === `8` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-8">8</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9" ${this._myPersonalRating === `9` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-9">9</label>

          </div>
        </section>
      </div>
    </section>
  </form>
</section>`;
  };

}
export {Popup};


