import { defineField, defineType } from 'sanity';

export const newspaperType = defineType({
  name: 'newspaper',
  title: 'Newspaper Archive',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title / Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publication Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publication',
      title: 'Publication Name',
      type: 'string',
      description: 'e.g., The Times of India, The Hindu',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Newspaper Cutting Image',
      type: 'image',
      options: { hotspot: true },
      description: 'High-res image of the physical cutting',
    }),
    defineField({
      name: 'pdf',
      title: 'PDF Version',
      type: 'file',
      options: { accept: '.pdf' },
    }),
    defineField({
      name: 'description',
      title: 'Context / Description',
      type: 'text',
      rows: 3,
    }),
  ],
});
