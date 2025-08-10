import React from "react";

const ElectTopProductCardSkeleton: React.FC = () => {
    return (
        <div className="group border border-gray-50 bg-white rounded-xl overflow-hidden animate-pulse">

            <div className="bg-gray-200 aspect-[7/5]"></div>


            <div className="space-y-3 p-5">

                <div className="bg-gray-200 h-5 w-3/4 rounded"></div>

                <div className="flex items-center justify-between gap-4">


                    <div className="bg-gray-200 h-4 w-20 rounded"></div>

                    <div className="bg-gray-200 h-4 w-12 rounded"></div>

                </div>

            </div>

        </div>
    );
};

export default ElectTopProductCardSkeleton;
