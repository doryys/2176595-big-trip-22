import { createElement } from '../render.js';

function createListEventItemsTemplate() {
  return (
    `<ul class="trip-events__list">
     </ul>`
  );
}

export default class EventItems {
  getTemplate() {
    return createListEventItemsTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
