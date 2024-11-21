"use client";

import { useEffect, useState } from "react";
import DuaSectionHeader from "./DuaSectionHeader";
import DuaCard from "../DuaCard/DuaCard";

const DuaSection = () => {
    const [duas, setDuas] = useState([]);

    useEffect(() => {
        // Fetch data from the API endpoint
        const fetchData = async () => {
            const response = await fetch('/api/duas');
            const duaData = await response.json();
            setDuas(duaData)
        };
        fetchData();
    }, []);
    

    return (
        <div className="max-w-[890px] max-h-screen overflow-auto">
            <div>
                <DuaSectionHeader/>
            </div>
            <div>
                {
                    duas && 
                    (
                        duas?.map((dua, idx)=>
                            <DuaCard
                            dua={dua}
                            index={idx}
                            key={dua.dua_id}
                            ></DuaCard>
                        )
                    )
                }
            </div>
        </div>
    );
};

export default DuaSection;


// const { id, cat_id, subcat_id, dua_id, dua_name_bn, dua_name_en, top_bn, top_en, dua_arabic, dua_indopak, clean_arabic, transliteration_bn, transliteration_en, translation_bn, translation_en, bottom_bn, bottom_en, refference_bn, refference_en, audio } = dua