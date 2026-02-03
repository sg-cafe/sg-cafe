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
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-cafe leading-tight mb-6 uppercase tracking-tight">
                            Handgemacht. <br />
                            <span className="text-accent-cafe">Ehrlich.</span> Herzlich.
                        </h2>

                        <div className="space-y-4 text-dark-cafe text-lg leading-relaxed font-light">
                            <p>
                                In der <span className="font-semibold text-primary-cafe">SG-Gaststätte</span> steht im Mittelpunkt, was wirklich zählt: authentischer Geschmack und echte Gastfreundschaft. Als zentraler Treffpunkt unseres Sportvereins sind wir weit mehr als nur ein Restaurant – wir sind ein Ort der Begegnung, des Austauschs und des Genusses.
                            </p>
                            <p>
                                Unsere Küche folgt einem klaren Anspruch an Qualität und Transparenz. Wir konzentrieren uns bewusst auf ausgewählte, hochwertige Zutaten und eine handwerklich saubere Zubereitung. Ohne überflüssigen Schnickschnack, dafür mit Sorgfalt, Leidenschaft und Liebe zum Detail entstehen Gerichte, die überzeugen – ehrlich, bodenständig und geschmackvoll.
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
                                className="object-cover transition-transform duration-700 hover:scale-105"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* ВТОРОЙ БЛОК: Фото слева, Текст справа */}
                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative h-[400px] md:h-[600px] w-full overflow-hidden shadow-xl rounded-xl">
                            <Image
                                src="/eat/eat-8.png"
                                alt="Unsere Qualität"
                                fill
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-1/2 flex flex-col"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-dark-cafe leading-tight mb-6 uppercase tracking-tight">
                            Qualität, die man <br />
                            <span className="text-accent-cafe">schmeckt</span>.
                        </h2>

                        <div className="space-y-4 text-dark-cafe text-lg leading-relaxed font-light">
                            <p>
                                In unserer Vereinsgaststätte legen wir größten Wert auf Qualität und Frische. Deshalb kommen bei uns ausschließlich sorgfältig ausgewählte Zutaten in den Topf. Durch die enge Zusammenarbeit mit regionalen Partnern garantieren wir Ihnen stets frische, hochwertige und geschmackvolle Gerichte.
                            </p>
                            <p>
                                Von der bewussten Auswahl unseres Fleisches bis hin zu liebevoll hausgemachten Saucen – bei uns zählt jedes Detail, damit Sie sich bei uns rundum wohlfühlen und Ihren Besuch genießen können.
                            </p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}