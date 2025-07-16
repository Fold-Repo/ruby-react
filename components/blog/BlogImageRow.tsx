import Image from 'next/image';
import React from 'react';

type BlogImageRowProps = {
    images: string[];
    variant?: 'trio' | 'quad';
};

const BlogImageRow: React.FC<BlogImageRowProps> = ({ images, variant = 'trio' }) => {

    const marginClass = variant == 'trio' ? 'mb-32' : 'sm:my-32';

    return (
        <div className={`flex items-center justify-between py-10 ${marginClass}`}>
            {variant === 'trio' ? (
                <>
                    <Image
                        src={images[0]}
                        alt="Image 1"
                        width={200}
                        height={200}
                        className="object-cover size-32 sm:size-40 md:size-52 rounded-full"
                    />
                    <Image
                        src={images[1]}
                        alt="Image 2"
                        width={200}
                        height={200}
                        className="object-cover size-32 sm:size-40 md:size-52 rounded-full translate-y-28"
                    />
                    <Image
                        src={images[2]}
                        alt="Image 3"
                        width={200}
                        height={200}
                        className="object-cover size-32 sm:size-40 md:size-52 rounded-full"
                    />
                </>
            ) : (
                <>
                    <Image
                        src={images[0]}
                        alt="Image 1"
                        width={200}
                        height={200}
                        className="object-cover size-32 sm:size-32 md:size-52 rounded-full"
                    />
                    <Image
                        src={images[1]}
                        alt="Image 2"
                        width={200}
                        height={200}
                        className="object-cover hidden sm:block size-32 sm:size-32 md:size-52 rounded-full -translate-y-24"
                    />
                    <Image
                        src={images[2]}
                        alt="Image 3"
                        width={200}
                        height={200}
                        className="object-cover size-32 hidden lg:block sm:size-32 md:size-52 rounded-full translate-y-24"
                    />
                    <Image
                        src={images[3]}
                        alt="Image 4"
                        width={200}
                        height={200}
                        className="object-cover size-32 sm:size-32 md:size-52 rounded-full"
                    />
                </>
            )}
        </div>
    );
};

export default BlogImageRow;
