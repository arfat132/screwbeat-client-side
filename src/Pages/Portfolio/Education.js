import React from 'react';

const Education = () => {
    return (
        <section class="text-gray-600 body-font px-12">
            <div class="container px-5 py-12 mx-auto">
            <p class="uppercase text-primary font-bold text-center">Education</p>
                    <h1 class="text-xl title-font text-gray-700 text-center mb-12">Academic Background</h1>
                <div class="grid sm:grid-cols-3 lg:grid-cols-3 -m-4">
                    <div class="p-4 sm:grid-cols-1 lg:grid-cols-3">
                        <div class="h-full bg-accent p-8 rounded">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">2021-Present</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">BSC ( Information Technology & Computing ) </h1>
                            <p>Arab Open University – Jeddah Branch </p>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">CGPA- Present </h1>
                        </div>
                    </div>
                    <div class="p-4 sm:grid-cols-1 lg:grid-cols-3">
                        <div class="h-full bg-accent p-8 rounded">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">2017-2019</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">HSC ( Science Group ) </h1>
                            <p>Bangladesh International College, Jeddah </p>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">GPA- 4.83 </h1>
                        </div>
                    </div>
                    <div class="p-4 sm:grid-cols-1 lg:grid-cols-3">
                        <div class="h-full bg-accent p-8 rounded">
                            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">2015-2017</h2>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">SSC ( Science Group )  </h1>
                            <p>Bangladesh International College, Jeddah </p>
                            <h1 class="title-font text-lg font-medium text-gray-900 mb-3">GPA- 5  </h1>
                        </div>
                    </div>
                   
                </div>
            </div>
        </section>
    );
};

export default Education;