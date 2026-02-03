// components/layout/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full bg-primary-cafe text-white py-10 px-4 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

                {/* Лого или Название */}
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-lg font-bold tracking-tighter uppercase">SG Gaststätte</span>
                    <span className="text-[10px] opacity-50 tracking-[0.2em]">Dietzenbach</span>
                </div>

               
                {/* Соцсети */}
                <div className="flex gap-8">
                    <a
                        href="https://www.facebook.com/100063624577270/posts/pfbid0KNNUxGyqqpqtr7xge5k1eRcHtg9vkiLoidAAKdtcmimAwqi4xxWfBALkfzyyGwhel/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/sg.gaststeatte_dietzenbach?igsh=eDFhbjRtd3JneW4x"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-70 hover:opacity-100 transition-opacity"
                    >
                        Instagram
                    </a>
                </div>

                {/* Юридические ссылки */}
                <div className="flex gap-6 text-[11px] uppercase tracking-widest font-light opacity-60">
                    <Link href="/impressum" className="hover:text-accent-cafe transition-colors">Impressum</Link>
                    <Link href="/datenschutz" className="hover:text-accent-cafe transition-colors">Datenschutz</Link>
                </div>

            </div>

            <div className="flex justify-center py-6">
                <a
                    href="https://www.sg-dietzenbach.de/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                            flex items-center gap-3 
                            text-accent-cafe border border-accent-cafe/40 
                            px-8 py-3 rounded-full 
                            hover:bg-accent-cafe hover:text-primary-cafe 
                            transition-all duration-300
                            text-xs font-bold uppercase tracking-[0.2em]
                        "
                >
                    <span>Zur Vereinswebseite</span>
                    <ExternalLink size={14} />
                </a>
            </div>


            <div className="text-center mt-10 text-[10px] opacity-30 uppercase tracking-[0.3em]">
                © {new Date().getFullYear()} SG-Vereinsgaststätte. Alle Rechte vorbehalten.
            </div>
        </footer>
    );
}