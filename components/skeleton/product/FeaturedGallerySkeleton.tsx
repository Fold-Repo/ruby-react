const FeaturedGallerySkeleton = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-5 animate-pulse">

            <div className="col-span-1 md:col-span-2 w-full h-full aspect-7/9 rounded-xl bg-gray-100 md:bg-gray-200" />

            <div className="flex flex-col gap-3 lg:gap-5">
                <div className="aspect-7/4 h-full w-full rounded-xl bg-gray-100 md:bg-gray-200" />
                <div className="aspect-7/4 h-full w-full rounded-xl bg-gray-100 md:bg-gray-200" />
            </div>

            <div className="grid grid-cols-2 md:flex flex-col gap-3 md:gap-5 col-span-2">
                <div className="aspect-7/6 md:aspect-7/4 h-full w-full rounded-xl bg-gray-100 md:bg-gray-200" />
                <div className="aspect-7/6 md:aspect-7/4 h-full w-full rounded-xl bg-gray-100 md:bg-gray-200" />
            </div>

        </div>
    );
};

export default FeaturedGallerySkeleton;
