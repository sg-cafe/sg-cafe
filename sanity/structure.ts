import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Inhalt Management')
    .items([
      // Кнопки меню (как и было)
      S.documentTypeListItem('menuBtn').title('Speisekarte-Buttons (PDF)'),

      S.divider(), // Разделитель

      // Часы работы (сразу открывает документ, без списка)
      S.listItem()
        .title('Öffnungszeiten')
        .id('openingHours')
        .child(
          S.document()
            .schemaType('openingHours')
            .documentId('openingHours')
        ),

      // Объявление (сразу открывает документ)
      S.listItem()
        .title('Wichtige Mitteilung (Pop-up)')
        .id('announcement')
        .child(
          S.document()
            .schemaType('announcement')
            .documentId('announcement')
        ),

      // Убираем их из общего списка, чтобы не дублировались
      ...S.documentTypeListItems().filter(
        (listItem) => !['menuBtn', 'openingHours', 'announcement'].includes(listItem.getId()!)
      ),
    ])