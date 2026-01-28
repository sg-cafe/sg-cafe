'use client';

import React, { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import { Mail, Phone, Menu } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            {/* --- ВЕРХНЯЯ ПОЛОСКА (Контактная информация) --- */}
            <div className="bg-primary-cafe text-white py-3 md:py-4 px-4 fixed top-0 w-full z-[70] shadow-lg">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-1 md:gap-4">
                    <p className="font-medium text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-cafe whitespace-nowrap m-0">
                        Reservierung & Lieferservice:
                    </p>

                    <div className="flex items-center gap-4 md:gap-8">
                        <a href="mailto:sg.gaststaette@gmail.com" className="flex items-center gap-2 hover:text-accent-cafe transition-colors font-bold text-xs md:text-sm whitespace-nowrap">
                            <Mail size={14} className="text-accent-cafe" />
                            <span>sg.gaststaette@gmail.com</span>
                        </a>
                        <a href="tel:+49060743888" className="flex items-center gap-2 hover:text-accent-cafe transition-colors font-bold text-xs md:text-sm whitespace-nowrap">
                            <Phone size={14} className="text-accent-cafe" />
                            <span>+49 (0) 6074 3888</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* --- ОТДЕЛЬНАЯ КНОПКА БУРГЕР-МЕНЮ (Mobile Only) --- */}
            {!isMenuOpen && (
                <button
                    className={`
                        md:hidden fixed z-[80] transition-all duration-300
                        right-4 top-[70px] /* Позиция чуть ниже синей полоски */
                        w-12 h-12 flex items-center justify-center rounded-full
                        ${scrollPos > 50 ? 'bg-primary-cafe text-white shadow-2xl' : 'bg-white text-primary-cafe shadow-xl'}
                        active:scale-90 border border-black/5
                    `}
                    onClick={() => setIsMenuOpen(true)}
                    aria-label="Открыть меню"
                >
                    <Menu size={32} strokeWidth={2.5} />
                </button>
            )}

            {/* --- ДЕСКТОПНЫЙ ХЕДЕР (Навигация) --- */}
            <header className="hidden md:block absolute top-[60px] z-50 w-full h-24">
                <nav className="flex items-center justify-end px-4 max-w-7xl mx-auto h-full">
                    <DesktopNav />
                </nav>
            </header>

            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}