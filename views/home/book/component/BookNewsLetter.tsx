import React from "react";
import Image from "next/image";

const BookNewsLetter = () => {
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-5 rounded-3xl p-6 lg:p-10 border-2 border-gray-200 dark:border-gray-700 bg-[#F1F2EE73] dark:bg-gray-900/40">

            <div className="lg:w-1/2">
                <Image
                    src="/img/books/16.png"
                    alt="Book"
                    width={1000}
                    height={800}
                    className="max-h-[250px] w-auto object-contain"
                />
            </div>

            <div className="space-y-4 lg:w-1/2 text-center lg:text-left text-gray-900 dark:text-gray-200">

                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">
                    Join Newsletter
                </h2>

                <p className="text-sm lg:text-base">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>

                <form className="relative w-full max-w-lg mx-auto lg:mx-0">

                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="border border-gray-500 dark:border-gray-600 block w-full pl-5 pr-20 py-4 text-xs md:text-sm 
                            text-black dark:text-gray-200 bg-white dark:bg-gray-800 rounded-full outline-none"
                    />

                    <button type="submit" className="absolute top-1/2 -translate-y-1/2 right-1.5 bg-primary text-white rounded-full text-xs px-5 py-3">
                        Send
                    </button>

                </form>

            </div>

        </div>
    );
};

export default BookNewsLetter;
