"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="bg-light-cafe py-14 md:py-24 scroll-mt-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-20 md:gap-32">

                {/* ПЕРВЫЙ БЛОК: Текст слева, Фото справа */}
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 flex flex-col"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-cafe leading-tight mb-6">
                            Handgemacht, ehrlich <br />
                            <span className="text-accent-cafe">&</span> herzlich.
                        </h2>

                        <div className="space-y-4 text-dark-cafe text-lg leading-relaxed font-light">
                            <p>
                                In der <span className="font-semibold">SG Gaststätte</span> dreht sich alles um das, was wirklich zählt: den Geschmack.
                                Als Herzstück unseres Sportvereins sind wir mehr als nur ein Restaurant – wir sind ein Treffpunkt für Freunde und Genießer.
                            </p>
                            <p>
                                Unsere Küche zeichnet sich durch Ehrlichkeit aus. Wir verzichten на unnötigen Schnickschnack
                                и сосредоточены на высококачественных ингредиентах.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden shadow-xl rounded-xl">
                            <Image
                                src="/fotos/main-room-2.png"
                                alt="SG Gaststätte Atmosphäre"
                                fill
                                className="object-cover transition-transform duration-700"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* ВТОРОЙ БЛОК: Фото слева, Текст справа */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">

                    {/* Фото появляется СЛЕВА */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden shadow-xl rounded-xl">
                            <Image
                                src="/eat/eat-8.png" // Замени на свое фото (например, блюдо или кухня)
                                alt="Unsere Qualität"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Текст появляется СПРАВА */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 flex flex-col"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-cafe leading-tight mb-6">
                            Qualität, die man <br />
                            <span className="text-accent-cafe">schmeckt</span>.
                        </h2>

                        <div className="space-y-4 text-dark-cafe text-lg leading-relaxed font-light">
                            <p>
                                Bei uns kommen nur die besten Zutaten in den Topf. Wir arbeiten eng mit regionalen Partnern zusammen,
                                um Ihnen stets frische und geschmackvolle Gerichte zu servieren.
                            </p>
                            <p>
                                Von der sorgfältigen Auswahl des Fleisches bis hin zu unseren hausgemachten Saucen –
                                jedes Detail zählt, чтобы сделать ваш визит особенным.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}