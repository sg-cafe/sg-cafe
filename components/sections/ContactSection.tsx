import React from 'react';
import { Clock, MapPin, Phone, Mail, Printer } from 'lucide-react';
export default function ContactSection() {
    return (
        <section className="bg-light-cafe py-10 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* ЛЕВАЯ КОЛОНКА: Часы работы */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <p className="text-2xl font-semibold uppercase text-dark-cafe">Öffnungszeiten</p>
                        </div>

                        <div className="space-y-4 text-dark-cafe/80">
                            <div className="flex justify-between border-b border-accent-cafe/10 pb-2 font-medium text-red-800">
                                <span>Montag</span>
                                <span>Ruhetag</span>
                            </div>

                            <div className="flex justify-between border-b border-accent-cafe/10 pb-2">
                                <div className="flex flex-col">
                                    <span>Dienstag – Freitag</span>
                                    <span className="text-[10px] uppercase opacity-60">Küche bis 14:00 & 22:00</span>
                                </div>
                                <div className="text-right">
                                    11:00 – 14:30<br />17:00 – 23:00
                                </div>
                            </div>

                            <div className="flex justify-between border-b border-accent-cafe/10 pb-2">
                                <div className="flex flex-col">
                                    <span>Samstag & Feiertage</span>
                                    <span className="text-[10px] uppercase opacity-60">Küche: 11:00-15:00 & 16:30-22:00/21:00</span>
                                </div>
                                <div className="text-right">11:00 – 23:00</div>
                            </div>

                            <div className="flex justify-between border-b border-accent-cafe/10 pb-2">
                                <div className="flex flex-col">
                                    <span>Sonntag</span>
                                    <span className="text-[10px] uppercase opacity-60">Küche: 11:00-15:00 & 16:30-21:00</span>
                                </div>
                                <div className="text-right">11:00 – 22:00</div>
                            </div>
                        </div>
                    </div>

                    {/* ПРАВАЯ КОЛОНКА: Контакты и Карта */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                            <h2 className="text-2xl font-semibold uppercase  text-dark-cafe">Kontakt</h2>
                        </div>

                        <div className="mb-8 space-y-4">
                            <p className="text-xl font-medium text-dark-cafe">SG-Vereinsgaststätte</p>
                            <p className="text-dark-cafe/70 italic">Offenthaler Straße 51, 63128 Dietzenbach</p>

                            <div className="pt-4 space-y-3">
                                <a href="tel:060743888" className="flex items-center gap-4 hover:text-accent-cafe transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-accent-cafe/10 flex items-center justify-center">
                                        <Phone className="w-4 h-4 text-accent-cafe" />
                                    </div>
                                    <span className="text-lg">06074 3888</span>
                                </a>
                                <div className="flex items-center gap-4 text-dark-cafe/60">
                                    <div className="w-8 h-8 rounded-full bg-accent-cafe/5 flex items-center justify-center">
                                        <Printer className="w-4 h-4 text-accent-cafe/50" />
                                    </div>
                                    <span>06074 48 71 25</span>
                                </div>
                                <a href="mailto:sg.gaststaette@gmail.com" className="flex items-center gap-4 hover:text-accent-cafe transition-colors">
                                    <div className="w-8 h-8 rounded-full bg-accent-cafe/10 flex items-center justify-center">
                                        <Mail className="w-4 h-4 text-accent-cafe" />
                                    </div>
                                    <span>sg.gaststaette@gmail.com</span>
                                </a>
                            </div>
                        </div>

                        {/* Карта */}
                        <div className="w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-inner relative">
                            <iframe
                                // Ссылка настроена на конкретный адрес заведения в Дитценбахе
                                src="https://maps.google.com/maps?q=SG-Vereinsgastst%C3%A4tte,Offenthaler%20Stra%C3%9Fe%2051,63128%20Dietzenbach&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                title="SG-Vereinsgaststätte Standort"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}