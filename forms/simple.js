export const form = {
    model: {
      instance: {
        state: {},
        data: {
          name: "",
          msg: ""          
        },
      },
      rules: {
          "#/state/submit":[
              {
                  value: context => {
                    alert(JSON.stringify(context.model.instance.data, null, 2));
                  }
              }
          ]
      }
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
            placeholder: "Enter your name"
          },
          {
            type: "textarea",
            bind: "#/data/msg",
            label: "Your message",
            required: true,
            placeholder: "Enter a message",
            maxlength: 100,
            rows: 6
          },
          {
            type: "button",
            bind: "#/state/submit",
            label: "Submit"
          }
        ]
      }
    ]
  };
  