import { type SchemaTypeDefinition } from 'sanity'
import menuBtn from './menuBtn'
import openingHours from './openingHours'
import announcement from './announcement'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [menuBtn, openingHours, announcement],
}