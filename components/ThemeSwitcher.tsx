'use client';

import React, { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';

const ThemeSwitcher: React.FC = () => {

    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
        if (storedTheme) {
            setTheme(storedTheme);
            document.documentElement.classList.toggle('dark', storedTheme === 'dark');
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDark ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', prefersDark);
        }
    }, []);

    // Toggle theme
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="fixed bottom-5 right-3 z-50">
            <button
                type="button"
                onClick={toggleTheme}
                className={clsx(
                    'flex items-center gap-2 py-2.5 cursor-pointer px-4 rounded-full shadow-md text-xs font-medium transition-colors',
                    theme === 'dark'
                        ? 'bg-gray-700 text-white hover:bg-yellow-300 hover:text-gray-800'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                )}>
                {theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
                {theme === 'dark' ? 'Light' : 'Dark'}
            </button>
        </div>
    );
};

export default ThemeSwitcher;
