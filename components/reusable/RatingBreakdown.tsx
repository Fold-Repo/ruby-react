import { StarIcon } from '@heroicons/react/24/solid';

interface RatingData {
    star: number;
    percentage: number;
}

interface RatingBreakdownProps {
    average: number;
    totalReviews: number;
    breakdown: RatingData[];
}

const RatingBreakdown: React.FC<RatingBreakdownProps> = ({
    average,
    totalReviews,
    breakdown,
}) => {
    return (
        <div className="flex md:items-center gap-5 flex-col md:flex-row w-full max-w-xl text-gray-800 dark:text-gray-200 mb-5">

            {/* Breakdown Bars */}
            <div className="w-full order-2 md:order-1 space-y-2">
                {breakdown.map(({ star, percentage }) => (
                    <div key={star} className="flex items-center space-x-2">
                        <span className="font-bold text-gray-500 dark:text-gray-400 text-sm">{star}</span>
                        <StarIcon className="w-4 h-4 text-primary" />
                        <div className="flex-1 bg-gray-200 dark:bg-gray-700 h-2 rounded overflow-hidden max-w-3xl w-full">
                            <div
                                className="bg-primary h-full transition-all duration-300"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Average Rating */}
            <div className="flex flex-col order-1 md:order-2 items-start gap-1">
                <span className="text-4xl font-extrabold text-black dark:text-white">
                    {average.toFixed(1)}
                </span>
                <div className="flex space-x-1 text-primary text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`w-4 h-4 ${i < Math.round(average) ? 'text-primary' : 'opacity-30 text-primary'}`}
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {totalReviews} reviews
                </span>
            </div>
        </div>
    );
};

export default RatingBreakdown;
