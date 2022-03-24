import { LitElement, html, css } from "lit";
import { repeat } from "lit/directives/repeat.js";

class InputGroup extends LitElement {
  _value = [];
  _layout = "default";

  static get styles() {
    return [
      css`
        * {
          box-sizing: border-box; /* 1 */
        }

        .cards {
          width: 100%;
          flex-wrap: wrap;
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(var(--card-width), 1fr)
          );
          grid-auto-rows: minmax(var(--card-height), auto);
        }

        .cards label {
          position: relative;
          min-width: var(--card-width, 120px);
          min-height: var(--card-height, 120px);
          background-color: var(--xo-card-background);
          background-repeat: no-repeat;
          background-size: contain;
          border-radius: 10px;
          border: 2px solid var(--xo-input-border-color);
          background-image: var(--image);
        }

        .cards label:hover {
          transition: all 0.2s;
          border-color: var(--xo-input-border-color-hover);
        }

        .cards input {
          visibility: hidden;
        }
        .cards .xo-sl {
          color: white;
          vertical-align: middle;
          text-align: center;
        }

        .cards label.has-image .xo-sl {
          position: absolute;
          display: block;
          width: 100%;
          bottom: 0;
          left: 0;
          background-color: rgba(0, 0, 0, 0.4);
        }

        .cards label.has-image .xo-sl {
          opacity: 0;
        }

        .cards label.has-image:hover .xo-sl {
          opacity: 1;
          transition: all 0.2s ease;
        }

        label.selected {
          border-color: var(--accent) !important;
        }

        .cards label.selected,
        .list label.selected {
          position: relative;
          transition: all 0.2s;
        }
        .cards label.selected:after,
        .list label.selected:after {
          font-size: 1.2rem;
          font-weight: 800;
          content: "✓";
          position: absolute;
          top: 5px;
          right: 5px;
          color: white;
        }

        .list label {
          min-width: 160px;
          display: block;
          padding: 1rem 0.5em 1rem 0.5rem;
          border: 2px solid #ccc;
          border-radius: 1rem;
        }

        .list label.selected {
        }

        .default [type="radio"],
        .list [type="radio"] {
          position: absolute;
          left: -9999px;
        }

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
          border-radius: 100%;
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
          border-radius: 100%;
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
      `,
    ];
  }

  static get properties() {
    return {
      items: { type: Array },
      value: { type: Object },
      layout: { type: String },
      cardWidth: { type: String },
      cardHeight: { type: String },
    };
  }

  constructor() {
    super();
    this.items = [];
  }

  set layout(value) {
    this._layout = value;
  }

  get layout() {
    return this._layout;
  }

  render() {
    let name = this.name;

    return html`<div
      class="${this.layout}"
      style="--card-width: ${this.cardWidth}; --card-height: ${this.cardHeight}"
    >
      ${repeat(
        this.items,
        (item) => item.id,
        (item, index) => {
          item = this.makeItem(item);
          const checked = this.isSelected(item);
          return html`<label
            title="${item.label}"
            class="${checked ? "selected" : ""} ${item.image
              ? "has-image"
              : ""}"
            style="--image: url(${item.image});"
            ><input
              @change=${this.change}
              @click=${this.toggleCheck}
              .checked=${checked}
              type=${this.inputType}
              name="${name}"
              value="${item.value}"
            /><span class="xo-sl"> ${item.label}</span></label
          >`;
        }
      )}
    </div>`;
  }

  get inputType() {
    throw Error("Not implemented");
  }

  change(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  onInput(e) {
    e.stopPropagation();
  }

  reportValidity() {}

  toggleCheck(e) {
    throw Error("Not implemented");
  }

  checkValidity() {
    //TODO
    return this.required && !this.value ? false : true;
  }

  isSelected(item) {
    throw Error("Not implemented");
  }

  makeItem(item) {
    return typeof item === "string" ? { value: item, label: item } : item;
  }
}
export default InputGroup;
