import React from 'react';
import { client } from "@/sanity/lib/client";
import { Clock, MapPin, Phone, Mail, Printer } from 'lucide-react';

export default async function ContactSection() {

    // Дефолтные значения на случай, если в Sanity еще ничего не заполнено
    const hours = await client.fetch(`*[_type == "siteSettings"][0].openingHours`) || {
        monday: 'Ruhetag',
        tueFri: '11:00 – 14:30 | 17:00 – 23:00',
        tueFriKuche: 'Küche bis 14:00 & 22:00',
        saturday: '11:00 – 23:00',
        saturdayKuche: 'Küche: 11-15 & 16:30-22:00',
        sunday: '11:00 – 22:00',
        sundayKuche: 'Küche: 11-15 & 16:30-21:00',
    };

    return (
        <section className="bg-light-cafe py-10 md:py-16 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">

                {/* ВЕРХНИЙ БЛОК: Часы и Карта */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 mb-6 md:mb-8">

                    {/* Часы работы */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl md:text-3xl font-semibold uppercase text-dark-cafe mb-6">
                            Öffnungszeiten
                        </h2>

                        <div className="space-y-4 text-dark-cafe/80">
                            {/* Понедельник (с проверкой на Ruhetag) */}
                            <div className={`flex justify-between border-b border-accent-cafe/10 pb-2 font-semibold ${hours.monday.toLowerCase().includes('ruhetag') ? 'text-red-800' : ''}`}>
                                <span>Montag</span>
                                <span className="uppercase tracking-widest">{hours.monday}</span>
                            </div>

                            {/* Вторник - Пятница */}
                            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-accent-cafe/10 pb-2 gap-1 sm:gap-0">
                                <div className="flex flex-col">
                                    <span className="font-medium">Dienstag – Freitag</span>
                                    <span className="text-[10px] uppercase opacity-60">{hours.tueFriKuche}</span>
                                </div>
                                <div className="text-left sm:text-right font-medium">
                                    {hours.tueFri}
                                </div>
                            </div>

                            {/* Суббота */}
                            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-accent-cafe/10 pb-2 gap-1 sm:gap-0">
                                <div className="flex flex-col">
                                    <span className="font-medium">Samstag & Feiertage</span>
                                    <span className="text-[10px] uppercase opacity-60">{hours.saturdayKuche}</span>
                                </div>
                                <div className="text-left sm:text-right font-medium">{hours.saturday}</div>
                            </div>

                            {/* Воскресенье */}
                            <div className="flex flex-col sm:flex-row sm:justify-between border-b border-accent-cafe/10 pb-2 gap-1 sm:gap-0">
                                <div className="flex flex-col">
                                    <span className="font-medium">Sonntag</span>
                                    <span className="text-[10px] uppercase opacity-60">{hours.sundayKuche}</span>
                                </div>
                                <div className="text-left sm:text-right font-medium">{hours.sunday}</div>
                            </div>
                        </div>
                    </div>

                    {/* Карта */}
                    <div className="w-full h-72 md:h-80 lg:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg border-2 border-white relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.43763784114!2d8.775871077227702!3d50.00318041944512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd17e130282119%3A0xf63914a873832810!2sOffenthaler%20Str.%2051%2C%2063128%20Dietzenbach!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Standort"
                            className="contrast-110"
                        ></iframe>
                    </div>
                </div>

                {/* НИЖНИЙ БЛОК: Контакты */}
                <div className="flex flex-col items-center text-center pt-6 md:pt-8">
                    <h2 className="text-2xl md:text-3xl font-semibold uppercase text-dark-cafe mb-2">
                        Kontakt
                    </h2>
                    <p className="text-dark-cafe/70 mb-10 italic">
                        SG-Vereinsgaststätte <br className="md:hidden" />
                        <span className="hidden md:inline"> — </span>
                        Offenthaler Straße 51, 63128 Dietzenbach
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl">
                        {/* Телефон */}
                        <a href="tel:060743888" className="flex flex-col items-center group">
                            <div className="w-12 h-12 rounded-full bg-accent-cafe/10 flex items-center justify-center mb-3 group-hover:bg-accent-cafe transition-colors">
                                <Phone className="w-5 h-5 text-accent-cafe group-hover:text-white" />
                            </div>
                            <span className="text-lg font-bold text-dark-cafe">06074 3888</span>
                            <span className="text-[10px] uppercase opacity-50 tracking-widest mt-1">Telefon</span>
                        </a>

                        {/* Факс */}
                        <div className="hidden md:flex flex-col items-center opacity-60">
                            <div className="w-12 h-12 rounded-full bg-dark-cafe/5 flex items-center justify-center mb-3">
                                <Printer className="w-5 h-5 text-dark-cafe/40" />
                            </div>
                            <span className="text-lg font-bold text-dark-cafe">06074 48 71 25</span>
                            <span className="text-[10px] uppercase opacity-50 tracking-widest mt-1">Fax</span>
                        </div>

                        {/* Email */}
                        <a href="mailto:sg.gaststaette@gmail.com" className="flex flex-col items-center group">
                            <div className="w-12 h-12 rounded-full bg-accent-cafe/10 flex items-center justify-center mb-3 group-hover:bg-accent-cafe transition-colors">
                                <Mail className="w-5 h-5 text-accent-cafe group-hover:text-white" />
                            </div>
                            <span className="text-sm md:text-lg font-bold text-dark-cafe break-all px-2">
                                sg.gaststaette@gmail.com
                            </span>
                            <span className="text-[10px] uppercase opacity-50 tracking-widest mt-1">E-Mail</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}