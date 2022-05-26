import React from 'react';

const Blogs = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-12 mx-auto">
                <h1 className='text-center text-primary uppercase text-3xl font-bold mb-6'>My Blogs</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-6 rounded-lg border-1 border-orange-600 hover:shadow-lg overflow-hidden relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">How will you improve the performance of a React Application?</h1>
                            <p className="leading-relaxed mb-3"><strong>The performance that I will improve of a React Application- </strong> <br />
                                1. I will Keep the component state local where necessary. <br />
                                2. I will Memoize the React components to prevent unnecessary re-renders.<br />
                                3. I will Code-split in React using dynamic import()<br />
                                4. I will Window or list virtualization in React.</p>

                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-6 rounded-lg border-1 border-orange-600 hover:shadow-lg overflow-hidden relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">What are the different ways to manage a state in a React application?</h1>
                            <p className="leading-relaxed mb-3"><strong>There are four ways to manage a state in a React application -</strong><br />
                                1. Local state, <br />
                                2. Global state, <br />
                                3. Server state, <br />
                                4. URL state</p>

                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-6 rounded-lg border-1 border-orange-600 hover:shadow-lg overflow-hidden relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">What is a unit test? Why should write unit tests?</h1>
                            <p className="leading-relaxed mb-3">Unit testing is a type of testing which is done by software developers in which the smallest testable module of an application such as functions, procedures, or interfaces - are tested to ascertain if they are fit to use. It ensures that all code meets quality standards before it's deployed as well as ensures a reliable engineering environment where quality is paramount.</p>

                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-6 rounded-lg border-1 border-orange-600 hover:shadow-lg overflow-hidden relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3"> How does prototypical inheritance work?</h1>
                            <p className="leading-relaxed mb-3">JavaScript is the easiest of the prototype-capable languages, and its capabilities are relatively unique. When used appropriately, prototypical inheritance in JavaScript is a powerful tool that can save hours of coding. Generally, prototypical inheritance mentions to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. Then, we can essentially tell our JS code to inherit properties from a prototype. Furthermore, Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.</p>

                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3">
                        <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-6 rounded-lg border-1 border-orange-600 hover:shadow-lg overflow-hidden relative">
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                            <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                            <p className="leading-relaxed mb-3">
                                JavaScript's Array.prototype methods have we covered. There are different methods in JavaScript that we can use to search for an product in an array such as find, filter, includes etc. But I will filter method to implement a search to find products by name. For instance, I want to get all products.</p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;