import React from "react";
import { cn } from "@/lib";

interface MapLocationProps {
    className?: string;
}

const MapLocation: React.FC<MapLocationProps> = ({ className }) => {
    return (
        <iframe
            className={cn("rounded-xl w-full h-[400px] lg:h-[550px]", className)}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2612.148110218838!2d-122.65510152311262!3d49.10282668347311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485cfcd41da5f33%3A0x316df7295748c632!2sDouglas%20Cres%2C%20Langley%2C%20BC%2C%20Canada!5e0!3m2!1sen!2sng!4v1748948368236!5m2!1sen!2sng"
            width="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>
    );
};

export default MapLocation;
