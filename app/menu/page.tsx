// app/menu/page.tsx
import React from 'react';
import { createClient } from "next-sanity";

// --- КОНФИГУРАЦИЯ SANITY (Берется из .env.local) ---
// Эти переменные Sanity автоматически записал в твой .env.local
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2024-01-01",
    useCdn: false, // Отключаем кэш, чтобы шеф видел обновления мгновенно
});

// Тип данных, который мы ожидаем
interface MenuBtn {
    _id: string;
    label: string;
    fileUrl: string;
}

// Асинхронная функция загрузки данных
async function getMenuButtons(): Promise<MenuBtn[]> {
    try {
        // GROQ-запрос: дай все документы типа 'menuBtn', отсортируй по 'priority',
        // и сделай прямую ссылку на файл (file.asset->url)
        const data = await client.fetch<MenuBtn[]>(`
      *[_type == "menuBtn"] | order(priority asc) {
        _id,
        label,
        "fileUrl": file.asset->url
      }
    `);
        return data;
    } catch (error) {
        console.error("Failed to fetch menu buttons from Sanity:", error);
        // В случае ошибки возвращаем пустой массив, чтобы сайт не упал
        return [];
    }
}

export default async function MenuPage() {
    // Получаем реальные данные из Sanity
    const buttons = await getMenuButtons();

    return (
        <main className="min-h-screen bg-white flex flex-col items-center pt-32 pb-20 px-4">

            {/* 1. ЗАГОЛОВОК (Стиль как на фото "Brunch & Dine") */}
            <h1 className="text-4xl md:text-6xl font-light text-dark-cafe mb-8 text-center tracking-wide">
                Unsere Speisekarten
            </h1>

            {/* 2. ОПИСАНИЕ */}
            <div className="max-w-2xl text-center text-gray-500 mb-16 leading-relaxed font-light text-lg">
                <p className="mb-4">
                    Hier können Sie unsere aktuellen Karten ansehen.
                </p>
                <p>
                    Wählen Sie eine Karte aus, um sie als PDF zu öffnen.
                </p>
            </div>

            {/* 3. КНОПКИ (Рендерим из Sanity) */}
            <div className="flex flex-col gap-6 w-full max-w-sm">

                {buttons.length === 0 ? (
                    <p className="text-center text-gray-400">
                        ⚠️ Es sind keine Menükarten verfügbar. Bitte im Studio hochladen.
                    </p>
                ) : (
                    buttons.map((btn) => (
                        <a
                            key={btn._id}
                            href={btn.fileUrl}
                            // ЭТИ ДВЕ СТРОЧКИ ОТКРЫВАЮТ В НОВОЙ ВКЛАДКЕ (PREVIEW MODE):
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative"
                        >
                            {/* Кнопка */}
                            <div className="
                  w-full text-center py-5 px-6 
                  bg-accent-cafe text-white 
                  uppercase tracking-[0.2em] text-sm font-semibold
                  shadow-md transition-all duration-300
                  group-hover:bg-opacity-90 group-hover:shadow-lg group-hover:-translate-y-1
                ">
                                {btn.label}
                            </div>
                        </a>
                    ))
                )}
            </div>

            <div className="mt-20 w-16 h-1 bg-gray-200 rounded-full"></div>

        </main>
    );
}