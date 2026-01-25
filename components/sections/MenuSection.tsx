import React from 'react';
import { client } from "@/sanity/lib/client";

interface MenuBtn {
    _id: string;
    label: string;
    fileUrl: string;
}

async function getMenuButtons(): Promise<MenuBtn[]> {
    try {
        const data = await client.fetch<MenuBtn[]>(
            `*[_type == "menuBtn"] | order(priority asc) {
                _id,
                label,
                "fileUrl": file.asset->url
            }`,
            {}, // Второй аргумент — параметры запроса (пустой объект)
            {
                
                next: {
                    revalidate: 0 
                }
            }
        );
        return data;
    } catch (error) {
        console.error("Sanity error:", error);
        return [];
    }
}

export default async function MenuPage() {
    const buttons = await getMenuButtons();

    // Ссылки на картинки (замени их на свои пути в папке public или ссылки из Sanity)
    const bgImages = [
        { src: "/eat/eat.jpg", pos: "top-10 left-[-5%] rotate-12" },
        { src: "/eat/eat-2.jpg", pos: "top-1/4 right-[-2%] -rotate-12" },
        { src: "/eat/eat-4.jpg", pos: "bottom-40 left-[5%] -rotate-6" },
        { src: "/eat/eat-5.jpg", pos: "bottom-10 right-[2%] rotate-12" },

    ];

    return (
        <section id="menu" className="overflow-hidden bg-light-cafe">

            {/* Центральный блок:
                w-full — на мобилках
                md:w-[70%] — на десктопе
                mx-auto — центрирование
                relative overflow-hidden — чтобы картинки декора не выходили за этот блок
            */}
            <div className="relative mx-auto w-full md:w-[70%] min-h-screen  flex flex-col items-center justify-center p-6">

                {/* --- Фоновые изображения (теперь привязаны к границам 70%) --- */}
                {bgImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute ${img.pos} z-50 w-40 h-40 md:w-64 md:h-64 opacity-40 pointer-events-none`}
                    >
                        <img
                            src={img.src}
                            alt="decor"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                    </div>
                ))}

                {/* --- Основной контент --- */}
                <div className="relative z-10 flex flex-col items-center w-full">
                    {/* Заголовок */}
                    <div className="text-center mb-16">
                        <span className="text-primary-cafe text-xs uppercase tracking-[0.3em] font-semibold mb-3 block">
                            Auswahl
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extralight text-dark-cafe tracking-tight">
                            Speisekarte
                        </h2>
                        <div className="mt-6 w-24 h-[1px] bg-accent-cafe mx-auto"></div>
                    </div>

                    {/* Список кнопок */}
                    <div className="grid grid-cols-1 gap-4 w-full max-w-[320px]">
                        {buttons.length === 0 ? (
                            <p className="text-[#1B263B]/50 text-center font-light italic">Momentan keine Karten.</p>
                        ) : (
                            buttons.map((btn) => (
                                <a
                                    key={btn._id}
                                    href={btn.fileUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative"
                                >
                                    <div className="
                                        w-full py-5 px-8 
                                        bg-accent-cafe text-[#FDFCF0] 
                                        text-center uppercase tracking-[0.2em] text-xs font-medium
                                        border border-accent-cafe
                                        transition-all duration-500 ease-in-out
                                        group-hover:bg-transparent group-hover:text-[#1B263B]
                                    ">
                                        {btn.label}
                                    </div>
                                </a>
                            ))
                        )}
                    </div>

                    {/* Примечание */}
                    <p className="mt-12 text-[10px] uppercase tracking-widest text-[#1B263B]/40 font-light text-center">
                        Klicken zum Öffnen (PDF)
                    </p>
                </div>
            </div>
        </section>
    );
}