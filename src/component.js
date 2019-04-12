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
 
  static createElement(template) {
    const newElement = document.createElement(`div`);
    newElement.innerHTML = template;
    return newElement.firstChild;
  }
  
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
