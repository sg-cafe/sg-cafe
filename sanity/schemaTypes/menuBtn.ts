// sanity/schemaTypes/menuBtn.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menuBtn',
    title: 'Кнопки Меню (PDF)',
    type: 'document',
    fields: [
        defineField({
            name: 'label',
            title: 'Название кнопки',
            description: 'Например: Wochenkarte (Недельное меню)',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'file',
            title: 'PDF Файл',
            type: 'file',
            options: {
                accept: '.pdf'
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'priority',
            title: 'Порядок (1 - самый верхний)',
            description: '1 - самая верхняя, 2 - ниже и т.д.',
            type: 'number',
            initialValue: 10,
        }),
    ],
})