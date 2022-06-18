import React from "react";

const Hero = () => {
    return (
        <div className="lg:mx-12">
            <div className="flex flex-col lg:flex-row items-stretch justify-between lg:px-0 px-6 lg:py-16 py-8 2xl:mx-auto 2xl:container">
                <div className="z-30 relative lg:w-1/2">
                    <div className="hidden bg-primary w-full lg:w-10/12 lg:h-full lg:flex justify-end items-center">
                        <div className="w-full lg:w-auto lg:-mr-32">
                            <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 px-6 py-14" />
                        </div>
                    </div>
                    <div className="absolute top-0 md:h-96 w-full hidden md:block lg:hidden"></div>
                    <div className="w-full h-full lg:hidden">
                        <img src="https://i.ibb.co/YQjkqWr/juan-burgos-FIy-XGZ1q0mc-unsplash-1.png" alt="image with decent chairs" className="w-full relative z-30 lg:pl-20 md:px-6 py-5 md:py-14" />
                    </div>
                </div>
                <div className="lg:w-1/2 lg:ml-12 lg:p-14 p-8 flex items-center">
                    <div>
                        <h1 className="dark:text-white md:w-8/12 lg:w-10/12 xl:8/12 2xl:w-8/12 w-full xl:text-6xl sm:text-5xl text-4xl font-semibold text-gray-800 capitalize">Modern Interior Decor</h1>
                        <p className="dark:text-gray-300 md:w-9/12 lg:w-11/12 xl:w-10/12 2xl:9/12 text-base leading-normal text-gray-600 mt-5">Get inspired by our curated selection of luxiwood interiors. We hope get inspired to have luxiwood interior yourself. You’ll find tips here where you can buy a lot of cool furniture,decorations, plants, etc. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid nostrum, voluptate dicta provident nulla autem repellendus praesentium quidem suscipit error.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
