"use client";

import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import CategoriesCard from "./CategoiresCard";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);
    const categoryRefs = useRef({});

    useEffect(() => {
        // Fetch data from the API endpoint
        const fetchData = async () => {
            const response = await fetch('/api/category');
            const response2 = await fetch('/api/sub-category');
            const catData = await response.json();
            const subCatData = await response2.json();
            setCategories(catData);
            setSubCategories(subCatData)
        };
        fetchData();
    }, []);

    console.log(categories);
    console.log(subCategories);

    const handleClickedCat = (cat_id) => {
        setSelectedCategoryId(cat_id)
        const selectedCat = categoryRefs.current[cat_id]
        if (selectedCat) {
            selectedCat.scrollIntoView({ behavior: 'smooth', block: "start" })
        }
    }

    const filterSubcategory = subCategories.filter(
        (subCategory) => subCategory.cat_id === selectedCategoryId
    )
    console.log(filterSubcategory);



    return (
        <div className="w-[430px] rounded-lg  mt-10 bg-white max-h-[745px] overflow-auto ml-6">
            <div className="bg-[#1FA45B] rounded-t-lg text-lg py-[18px]">
                <h1 className="text-white text-center">Categories</h1>
            </div>
            {/* serch bar */}
            <div className="relative w-[400px]  mx-auto my-4 product_search_input">
                <input
                    className="px-4 py-3 border border-gray-200 rounded-md w-full  pl-[40px] outline-none focus:border-primary"
                    placeholder="Search by Categories" />
                <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
            </div>
            <div className="">
                {
                    categories && (
                        categories.map(category =>
                            <div
                                key={category.id}
                                ref={(el) => categoryRefs.current[category.cat_id] = el}
                            >
                                <CategoriesCard
                                    category={category}
                                    handleClickedCat={(handleClickedCat(category.cat_id))}
                                />
                                {
                                    selectedCategoryId === category.cat_id && (
                                        filterSubcategory.map(subcat =>
                                            <div key={subcat.id}>
                                                <h1>{subcat.subcat_name_en}</h1>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default Categories;