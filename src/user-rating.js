import {Component} from './component';

class ratingOfUser extends Component {
    constructor(data) {
        super();
        this._amount = data;
    }
    set update(data) {
        this._amount = data;
    }
    render() {
        this._element = Component.createElement(this.template);
        return this._element;
    }
    get template() {
        return `<section class="header__profile profile">
                    <p class="profile__rating">${this._amount}</p>
                </section>`;
    }
}
export {ratingOfUser};