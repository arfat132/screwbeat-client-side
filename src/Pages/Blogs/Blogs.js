import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import Footer from '../../shared/Footer'
const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch("blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))

    }, [blogs])

    return (
        <div>
            <div>
                <div className="text-gray-600 body-font w-full lg:px-12 px-4 pt-24">
                    <div className="container px-5 py-0 lg:py-10 mx-auto">
                    <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Blogs</h2>
                <h1 className="lg:text-3xl text-xl font-bold title-font text-gray-900 mb-12 text-center px-4 lg:px-80">Explore and Read our Blogs</h1>
                        <div className="flex flex-wrap -m-4">
                            {
                                blogs.map(blog => <Blog
                                    key={blog.id}
                                    blog={blog}
                                ></Blog>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;