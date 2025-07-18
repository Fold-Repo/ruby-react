import React from 'react';

const AuthorCardSkeleton = () => {
    return (
        <div className="border border-gray-300 p-3 rounded-lg space-y-4 animate-pulse">

            <div className="flex items-center gap-3 justify-between">

                <div className="inline-flex gap-2 items-center">
                    <div className="bg-gray-200 rounded-full size-13" />

                    <div className="space-y-2">
                        <div className="h-3 w-24 bg-gray-200 rounded" />
                        <div className="h-2 w-20 bg-gray-200 rounded" />
                    </div>
                </div>

                <div className="h-8 w-20 bg-gray-200 rounded-lg" />
            </div>

            <div className="space-y-2">
                <div className="h-2.5 w-full bg-gray-200 rounded" />
                <div className="h-2.5 w-4/5 bg-gray-200 rounded" />
            </div>

        </div>
    );
};

export default AuthorCardSkeleton;
