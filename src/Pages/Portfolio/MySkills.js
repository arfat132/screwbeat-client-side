import React from 'react';

const MySkills = () => {
    return (
        <section class="text-gray-600 body-font px-12">
            <div class="container px-5 py-12 mx-auto">
                <div class="flex flex-col text-center w-full mb-12">
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base uppercase text-primary font-bold">My Skills</p>
                    <h1 class="sm:text-3xl text-xl title-font text-gray-700">Explore My Skills </h1>

                </div>
                <div class="flex flex-wrap -m-4 text-center">
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/5hZRtQG/html.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">HTML</p>
                            <p className='mb-3'>Hyper Text Markup Language</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/TvPkvPt/css.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">CSS</p>
                            <p className='mb-3'>Cascading Style Sheets</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/m4gyCyg/js.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">JAVASCRIPT</p>
                            <p className='mb-3'>A compiled programming language</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/m4jBmq8/bootstrap.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">BOOTSTRAP</p>
                            <p className='mb-3'>A css framework</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/V2yB78p/tailwind.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">Tailwind</p>
                            <p className='mb-3'>A css framework</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/y82b8MV/react.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">REACT</p>
                            <p className='mb-3'>A JavaScript library</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/B43QbwW/react-Router.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">REACT ROUTER</p>
                            <p className='mb-3'>A routing library for React</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/4t9xtXQ/node.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">NODE JS</p>
                            <p className='mb-3'>Node.js is a JS runtime</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/1XkxH2C/mongodb.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">MONGODB</p>
                            <p className='mb-3'>MongoDB is NoSQL Databasee</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 rounded-lg hover:shadow-xl">
                            <img className='mx-auto' src="https://i.ibb.co/Wk8XPWr/figma.png" alt="" srcset="" />
                            <p class="leading-relaxed font-bold text-2xl -mt-5">FIGMA</p>
                            <p className='mb-3'>A web-based graphics editing app</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MySkills;