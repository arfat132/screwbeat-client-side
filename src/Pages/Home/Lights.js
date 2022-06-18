import React, { useEffect, useState } from 'react';
import Light from './Light';

const Tools = () => {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        fetch("https://stormy-dusk-98977.herokuapp.com/lights")
            .then(response => response.json())
            .then(data => setLights(data))
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-10 lg:py-24 py-0 mx-auto">
                <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Lamps</h2>
                <h1 className="lg:text-3xl text-xl font-medium title-font text-gray-900 mb-12 text-center">  Our Best Selling Lamps</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        lights.map(light => <Light
                            key={light._id}
                            light={light}
                        ></Light>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;