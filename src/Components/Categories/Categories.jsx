"use client";

import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Categories = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch data from the API endpoint
      const fetchData = async () => {
        const response = await fetch('/api/data');
        const result = await response.json();
        setData(result);
      };
      fetchData();
    }, []);

    console.log(data);
    

    return (
        <div className="w-[430px] rounded-lg  mt-10 bg-white">
            <div className="bg-[#1FA45B] rounded-t-lg">
                <h1 className="text-white text-center">Categories</h1>
            </div>
            {/* serch bar */}
            <div className="relative w-[400px]  mx-auto  product_search_input">
                <input
                    className="px-4 py-2 border border-gray-200 rounded-md w-full  pl-[40px] outline-none focus:border-primary" 
                    placeholder="Search by Categories"/>
                <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />


            </div>
        </div>
    );
};

export default Categories;