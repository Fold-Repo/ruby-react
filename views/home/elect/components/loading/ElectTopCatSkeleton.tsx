const ElectTopCatSkeleton = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-y-5 animate-pulse">
            <div className="bg-gray-200 rounded-xl aspect-7/7 overflow-hidden w-full">
                <div className="h-full w-full bg-gray-300 rounded-lg" />
            </div>
            <div className="h-4 w-24 bg-gray-300 rounded" />
        </div>
    );
};

export default ElectTopCatSkeleton;
