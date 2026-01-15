import React from 'react';

export default function ImpressumPage() {
    return (
        <main className="bg-light-cafe min-h-screen py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-800">

                <h1 className="text-xl font-bold text-primary-cafe mb-8 border-b-2 border-accent-cafe pb-2 uppercase tracking-wide">
                    Impressum
                </h1>

                {/* Основная информация */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-primary-cafe mb-4">Angaben gem. § 5 TMG</h2>
                    <div className="space-y-1 text-lg leading-relaxed">
                        <p className="font-bold">Mohsen Azizi</p>
                        <p>Offenthaler Straße 51</p>
                        <p>63128 Dietzenbach</p>
                    </div>
                </section>

                {/* Контакты */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-primary-cafe mb-4">Kontaktaufnahme</h2>
                    <div className="space-y-2">
                        <p>
                            <span className="font-medium">Tel.:</span>
                            <a href="tel:060743888" className="ml-2 hover:text-accent-cafe transition-colors">06074 3888</a>
                        </p>
                        <p>
                            <span className="font-medium">E-Mail:</span>
                            <a href="mailto:sg.gaststaette@gmail.com" className="ml-2 hover:text-accent-cafe transition-colors underline">sg.gaststaette@gmail.com</a>
                        </p>
                    </div>
                </section>

                {/* Налоговый номер */}
                <section className="mb-10">
                    <h2 className="text-xl font-semibold text-primary-cafe mb-4">Umsatzsteuer-ID</h2>
                    <p className="italic text-gray-500">
                        Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:
                    </p>
                    <p className="mt-1">[Falls vorhanden, hier Nummer eintragen / Если есть номер, впиши его сюда]</p>
                </section>

                <hr className="my-10 border-gray-100" />

                {/* Юридические тексты */}
                <div className="prose prose-sm max-w-none text-gray-600 space-y-6 leading-relaxed">

                    <div>
                        <h3 className="text-lg font-bold text-primary-cafe mb-2">Haftungsausschluss – Disclaimer</h3>
                        <h4 className="font-semibold mb-1">Haftung für Inhalte</h4>
                        <p>
                            Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-1">Haftung für externe Links</h4>
                        <p>
                            Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold text-primary-cafe mb-2">Urheberrecht</h3>
                        <p>
                            Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes. Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt.
                        </p>
                    </div>
                </div>

                <div className="mt-12">
                    <a href="/" className="text-accent-cafe font-bold hover:underline">
                        ← Zurück zur Startseite
                    </a>
                </div>
            </div>
        </main>
    );
}