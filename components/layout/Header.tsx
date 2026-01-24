'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import DesktopNav from './DesktopNav';
import { Mail, Phone } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollPos(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    // const getBackgroundClasses = () => {
    //     if (scrollPos === 0) return 'bg-transparent shadow-none';
    //     if (scrollPos < 200) return 'bg-light-cafe-tr backdrop-blur-md shadow-sm';
    //     return 'bg-light-cafe shadow-md';
    // };

    return (
        <>
            {/* --- ВЕРХНЯЯ ПОЛОСКА (Синяя) --- */}
            <div className="bg-primary-cafe text-white py-2 md:py-3 px-4 fixed top-0 w-full z-[70] shadow-lg">
                <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center justify-center md:justify-evenly gap-1 md:gap-4">

                    {/* Надпись (на десктопе будет слева или по центру, в зависимости от justify) */}
                    <p className="font-medium text-[10px] md:text-xs uppercase tracking-[0.2em] text-accent-cafe whitespace-nowrap m-0">
                        Reservierung & Lieferservice:
                    </p>

                    {/* Контакты (на десктопе будут справа) */}
                    <div className="flex items-center gap-4 md:gap-8">
                        <a href="tel:+49060743888" className="flex items-center gap-2 hover:text-accent-cafe transition-colors font-bold text-xs md:text-sm whitespace-nowrap">
                            <Phone size={14} className="md:w-[16px] md:h-[16px] text-accent-cafe" />
                            <span>+49 (0) 6074 3888</span>
                        </a>
                        <a href="mailto:sg.gaststaette@gmail.com" className="flex items-center gap-2 hover:text-accent-cafe transition-colors font-bold text-xs md:text-sm whitespace-nowrap">
                            <Mail size={14} className="md:w-[16px] md:h-[16px] text-accent-cafe" />
                            <span>sg.gaststaette@gmail.com</span>
                        </a>
                    </div>

                    {/* --- МОБИЛЬНАЯ КНОПКА (Остается на своем месте) --- */}
                    {!isMenuOpen && (
                        <button
                            className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center active:scale-90 transition-transform"
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Открыть меню"
                        >
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* --- ДЕСКТОПНЫЙ ХЕДЕР --- */}
            <header
                className={`hidden md:block absolute top-[43px] z-50 w-full h-24 transition-all `}
               //getBackgroundClasses() 
            >
                <nav className="flex items-center justify-end px-4 max-w-7xl mx-auto h-full">
                    <DesktopNav />
                </nav>
            </header>

            <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
        </>
    );
}