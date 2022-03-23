import xo from "xo-form";
import { html } from "lit";
import { repeat } from "lit/directives/repeat.js";

class CheckGroup extends xo.Control {
  _value = [];

  static get properties() {
    return {
      items: { type: Array },
      value: { type: Object },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  renderInput() {
    let name = this.name;

    return html`<div>
      ${repeat(
        this.items,
        (item) => item.id,
        (item, index) => {
          item = this.makeItem(item);
          return html`<label
            ><input
              @change=${this.change}
              @click=${this.toggleCheck}
              .checked=${this.isSelected(item)}
              type="checkbox"
              name="${name}"
              value="${item.value}"
            /><span class="xo-sl"> ${item.label}</span></label
          >`;
        }
      )}
    </div>`;
  }

  change(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  onInput(e) {
    e.stopPropagation();
  }

  toggleCheck(e) {
    e.stopPropagation();

    if (e.target.checked) {
      this._value.push(e.target.value);
    } else {
      let ix = this._value.indexOf(e.target.value);
      if (ix !== -1) this._value.splice(ix, 1);
    }

    this.fireChange();
  }

  checkValidity() {
    //TODO
  }

  isSelected(item) {
    return this._value.includes(item.value);
  }

  makeItem(item) {
    return typeof item === "string" ? { value: item, label: item } : item;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (!Array.isArray(value)) return;

    this._value = value;
  }
}
export default CheckGroup;
window.customElements.define("xo-checkgroup", CheckGroup);
