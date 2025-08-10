const TrendingFashionCardSkeleton = () => {
    return (
        <div className="relative overflow-hidden rounded-tl-2xl rounded-br-2xl animate-pulse bg-gray-200 aspect-[4/5]">
            <div className="absolute bottom-5 start-3 end-3 z-10">
                <div className="bg-[#9F141499] text-white flex flex-col items-center justify-center gap-y-2 p-3 w-full rounded-tl-xl rounded-br-xl">
                    <div className="h-4 w-3/4 bg-gray-300 rounded" />
                    <div className="h-3 w-1/2 bg-gray-300 rounded" />
                </div>
            </div>
        </div>
    );
};

export default TrendingFashionCardSkeleton;
