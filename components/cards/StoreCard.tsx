import { StoreCardType } from "@/types/pages";
import React from "react";
import { Button } from "../ui";

const StoreCard: React.FC<StoreCardType> = ({ name, isNew = false, email, phone, monToSat, sun, location }) => {
    return (
        <div className="p-4 2xl:p-5 border rounded-xl border-gray-400 space-y-5">

            <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-semibold">{name}</span>
                {isNew && (
                    <span className="py-1 px-1.5 rounded-md text-[11px] font-medium bg-lavender text-primary">
                        New Store
                    </span>
                )}
            </div>

            <div className="flex items-center gap-3 flex-wrap">

                <div>
                    <h2 className="text-sm font-semibold">Email</h2>
                    <p className="text-xs text-gray-500">
                        <a className="underline" href={`mailto:${email}`}>
                            {email}
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold">Phone</h2>
                    <p className="text-xs text-gray-500">
                        <a className="underline" href={`tel:${phone}`}>
                            {phone}
                        </a>
                    </p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold">Mon - Sat:</h2>
                    <p className="text-xs text-gray-500">{monToSat}</p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold">Sun:</h2>
                    <p className="text-xs text-gray-500">{sun}</p>
                </div>

                <div>
                    <h2 className="text-sm font-semibold">Location</h2>
                    <p className="text-xs text-gray-500">{location}</p>
                </div>

            </div>

            <Button variant="outline_primary" rounded="xl" size="sm" className="w-full" >
                View Store
            </Button>

        </div>

    );
};

export default StoreCard;
