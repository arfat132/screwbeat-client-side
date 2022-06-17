import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div className="carousel-item relative w-full">
                <div className="hero h-[800px] bg-[url(https://lumizo.lk/frontend/img/slider/s1.jpg)]">
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content text-left  text-neutral-content">
                        <div className="lg:-ml-96 ml-0">
                            <h1 className="mb-5 text-5xl font-bold text-white">We are the Different Types of 
                            </h1>
                            <h1 className="mb-5 text-5xl font-bold text-white">Lamps Menufacturer
                            </h1>

                            <p className="mb-5 text-white w-[700px] ">A tool can be any item that is used to achieve a goal. Equipment usually denotes a set of tools that are used to achieve a specific objective. A tool can be non-mechanical as well. However, when one says equipment, there is a certain mechanical aspect to it that cannot be ignored.</p>
                            <button className="btn btn-primary text-white">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;