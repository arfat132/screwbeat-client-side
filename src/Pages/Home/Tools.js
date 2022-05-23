import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch("tools.json")
            .then(response => response.json())
            .then(data => setTools(data))
    }, [])

    return (
        <section class="text-gray-600 body-font">
            <div class="container px-20 py-24 mx-auto">
            <h2 class="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Tools</h2>
                <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">  Our Best Selling Tools</h1>
                <div class="flex flex-wrap -m-4">
                {
                        tools.map(tool => <Tool
                            key={tool.id}
                            tool={tool}
                        ></Tool>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Tools;