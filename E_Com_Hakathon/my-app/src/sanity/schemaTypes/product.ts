import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      }
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "productImage",
      title: "Product Image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "newprice",
      title: "New Price",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "string",
      options: {
        list: [
          { title: "Gallery", value: "gallery" },
          { title: "Range", value: "range" },
          { title: "Our Product", value: "our-product" },
        ],
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "oldprice",
      title: "Old Price",
      type: "number",
    }),
    defineField({
      name: "isNew",
      title: "New Badge",
      type: "boolean",
    }),
  ],
});
