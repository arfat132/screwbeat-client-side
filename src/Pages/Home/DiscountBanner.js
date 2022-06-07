import React from 'react';

const DiscountBanner = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -mx-4 -mb-10">
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div className="hero h-[500px] bg-[url(https://www.designmorsels.com/wp-content/uploads/2020/10/floor-lamp-for-ever-room.jpg)]">
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className="hero-content text-left text-neutral-content">
                                <div className="">
                                    <h1 className="mb-5 text-5xl font-bold text-primary">30% OFF
                                    </h1>
                                    <p className="mb-5">On floor lamps</p>
                                  <button className="px-6 py-2.5 border border-primary bg-none text-primary font-bold">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div className="hero h-[500px] bg-[url(https://media.4rgos.it/i/Argos/0421-m0014-m007-m050-asym-m008-m022-habitat-livingroomlighting-7412165?maxW=1200&qlt=75&fmt.jpeg.interlaced=true)]">
                            <div className="hero-overlay bg-opacity-0"></div>
                            <div className="hero-content text-left text-white">
                                <div className="text-left">
                                    <p className="mb-5">Get Upto</p>
                                    <h1 className="mb-5 text-5xl font-bold text-primary">50% OFF</h1>
                                    <p className="mb-5">On Floor Lamps</p>
                                    <button className="px-6 py-2.5 border border-primary bg-none text-primary font-bold">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DiscountBanner;