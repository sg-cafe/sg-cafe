import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'openingHours',
    title: 'Öffnungszeiten',
    type: 'document',
    fields: [
        defineField({ name: 'monday', title: 'Montag', type: 'string', initialValue: 'Ruhetag' }),
        defineField({ name: 'tueFri', title: 'Dienstag – Freitag', type: 'string' }),
        defineField({ name: 'tueFriKuche', title: 'Dienstag – Freitag (Küche)', type: 'string' }),
        defineField({ name: 'saturday', title: 'Samstag & Feiertage', type: 'string' }),
        defineField({ name: 'saturdayKuche', title: 'Samstag (Küche)', type: 'string' }),
        defineField({ name: 'sunday', title: 'Sonntag', type: 'string' }),
        defineField({ name: 'sundayKuche', title: 'Sonntag (Küche)', type: 'string' }),
    ],
})