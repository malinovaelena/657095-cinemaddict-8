import createElement from './create-Elem';
import {Component} from './component';

class Popup extends Component {
  constructor(data) {
    super();
      this._title = data.title;
      this._text = data.text;
      this._userrating = data.userrating;
      this._rating = data.rating;
      this._year = data.year;
      this._duration = data.duration;
      this._genre = data.genre;
      this._picture = data.picture;
      this._description = data.description;
      this._comments = data.comments;
      this._onSubmitButtonClick = this._onSubmitButtonClick.bind(this);
      this._onSubmit = null;
  }
  _processForm(formData) { //объект в котором будет записанна новая обновленная сущность...
    const entry = {
      text: ``,
      score: ``
    };
    const popUpMapper = Popup.createMapper(entry);

    for (const pair of formData.entries()) {
      const [property, value] = pair;
      popUpMapper[property] && popUpMapper[property](value);
    }
    
    return entry;
  }

  _onSubmitButtonClick(evt) {
    if (evt.keyCode === (13 && 17)) {
      const formData = new FormData(this._element.querySelector(`.film-details__inner`));
      const newData = this._processForm(formData);
      typeof this._onSubmit === `function` && this._onSubmit(newData);

      this.update(newData);
    };
  }
  update(data) {
    this._text = data.text;
    this._userrating = data.userrating;
  }

  get element() {
    return this._element;
  }
  set onClick(fn) {
    this._onClick = fn;
  }
  set onSubmit(fn) {
    this._onSubmit = fn;
  }
  bind() {
    this._element.querySelector(`.film-details__close-btn`).addEventListener(`click`, this._onCloseButtonClick.bind(this));
    this._element.querySelector(`.film-details__inner`).addEventListener(`keydown`, this._onSubmitButtonClick.bind(this));
  }
  unbind() {
    this._element.querySelector(`.film-details__close-btn`).removeEventListener(`click`, this._onCloseButtonClick.bind(this));
    this._element.querySelector(`.film-details__inner`).removeEventListener(`keydown`, this._onSubmitButtonClick.bind(this));
  }
  static createMapper(target) { //Его задача - сопоставить поля формы с полями структуры и записать в них полученные значения
    return {
      comment: (value) => target.text = value,
      score: (value) => target.userrating = value,
    }
  }
  get template() {
    return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${this._picture}" alt="incredables-2">

        <p class="film-details__age">18+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${this._title}</h3>
            <p class="film-details__title-original">${this._title}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${this._rating}</p>
            <p class="film-details__user-rating">Your rate 8</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">Brad Bird</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">Brad Bird</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">Samuel L. Jackson, Catherine Keener, Sophia Bush</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${moment().add(7, 'days').subtract(1, 'months').year(2019).format('DD MMMM YYYY')}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${moment().add().subtract().hours(1).minutes(50).format('h:mm')}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">USA</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
              <span class="film-details__genre">Animation</span>
              <span class="film-details__genre">Action</span>
              <span class="film-details__genre">Adventure</span></td>
          </tr>
        </table>

        <p class="film-details__film-description">
          The Incredibles hero family takes on a new mission, which involves a change in family roles:
          Bob Parr (Mr Incredible) must manage the house while his wife Helen (Elastigirl) goes out to save the world.
        </p>
      </div>
    </div>

    <section class="film-details__controls">
      <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
      <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
      <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

      <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
      <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
    </section>

    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._comments}</span></h3>

      <ul class="film-details__comments-list">
        <li class="film-details__comment">
          <span class="film-details__comment-emoji">😴</span>
          <div>
            <p class="film-details__comment-text">So long-long story, boring!</p>
            <p class="film-details__comment-info">
              <span class="film-details__comment-author">Tim Macoveev</span>
              <span class="film-details__comment-day">${moment().add(12, 'days').subtract(1, 'months').year(2019).hours(0).minutes(0).seconds(0).format('DD.MM.YYYY')}</span>
            </p>
          </div>
        </li>
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
          <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here" name="comment">${this._text}</textarea>
        </label>
      </div>
    </section>

    <section class="film-details__user-rating-wrap">
      <div class="film-details__user-rating-controls">
        <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
        <button class="film-details__watched-reset" type="button">undo</button>
      </div>

      <div class="film-details__user-score">
        <div class="film-details__user-rating-poster">
          <img src="images/posters/blackmail.jpg" alt="film-poster" class="film-details__user-rating-img">
        </div>

        <section class="film-details__user-rating-inner">
          <h3 class="film-details__user-rating-title">Incredibles 2</h3>

          <p class="film-details__user-rating-feelings">How you feel it?</p>

          <div class="film-details__user-rating-score">
            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="1" id="rating-1" ${this._userrating === `1` && 'checked'} >
            <label class="film-details__user-rating-label" for="rating-1">1</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="2" id="rating-2" ${this._userrating === `2` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-2">2</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="3" id="rating-3" ${this._userrating === `3` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-3">3</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="4" id="rating-4" ${this._userrating === `4` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-4">4</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="5" id="rating-5" ${this._userrating === `5` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-5">5</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="6" id="rating-6" ${this._userrating === `6` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-6">6</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="7" id="rating-7" ${this._userrating === `7` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-7">7</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="8" id="rating-8" ${this._userrating === `8` && 'checked'}>
            <label class="film-details__user-rating-label" for="rating-8">8</label>

            <input type="radio" name="score" class="film-details__user-rating-input visually-hidden" value="9" id="rating-9" ${this._userrating === `9` && 'checked'}>
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


