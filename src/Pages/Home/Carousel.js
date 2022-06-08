import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div className="carousel-item relative w-full">
                <div className="hero h-[800px] bg-[url(https://cdn.webshopapp.com/shops/192182/files/310112799/900x900x2/industrial-ceiling-light-valley.jpg)]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-left  text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold text-primary">We are the Different Types of 
                            </h1>
                            <h1 className="mb-5 text-5xl font-bold text-primary">Lamps Menufacturer
                            </h1>

                            <p className="mb-5 text-white">A tool can be any item that is used to achieve a goal. Equipment usually denotes a set of tools that are used to achieve a specific objective. A tool can be non-mechanical as well. However, when one says equipment, there is a certain mechanical aspect to it that cannot be ignored.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;