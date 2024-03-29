import breeds from "./pet-breeds.json" assert { type: "json" };

const breedAutoComplete = (options) => {
  let type = options.control?.context?.data.instance.insurance.type;

  let bd = breeds[type].map((i) => {
    return {
      text: i.name,
    };
  });
  let search = options.search.toLowerCase();
  const weightCategories = [
    "Mix 0-9 kg",
    "Mix 10-19 kg",
    "Mix 20-29 kg",
    "Mix 30-39 kg",
    "Mix 40+ kg",
  ];

  return weightCategories
    .map((i) => {
      return { text: i };
    })
    .concat(bd);
};

export const onboarding = {
  model: {
    instance: {
      state: {
        noPetName: true,
      },
      insurance: {
        name: "",
        type: "",
        breed: "",
      },
    },
    rules: {
      "#/insurance/name": [
        {
          set: "#/state/noPetName",
          value: (context) => {
            return context.value === "";
          },
        },
      ],
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
          set: "#/state/typeImage",
          value: (context) => {
            return `/img/pets/${context.get("#/insurance/type")}.webp`;
          },
        },
      ],
    },
  },
  pages: [
    {
      label: "Calculate your price",
      fields: [
        {
          type: "text",
          label: "Name of your pet",
          placeholder: "Fikkie",
          required: true,
          bind: "#/insurance/name",
        },
        {
          type: "xw-radiogroup",
          layout: "cards",
          cardWidth: "110px",
          cardHeight: "110px",
          hidden: "#/state/noPetName",
          label: "What type of pet is #/insurance/name ?",
          required: true,
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
        {
          type: "xw-checkgroup",
          laayout: "list",
          label: "What type of pet is #/insurance/name ?",
          required: true,
          cardWidth: "140px",
          cardHeight: "40px",
          bind: "#/insurance/checks",
          items: [
            { label: "Cat", value: "cat" },
            { label: "Dog", value: "dog" },
            { label: "Parrot", value: "parrot" },
            { label: "Rabbit", value: "rabbit" },
          ],
        },
      ],
    },
    {
      fields: [
        {
          type: "xw-info",
          title: "Base data (#/insurance/type)",
          body: "Enter your pet's details",
        },

        {
          type: "search",
          label: "Breed/Mix",
          placeholder: "Search here...",
          bind: "#/insurance/breed",
          required: true,
          autocomplete: {
            items: breedAutoComplete,
          },
        },
        {
          type: "text",
          label: "Birthdate",
          bind: "#/insurance/petBirthDate",
          required: true,
          placeholder: "DD-MM-JJJJ",
          pattern: "[0-9]{2}-[0-9]{2}-[1-2][9,0][1-9]{2}",
        },

        {
          type: "text",
          required: true,
          bind: "#/insurance/zipCode",
          label: "Your zip code",
          maxlength: 7,
          pattern: "[1-9][0-9]{3}\\s?[a-zA-Z]{2}",
          placeholder: "1234 AB",
        },
      ],
    },
    {
      fields: [
        {
          type: "xw-info",
          title: "Insurance type",
          body: "Select a plan",
        },
        {
          type: "xw-radiogroup",
          layout: "list",

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
          type: "xw-info",
          title: "Check your data",
          body: "Please verify the data below for correctness",
        },

        {
          type: "xw-info",
          title: "Your request",
          // style: "border: 1px solid #ccc; padding: 1rem",
          body: "You want your #/insurance/ageGroup old #/insurance/breed #/insurance/type '#/insurance/name' to have a #/insurance/plan plan.",
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
