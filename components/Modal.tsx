'use client'
import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function AnnouncementModal({ data }: { data: any }) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (data?.isActive) {
            const isClosed = sessionStorage.getItem('announcement-closed')
            if (!isClosed) setIsOpen(true)
        }
    }, [data])

    const closeModal = () => {
        setIsOpen(false)
        sessionStorage.setItem('announcement-closed', 'true')
    }

    if (!isOpen || !data) return null

    return (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Затемнение фона */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={closeModal}
            />

            {/* Карточка модалки */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in fade-in zoom-in duration-300">

                <div className="p-8">
                    {/* Кнопка закрытия (Крестик) */}
                    <button
                        onClick={closeModal}
                        className="absolute top-4 right-4 text-gray-400 hover:text-dark-cafe transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Иконка и Заголовок */}
                    <div className="flex flex-col items-center mb-6">
                        <h2 className="text-2xl font-bold text-dark-cafe text-center">
                            {data.title || "Wichtige Information"}
                        </h2>
                    </div>

                    {/* Текст объявления */}
                    <div className="mb-8">
                        <p className="text-gray-600 text-center leading-relaxed whitespace-pre-wrap">
                            {data.text || "Hier steht Ihre wichtige Nachricht für die Kunden."}
                        </p>
                    </div>

                    {/* Кнопка - ТЕПЕРЬ КОНТРАСТНАЯ */}
                    <button
                        onClick={closeModal}
                        className="w-full bg-primary-cafe text-white py-4 rounded-xl font-bold text-lg shadow-md hover:bg-accent-cafe active:scale-[0.98] transition-all duration-200"
                    >
                        Verstanden
                    </button>
                </div>
            </div>
        </div>
    )
}