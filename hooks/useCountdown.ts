'use client'

import { useEffect, useState } from 'react';

interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    isCompleted: boolean;
}

export const useCountdown = (targetDate: Date | string, onEnd?: () => void): CountdownTime => {
    const [timeLeft, setTimeLeft] = useState<CountdownTime>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0,
        isCompleted: false,
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = target - now;

            if (distance <= 0) {
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    milliseconds: 0,
                    isCompleted: true,
                });
                onEnd?.();
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            const milliseconds = distance % 1000;

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
                milliseconds,
                isCompleted: false,
            });
        };

        updateCountdown(); 
        const interval = setInterval(updateCountdown, 1000); 

        return () => clearInterval(interval);
    }, [targetDate, onEnd]);

    return timeLeft;
};
