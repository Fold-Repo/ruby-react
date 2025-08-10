'use client'

import CountdownDisplay from '../CountdownDisplay';

interface CountdownOfferCardProps {
    targetDate: Date | string;
    soldPercentage: number;
    itemsLeft: number;
}

const CountdownOfferCard = ({ targetDate, soldPercentage, itemsLeft }: CountdownOfferCardProps) => {

    return (
        <div className="flex flex-col gap-y-4 p-4 border border-gray-300 rounded-lg max-w-max">

            <div className="inline-flex items-center gap-x-4 gap-y-2.5 flex-wrap">
                <h2 className="text-sm text-gray-700 font-semibold">Special offer:</h2>
                <CountdownDisplay targetDate={targetDate} />
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


export default CountdownOfferCard;
