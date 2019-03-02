const getFilterElement = () => {
  const container = document.querySelector('.main-navigation');
  const filter = {
    HREF:[`all`, `watchlist`, `history`, `favorites`],
    NAME:[`All movies` ,`Watchlist`, `History`, `Favorites`],
    AMOUNT: [39,12,13,14]
  };
  const elementHtml = (href,name, amount) => {
    return `
    <a href="#${href}" class="main-navigation__item">${name}<span class="main-navigation__item-count">${amount}</span></a>
        `;
  };
  for (let i = 0; i < 4; i++ ) {
    container.insertAdjacentHTML(`beforeEnd`, elementHtml(filter.HREF[i],filter.NAME[i],filter.AMOUNT[i]));
  };
};
export {getFilterElement};
