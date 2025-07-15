'use client'

import { FC, useState, ChangeEvent } from "react";
import { cn } from '@/lib';
import { CloudIcon } from "@heroicons/react/24/outline";
import { Image } from "@heroui/react";

interface ProfileImageProps {
    defaultImage?: string;
    onFileChange?: (file: File) => void;
    className?: string;
    size?: string;
}

const ProfileImage: FC<ProfileImageProps> = ({
    defaultImage = "https://via.placeholder.com/350x64",
    onFileChange,
    className = "",
    size = "16",
}) => {

    const [preview, setPreview] = useState<string>(defaultImage);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            if (onFileChange) onFileChange(file);
        }
    };

    const sizeClass = `w-${size} h-${size}`;

    return (
        <div className={cn("relative rounded-full overflow-hidden", sizeClass, className)}>

            <Image
                radius='full'
                alt='Profile'
                className={cn("rounded-full object-cover", sizeClass)}
                src={preview}
            />

            <input
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-50"
                onChange={handleFileChange}
                title="Upload Profile Image"
            />

            <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="flex items-center justify-center bg-white p-1.5 rounded-full shadow">
                    <CloudIcon className="text-black size-4" />
                </div>
            </div>

        </div>
    );
};

export default ProfileImage;
