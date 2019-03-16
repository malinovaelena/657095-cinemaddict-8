class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
  }
  get template() {
    throw new Error(`You have to define template.`);
  }
  set onClick(fn) {
    this._onClick = fn;
  }
  bind() {
    this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onOpenButtonClick.bind(this));
  }
  render() {
    this._element = createElement(this.template);
    this.bind();
    return this._element;
  }

}
