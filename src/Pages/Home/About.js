import React from 'react';

const About = () => {
    return (
       
    <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
        <div class="flex justify-center xl:w-1/2">
            <img class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover border-2 border-primary rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt=""/>
        </div>
        
                <div class="flex flex-col items-center mt-2 xl:items-start xl:w-1/2 xl:mt-0">
                <h2 class="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">About us</h2>
                <h1 class="text-3xl font-extrabold title-font text-gray-900 mb-6">  Dream big with get more <br></br>reasonable tools from <br></br>here</h1>
            <p class="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">By tool features, we mean the particular characteristics or attributes of a product that makes it unique from the other products in the market, delivering a significant value to the consumers.</p>
        
        </div>
    </div>
</section>
    );
};

export default About;