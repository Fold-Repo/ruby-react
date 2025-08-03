import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui";

type EmptyStateProps = {
    imageSrc?: string;
    title: string;
    description?: string;
    actionLabel?: string;
    actionHref?: string;
    center?: boolean;
};

const EmptyState: React.FC<EmptyStateProps> = ({
    imageSrc = "img/empty_cart.svg",
    title,
    description,
    actionLabel,
    actionHref,
    center = true,
}) => {
    return (
        <div className={center ? "max-w-xl m-auto text-center" : ""}>
            
            <Image
                width={500}
                height={500}
                src={imageSrc}
                alt="Empty state"
                className="size-28 m-auto"
            />

            <div className="space-y-2 mt-6">
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">{title}</h2>

                {description && (
                    <p className="text-sm md:text-base text-black/50">{description}</p>
                )}

                {actionLabel && actionHref && (
                    <Link href={actionHref} className="flex justify-center pt-5">
                        <Button size="md" rounded="full" className="px-12">
                            {actionLabel}
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default EmptyState;
