import React from 'react';

export default function DatenschutzPage() {
    return (
        <main className="bg-light-cafe min-h-screen py-16 px-4">
            <div className="max-w-7xl mx-auto bg-white p-4 md:p-12 rounded-2xl shadow-sm border border-gray-100 text-gray-800">
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
                            Wir nutzen „Google reCAPTCHA“ (im Folgenden „reCAPTCHA“) auf unserer Website. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
                        </p>
                        <p className="mt-2">
                            Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf unserer Website (z. B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt.
                        </p>
                        <p className="mt-2 font-medium">
                            Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z. B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.
                        </p>
                        <p className="mt-2 text-sm">
                            Die Datenverarbeitung erfolgt auf Grundlage von <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen.
                        </p>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-xs italic">
                                Weitere Informationen zu Google reCAPTCHA sowie die Datenschutzerklärung von Google entnehmen Sie folgenden Links:
                            </p>
                            <div className="flex flex-col gap-1 mt-2">
                                <a href="https://policies.google.com/privacy" target="_blank" className="text-accent-cafe underline text-xs">
                                    https://policies.google.com/privacy
                                </a>
                                <a href="https://policies.google.com/terms" target="_blank" className="text-accent-cafe underline text-xs">
                                    https://policies.google.com/terms
                                </a>
                            </div>
                        </div>
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