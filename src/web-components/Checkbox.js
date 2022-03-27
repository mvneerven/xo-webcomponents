import CheckGroup from "./CheckGroup";

class Checkbox extends CheckGroup {
  _value = false;

  static get properties() {
    return {
      value: { type: Boolean },
      text: { type: String },
    };
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
  }

  set text(value) {
    this.items[0].label = value;
  }

  get text() {
    return this.items ? this.items[0].label : "On";
  }

  toggleCheck(e) {
    e.stopPropagation();
    if (e.target.checked) {
      this._value = true;
    } else {
      this._value = false;
    }
    this.requestUpdate();
  }

  isSelected(){
    return this.value;
  }

  constructor() {
    super(...arguments);
    this.items = [
      {
        value: true,
        label: "On",
      },
    ];
  }
}
export default Checkbox;
window.customElements.define("xw-checkbox", Checkbox);
