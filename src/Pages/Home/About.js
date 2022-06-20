import React from 'react';

const About = () => {
    return (
        <section class="lg:pt-[170px] overflow-hidden mt-12 lg:mt-0 px-8 lg:px-20 mx-auto">
            <div class="container">
                <div class="flex flex-wrap justify-between  items-center">
                    <div class="w-full lg:w-6/12 mx-auto">
                        <div class="flex items-center -mx-3 sm:-mx-4">
                            <div class="w-full xl:w-1/2 px-3 sm:px-4">
                                <div class="py-3 sm:py-4">
                                    <img
                                        className='w-full'
                                        src="https://i.ibb.co/mFP5Ffk/images-3-min.jpg"
                                        alt=""
                                        class="rounded-2xl w-full"
                                    />
                                </div>
                                <div class="py-3 sm:py-4">
                                    <img
                                        className='w-full'
                                        src="https://i.ibb.co/S3XfTCM/images-2-min.jpg"
                                        alt=""
                                        class="rounded-2xl w-full"
                                    />
                                </div>
                            </div>
                            <div class="w-full xl:w-1/2 px-3 sm:px-4">
                                <div class="my-4 relative z-10">
                                    <img
                                        className='w-full'
                                        src="https://i.ibb.co/3vt8tKZ/mm-min.jpg"
                                        alt=""
                                        class="rounded-2xl w-full"
                                    />
                                                                  </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 xl:w-5/12 px-0 lg:px-4 mx-auto">
                        <div class="mt-10 lg:mt-0">
                            <span class="font-semibold text-lg text-primary mb-2 block">
                                Why Choose Us
                            </span>
                            <h2 class="font-bold text-3xl sm:text-4xl text-dark mb-8">
                                Make your customers happy by giving services.
                            </h2>
                            <p class="text-base text-body-color mb-8">
                                It is a long established fact that a reader will be distracted
                                by the readable content of a page when looking at its layout.
                                The point of using Lorem Ipsum is that it has a more-or-less.
                            </p>
                            <p class="text-base text-body-color mb-12">
                                A domain name is one of the first steps to establishing your
                                brand. Secure a consistent brand image with a domain name that
                                matches your business.
                            </p>
                            <a
                                href="javascript:void(0)"
                                class="
                          py-4
                          px-10
                          lg:px-8
                          xl:px-10
                          inline-flex
                          items-center
                          justify-center
                          text-center text-white text-base
                          bg-primary
                          hover:bg-opacity-90
                          font-normal
                          rounded-lg
                          "
                            >
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;