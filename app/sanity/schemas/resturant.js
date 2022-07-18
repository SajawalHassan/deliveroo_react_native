export default {
  name: "resturant",
  title: "Resturant",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Resturant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    // sjkfnsklff
    {
      name: "image",
      type: "image",
      title: "Image of the resturant",
    },
    {
      name: "lat",
      type: "number",
      title: "latatude of the resturant",
    },
    {
      name: "long",
      type: "number",
      title: "longitude of the resturant",
    },
    {
      name: "address",
      type: "string",
      title: "Resturant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating between 1 and 5",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error("Rating must be between 1 and 5"),
    },
    {
      name: "type",
      title: "Categories",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "category", to: [{ type: "dish" }] }],
    },
  ],
};
