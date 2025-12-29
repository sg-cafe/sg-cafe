// app/datenschutz/page.tsx
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutz | SG Gaststätte",
    description: "Informationen zum Datenschutz der Vereinsgaststätte SG Dietzenbach.",
};

export default function DatenschutzPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-16 pt-32 min-h-screen">
            <h1 className="text-4xl font-bold text-dark-cafe mb-8 border-b pb-2">Datenschutz</h1>

            {/* Placeholder для текста о защите данных. 
          Этот текст нужно получить от клиента или сгенерировать. 
          Я даю только структуру.
      */}
            <section className="space-y-6 text-gray-700">
                <p>
                    Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003). In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.
                </p>

                <h2 className="text-2xl font-semibold mt-8">Verantwortlicher</h2>
                <p>
                    Verantwortlicher im Sinne der DSGVO ist: [Имя Владельца / Контакты].
                    Die Kontaktdaten finden Sie in unserem Impressum.
                </p>

                <h2 className="text-2xl font-semibold mt-8">Ihre Rechte</h2>
                <p>
                    Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.
                </p>
            </section>

       
        </main>
    );
}