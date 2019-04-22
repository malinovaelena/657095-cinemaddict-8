import {Filter} from './filter';
import {Popup} from './pop-up';
import {Card} from './card';
import {Statistic} from './statistic';
import {API} from './api';
import {Search} from './search';

const body = document.querySelector(`body`);
const filmContainer = document.querySelectorAll(`.films-list__container`);
const filterContainer = document.querySelector(`.main-navigation`);
const searchContainer = document.querySelector(`.header__search`);
const showMoreButton = document.querySelector(`.films-list__show-more`);
const profileUserContainer = document.querySelector(`.profile__rating`);
const footerStatistic = document.querySelector(`.footer__statistics > p`);


let cardToRenderPosition = 5;
let dataToRender;
const AUTHORIZATION = `Basic dXNlckBwYXNzd29yZAo=${Math.random()}`;
const END_POINT = `https://es8-demo-srv.appspot.com/moowle/`;
const api = new API({endPoint: END_POINT, authorization: AUTHORIZATION});


const filterFilms = (nameFilter, dataForFilters) => {
  switch (nameFilter) {
    case `All movies`:
      return dataForFilters;

    case `History`:
      return Array.from(dataForFilters).filter((it) => it.towatched || it.alreadyWatched === true);

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
  if (value < 10) {
    return `novice`;
  } else if (value <= 18) {
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
  cardToRenderPosition += 5;
};
const renderFilters = (cards) => {
  filterContainer.innerHTML = `<a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>`;
  let amountHistory = Array.from(cards).filter((it) => it.towatched || it.alreadyWatched === true).length;
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
      cardToRenderPosition = 5;
      showMoreCards(dataToRender);
    };
  }
};

