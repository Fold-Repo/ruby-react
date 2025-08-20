import Image from "next/image";

const saveUpItems = [
    {
        img: "/img/home/elect/5.png",
        label: "sale up to 30% off",
        title: "apple watch series",
        price: "$500.00",
    },
    {
        img: "/img/home/elect/6.png",
        label: "studio display",
        title: "600 Nits of Brightens",
        price: "$500.00",
    },
];

function ElectronicSaveUp() {
    return (
        <div className="grid lg:grid-cols-2 gap-5">
            {saveUpItems.map((item, index) => (
                <div key={index}
                    className="flex flex-col md:flex-row items-center gap-5 bg-[#EFF0F280] dark:bg-gray-800 p-5 rounded-xl">
                        
                    <div className="sm:w-1/2 xl:w-[60%] flex justify-center">
                        <Image
                            src={item.img}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="max-h-[400px] object-contain"
                        />
                    </div>

                    <div className="sm:w-1/2 xl:w-[40%] gap-y-4 text-center flex flex-col items-center justify-center">
                        <h6 className="uppercase text-gray-600 dark:text-gray-400 text-[13px]">
                            {item.label}
                        </h6>

                        <h3 className="capitalize font-semibold text-lg md:!text-xl text-gray-900 dark:text-gray-100">
                            {item.title}
                        </h3>

                        <div className="mx-auto border border-primary text-primary font-medium px-3 py-1 rounded-md text-sm max-w-max dark:border-primary dark:text-primary">
                            {item.price}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ElectronicSaveUp;
