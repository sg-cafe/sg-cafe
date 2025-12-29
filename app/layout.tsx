// app/layout.tsx (ФИНАЛЬНАЯ ВЕРСИЯ БЕЗ ПОВТОРНЫХ HTML-ТЕГОВ)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper"; // ИМПОРТ ОБЕРТКИ
import "./globals.css";

// Подключение шрифтов (как у тебя)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SG Gaststätte",
  description: "Vereinsgaststätte SG Dietzenbach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ВОТ ОН, ЕДИНСТВЕННЫЙ ТЕГ <html>
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable}`}>
      {/* Мы передаем сюда детей, а RootLayoutWrapper возвращает тег <body> 
        со всей нужной структурой или без нее (для /studio).
      */}
      <RootLayoutWrapper>
        {children}
      </RootLayoutWrapper>
    </html>
  );
}