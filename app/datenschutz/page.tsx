import React from 'react';

export default function DatenschutzPage() {
    return (
        <main className="bg-light-cafe min-h-screen py-16 px-4">
            <div className="max-w-3xl mx-auto bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-800">
                <h1 className="text-xl font-bold text-primary-cafe mb-8 border-b-2 border-accent-cafe pb-2 uppercase tracking-wide">
                    Datenschutzerklärung
                </h1>

                <div className="prose prose-sm max-w-none space-y-8 text-gray-600 leading-relaxed">

                    {/* Общее введение (стандарт для Германии) */}
                    <section>
                        <p>
                            Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie über den Umgang mit Ihren Daten.
                        </p>
                    </section>

                    {/* Google reCAPTCHA */}
                    <section className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent-cafe">
                        <h2 className="text-xl font-bold text-primary-cafe mb-4">Spamschutz mit Google reCAPTCHA</h2>
                        <p>
                            Wir haben Google reCAPTCHA in Formularen auf unserer Webseite implementiert, um zu überprüfen, ob die in den Formularen eingegebenen Daten von menschlichen Besuchern stammen oder von Maschinen oder automatisierten Programmen, die auch als "Bots" bekannt sind.
                        </p>
                        <p className="mt-2">
                            Dieses Tool analysiert automatisch das Verhalten der Webseitenbesucher, sobald sie mit की Webseite interagieren... [Полный текст из твоего сообщения]
                        </p>
                        <p className="mt-4 text-xs italic">
                            Weitere Informationen finden Sie in der Datenschutzerklärung von Google reCAPTCHA:
                            <a href="https://policies.google.com/privacy" target="_blank" className="text-accent-cafe underline ml-1">
                                https://policies.google.com/privacy
                            </a>
                        </p>
                    </section>

                    {/* Webseitenanalyse (Jimdo / Hosting) */}
                    <section>
                        <h2 className="text-xl font-bold text-primary-cafe mb-4">Webseitenanalyse</h2>
                        <p>
                            Wenn du unsere Website besuchst, sammeln wir Informationen über deine Nutzung durch ein Webanalyse-Tool, das von unserem Hosting-Service bereitgestellt wird. Dieses Tool sammelt und kombiniert deine IP-Adresse und deinen User Agent, verkürzt sie und speichert diese Daten mit einer Hash-Funktion.
                        </p>
                        <p className="mt-2">
                            Die Rechtsgrundlage für diese Verarbeitung ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. (f) GDPR), insbesondere an der Durchführung von Webmessungen, um unsere Produkte und unsere Website zu verbessern.
                        </p>
                    </section>

                    {/* Дополнительная инфо (права пользователя) */}
                    <section className="pt-6 border-t border-gray-100">
                        <h2 className="text-lg font-bold text-primary-cafe mb-3">Ihre Rechte</h2>
                        <p>
                            Sie haben das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen.
                        </p>
                    </section>

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