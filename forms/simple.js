export const form = {
  model: {
    instance: {
      state: {},
      data: {
        name: "",
        msg: "",
        radio: "Bad"
      },
    },
    rules: {
      "#/state/submit": [
        {
          value: (context) => {
            alert(JSON.stringify(context.model.instance.data, null, 2));
          },
        },
      ],
    },
  },
  pages: [
    {
      label: "My Form",

      fields: [
        {
          type: "text",
          bind: "#/data/name",
          required: true,
          label: "Your name",
          placeholder: "Enter your name",
        },
        {
          type: "textarea",
          bind: "#/data/msg",
          label: "Your message",
          required: true,
          placeholder: "Enter a message",
          maxlength: 100,
          rows: 6,
        },
        {
          type: "xw-switch",
          label: "Switch",
          text: "Switch me",
          bind: "#/data/switch",
        },
        {
          type: "xw-radiogroup",
          label: "RadioGroup",
          text: "Radio Group",
          bind: "#/data/radio",
          items: ["Good", "Bad", "Ugly"]
        },
        {
          type: "xw-checkbox",
          label: "Checkbox",
          text: "Yes/No",
          bind: "#/data/checkbox"
        },
        {
          type: "xw-filedrop",
          label: "Files",
          infotext: "Drop 'm like they're hot!",
          height: "200px",
          max: 10
        },
        {
          type: "button",
          bind: "#/state/submit",
          label: "Submit",
        },

        {
          type: "xw-tags",
          label: "Tags",
          bind: "#/data/tags",
          autocomplete: {

            items: ["App"]
          }
        }
      ],
    },
  ],
};
