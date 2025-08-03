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
        <div className="flex md:items-center gap-5 flex-col md:flex-row w-full max-w-xl text-gray-800 mb-5">

            <div className="w-full order-2 md:order-1 space-y-2">
                {breakdown.map(({ star, percentage }) => (
                    <div key={star} className="flex items-center space-x-2">
                        <span className="font-bold text-gray-500 text-sm">{star}</span>
                        <StarIcon className="w-4 h-4 text-primary" />
                        <div className="flex-1 bg-gray-200 h-2 rounded overflow-hidden max-w-3xl w-full">
                            <div
                                className="bg-primary h-full"
                                style={{ width: `${percentage}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col order-1 md:order-2 items-start gap-1">
                <span className="text-4xl font-extrabold text-black">
                    {average.toFixed(1)}
                </span>
                <div className="flex space-x-1 text-primary text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon
                            key={i}
                            className={`w-4 h-4 ${i < Math.round(average) ? '' : 'opacity-30'}`}
                        />
                    ))}
                </div>
                <span className="text-sm text-gray-500">{totalReviews} reviews</span>
            </div>
        </div>
    );
};

export default RatingBreakdown;
