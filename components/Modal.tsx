'use client'
import { useState, useEffect } from 'react'

export default function AnnouncementModal({ data }: { data: any }) {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (data?.isActive) {
            const isClosed = sessionStorage.getItem('announcement-closed')
            if (!isClosed) setIsOpen(true)
        }
    }, [data])

    if (!isOpen || !data) return null

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative border-t-8 border-accent-cafe">
                <h2 className="text-2xl font-bold text-dark-cafe mb-4">{data.title}</h2>
                <p className="text-dark-cafe/80 leading-relaxed mb-6 whitespace-pre-wrap">
                    {data.text}
                </p>
                <button
                    onClick={() => {
                        setIsOpen(false)
                        sessionStorage.setItem('announcement-closed', 'true')
                    }}
                    className="w-full bg-dark-cafe text-white py-3 rounded-xl font-bold hover:bg-accent-cafe transition-colors"
                >
                    Verstanden
                </button>
            </div>
        </div>
    )
}