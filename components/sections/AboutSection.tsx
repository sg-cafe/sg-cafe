"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className= "bg-light-cafe scroll-mt-24 overflow-hidden">      
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20" >

                    {/* ТЕКСТ: Наша история */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex flex-col"
                    >

                        {/* Основной заголовок (без "О нас") */}
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-cafe leading-tight mb-6">
                            Handgemacht, ehrlich <br />
                            <span className="text-[#D4A373]">&</span> herzlich.
                        </h2>

                        {/* Текст истории */}
                        <div className="space-y-4  text-dark-cafe text-lg leading-relaxed font-light">
                            <p>
                                In der **SG Gaststätte** dreht sich alles um das, was wirklich zählt: den Geschmack.
                                Als Herzstück unseres Sportvereins sind wir mehr als nur ein Restaurant – wir sind ein Treffpunkt für Freunde und Genießer.
                            </p>
                            <p>
                                Unsere Küche zeichnet sich durch Ehrlichkeit aus. Wir verzichten auf unnötigen Schnickschnack
                                und konzentrieren uns auf hochwertige Zutaten sowie Rezepte, die sich über Generationen bewährt haben.
                                Bei uns schmeckt es noch „wie zu Hause“.
                            </p>
                        </div>
                    </motion.div>
                    </div>
                </div>
        </section>
    );
}