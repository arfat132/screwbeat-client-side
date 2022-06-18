import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Light from '../Home/Light';

const AllProduct = () => {
    const [allProducts, setProduct] = useState([]);
    const [limit, setLimit] = useState(4);
    const [pageNumber, setPageNumber] = useState(0)
    const [sort, setSort] = useState("Featured");

    useEffect(() => {
        fetch("http://localhost:5000/lights")
            .then(res => res.json())
            .then(data =>  setProduct(data))
    }, [sort, limit, pageNumber])
    return (
        <div>
            <div className='w-full mt-4 mb-4'>
            <img className='lg:mx-6' src="https://i.ibb.co/hmKjLbq/sb.png" alt="" />
            </div>
            <div className='flex justify-between bg-gray-200 bg-opacity-60 mt-4 sm:mx-6 md:mx-6 px-4 py-3'>
                <p className='flex items-center ml-4  text-gray-500'>Paginate by
                    <select onChange={(e) => setLimit(e.target.value)} className="py-2 px-2 ml-3 bg-primary text-white hover:border-none rounded-none">
                        <option>4</option>
                        <option>8</option>
                        <option>12</option>
                        <option>16</option>
                        <option>20</option>
                    </select></p>
                <p className='flex items-center text-gray-500'>Sort by
                    <select onChange={e => setSort(e.target.value)} className="py-2 px-2 ml-3 bg-primary text-white hover:border-none rounded-none">
                        <option value="featured">Featured</option>
                        <option value="low">Low to high</option>
                        <option value="high">High to Low</option>
                    </select></p>
            </div>
            
            <div className="text-gray-600 body-font pt-8 auto">
                <div className="container px-12 pb-16 mx-auto">
                    {allProducts?.length ?
                        <div className="flex flex-wrap -m-4 mb-6">
                            {
                                allProducts.map(allProduct => <Light
                                    key={allProduct._id}
                                    light={allProduct}
                                ></Light>)
                            }
                        </div>
                        :
                        <div><p className='text-center my-[232px]'>No Product Found</p></div>

                    }

                    <div className='mx-auto text-center mb-6 "inline-flex items-center -space-x-px'>
                        {
                            [...Array(5).keys()].map(number => <div onClick={() => setPageNumber(number)} className={`inline-flex items-center -space-x-px py-2 px-3 leading-tight text-white bg-primary border border-gray-300 ${pageNumber === number ? "bg-primary" : "bg-gray-300 text-primary"}`}>

                                {number + 1}</div>)
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;