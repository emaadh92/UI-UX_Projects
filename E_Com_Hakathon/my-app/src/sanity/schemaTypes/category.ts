import { defineType, defineField } from "sanity";

export const category = defineType({
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required().min(3).max(50),
      description: "The name of the category (e.g., Furniture, Electronics).",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required().max(200),
      description: "A short description of this category.",
    }),
    defineField({
      name: "icon",
      title: "Category Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "An optional icon or image representing the category.",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
      description: "URL-friendly identifier for this category.",
    }),
  ],
});
