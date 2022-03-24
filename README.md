# Introduction

XO Web Components is a tiny Web Components package. Currently, it holds these LitElement built web components.

## Controls

- Checkbox
- CheckGroup
- Dialog
- FileDrop
- Info
- RadioGroup
- Select
- Switch
- Tags
- Theme

# Setup

Install the package:

`npm i xo-webcomponents`

Then, in your project, reference the individual components, so you don't add more than strictly necessary to your bundle:

```js
import Switch  from 'xo-webcomponents/dist/Switch';
import RadioGroup  from 'xo-webcomponents/dist/RadioGroup';
import FileDrop  from 'xo-webcomponents/dist/FileDrop';
```

---

See also: [XO Form](https://www.npmjs.com/package/xo-form), a tiny web component aware web form generator that uses declarative syntax to run complex data-bound forms.