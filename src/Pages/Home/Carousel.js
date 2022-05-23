import React from 'react';

const Carousel = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <div class="hero h-[600px] bg-[url(https://media.istockphoto.com/photos/auto-mechanic-service-and-repair-picture-id652660336?b=1&k=20&m=652660336&s=170667a&w=0&h=U9qp3Henrp1wuOc50IrkTnaZErwAtdDaFy24md19DrM=)]">
                    <div class="hero-overlay bg-opacity-60"></div>
                    <div class="hero-content text-center text-neutral-content">
                        <div class="max-w-md">
                            <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                            <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Carousel;