import Image from "next/image";

const DuaCard = ({ dua, index }) => {
    const { id, cat_id, subcat_id, dua_id, dua_name_bn, dua_name_en, top_bn, top_en, dua_arabic, dua_indopak, clean_arabic, transliteration_bn, transliteration_en, translation_bn, translation_en, bottom_bn, bottom_en, refference_bn, refference_en, audio } = dua
    return (
        <div className="bg-white mb-3 rounded-lg px-7 py-4">
            <div className="flex items-center space-x-5">
                <Image
                    src={`https://i.ibb.co.com/1MbK6wb/allah-1-Traced.png`}
                    alt={''}
                    width={40}
                    height={40}
                />
                <h1 className="text-[#1FA45B] font-semibold "><>{index + 1}.</> {dua_name_en}</h1>
            </div>
            <div className="my-7">
                <p className="text-lg font-semibold">{top_en}</p>
            </div>
            {
                dua_arabic ? (
                    <>
                        <div className="my-7 text-right">
                            <p className="text-lg font-semibold">{dua_arabic}</p>
                        </div>
                        <div className="my-7">
                            <p className="text-lg font-semibold italic">Transliteration : {transliteration_en}</p>
                        </div>
                    </>
                ) : ('')
}

            <div>
                <h1 className="text-[#1FA45B] font-semibold " >Reference :</h1>
                <h1 className=" font-semibold ">{refference_en}</h1>
            </div>

            {
                audio && (
                    <div>
                        
                    </div>
                )
            }
        </div>
    );
};

export default DuaCard;