const renderStatistic = (cards) => {
  let lastWeekArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= 604800016;
  });
  let lastDayArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= 86400000;
  });
  let lastMonthArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= 2629800000;
  });
  let lastYEarArr = cards.filter((it) => {
    return (Date.now() - it.watchingDate) <= 31536000000;
  });
  const statistic = new Statistic(cards);
  statistic.bind();
  statistic.onStatisticRender = () => {
    filmContainer[0].innerHTML = ``;
    statistic.render();
    filmContainer[0].appendChild(statistic.element);
    statistic.grauphStatistic();
    statistic.bindData();

    statistic.onStatisticWeekClick = () => {
      statistic.unrender();
      statistic.update(lastWeekArr);
      statistic.render();
      filmContainer[0].appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticMonthClick = () => {
      statistic.unrender();
      statistic.update(lastMonthArr);
      statistic.render();
      filmContainer[0].appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticDayClick = () => {
      statistic.unrender();
      statistic.update(lastDayArr);
      statistic.render();
      filmContainer[0].appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticYearClick = () => {
      statistic.unrender();
      statistic.update(lastYEarArr);
      statistic.render();
      filmContainer[0].appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
    statistic.onStatisticClick = () => {
      statistic.unrender();
      statistic.update(cards);
      statistic.render();
      filmContainer[0].appendChild(statistic.element);
      statistic.grauphStatistic();
      statistic.bindData();
    };
  };
};
const renderFilms = (cards) => {
  filmContainer[0].innerHTML = ``;
  for (let dataOneCard of cards) {
    const cardElement = new Card(dataOneCard);
    const popUpElement = new Popup(dataOneCard);

    cardElement.render();
    filmContainer[0].appendChild(cardElement.element);

    cardElement.onClick = () => {
      popUpElement.render();
      body.appendChild(popUpElement.element);
    };

    cardElement.onAddToWatchList = () => {
      dataOneCard.watchlist = !dataOneCard.watchlist;
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
        });
      api.getCards()
      .then(() => {
        renderFilters(cards);
        renderStatistic(cards);
      });
    };

    cardElement.onMarkAsWatched = () => {
      dataOneCard.alreadyWatched = !dataOneCard.alreadyWatched;
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
          renderFilters(cards);
        });
      api.getCards()
        .then(() => {
          renderFilters(cards);
          renderStatistic(cards);
        });
    };
    cardElement.onMarkAsFavorite = () => {
      dataOneCard.favorite = !dataOneCard.favorite;
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()})
        .then((newData) => {
          popUpElement.update(newData);
        });
      api.getCards()
        .then(() => {
          renderFilters(cards);
          renderStatistic(cards);
        });
    };
    popUpElement.onSubmit = (newData, type = `add`) => {
      const block = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).disabled = true;
        popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = true;
      };
      const unblock = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).disabled = false;
        popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = false;
      };
      const inputRedWarning = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).style.borderColor = `#FF0000`;
        popUpElement.element.querySelector(`.film-details__user-rating-label`).style.backgroundColor = `#FF0000`;
      };
      block();
      const load = (isSuccess) => {
        return new Promise((res, rej) => {
          setTimeout(isSuccess ? res : rej, 1000);
        });
      };
      Object.assign(dataOneCard, newData);
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
      load(true)
        .then(() => {
          unblock();
          popUpElement.renderCommentsList(dataOneCard.userComments);
          let oldFilm = cardElement.element;
          cardElement.render();
          filmContainer[0].replaceChild(cardElement.element, oldFilm);
          popUpElement.clearFrom();
          popUpElement.enableForm();
          if (type === `add`) {
            popUpElement.onSubmitSuccess();
          }
        })
        .catch(() => {
          popUpElement.shake();
          inputRedWarning();
          unblock();
        });
    };

    popUpElement.onClose = () => {
      popUpElement.unrender();
    };
  }
};
const renderMostCommented = (cards) => {
  const mostCommentedContainer = filmContainer[2];
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
      const block = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).disabled = true;
        popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = true;
      };
      const unblock = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).disabled = false;
        popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = false;
      };
      const inputRedWarning = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).style.borderColor = `#FF0000`;
        popUpElement.element.querySelector(`.film-details__user-rating-label`).style.backgroundColor = `#FF0000`;
      };
      block();
      const load = (isSuccess) => {
        return new Promise((res, rej) => {
          setTimeout(isSuccess ? res : rej, 1000);
        });
      };
      Object.assign(dataOneCard, newData);
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
      load(true)
        .then(() => {
          unblock();
          popUpElement.unrender();
          let oldFilm = cardElement.element;
          filmContainer[0].replaceChild(cardElement.element, oldFilm);
        })
        .catch(() => {
          popUpElement.shake();
          inputRedWarning();
          unblock();
        });
    };

    popUpElement.onClose = () => {
      popUpElement.unrender();
    };
  }
};
const renderTopRated = (cards) => {
  const TopRatedContainer = filmContainer[1];
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
      const block = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).disabled = true;
        popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = true;
      };
      const unblock = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).disabled = false;
        popUpElement.element.querySelector(`.film-details__user-rating-score`).disabled = false;
      };
      const inputRedWarning = () => {
        popUpElement.element.querySelector(`.film-details__comment-input`).style.borderColor = `#FF0000`;
        popUpElement.element.querySelector(`.film-details__user-rating-label`).style.backgroundColor = `#FF0000`;
      };
      block();
      const load = (isSuccess) => {
        return new Promise((res, rej) => {
          setTimeout(isSuccess ? res : rej, 1000);
        });
      };
      Object.assign(dataOneCard, newData);
      api.updateCard({id: dataOneCard.id, data: dataOneCard.toRAW()});
      load(true)
        .then(() => {
          unblock();
          popUpElement.unrender();
          let oldFilm = cardElement.element;
          filmContainer[0].replaceChild(cardElement.element, oldFilm);
        })
        .catch(() => {
          popUpElement.shake();
          inputRedWarning();
          unblock();
        });
    };

    popUpElement.onClose = () => {
      popUpElement.unrender();
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
      filmContainer[0].innerHTML = `Something went wrong while loading movies. Check your connection or try again later`;
    });
};
renderAll();