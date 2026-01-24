import React from 'react';
import { Phone, Mail, Users, MessageSquare, Trophy, Heart, Truck, CheckCircle2 } from 'lucide-react';

const ROOMS = [
    {
        title: "Hauptsaal",
        description: "Unser gemütlicher Hauptraum für das tägliche Geschäft und gesellige Runden.",
        capacity: "Flexibel",
        features: ["Zentraler Tresen", "Gemütliches Ambiente"],
        image: "/images/hall-main.jpg"
    },
    {
        title: "Raucherraum",
        description: "Ein separater Bereich für Gäste, die in entspannter Atmosphäre rauchen möchten.",
        capacity: "ca. 20-30",
        features: ["Gute Lüftung", "Eigener Bereich"],
        image: "/images/smoking-room.jpg"
    },
    {
        title: "Separates Zimmer",
        description: "Ideal für diskrete Trauerfeiern oder private Familienfeste im kleinen Kreis.",
        capacity: "bis 40",
        features: ["Absolute Privatsphäre", "Eigener Service"],
        image: "/images/private-room.jpg"
    },
    {
        title: "Großer Veranstaltungssaal",
        description: "Unser Prunkstück für große Hochzeiten, Firmenfeiern und Bälle.",
        capacity: "bis 300 Personen",
        features: ["Tanzfläche", "Bühne möglich", "Eigener Eingang"],
        image: "/images/big-hall.jpg"
    }
];

export default function EventsPage() {
    return (
        <main className="bg-light-cafe min-h-screen font-sans">
            {/* 2. Hero-секция */}
            <section className="py-10 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary-cafe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                        Tradition & Gastfreundschaft
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold text-primary-cafe uppercase mb-8 tracking-tight">
                        Events & Kulinarik
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Vom Fußballabend in der Gemeinschaft bis zur großen Traumhochzeit –
                        wir bieten für jeden Anlass den perfekten Rahmen.
                    </p>
                </div>
            </section>

            {/* 3. НОВЫЙ БЛОК: Catering / Partyservice */}
            <section className="max-w-5xl mx-auto px-4 mb-10">
                <div className="bg-accent-cafe/10 border-2 border-dashed border-accent-cafe rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                    <div className="bg-accent-cafe p-6 rounded-full text-primary-cafe shadow-xl">
                        <Truck size={60} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary-cafe mb-4 uppercase">Partyservice & Catering</h2>
                        <p className="text-lg text-gray-700 mb-6">
                            Möchten Sie unsere Küche bei Ihnen zu Hause oder in einer externen Location genießen?
                            Wir beliefern Ihr Event mit bis zu <strong className="text-primary-cafe text-xl">100 Personen</strong>.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-primary-cafe">
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Individuelle Menüplanung</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Kalte & Warme Buffets</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Pünktliche Lieferung</div>
                            <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Rundum-Sorglos-Service</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Сетка залов */}
            <section className="max-w-6xl mx-auto px-4 py-6">
                <h2 className="text-center text-3xl font-bold text-primary-cafe mb-16 uppercase tracking-widest">
                    Unsere Räumlichkeiten
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {ROOMS.map((room, idx) => (
                        <div key={idx} className="group cursor-default">
                            <div className="relative h-72 w-full overflow-hidden rounded-2xl mb-6 shadow-lg">
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 italic">
                                    [ Фото: {room.title} ]
                                </div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-bold text-primary-cafe shadow-sm">
                                    {room.capacity}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-primary-cafe mb-3 group-hover:text-accent-cafe transition-colors">
                                {room.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed italic">
                                "{room.description}"
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {room.features.map((f, i) => (
                                    <span key={i} className="text-[10px] uppercase tracking-tighter bg-primary-cafe text-white px-3 py-1 rounded-md">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 5. Подвал с акцентом */}
            <section className="bg-primary-cafe py-10 mt-10">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl font-bold mb-6">Planen Sie ein Event?</h2>
                    <p className="text-xl opacity-80 mb-10 font-light">
                        Ob Hochzeit, Trauerfeier oder ein Fußballabend mit Freunden –
                        kontaktieren Sie uns für ein unverbindliches Angebot.
                    </p>
                    <div className="flex text-white flex-col sm:flex-row justify-center gap-4">
                        <a href="tel:+49123456789" className="bg-accent-cafe  px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform">
                            Anrufen
                        </a>
                        <a href="mailto:info@gaststaette.de" className="border-2 border-accent-cafe text-accent-cafe px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-accent-cafe hover:text-primary-cafe transition-all">
                            E-Mail Schreiben
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}