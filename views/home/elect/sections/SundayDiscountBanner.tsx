import Image from "next/image";

export default function SundayDiscountBanner() {
    return (
        <div className="relative w-full bg-[#434377] bg-cover bg-center bg-blend-screen px-7 md:px-10 py-10 md:py-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-4 !mt-32"
            style={{
                backgroundImage: "url('/img/home/elect/12.jpg')",
            }}>
                
            <h2 className="leading-6 text-center md:text-left pt-8 md:pt-0 text-white text-[13.5px] lg:!text-[15px] max-w-sm lg:max-w-2xl">
                Get every Sunday 40% discount & free delivery on orders above $200 with any products!
            </h2>

            <div className="absolute max-w-[110px] md:max-w-[150px] top-[-60px] left-1/2 -translate-x-1/2 
                md:top-[-64px] md:right-10 md:left-auto md:translate-x-0">

                <Image
                    src="/img/home/elect/11.png"
                    alt="Phone"
                    width={150}
                    height={150}
                    className="w-full h-auto"
                />

            </div>

        </div>
    );
}
