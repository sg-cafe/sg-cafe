import React from 'react';
import { Phone, Mail, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const ROOMS = [
    {
        title: "Hauptsaal",
        description: "Unser gemütlicher Hauptraum für das tägliche Geschäft und gesellige Runden.",
        capacity: "Flexibel",
        features: ["Zentraler Tresen", "Gemütliches Ambiente"],
        image: "/rooms/main-room.jpg"
    },
    {
        title: "Sonnenterrasse",
        description: "Genießen Sie die warme Jahreszeit auf unserer einladenden Terrasse im Freien – ideal für Sommerfeste.",
        capacity: "Flexibel",
        features: ["Außenbereich", "Sonnenschirme", "Frische Luft"],
        image: "/fotos/terassa-1.png"
    },
   
    {
        title: "Separates Zimmer",
        description: "Ideal für diskrete Trauerfeiern oder private Familienfeste im kleinen, ruhigen Kreis.",
        capacity: "bis 40",
        features: ["Absolute Privatsphäre", "Eigener Service"],
        image: "/rooms/private-room.png"
    },
    {
        title: "Raucherraum",
        description: "Ein separater, gut belüfteter Bereich für Gäste, die in entspannter Atmosphäre rauchen möchten.",
        capacity: "ca. 20-30",
        features: ["Gute Lüftung", "Eigener Bereich"],
        image: "/rooms/smoking-room.png"
    },
    {
        title: "Catering & Partyservice",
        description: "Wir bringen unsere kulinarischen Highlights direkt zu Ihnen nach Hause oder in Ihre Wunschlocation.",
        capacity: "bis 100 Personen",
        features: ["Buffet-Service", "Individuelle Planung", "Lieferung"],
        image: "/fotos/cartering.png" // Можно поставить фото красивого блюда или фуршета
    }
];

export default function EventsPage() {
    return (
        <main className="bg-light-cafe min-h-screen font-sans pt-12 md:pt-20">

            {/* 1. Hero-секция */}
            <section className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-primary-cafe text-xs uppercase tracking-[0.3em] font-bold mb-4 block">
                        Tradition & Gastfreundschaft
                    </span>
                    <h1 className="text-4xl md:text-6xl font-semibold text-primary-cafe uppercase mb-8 tracking-tight">
                        Events & Räumlichkeiten
                    </h1>
                    <div className="w-24 h-1 bg-accent-cafe mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 leading-relaxed font-light">
                        Vom sonnigen Nachmittag auf der Terrasse bis zur großen Traumhochzeit im Saal –
                        wir bieten für jeden Anlass und jede Jahreszeit den perfekten Rahmen.
                    </p>
                </div>
            </section>

            {/* 2. Сетка залов, террасы и кейтеринга */}
            <section className="max-w-6xl mx-auto px-4 py-6 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ROOMS.map((room, idx) => (
                        <div key={idx} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">

                            {/* Изображение */}
                            <div className="relative h-64 w-full overflow-hidden">
                                <Image
                                    src={room.image}
                                    alt={room.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Вместимость поверх фото */}
                                <div className="absolute top-4 right-4 bg-primary-cafe text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg">
                                    {room.capacity}
                                </div>
                            </div>

                            {/* Контент */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-primary-cafe mb-3 group-hover:text-accent-cafe transition-colors uppercase tracking-wide">
                                    {room.title}
                                </h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm italic flex-grow">
                                    "{room.description}"
                                </p>

                                {/* Фишки (Теги) */}
                                <div className="flex flex-wrap gap-2">
                                    {room.features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-1.5 text-[10px] uppercase tracking-tighter bg-light-cafe text-primary-cafe px-3 py-1.5 rounded-lg font-semibold">
                                            <CheckCircle2 size={12} className="text-accent-cafe" />
                                            {f}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Подвал (CTA) */}
            <section className="bg-primary-cafe py-16">
                <div className="max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase tracking-tight">Planen Sie Ihr Event bei uns?</h2>
                    <p className="text-lg md:text-xl opacity-80 mb-12 font-light">
                        Ob Firmenfeier, private Party oder Catering-Anfrage –
                        unser Team berät Sie gerne individuell und unverbindlich.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <a href="tel:+4960743888" className="bg-accent-cafe px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:opacity-80 transition-all shadow-lg flex items-center justify-center gap-2">
                            <Phone size={18} />
                            Anrufen
                        </a>
                        <a href="mailto:sg.gaststaette@gmail.com" className="border-2 border-white text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:opacity-80 hover:text-primary-cafe transition-all flex items-center justify-center gap-2">
                            <Mail size={18} />
                            E-Mail
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}