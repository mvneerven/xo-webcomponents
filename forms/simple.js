export const form = {
  model: {
    instance: {
      state: {},
      data: {
        name: "",
        msg: "",
        radio: "Bad",
        files: [
          {
            url: "https://images.pexels.com/photos/5365910/pexels-photo-5365910.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        ]
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
          bind: "#/data/files",
          
          max: 10
        },
        {
          type: "xw-omnibox",
          label: "Omnibox",
          bind: "#/data/srch",
          placeholder: "Start typing your cocktail...",
          categories: {
            Bla: {
              trigger: (options) => {
                return options.search.length > 1;
              },
              getItems: async (options) => {
                let result = await fetch(
                  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
                    options.search
                ).then((x) => x.json());

                return result.drinks.map((d) => {
                  return {
                    text: d.strDrink,
                  };
                });
              },
            },
            Test: {
              newTab: true,

              getItems: (options) => {
                return [
                  {
                    text: "Look up",
                    url: "https://vinepair.com/articles/50-most-popular-cocktails-world-2017/",
                    description: "Go to vinepair.com...",
                  },
                ];
              },
            },
          },
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
