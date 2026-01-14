// components/layout/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    const getBackgroundClasses = () => {
        if (scrollPos === 0) return 'bg-transparent shadow-none';
        if (scrollPos < 200) return 'bg-light-cafe-tr backdrop-blur-md shadow-sm';
        return 'bg-light-cafe shadow-md';
    };

    return (
        <>
            {/* --- ДЕСКТОПНЫЙ ХЕДЕР (Скрыт на мобилках) --- */}
            <header
                className={`hidden md:block fixed top-0 z-50 w-full h-24 transition-all ${getBackgroundClasses()}`}
            >
                <nav className="flex items-center justify-between px-4 max-w-7xl mx-auto h-full">
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/icons/logo-1.png" alt="Logo" width={150} height={100} className="object-contain" />
                        <span className="text-xl text-white font-bold">SG Gaststätte</span>
                    </Link>
                    <DesktopNav />
                </nav>
            </header>

            {/* --- МОБИЛЬНАЯ КНОПКА (Только для мобилок) --- */}
            {/* Фиксируем в углу. Можно заменить top-6 на bottom-6, если хочешь снизу */}
            {!isMenuOpen && (
                <button
                    className="md:hidden absolute text-white top-6 right-6 z-[60] w-14 h-14 flex items-center justify-center active:scale-90 transition-transform"
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Открыть меню"
                >
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            )}

            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}