import React from 'react';

// react icons
import { TbCategory } from "react-icons/tb";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { GoHome} from "react-icons/go";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";


import Image from 'next/image';

function Navbar(props) {
    return (
        <div className='bg-white flex flex-col items-center rounded-2xl mt-10 ml-10 py-6'>
            {/* logo */}
            <div>
                <Image
                    src="https://i.ibb.co/fYXX6jJ/logo-1.png"
                    alt="Logo"
                    width={73}
                    height={73}
                />
            </div>

            {/* others icone */}
            <div className='mt-[120px] mb-[130px]'>
                <ul className='space-y-6'>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <GoHome className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <TbCategory className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <PiLightbulbFilamentLight className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <CiBookmark className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <RiMedicineBottleLine className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <IoChatbubblesOutline className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                    <li >
                        <div className='w-[38px] bg-gray-200 h-[38px] rounded-full flex items-center justify-center'>
                            <IoBookOutline className='w-5 h-5 text-gray-600' />
                        </div>
                    </li>
                </ul>
            </div>

            {/* last icone */}
            <div>
                <div className='bg-[#1FA45B] w-11 h-11 flex items-center justify-center rounded-lg'  >
                    <Image
                        src="https://i.ibb.co.com/98BsPW7/icon.png"
                        alt="hands"
                        width={24}
                        height={24}
                    />
                </div>
            </div>
        </div>
    );
}

export default Navbar;