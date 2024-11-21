"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CategoriesCard from "./CategoiresCard";
import { GoDotFill } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";



const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const categoryRefs = useRef({});
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
    const [duas, setDuas] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        const fetchData = async () => {
            const response = await fetch('/api/category');
            const response2 = await fetch('/api/sub-category');
            const catData = await response.json();
            const subCatData = await response2.json();
            setCategories(catData);
            setSubCategories(subCatData);
        };
        fetchData();
    }, []);

    const handleClickedCat = (cat_id) => {
        setSelectedCategoryId(cat_id);
        const selectedCat = categoryRefs.current[cat_id];
        if (selectedCat) {
            selectedCat.scrollIntoView({ behavior: 'smooth', block: "start" });
        }

    };


    const handleClickedSubCat = async (subCatId) => {
        setSelectedSubCategoryId(subCatId);

        // Fetch Duas based on the selected subcategory
        const response = await fetch(`/api/duas?subCategoryId=${subCatId}`);
        const duaData = await response.json();
        setDuas(duaData);
    };

    console.log(duas);
    



    // Filter subcategories based on the selected category ID
    const filteredSubcategories = subCategories.filter(
        (subCategory) => subCategory.cat_id === selectedCategoryId
    );

    return (
        <div className=" rounded-lg  bg-white max-h-[900px]">
            <div className="bg-[#1FA45B] rounded-t-lg text-lg py-[18px]">
                <h1 className="text-white font-semibold text-center">Categories</h1>
            </div>
            {/* Search bar */}
            <div className="relative w-[400px] mx-auto bg-white my-4 product_search_input px-3">
                <input
                    className="px-4 py-3  border border-gray-200 rounded-md w-full pl-[40px] outline-none focus:border-primary"
                    placeholder="Search by Categories"
                />
                <IoIosSearch className="absolute top-[15px] left-5 text-[1.5rem] text-[#adadad]" />
            </div>
            <div className="overflow-auto max-h-[745px] px-3 ">
                {categories.map((category) => (
                    <div
                        key={category.cat_id}
                        ref={(el) => (categoryRefs.current[category.cat_id] = el)}
                    >
                        <CategoriesCard
                            category={category}
                            handleClickedCat={() => handleClickedCat(category.cat_id)}
                        />
                        {selectedCategoryId === category.cat_id &&
                            <ul className=" relative ml-5 ">
                                {
                                    filteredSubcategories.map((subcat, index) =>
                                        <li key={subcat.id}
                                            className="mb-2"
                                            onClick={() => handleClickedSubCat(subcat.id)}
                                        >
                                            <div className="flex relative items-start  space-x-5  border-none">
                                                <div className="">
                                                    <GoDotFill />
                                                </div>
                                                {/*sub cat list */}
                                                <div className=" ">
                                                    <button className="max-w-[310px] text-left"> {subcat.subcat_name_en}</button>
                                                    
                                                </div>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>

                        }
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Categories;
