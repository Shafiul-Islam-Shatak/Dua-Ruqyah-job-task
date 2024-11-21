import Image from "next/image";
import { TbTriangleInvertedFilled } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";


const Header = () => {
    return (
        <div>
            <div className="navbar mt-16">
                <div className="flex-1">
                    <h1 className=" text-2xl">Duas Page</h1>
                </div>
                <div className="flex gap-2">
                    <div className="form-control p-4 w-[370px]">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search by Dua Name"
                                className="input input-bordered w-full pr-10"
                            />
                            <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black text-lg" />
                        </div>
                    </div>

                    <div className="dropdown dropdown-end relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                            <div className="flex items-center space-x-2 rounded-full">
                                <Image
                                    src={'https://i.ibb.co/8Y5F7TW/Vector.png'}
                                    width={40}
                                    height={40}
                                    alt="User"
                                />
                            </div>

                            <TbTriangleInvertedFilled className="absolute -right-6 top-4 text-gray-600 text-lg" />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;