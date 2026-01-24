import React from 'react';

export default function PhilosophySection() {
    return (
        <section className="bg-light-cafe relative overflow-hidden ">
            <div className="max-w-4xl mx-auto px-3">
                
                <div className='bg-primary-cafe  py-12 px-3 rounded-xl'>
                    {/* Маленький акцент сверху */}
                    <span className="text-primary-cafe text-center text-xs uppercase tracking-[0.3em] font-semibold mb-4 block">
                        Tradition & Gastfreundschaft
                    </span>

                    {/* Заголовок */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase tracking-wide mb-10">
                        Mehr als nur eine Gaststätte
                    </h2>

                    {/* Текстовый блок */}
                    <div className="space-y-8 text-white text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto">
                        <p>
                            Bei uns trifft authentische deutsche Küche auf herzliche Atmosphäre.
                            Ob Sie für ein gemütliches Abendessen kommen, gemeinsam beim Fußball
                            mitfiebern oder besondere Momente feiern – wir sind Ihr Ort für echte Gastlichkeit.
                        </p>

                        <p>
                            Mit Platz für bis zu <strong>300 Gäste</strong> bieten wir den idealen Rahmen für
                            Hochzeiten, Geburtstage und Firmenfeiern. In unseren separaten Räumlichkeiten
                            finden Sie zudem die nötige Ruhe für geschäftliche Meetings oder einen
                            würdevollen, diskreten Rahmen für Trauerfeiern.
                        </p>
                    </div>
                </div>
                    {/* Блок про кейтеринг без цифр */}
                    <div className="py-8 px-3">
                            <h3 className="text-primary-cafe font-medium uppercase tracking-widest text-sm mb-4">
                            Unser Catering-Service
                        </h3>
                        <p className="">
                            Möchten Sie unsere Spezialitäten an einem Ort Ihrer Wahl genießen?
                            Mit unserem <strong>Catering & Partyservice</strong> begleiten wir Ihr Event
                            kulinarisch und sorgen dafür, dass es Ihren Gästen an nichts fehlt.
                        </p>
                    </div>
                
                
                {/* Декоративная линия */}
                {/* <div className="mt-16 w-100 h-[1px] bg-accent-cafe mx-auto"></div> */}
                <div className='bg-primary-cafe  py-6 px-3 rounded-xl'>
                    {/* Сетка с ключевыми фишками */}
                    <div className=" grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        <div>
                            <span className="block text-2xl font-semibold mb-1 text-accent-cafe">300</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Plätze</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-semibold mb-1 text-accent-cafe">Live Sport</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Sky & DAZN</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-semibold mb-1 text-accent-cafe">Events</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Feste & Feiern</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-semibold mb-1 text-accent-cafe">Catering</span>
                            <span className="text-[10px] uppercase tracking-widest opacity-60">Partyservice</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}