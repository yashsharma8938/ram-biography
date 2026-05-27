import { type SchemaTypeDefinition } from 'sanity';
import { newsType } from './newsType';
import { newspaperType } from './newspaperType';
import { projectType } from './projectType';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [newsType, newspaperType, projectType],
};
