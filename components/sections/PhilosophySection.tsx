import React from 'react';

export default function PhilosophySection() {
    return (
        <section className="bg-light-cafe relative overflow-hidden">

            {/* --- ВЕРХНИЙ СИНИЙ БЛОК (На всю ширину) --- */}
            <div className="bg-primary-cafe w-full py-12 md:py-20">
                <div className="max-w-4xl mx-auto px-6 ">
                    {/* Маленький акцент сверху */}
                    <span className="text-accent-cafe text-center text-xs uppercase tracking-[0.3em] font-semibold mb-6 block">
                        Tradition & Gastfreundschaft
                    </span>

                    {/* Заголовок */}
                    <h2 className="text-3xl md:text-5xl font-semibold text-white uppercase tracking-wide mb-10">
                        Mehr als nur eine Gaststätte
                    </h2>

                    {/* Текстовый блок */}
                    <div className="space-y-8 text-white text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            Bei uns verbindet sich authentische deutsche Küche mit einer herzlichen, einladenden Atmosphäre.
                            Ob für ein gemütliches Abendessen, gemeinsames Mitfiebern bei spannenden Fußballspielen oder das
                            Feiern besonderer Anlässe – wir sind Ihr Ort für echte Gastlichkeit und geselliges Beisammensein.
                        </p>

                        <p>
                            
                            Mit Platz für bis zu <strong>300 Gäste</strong> bieten wir den passenden Rahmen für Hochzeiten, 
                            Geburtstage und Firmenfeiern. Unsere separaten Räumlichkeiten ermöglichen darüber hinaus eine ruhige 
                            Umgebung für geschäftliche Meetings sowie einen würdevollen und diskreten Rahmen für Trauerfeiern.
                        </p>
                    </div>
                </div>
            </div>

            {/* --- СРЕДНИЙ СВЕТЛЫЙ БЛОК (Кейтеринг) --- */}
            <div className="max-w-4xl mx-auto py-12 px-6">
                <h3 className="text-primary-cafe font-medium uppercase tracking-widest text-sm mb-4">
                    Unser Catering-Service
                </h3>
                <p className="text-dark-cafe text-lg leading-relaxed">
                    Möchten Sie unsere Spezialitäten an einem Ort Ihrer Wahl genießen? 
                    Mit unserem <strong>Catering- und Partyservice</strong> begleiten wir Ihre Veranstaltung kulinarisch und sorgen dafür, 
                    dass es Ihnen und Ihren Gästen an nichts fehlt.
                    Gerne beraten wir Sie persönlich und individuell bei der Auswahl der Speisen, der Zusammenstellung des 
                    Menüs sowie bei der Planung Ihres Events, damit alles genau Ihren Vorstellungen entspricht
                    Möchten Sie unsere Spezialitäten an einem Ort Ihrer Wahl genießen?
                </p>
            </div>

            {/* --- НИЖНИЙ СИНИЙ БЛОК (Статистика на всю ширину) --- */}
            <div className="bg-primary-cafe w-full py-10">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div className="group">
                            <span className="block text-3xl font-semibold mb-1 text-accent-cafe group-hover:scale-110 transition-transform">300</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Plätze</span>
                        </div>
                        <div className="group">
                            <span className="block text-3xl font-semibold mb-1 text-accent-cafe group-hover:scale-110 transition-transform">Live Sport</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Sky & DAZN</span>
                        </div>
                        <div className="group">
                            <span className="block text-3xl font-semibold mb-1 text-accent-cafe group-hover:scale-110 transition-transform">Events</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Feste & Feiern</span>
                        </div>
                        <div className="group">
                            <span className="block text-3xl font-semibold mb-1 text-accent-cafe group-hover:scale-110 transition-transform">Catering</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Partyservice</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}