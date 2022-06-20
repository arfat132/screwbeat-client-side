import React from 'react';

const DiscountBanner = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap -mx-4 -mb-10">
                    <div class="lg:w-1/2 md:w-full mb-10 px-4">
                        <div className="py-36 px-10 bg-[url(https://ae01.alicdn.com/kf/Hb57bdd0c330941289b13bd7b272a8905z/Nordic-simple-Luxury-Chandeliers-Modern-Top-Quality-Copper-Hanging-Lamps-for-Hotel-Coffere-House-Daily-Decor.jpg)]">
                            <div className="text-left text-neutral-content">
                                <div className="">
                                <p className="mb-5 font-bold text-2xl">Get Upto</p>
                                    <h1 className="mb-5 text-7xl font-bold text-primary">30% OFF
                                    </h1>
                                    <p className="mb-5 text-2xl">On Floor Lamps</p>
                                    <button className="px-6 py-2.5 border border-primary bg-none text-primary font-bold">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/2 md:w-full mb-10 px-4">
                        <div className="py-36 px-10 bg-[url(https://ae01.alicdn.com/kf/HTB1_DrjdN6I8KJjy0Fgq6xXzVXaH.jpg?size=352109&height=800&width=800&hash=c094476fb61f685ad2ef41d774a17905)]">
                            <div className="text-left text-white">
                                <div className="text-left">
                                    <p className="mb-5 font-bold text-2xl">Get Upto</p>
                                    <h1 className="mb-5 text-7xl font-bold text-primary">50% OFF</h1>
                                    <p className="mb-5 text-2xl">On Floor Lamps</p>
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