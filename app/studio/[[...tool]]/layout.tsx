import React from 'react';
// Импортируем только то, что нужно. Header и Footer здесь нет!

export default function StudioLayout({ children }: { children: React.ReactNode }) {
    // Мы просто возвращаем содержимое (children) без лишних компонентов сайта.
    // Это гарантирует, что админка будет на весь экран.
    return (
        <>
            {children}
        </>
    );
}