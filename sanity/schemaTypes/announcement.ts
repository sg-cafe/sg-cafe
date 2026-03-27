import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'announcement',
    title: 'Wichtige Mitteilung (Pop-up)',
    type: 'document',
    fields: [
        defineField({
            name: 'isActive',
            title: 'Anzeigen? (Показывать модалку?)',
            type: 'boolean',
            initialValue: false,
        }),
        defineField({ name: 'title', title: 'Titel (Заголовок)', type: 'string' }),
        defineField({ name: 'text', title: 'Nachricht (Текст сообщения)', type: 'text' }),
    ],
})