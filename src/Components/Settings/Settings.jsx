import { HiOutlineLanguage } from "react-icons/hi2";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import { TbCategory } from "react-icons/tb";

const Settings = () => {
    return (
        <div className="bg-white h-[830px] rounded-2xl">
            <h2 className="text-center font-semibold text-lg px-[120px] py-[35px]">Settings</h2>
            <div className="flex items-center bg-[#F7F8FA] mb-4 py-2 mx-2 px-2 space-x-3 rounded-xl">
                <div className="bg-[#E8F0F5] w-10 h-10 flex items-center justify-center rounded-full">
                    <HiOutlineLanguage />
                </div>
                <div><h1>Language Settings</h1></div>
            </div>
            <div className="flex items-center bg-[#F7F8FA] mb-4 py-2 mx-2 px-2 space-x-3 rounded-xl">
                <div className="bg-[#E8F0F5] w-10 h-10 flex items-center justify-center rounded-full">
                    <HiOutlineRectangleStack />
                </div>
                <div><h1>General Settings</h1></div>
            </div>
            <div className="flex items-center bg-[#F7F8FA] mb-4 py-2 mx-2 px-2 space-x-3 rounded-xl">
                <div className="bg-[#E8F0F5] w-10 h-10 flex items-center justify-center rounded-full">
                    <TbCategory />
                </div>
                <div><h1>Font Settings</h1></div>
            </div>
            <div className="flex items-center bg-[#F7F8FA] mb-4 py-2 mx-2 px-2 space-x-3 rounded-xl">
                <div className="bg-[#E8F0F5] w-10 h-10 flex items-center justify-center rounded-full">
                    <TbCategory />
                </div>
                <div><h1>Appearance Settings</h1></div>
            </div>
        </div>
    );
};

export default Settings;