'use strict';
let getFilterElement = () => {
  for (let i = 0; i < 4; i++ ) {
    const container = document.querySelector('.main-navigation');
    const filterHref = [`all`, `watchlist`, `history`, `favorites`];
    const filterName = [`All movies` ,`Watchlist`, `History`, `Favorites`];
    const amount = [0,12,13,14];
    const FilterElement = (filterHref,filterName, amount) => {
      return
      `
    <a href="#${filterHref}" class="main-navigation__item">${filterName}<span class="main-navigation__item-count">${amount}</span></a>
        `
      ;
    };
    console.log(i);
    container.insertAdjacentHTML(`afterbegin`, FilterElement(filterHref[i],filterName[i],amount[i]));
  };
};
getFilterElement();
