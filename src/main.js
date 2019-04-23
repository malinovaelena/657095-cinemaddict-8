import {Filter} from './filter';
import {Popup} from './pop-up';
import {Card} from './card';
import {Statistic} from './statistic';
import {API} from './api';
import {Search} from './search';

const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle/`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});

const body = document.querySelector(`body`);
const filmContainers = document.querySelectorAll(`.films-list__container`);
const mainFilmContainer = filmContainers[0];
const filterContainer = document.querySelector(`.main-navigation`);
const searchContainer = document.querySelector(`.header__search`);
const TopRatedContainer = filmContainers[1];
const mostCommentedContainer = filmContainers[2];
const profileUserContainer = document.querySelector(`.profile__rating`);

const showMoreButton = document.querySelector(`.films-list__show-more`);
const footerStatistic = document.querySelector(`.footer__statistics > p`);
const AMOUNT_FOR_RENDER_CARDS = 5;

const UserName = {
  NOVICE: 10,
  FAN: 18
};
const AmountOfMillisecond = {
  INDAY: 86400000,
  INWEEK: 604800016,
  INMONTH: 2629800000,
  INYEAR: 31536000000,
  FORPAUSE: 1000
};
let cardToRenderPosition = AMOUNT_FOR_RENDER_CARDS;
let dataToRender;

const filterFilms = (nameFilter, dataForFilters) => {
  switch (nameFilter) {
    case `All movies`:
      return dataForFilters;

    case `History`:
      return Array.from(dataForFilters).filter((it) => it.alreadyWatched || it.alreadyWatched === true);

    case `Watchlist`:
      return Array.from(dataForFilters).filter((it) => it.towatchlist || it.watchlist === true);

    case `Favorites`:
      return Array.from(dataForFilters).filter((it) => it.favorite || it.favorite === true);

    default:
      return dataForFilters;
  }
};
const searchCards = (data, value) => {
  if (value === ``) {
    return data;
  }
  return data.filter((it) => it.title.toUpperCase().includes(value.toUpperCase()));
};
const showProfileRating = (value) => {
  if (value < UserName.NOVICE) {
    return `novice`;
  } else if (value <= UserName.FAN) {
    return `fan`;
  } else {
    return `movie buff`;
  }
};

const renderSearch = (cards) => {
  const searchElement = new Search();
  searchElement.render();
  searchContainer.appendChild(searchElement.element);
  searchElement.onSearch = () => {
    const searchValue = searchElement.element.value;
    if (searchValue !== ``) {
      const searchResult = searchCards(cards, searchValue);
      renderFilms(searchResult);
    } else {
      cardToRenderPosition = AMOUNT_FOR_RENDER_CARDS;
      showMoreCards(cards);
    }
  };
};

const onShowMoreButtonClick = () => showMoreCards(dataToRender);

const showMoreCards = (cards) => {
  renderFilms(cards.slice(0, cardToRenderPosition));
  if (cardToRenderPosition >= cards.length) {
    showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
    showMoreButton.classList.add(`visually-hidden`);
  }
  cardToRenderPosition += AMOUNT_FOR_RENDER_CARDS;
};
const renderFilters = (cards) => {
  filterContainer.innerHTML = `<a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>`;
  let amountHistory = Array.from(cards).filter((it) => it.alreadyWatched || it.alreadyWatched === true).length;
  let amountFavorite = Array.from(cards).filter((it) => it.favorite || it.favorite === true).length;
  let amountWatchlist = Array.from(cards).filter((it) => it.towatchlist || it.watchlist === true).length;

  const arrOfFilters = [[`Favorites`, `favorites`, amountFavorite], [`Watchlist`, `watchlist`, amountWatchlist], [`History`, `history`, amountHistory], [`All movies`, `all`, ``]];

  const NameOfUser = showProfileRating(amountHistory);
  profileUserContainer.innerHTML = NameOfUser;

  for (let filter of arrOfFilters) {

    const filterItem = new Filter(filter);
    filterItem.render();
    filterContainer.insertAdjacentElement(`afterBegin`, filterItem.element);

    filterItem.onFilter = () => {
      const cardsForThisFilter = filterFilms(filter[0], cards);
      showMoreButton.classList.remove(`visually-hidden`);
      dataToRender = cardsForThisFilter;
      showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
      showMoreButton.addEventListener(`click`, onShowMoreButtonClick);
      cardToRenderPosition = AMOUNT_FOR_RENDER_CARDS;
      showMoreCards(dataToRender);
    };
  }
};

const renderStatistic = (cards) => {
  let lastWeekArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= AmountOfMillisecond.INWEEK;
  });
  let lastDayArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= AmountOfMillisecond.INDAY;
  });
  let lastMonthArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= AmountOfMillisecond.INMONTH;
  });
  let lastYEarArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= AmountOfMillisecond.INYEAR;
  });
  const statistic = new Statistic(cards);
  statistic.bind();
  statistic.onStatisticRender = () => {
    mainFilmContainer.innerHTML = ``;
    statistic.render();
    mainFilmContainer.appendChild(statistic.element);
    statistic.grauphStatistic();
    statistic.bindData();

    statistic.onStatisticWeekClick = () => {
      statistic.unrender();
      statistic.update(lastWeekArr);
      statistic.render();
      mainFilmContainer.appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticMonthClick = () => {
      statistic.unrender();
      statistic.update(lastMonthArr);
      statistic.render();
      mainFilmContainer.appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticDayClick = () => {
      statistic.unrender();
      statistic.update(lastDayArr);
      statistic.render();
      mainFilmContainer.appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticYearClick = () => {
      statistic.unrender();
      statistic.update(lastYEarArr);
      statistic.render();
      mainFilmContainer.appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticClick = () => {
      statistic.unrender();
      statistic.update(cards);
      statistic.render();
      mainFilmContainer.appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
  };
};
const renderFilms = (cards) => {
  mainFilmContainer.innerHTML = ``;
  for (let dataOneCard of cards) {
    const cardElement = new Card(dataOneCard);
    const popUpElement = new Popup(dataOneCard);

    cardElement.render();
    mainFilmContainer.appendChild(cardElement.element);

    cardElement.onClick = () => {
      popUpElement.render();
      body.appendChild(popUpElement.element);
      cardElement.unbind();
    };

    cardElement.onAddToWatchList = () => {
      dataOneCard.watchlist = !dataOneCard.watchlist;
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
        });
      api.getCards()
      .then((newCards) => {
        renderFilters(newCards);
        renderStatistic(newCards);
      });
    };

    cardElement.onMarkAsWatched = () => {
      dataOneCard.alreadyWatched = !dataOneCard.alreadyWatched;
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
        });
      api.getCards()
        .then((newCards) => {
          renderFilters(newCards);
          renderStatistic(newCards);
        });
    };
    cardElement.onMarkAsFavorite = () => {
      dataOneCard.favorite = !dataOneCard.favorite;
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
        });
      api.getCards()
        .then((newCards) => {
          renderFilters(newCards);
          renderStatistic(newCards);
        });
    };
    popUpElement.onSubmit = (newData, type = `add`) => {
      popUpElement.block();
      const load = (isSuccess) => {
        return new Promise((res, rej) => {
          setTimeout(isSuccess ? res : rej, AmountOfMillisecond.FORPAUSE);
        });
      };
      Object.assign(dataOneCard, newData);
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
      load(true)
        .then(() => {
          popUpElement.unblock();
          popUpElement.renderCommentsList(dataOneCard.userComments);
          let oldFilm = cardElement.element;
          cardElement.render();
          mainFilmContainer.replaceChild(cardElement.element, oldFilm);
          popUpElement.clearFrom();
          popUpElement.enableForm();
          if (type === `add`) {
            popUpElement.onSubmitSuccess();
          }
        })
        .catch(() => {
          popUpElement.shake();
          popUpElement.inputRedWarning();
          popUpElement.unblock();
        });
    };

    popUpElement.onClose = () => {
      popUpElement.unrender();
      cardElement.bind();
    };
  }
};
const renderMostCommented = (cards) => {
  const mostCommented = cards.sort((a, b) => b.userComments.length - a.userComments.length).slice(0, 2);

  for (let dataOneCard of mostCommented) {
    const cardElement = new Card(dataOneCard);
    const popUpElement = new Popup(dataOneCard);

    cardElement.render();
    mostCommentedContainer.appendChild(cardElement.element);
    cardElement.onClick = () => {
      popUpElement.render();
      body.appendChild(popUpElement.element);
      cardElement.unbind();
    };
    popUpElement.onSubmit = (newData) => {
      popUpElement.block();
      const load = (isSuccess) => {
        return new Promise((res, rej) => {
          setTimeout(isSuccess ? res : rej, AmountOfMillisecond.FORPAUSE);
        });
      };
      Object.assign(dataOneCard, newData);
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
      load(true)
        .then(() => {
          popUpElement.unblock();
          popUpElement.unrender();
          let oldFilm = cardElement.element;
          mainFilmContainer.replaceChild(cardElement.element, oldFilm);
        })
        .catch(() => {
          popUpElement.shake();
          popUpElement.inputRedWarning();
          popUpElement.unblock();
        });
    };

    popUpElement.onClose = () => {
      popUpElement.unrender();
      cardElement.bind();
    };
  }
};
const renderTopRated = (cards) => {
  const topRated = cards.sort((a, b) => b.rating - a.rating).slice(0, 2);
  for (let dataOneCard of topRated) {
    const cardElement = new Card(dataOneCard);
    const popUpElement = new Popup(dataOneCard);
    cardElement.render();
    TopRatedContainer.appendChild(cardElement.element);

    cardElement.onClick = () => {
      popUpElement.render();
      body.appendChild(popUpElement.element);
      cardElement.unbind();
    };

    popUpElement.onSubmit = (newData) => {
      popUpElement.block();
      const load = (isSuccess) => {
        return new Promise((res, rej) => {
          setTimeout(isSuccess ? res : rej, AmountOfMillisecond.FORPAUSE);
        });
      };
      Object.assign(dataOneCard, newData);
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
      load(true)
        .then(() => {
          popUpElement.unblock();
          popUpElement.unrender();
          let oldFilm = cardElement.element;
          mainFilmContainer.replaceChild(cardElement.element, oldFilm);
        })
        .catch(() => {
          popUpElement.shake();
          popUpElement.inputRedWarning();
          popUpElement.unblock();
        });
    };

    popUpElement.onDelete = () => {
      popUpElement.onDeleteSuccess();
    };

    popUpElement.onClose = () => {
      popUpElement.unrender();
      cardElement.bind();
    };
  }
};

const renderAll = () => {
  api.getCards()
    .then((movies) => {
      dataToRender = movies;
      renderFilters(movies);
      renderFilms(movies);
      renderSearch(movies);
      renderMostCommented(movies);
      renderTopRated(movies);
      renderStatistic(movies);
      showMoreCards(dataToRender);
      showMoreButton.addEventListener(`click`, onShowMoreButtonClick);
      footerStatistic.innerHTML = `${movies.length} movies inside`;
    })
    .catch((movies) => {
      renderFilters(movies);
      mainFilmContainer.innerHTML = `Something went wrong while loading movies. Check your connection or try again later`;
    });
};
renderAll();
