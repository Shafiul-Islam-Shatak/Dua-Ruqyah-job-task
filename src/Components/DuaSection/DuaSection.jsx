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
                        duas.map((dua, idx)=>
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