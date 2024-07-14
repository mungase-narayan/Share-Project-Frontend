import { Button } from "antd";
import React from "react";
import { FcIdea } from "react-icons/fc";
import { MdOutlineMenu } from "react-icons/md";
const Header = () => {
    return (
        <header className="">
            <nav className="flex items-center justify-between my-3 w-[92%] mx-auto">
                <div className="flex items-center justify-center gap-2">
                    {/* <img src="" alt="img-logo" /> */}
                    <FcIdea className="h-10 w-10" />
                    <h1 className=" font-mono text-lg">Project Ideas</h1>
                </div>
                <div className=" md:static md:min-h-fit absolute min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
                    <ul className=" flex md:flex-row flex-col md:items-center md:gap-12 gap-8">
                        <li>
                            <a
                                className=" hover:text-gray-500 font-mono "
                                href=""
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className=" hover:text-gray-500 font-mono "
                                href=""
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                className=" hover:text-gray-500 font-mono "
                                href=""
                            >
                                Developers
                            </a>
                        </li>
                        <li>
                            <a
                                className=" hover:text-gray-500 font-mono "
                                href=""
                            >
                                Solution
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                    <Button className=" bg-blue-500 text-white">Login</Button>
                    <Button className=" bg-blue-500 text-white">Sign up</Button>
                    </div>
                    <MdOutlineMenu onClick="onToggleMenu(this)" className=" md:hidden"/>
                </div>
            </nav>
        </header>
    );
};

export default Header;
