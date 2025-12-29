// app/impressum/page.tsx
import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum | SG Gaststätte",
    description: "Gesetzlich vorgeschriebene Anbieterkennzeichnung der Gaststätte.",
};

export default function ImpressumPage() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-16 pt-32 min-h-screen">
            <h1 className="text-4xl font-bold text-dark-cafe mb-8 border-b pb-2">Impressum</h1>

            {/* Это обязательная информация по законам Германии */}
            <section className="space-y-6 text-gray-700">
                <h2 className="text-2xl font-semibold mt-8">Angaben gemäß § 5 TMG</h2>
                <p>
                    **Gaststätte Sportgemeinschaft Dietzenbach 1945 e. V.**
                    <br />[Адрес ресторана]
                    <br />[Индекс, Город]
                    <br />[Страна]
                </p>

                <h2 className="text-2xl font-semibold mt-8">Vertreten durch</h2>
                <p>
                    Inhaber: **Mohsen Azizi**
                    <br />[Связанный спортивный клуб]
                </p>

                <h2 className="text-2xl font-semibold mt-8">Kontakt</h2>
                <p>
                    Telefon: [Номер телефона]
                    <br />E-Mail: [Адрес электронной почты]
                </p>
            </section>
        </main>
    );
}