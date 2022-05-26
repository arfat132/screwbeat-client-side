import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <section className="text-gray-600 body-font px-12">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base uppercase text-primary font-bold">My Projects</p>
                    <h1 className="sm:text-3xl text-xl title-font text-gray-700">My Recent Work</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/0f5kvw8/Screenshot-1.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">React Tailwind Firebase Express MongoDB</h2>
                                <a href="https://quanta-auth.web.app/" className="title-font text-lg font-medium text-gray-900 mb-3">Quanta</a>
                                <p className="leading-relaxed mb-3">This is a warehouse inventory website. In this website has navbar a static slider, about section, six inventory items, a logos section and footer section.</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/R27zXsw/Screenshot-2.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">React Tailwind Firebase</h2>
                                <a href="https://core-realtor-auth.web.app/" className="title-font text-lg font-medium text-gray-900 mb-3">Core Realator</a>
                                <p className="leading-relaxed mb-3">This is a realtor independent website. In this website a realtor provides 3 services.</p>

                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                            <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://i.ibb.co/D4S6qfP/Screenshot-3.jpg" alt="blog" />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">HTML CSS</h2>
                                <a href="https://arfat132.github.io/influencer-product/" className="title-font text-lg font-medium text-gray-900 mb-3">Influencer Prtoducts</a>
                                <p className="leading-relaxed mb-3">This is a influencer product website using by only css and html.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;