import InputGroup from "./InputGroup";
import {css} from 'lit';
class CheckGroup extends InputGroup {
  _value = [];

  static get styles() {
    return [
      InputGroup.styles,

      css`
      .default label {
        position: relative;
        padding-left: 24px;
        cursor: pointer;
        margin-right: 1rem;
        display: inline-block;
      }

      .default label:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 18px;
        height: 18px;
        border: 1px solid #ddd;
        border-radius: 10%;
        background: #fff;
      }

      .default label:after {
        content: "";
        width: 12px;
        height: 12px;
        background: var(--accent);
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 10%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
      }

      .default label:not(.selected):after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
      }

      .default label.selected:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
      }
      `
      
    ]; 
  }

  static get properties() {
    return InputGroup.properties;
  }

  get inputType() {
    return "checkbox";
  }

  toggleCheck(e) {
    e.stopPropagation();

    if (e.target.checked) {
      this._value.push(e.target.value);
    } else {
      let ix = this._value.indexOf(e.target.value);
      if (ix !== -1) this._value.splice(ix, 1);
    }

    this.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false })
    );

    this.requestUpdate();
  }

  checkValidity() {
    return this.required? this.value.length > 0 : true
  }

  reportValidity() {}

  isSelected(item) {
    return this._value.includes(item.value);
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
window.customElements.define("xw-checkgroup", CheckGroup);
