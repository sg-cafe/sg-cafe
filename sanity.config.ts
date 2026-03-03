'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { deDELocale } from '@sanity/locale-de-de' // Импортируем немецкий язык

import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'

export default defineConfig({
  basePath: '/studio',
  projectId: '96qdcxca',
  dataset: 'production',

  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
    deDELocale(), // Добавляем плагин в список
  ],
})