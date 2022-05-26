import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("https://stormy-dusk-98977.herokuapp.com/tools")
            .then(response => response.json())
            .then(data => setTools(data))
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-20 py-24 mx-auto">
                <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Tools</h2>
                <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">  Our Best Selling Tools</h1>
                <div className="flex flex-wrap -m-4">
                    {
                        tools?.slice(-6).map(tool => <Tool
                            key={tool._id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;