import {Component} from './component';
import createElement from './create-Elem';
import {data} from './data';
class Filter extends Component {  
    constructor([nameFilter,href,amount],func) {
    super();
        this._href = href;
        this._nameFilter = nameFilter;
        this._amount = amount;
        this._onFilterClick = this._onFilterClick.bind(this);
    }
    set onFilter(fn) {
    this._onFilter = fn;
    }

    _onFilterClick(event) {
    event.preventDefault();
    return typeof this._onFilter === `function` && this._onFilter();
    }

    bind() {
    this._element.addEventListener(`click`, this._onFilterClick);
    }
    unbind() {
    this._element.removeEventListener(`click`, this._onFilterClick);
    }
    get template() {
        return `<a href="#${this._href}" class="main-navigation__item">${this._nameFilter}<span class="main-navigation__item-count">${this._amount}</span></a>`;
    }
};
export{Filter};