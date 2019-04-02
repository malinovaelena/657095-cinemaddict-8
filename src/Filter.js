import {Component} from './component';
import createElement from './create-Elem';
import {data} from './data';
class Filter extends Component {  
    constructor([nameFilter,href, amount]) {
    super();
        this._href = href;
        this._nameFilter = nameFilter;
        this._amount = amount;
    }
    set onFilter(fn) {
        this._onFilter = fn;
    }
    onClick() {
        return typeof this._onFilter === `function` && this._onFilter();
    }
    bind() {
        this._element.addEventListener(`click`, this._onClick);
    }
    unbind() {
        this._element.removeEventListener(`click`, this._onClick);
    }
    get template() {
        return `<a href="#${this._href}" class="main-navigation__item">${this._nameFilter}<span class="main-navigation__item-count">${this._amount}</span></a>`;
    }
};
export{Filter};