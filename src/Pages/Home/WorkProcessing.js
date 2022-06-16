import React from 'react';
import { FaThinkPeaks } from 'react-icons/fa';
import { BiShapeCircle } from 'react-icons/bi';
import { BiLastPage } from 'react-icons/bi';
import { TiScissorsOutline } from 'react-icons/ti';
import { DiHtml53DEffects } from 'react-icons/di';
import { GiBedLamp } from 'react-icons/gi';

const WorkProcessing = () => {
    return (
        <section className="text-secondary body-font w-full mt-28">
            <div className="container px-20 pt-20 pb-14 mx-auto">
                <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">What we do</h2>
                <h1 className="text-4xl font-bold title-font text-secondary mb-24 text-center capitalize">Check out Our Work process</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0">
                        <div className="h-full p-8 shadow-md border border-1 border-primary bg-primary bg-opacity-10">
                            <FaThinkPeaks className="w-24 h-24 text-7xl -mt-20 bg-primary px-4 rounded-full text-white mb-5" />
                            <span className="text-xl font-medium text-primary">Planning the process</span>
                            <p className="leading-relaxed mt-5">Size and price were considerations, but the manufacturing process was the biggest constraint. The design had to be tied up fairly early in the month.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0">
                        <div className="h-full p-8 shadow-md border border-1 border-primary bg-primary bg-opacity-10">
                        <BiShapeCircle className="w-24 h-24 text-7xl -mt-20 bg-primary px-4 rounded-full text-white mb-5" />
                            <span className="text-xl font-medium text-primary">Initial shapes</span>
                            <p className="leading-relaxed mt-5">To start with I sketched out some ideas for shapes, thinking about the overall silhouette. Then I moved to the computer to refine the shapes.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0">
                        <div className="h-full p-8 shadow-md border border-1 border-primary bg-primary bg-opacity-10">
                        <TiScissorsOutline className="w-24 h-24 text-7xl -mt-20 bg-primary px-4 rounded-full text-white mb-5" />
                            <span className="text-xl font-medium text-primary">Paper and scissors</span>
                            <p className="leading-relaxed mt-5">We printed out the shapes to get an idea of the scale and ensure it wouldn't take over the room or blind you. Then we adjusted and refined the design using paper, card and scissors.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0 mt-12">
                        <div className="h-full p-8 shadow-md border border-1 border-primary bg-primary bg-opacity-10">
                        <DiHtml53DEffects className="w-24 h-24 text-7xl -mt-20 bg-primary px-4 rounded-full text-white mb-5" />
                            <span className="text-xl font-medium text-primary">Mass effects</span>
                            <p className="leading-relaxed mt-5">The lamp slots together – it doesn't use screws or fittings. Slot width was determined by the depth of the material – we opted for 4mm so it wouldn't be too weak or heavy.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0 mt-12">
                        <div className="h-full p-8 shadow-md border border-1 border-primary bg-primary bg-opacity-10">
                        <GiBedLamp className="w-24 h-24 text-7xl -mt-20 bg-primary px-4 rounded-full text-white mb-5" />
                            <span className="text-xl font-medium text-primary">Working sample</span>
                            <p className="leading-relaxed mt-5">Once the design was finalised, I spoke to the manufacturer and we had a prototype made from MDF to check everything slotted together. The sample was weaker and less rigid, but it indicated scale and size.</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 w-full relative sm:mb-12 lg:mb-0 mt-12">
                        <div className="h-full p-8 shadow-md border border-1 border-primary bg-primary bg-opacity-10">
                        <BiLastPage className="w-24 h-24 text-7xl -mt-20 bg-primary px-4 rounded-full text-white mb-5" />
                            <span className="text-xl font-medium text-primary">Final decisions</span>
                            <p className="leading-relaxed mt-5">After seeing the MDF sample. Having started the project a week earlier, I'd finished the design – now to make the final version. I struggled to imagine it as a real product.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default WorkProcessing;