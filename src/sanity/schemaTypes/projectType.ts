import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Current Work & Discoveries',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Research Phase', 'In Development', 'Clinical Trials', 'Completed'],
      },
    }),
    defineField({
      name: 'progress',
      title: 'Progress (%)',
      type: 'number',
      validation: (rule) => rule.min(0).max(100),
    }),
    defineField({
      name: 'domain',
      title: 'Research Domain',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'timeline',
      title: 'Project Timeline',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'date', type: 'date', title: 'Date' },
            { name: 'milestone', type: 'string', title: 'Milestone' },
          ],
        },
      ],
    }),
  ],
});
