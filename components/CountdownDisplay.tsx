'use client'

import React from 'react';
import { useCountdown } from '@/hooks';
import { formatDigits } from '@/utils';
import { cn } from '@/lib';

interface CountdownDisplayProps {
    targetDate: Date | string;
    className?: string;
}

const CountdownDisplay = ({ targetDate, className }: CountdownDisplayProps) => {

    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const [d1, d2] = formatDigits(days);
    const [h1, h2] = formatDigits(hours);
    const [m1, m2] = formatDigits(minutes);
    const [s1, s2] = formatDigits(seconds);

    return (
        <div className={cn("flex items-end gap-3 text-primary font-bold text-2xl", className)}>
            <TimeBlock label="Days" value={`${d1}${d2}`} />
            <span>:</span>
            <TimeBlock label="Hours" value={`${h1}${h2}`} />
            <span>:</span>
            <TimeBlock label="Minutes" value={`${m1}${m2}`} />
            <span>:</span>
            <TimeBlock label="Seconds" value={`${s1}${s2}`} />
        </div>
    );
};

const TimeBlock = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-y-0.5">
        <span className="font-medium text-[12px]">{label}</span>
        <h1>{value}</h1>
    </div>
);

export default CountdownDisplay;
