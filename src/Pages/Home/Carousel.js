import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full">
            <div className="carousel-item relative w-full">
                <div className="hero h-[600px] bg-[url(https://media.istockphoto.com/photos/auto-mechanic-service-and-repair-picture-id652660336?b=1&k=20&m=652660336&s=170667a&w=0&h=U9qp3Henrp1wuOc50IrkTnaZErwAtdDaFy24md19DrM=)]">
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">Dream big with get more
                                reasonable tools from
                                here
                            </h1>
                            <p className="mb-5">A tool can be any item that is used to achieve a goal. Equipment usually denotes a set of tools that are used to achieve a specific objective. A tool can be non-mechanical as well. However, when one says equipment, there is a certain mechanical aspect to it that cannot be ignored.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;