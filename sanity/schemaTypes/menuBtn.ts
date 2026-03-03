// sanity/schemaTypes/menuBtn.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'menuBtn',
    title: 'Speisekarte-Buttons (PDF)',
    type: 'document',
    fields: [
        defineField({
            name: 'label',
            title: 'Button-Beschriftung',
            description: 'Beispiel: Wochenkarte oder Hauptspeisekarte',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'file',
            title: 'PDF-Datei',
            type: 'file',
            options: {
                accept: '.pdf'
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'priority',
            title: 'Reihenfolge (1 - ganz oben)',
            description: '1 - oberste Position, 2 - darunter, usw.',
            type: 'number',
            initialValue: 10,
        }),
    ],
})