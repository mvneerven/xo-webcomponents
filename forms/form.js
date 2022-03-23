export const form = {
  model: {
    instance: {
      state: {},
      data: {
        name: "",
        msg: "",
        tags: [],
      },
    },
    rules: {
      "#/state/submit": [
        {
          set: "#/state/b",
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
          type: "switch",
          bind: "#/data/copy",
          label: "Send me a copy"
        },
        {
          type: "dialog",
          modal: true,
          bind: "#/data/copy"
        },
        {
          type: "filedrop",
          label: "Drop files",
          max: 10
        }
      ],
    },
    {
      label: "Page 2",
      fields: [
        {
          type: "radiogroup",
          label: "What?",
          items: ["Good", "Bad", "Ugly"],
          bind: "#/data/what",
        },
        {
          type: "tags",
          bind: "#/data/tags",
          placeholder: "Tag name ↵",
          label: "Add tags",
        },
        {
          type: "simple-greeting",
          label: "Greeting",
          name: "#/data/name",
        },
        {
          type: "button",
          bind: "#/state/submit",
          label: "Submit form",
        },
      ],
    },
  ],
};
