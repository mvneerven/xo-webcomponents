import { LitElement, html, css } from "lit";
import { repeat } from "lit/directives/repeat.js";


class Tags extends LitElement {
  _value = [];

  constructor() {
    super(...arguments);
    this.textInput = document.createElement("input");
    this.textInput.type = "text";

    this.textInput.addEventListener("keydown", this.input.bind(this));
  }

  set placeholder(value) {
    this.textInput.placeholder = value;
  }

  get placeholder() {
    return this.textInput.placeholder;
  }

  static get styles() {
    return [
      css`
        input {
          border: 0;
          outline: 0;
          background: transparent;
        }
        .tags {
          display: flex;
          min-height: 1.85rem;
        }
        .tag {
          white-space: nowrap;
          display: inline-block;
          border-radius: 0.3rem 1rem 1rem 0.3rem;
          background-color: var(--xo-card-background);
          color: var(--xo-card-color);
          padding: 0.3rem 0.6rem;
          margin-right: .3rem;
        }
        .eye {
          display: inline-block;
          margin-right: 0.4rem;
          margin-left: -0.4rem;
          opacity: 0.5;
        }

        a {
          display: "inline-block";
          margin-left: 0.3rem;
          cursor: pointer;
          opacity: 0.5;
        }

        a:hover {
          opacity: 1;
        }
      `,
    ];
  }

  static get properties() {
    return {
      value: {
        type: Array,
      },
    };
  }

  onInput(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (!Array.isArray(value)) {
      return;
    }

    this._value = value;
  }

  render() {
    return html`<div class="tags">
      ${repeat(
        this.value,
        (item) => item.id,
        (item, index) => {
          return this.renderTag(item, index);
        }
      )}
      ${this.textInput}
    </div>`;
  }

  firstUpdated() {
    super.firstUpdated();

    // this.context.mapper.tryAutoComplete(
    //   this,
    //   this.textInput,
    //   this.autocomplete
    // );
  }

  reportValidity (){ return true}

  checkValidity() {return true}

  input(e) {
    switch (e.key) {
      case "Enter":
        if (e.target.value !== "") {
          if (this.value.indexOf(e.target.value) === -1) {
            this.value.push(e.target.value);
            this.fireChange();
            this.requestUpdate();
            e.target.value = "";
          }
        }

        break;
      case "Backspace":
        if (e.target.value === "") {
          this.value.pop();
          this.fireChange();
          this.requestUpdate();
        }

        break;
    }
  }

  fireChange() {
    this.dispatchEvent(
      new Event("change", { bubbles: true, cancelable: false })
    );
  }

  renderTag(value, index) {
    return html`<div data-index="${index}" class="tag">
      <span class="eye">○</span><span>${value}</span>
      <a @click=${this.deleteTag}>x</a>
    </div>`;
  }

  deleteTag(e) {
    e.stopPropagation();
    e.stopImmediatePropagation();
    e.preventDefault();
    let index = parseInt(
      e.target.closest("[data-index]").getAttribute("data-index")
    );
    this.value.splice(index, 1);
    this.requestUpdate();
  }
}

customElements.define("xw-tags", Tags);
export default Tags;
