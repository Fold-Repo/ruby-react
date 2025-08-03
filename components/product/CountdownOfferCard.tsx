'use client'

import { useCountdown } from '@/hooks';
import { formatDigits } from '@/utils';

interface CountdownOfferCardProps {
    targetDate: Date | string;
    soldPercentage: number;
    itemsLeft: number;
}

const CountdownOfferCard = ({ targetDate, soldPercentage, itemsLeft }: CountdownOfferCardProps) => {

    const { days, hours, minutes, seconds } = useCountdown(targetDate);

    const [d1, d2] = formatDigits(days);
    const [h1, h2] = formatDigits(hours);
    const [m1, m2] = formatDigits(minutes);
    const [s1, s2] = formatDigits(seconds);

    return (
        <div className="flex flex-col gap-y-4 p-4 border border-gray-300 rounded-lg max-w-max">
            <div className="inline-flex items-center gap-x-4 gap-y-2.5 flex-wrap">
                <h2 className="text-sm text-gray-700 font-semibold">Special offer:</h2>
                <div className="flex items-center gap-3 text-primary font-bold text-2xl">
                    <TimeBlock label="Days" value={`${d1}${d2}`} />
                    <span>:</span>
                    <TimeBlock label="Hours" value={`${h1}${h2}`} />
                    <span>:</span>
                    <TimeBlock label="Minutes" value={`${m1}${m2}`} />
                    <span>:</span>
                    <TimeBlock label="Seconds" value={`${s1}${s2}`} />
                </div>
            </div>

            <div className="inline-flex items-center gap-x-1 gap-y-2.5 flex-wrap">
                <h2 className="text-sm text-gray-700 font-semibold">Total Sold Out:</h2>
                <p className="text-sm lg:text-base font-bold">
                    <span>{soldPercentage}% Sold</span>{' '}
                    <span>{itemsLeft} Items left in stock</span>
                </p>
            </div>
        </div>
    );
};

const TimeBlock = ({ label, value }: { label: string; value: string }) => (
    <div className="flex flex-col gap-y-0.5">
        <span className="font-medium text-[13px]">{label}</span>
        <h1>{value}</h1>
    </div>
);

export default CountdownOfferCard;
