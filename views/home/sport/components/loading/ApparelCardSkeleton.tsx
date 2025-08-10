import React from 'react';

const ApparelCardSkeleton = () => {
    return (
        <div className="relative animate-pulse">

            <div className="aspect-square w-full bg-gradient-to-b from-gray-100 to-gray-100"></div>

            <div className="absolute bottom-0 w-full bg-gray-200 p-5 text-center">
                <div className="h-5 bg-gray-100/70 rounded w-3/4 mx-auto mb-2"></div>
                <div className="h-3 bg-gray-100/70 rounded w-1/2 mx-auto mb-4"></div>
                <div className="h-10 bg-gray-100 rounded w-32 mx-auto"></div>
            </div>
        </div>
    );
};

export default ApparelCardSkeleton;
