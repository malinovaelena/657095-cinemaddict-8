const AMOUNT_OF_CARDS = 15;


const getFilmCard = {
  title:function() {
    const arrOfTitles = ['Harry Potter','Intouchables','Inception','Fight Club','Knockin\' on Heaven\'s Door','Pulp Fiction','Interstellar','Lock, Stock and Two Smoking Barrels','The Matrix','Catch Me If You Can','The Departed','Snatch.','Shutter Island','The Dark Knight'];
    const randomIndexOfArrOfName = Math.round(Math.random()*(arrOfTitles.length));
    return arrOfTitles[randomIndexOfArrOfName];
    },
  rating: function() {
    let rating = Math.random()*10;
    return rating.toFixed(1);
  },
  year: function () {
    const  dateOfFilm = '199' + Math.floor(Math.random()*10);
    return dateOfFilm;
  },
  duration: function() {
    const time = '1 h ' + Math.floor(Math.random()*59)+ ' m';
    return time;
  },
  genre: function() {
    const arrGenre = ['Comedy', 'Thriller', 'Detective', 'Action', 'Drama'];
    const getRandomAmout = Math.round(Math.random()* (arrGenre.length));
    return arrGenre[getRandomAmout];
  },
  picture:function(){
    const arrPicture = [`accused`,`blackmail`,`blue-blazes`,`fuga-da-new-york`,`moonrise`,`three-friends`];
    const getRandomAmout = Math.floor(Math.random() * ((arrPicture.length - 1) + 1));
    return '/images/posters/' + arrPicture[getRandomAmout] + '.jpg';
  },
  description: function() {
    const textForDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus`;
    const arrOfSentences = textForDescription.split('.');
    const randomAmountSentences = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    const description = [];
    for (let i = 0; i < randomAmountSentences; i++) {
      const getRandomSentence = Math.floor(Math.random() * (arrOfSentences.length + 1));
      description.push(arrOfSentences[getRandomSentence]);
     }
    return description;
    },
  comments:function() {
    const setRandomAmountComments = Math.round(Math.random()*10);
    return setRandomAmountComments;
  }
};

const getCardHtml = (objFilmCard) => {
  return ` <article class="film-card">
      <h3 class="film-card__title">${objFilmCard.title}</h3>
    <p class="film-card__rating">${objFilmCard.rating}</p>
      <p class="film-card__info">
      <span class="film-card__year">${objFilmCard.year}</span>
      <span class="film-card__duration">${objFilmCard.duration}</span>
    <span class="film-card__genre">${objFilmCard.genre}</span>
      </p>
      <img src="${objFilmCard.picture}" alt="" class="film-card__poster">
      <p class="film-card__description">${objFilmCard.description}</p>
    <button class="film-card__comments">${objFilmCard.comments} comments</button>

    <form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist"><!--Add to watchlist--> WL</button>
    <button class="film-card__controls-item button film-card__controls-item--mark-as-watched"><!--Mark as watched-->WTCHD</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite"><!--Mark as favorite-->FAV</button>
      </form>
      </article>`;
};
const bindFilterElement = (filter,cards,container) => {
  filter.onclick = () => {
    removeCards();
    renderCard(cards,container);
  }
};
const renderCard = (cards,arrContainerforFilm) => {
  const randomAmountCards = Math.floor(Math.random()*cards.length);
  for (let i = 0;i < randomAmountCards; i++) {
    const card = cards[i];
    const cardHtml= getCardHtml(card);
    const arrContainerforFilm = document.querySelectorAll('.films-list__container');
    for (let container of arrContainerforFilm) {
    container.insertAdjacentHTML("afterbegin", cardHtml);
    }
  }
};
const generateCards = (amount) => {
  const cards =[];
  for (let i = 0; i < amount; i++) {
    const objFilmCard = {
      title:getFilmCard.title(),
      rating:getFilmCard.rating(),
      year:getFilmCard.year(),
      duration: getFilmCard.duration(),
      genre:getFilmCard.genre(),
      picture:getFilmCard.picture(),
      description:getFilmCard.description(),
      comments:getFilmCard.comments()
    };
    cards[i] = objFilmCard;
  }
  return cards;
};
const removeCards = () => {
  const arrContainers = document.querySelectorAll('.films-list__container');
  for (let j = 0; j < arrContainers.length; j++) {
    const arrCards = arrContainers[j].querySelectorAll('.film-card');
    for (let k = 0; k < arrCards.length; k++) {
      arrContainers[j].removeChild(arrCards[k]);
    }
  }
};
const cards = () => {
  const arrContainerforFilm = document.querySelectorAll('.films-list__container');
  const cards = generateCards(AMOUNT_OF_CARDS);
  //console.log(cards);
  const filters = document.querySelectorAll('.main-navigation__item');
    for (let container of arrContainerforFilm) {
      for (let filter of filters) {
        bindFilterElement(filter, cards, container);
      }
  }
};
export {cards};

