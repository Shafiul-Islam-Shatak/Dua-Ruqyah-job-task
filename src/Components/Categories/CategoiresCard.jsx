"use client";


const CategoriesCard = ({ category  , handleClickedCat}) => {
    const { cat_id, cat_name_bn, cat_name_en, no_of_subcat, no_of_dua, cat_icon } = category
    return (
        <div onClick={handleClickedCat} className="min-w-[60%] relative bg-white hover:bg-[#E8F0F5] shadow-md rounded-xl flex  p-4 mx-auto mb-3 max-w-[400px] ">
            <div className="w-[60px] h-[60px] bg-[#E8F0F5] flex  items-center justify-center">
                <img
                    src={`https://duaruqyah.com/assets/icon/duar_gurutto.svg`}
                    // src={`/assests/${cat_icon}`}
                    alt={cat_name_en}
                    className="w-[40px] h-[40px] object-cover"
                />
            </div>

            <div className="ml-4 flex-1 ">
                <h1 className="font-semibold  text-lg ">{cat_name_en}</h1>
                <span className="text-[0.9rem] text-gray-400">Subcategory: {no_of_subcat}</span>
            </div>
            {/* Divider */}
            <div className="divider divider-horizontal"></div>


            <div className="font-semibold  text-lg text-center w-[36px]">
                <h1>{no_of_dua}</h1>
                <h1>Duas</h1>
            </div>
        </div>
    );
};

export default CategoriesCard;