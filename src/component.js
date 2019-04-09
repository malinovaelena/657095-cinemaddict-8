class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }
  }
  get template() {
    throw new Error(`You have to define template.`);
  }
  get element() {
    return this._element;
  }
 /* _onOpenButtonClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
  _onCloseButtonClick() {
    return typeof this._onClick === `function` && this._onClick();
  }
  _onSubmitButtonClick() {
    this._onSubmit = this._onSubmit.bind(this);
  }
  set onClick(fn) {
    this._onClick = fn;
  }*/
  static createElement(template) {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstChild;
  }
  //bind() {}
    //this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this._onOpenButtonClick.bind(this));
  
  //unbind() {}
    //this._element.querySelector(`.film-card__comments`).removeEventListener(`click`, this._onOpenButtonClick.bind(this));
  
  render() {
    this._element = Component.createElement(this.template);
    this.bind();
    return this._element;
  }
  unrender() {
    this.unbind();
    this._element.remove();
    this._element = null;
  }
};
export {Component};
