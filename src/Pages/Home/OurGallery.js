import React from 'react';

const OurGallery = () => {
    return (
        <section class="text-gray-600 body-font pt-24">
        <div class="text-center">
        <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Gallery</h2>
                <h1 className="lg:text-3xl text-xl font-medium title-font text-gray-900 mb-12 text-center">Explore Our Gallery</h1>
   </div>
     <div class="container px-5 mx-auto flex flex-wrap">
         <div class="flex flex-wrap md:-m-2 -m-1">
             <div class="flex flex-wrap w-1/2">
                 <div class="md:p-2 p-1 w-1/2">
                     <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/DLQ1zk0/1-min.jpg" />
                 </div>
                 <div class="md:p-2 p-1 w-1/2">
                     <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/RNP6xTQ/2-min.jpg" />
                 </div>
                 <div class="md:p-2 p-1 w-full">
                     <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/cDYMggZ/5-min.jpg" />
                 </div>
             </div>
             <div class="flex flex-wrap w-1/2">
                 <div class="md:p-2 p-1 w-full">
                     <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://i.ibb.co/N32DmdP/galerry-bg-min.jpg" />
                 </div>
                 <div class="md:p-2 p-1 w-1/2">
                     <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/1bCTnDW/4-min.jpg" />
                 </div>
                 <div class="md:p-2 p-1 w-1/2">
                     <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://i.ibb.co/7CZhTzh/3-min.jpg" />
                 </div>
             </div>
         </div>
     </div>
 </section>
    );
};

export default OurGallery;