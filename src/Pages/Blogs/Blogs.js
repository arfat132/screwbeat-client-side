import React, { useEffect, useState } from 'react';
import Blog from './Blog';

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
                <div className="text-gray-600 body-font w-full pt-24 px-12">
                    <div className="container px-5 py-0 lg:py-10 mx-auto">
                    <h2 className="text-md text-primary tracking-widest font-bold title-font mb-1 text-center uppercase">Blogs</h2>
                <h1 className="text-sm font-sm title-font text-gray-500 mb-12 text-center px-4 lg:px-80">  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum saepe quidem quo cupiditate iste animi, neque hic, alias placeat quos sed fugiat soluta natus adipisci sunt accusamus facilis eum dolor.</h1>
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
        </div>
    );
};

export default Blogs;