import breeds from "./pet-breeds.json" assert { type: "json" };

const breedAutoComplete = (options) => {
  let bd = window.breedData;
  let search = options.search.toLowerCase();
  return bd.filter((i) => {
    return i.text.toLowerCase().indexOf(search) >= 0;
  });
};

export const onboarding = {
  model: {
    instance: {
      state: {},
      insurance: {
        //type: "dog",
      },
    },
    rules: {
      "#/state/send": [
        {
          value: (context) => {
            alert("Request sent");
          },
        },
      ],
      "#/insurance/zipCode": [
        {
          value: (context) => {
            let s = (context.value ?? "").replace(" ", "");

            if (s && s.length >= 6) {
              s = s.substring(0, 4) + " " + s.substring(4);
              return s.toUpperCase();
            }
            return context.value;
          },
        },
      ],
      "#/insurance/type": [
        {
          set: "#/state/breeds",
          value: (context) => {
            window.breedData = breeds[context.value].map((i) => {
              return {
                text: i.name,
              };
            });
          },
        },
        {
          set: "#/state/typeImage",
          value: (context) => {
            return `/img/pets/${context.get("#/insurance/type")}.webp`;
          },
        },
        {
          set: "#/_xo/nav/page",
          value: 2,
        },
        {
          set: "#/state/breedPlaceholder",
          value: (context) => {
            let s = context.value;
            s = s.charAt(0).toUpperCase() + s.slice(1);
            return s + " breed or mix";
          },
        },
      ],
    },
  },
  pages: [
    {
      fields: [
        {
          type: "info",
          title: "Petplan. The plan your pet can't make",
        },
        {
          type: "radiogroup",
          layout: "cards",
          label: "What type of pet do you wish to insure?",
          required: true,
          style: "--card-width: 110px; --card-height: 110px",
          bind: "#/insurance/type",
          items: [
            { label: "Cat", value: "cat", image: "/img/pets/cat.webp" },
            { label: "Dog", value: "dog", image: "/img/pets/dog.webp" },
            {
              label: "Parrot",
              value: "parrot",
              image: "/img/pets/parrot.webp",
            },
            {
              label: "Rabbit",
              value: "rabbit",
              image: "/img/pets/rabbit.webp",
            },
          ],
        },
      ],
    },
    {
      fields: [
        {
          type: "info",
          title: "Base data (#/insurance/type)",
          body: "Enter your pet's details",
        },
        {
          type: "text",
          label: "Name",
          placeholder: "Your #/insurance/type's name",
          required: true,
          bind: "#/insurance/name",
        },

        {
          type: "search",
          label: "Breed",
          placeholder: "#/state/breedPlaceholder",
          bind: "#/insurance/breed",
          required: true,
          autocomplete: {
            items: breedAutoComplete,
          },
        },
        {
          type: "radiogroup",
          label: "Age",
          bind: "#/insurance/ageGroup",
          required: true,
          items: ["0-1 year", "2-5 years", "5 years+"],
        },
      ],
    },
    {
      fields: [
        {
          type: "info",
          title: "Insurance type",
          body: "Select a plan",
        },
        {
          type: "radiogroup",
          layout: "list",
          style: "--card-width: 100%; --card-height: 110px",
          bind: "#/insurance/plan",
          items: [
            { label: "Standard", value: "std" },
            { label: "Premium", value: "premium" },
            { label: "Excellence", value: "excellence" },
          ],
        },
      ],
    },
    {
      fields: [
        {
          type: "info",
          title: "Check your data",
          body: "Please verify the data below for correctness",
        },

        {
          type: "info",
          title: "Your request",
         // style: "border: 1px solid #ccc; padding: 1rem",
          body: "You want your #/insurance/ageGroup old #/insurance/breed #/insurance/type '#/insurance/name' to have a #/insurance/plan plan.",
        },

        {
          type: "text",
          required: true,
          bind: "#/insurance/zipCode",
          label: "Your zip code",
          maxlength: 7,
          pattern: "[1-9][0-9]{3}s?[a-zA-Z]{2}",
          placeholder: "1234 AB",
        },

        {
          type: "email",
          required: true,
          bind: "#/insurance/email",
          label: "Your email address",
          placeholder: "john@doe.com",
        },

        {
          type: "button",
          label: "Send request",
          bind: "#/state/send",
        },
      ],
    },
  ],
};
