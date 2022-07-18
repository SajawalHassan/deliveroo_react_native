export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of dish",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "price",
      title: "Price of dish in GBP",
      type: "number",
    },
    {
      name: "image",
      title: "Image of the dish",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
