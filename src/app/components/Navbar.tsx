"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FaRegHeart, FaSearch, FaShoppingCart, } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import Top_Navbar from "./Top_Navbar";

const Navbar = () => {

    const val: string = usePathname();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isHeartbarOpen, setIsHeartbarOpen] = useState(false);
    const [isSearchbarOpen, setIsSearchbarOpen] = useState(false);
    // sideBar Panal

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    // HeartBar Panal

    const HeartSidebar = () => {
        setIsHeartbarOpen(!isHeartbarOpen);
    };
    // SearchBar Panal

    const SearchBar = () => {
        setIsSearchbarOpen(!isSearchbarOpen);
    };

    return (
        <>
         {/* Top Navbar */}
         <Top_Navbar/>
            {/* Navigatiom */}
            <div className="w-full bg-transparent h-16 flex justify-between items-center lg:px-[12%] px-[2%]">


                <Link href="/"><h3 className="text-[24px] w-[187px] leading-[32px] font-bold cursor-pointer">Bandage</h3>
                </Link>

                <div className="flex justify-between items-center md:w-[815px] lg:ml-6 gap-10">

                    <ul className="hidden md:flex h-full items-center text-[#737373] font-bold text-sm gap-10 ">
                        <li>
                            <Link href="/" className={val === "/" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/About" className={val === "/components/About" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/Product" className={val === "/components/Product" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                Products
                            </Link>
                        </li>

                        <li>
                            <Link href="/components/Pricing" className={val === "/components/Pricing" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="/components/Contact" className={val === "/components/Contact" ? "border-b-4 border-[#4c9eb3] text-[#737373]" : ""} >
                                Contact
                            </Link>
                        </li>

                    </ul>
                    <div className="w-full h-full text-sm font-bold hidden md:flex items-center px-5 justify-between">
                        <p className="text-[#23A6F0] cursor-pointer">Login / Register</p>
                        <div className=" flex items-center cursor-pointer gap-5 ">
                            <FaSearch size={24} color="#737373" className={isSearchbarOpen === true ? "hidden" : "block"} onClick={SearchBar} />


                            <Link href={"/components/Shoping_Cart"}>
                                <div className={isSearchbarOpen === true ? "hidden" : "block relative"}>
                                    <FaShoppingCart size={24} color="#737373" />
                                    <div className="absolute top-[11px] right-[-6px] rounded-full w-4 h-4 bg-black flex justify-center items-center"><span className="text-[#23A6F0]">5</span></div>
                                </div>
                            </Link>
                            <div className={isHeartbarOpen === true || isSearchbarOpen === true ? "hidden" : "block relative"}>
                                <FaRegHeart size={24} color="#737373" onClick={HeartSidebar} />

                                <div className="absolute top-[11px] right-[-6px] rounded-full w-4 h-4 bg-black flex justify-center items-center"><span className="text-[#23A6F0]">5</span></div>
                            </div>


                        </div>


                        {isSearchbarOpen === true && isHeartbarOpen === false ? (
                            
                                <form action="" className="flex justify-center items-center gap-2">
                                <input type="text"
                                 placeholder="Search Products" 
                                 className="w-[180px] h-8 rounded pl-5 text-[#737373] shadow-2xl shadow-slate-900"/>
                                 <button type="submit"><FaSearch size={24} color="#737373"/></button>
                                </form>

                            
                        ) : ""}
                        {isHeartbarOpen === true && isSearchbarOpen === false ? (
                            <div className="w-[370px] h-[532px] bg-white relative top-[234px] right-[-30px] z-50 ">
                                <GiCrossMark size={24} className="absolute top-6 right-10 cursor-pointer" onClick={HeartSidebar} />
                            </div>) : ""}

                    </div>
                </div>
                <div className="flex gap-5 items-center ">
                    <div className="flex md:hidden items-center cursor-pointer gap-5 ">
                        <FaSearch size={24} color="#737373" />
                        <Link href={"/components/Shoping_Cart"}>
                            <div className="relative">
                                <FaShoppingCart size={24} color="#737373" />
                                <div className="absolute top-[11px] right-[-6px] rounded-full w-4 h-4 bg-black flex justify-center items-center"><span className="text-[#23A6F0]">5</span></div>
                            </div>
                        </Link>

                    </div>


                    <svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:hidden cursor-pointer"
                        onClick={toggleSidebar}>
                        <path d="M0.571533 0H23.4287V2.28571H0.571533V0ZM6.28582 5.71429H23.4287V8H6.28582V5.71429ZM13.4287 11.4286H23.4287V13.7143H13.4287V11.4286Z" fill="#252B42" />
                    </svg>
                </div>


            </div>


            {isSidebarOpen && (

                <div className="w-full h-[532px] bg-white relative top-[0px] z-50 transition-transform duration-300 ease-in-out">
                    <div className="w-full h-screen " onClick={toggleSidebar}>

                        <ul className="flex flex-col w-full text-[#737373] text-[30px] justify-center items-center py-24 space-y-[30px] font-bold">
                            <li>
                                <Link href="/" className={val === "/" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/About" className={val === "/components/About" ? "border-b-4 border-[#737373] text-[#4c9eb3]" : ""} onClick={toggleSidebar}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Product" className={val === "/components/Product" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Products
                                </Link>
                            </li>

                            <li>
                                <Link href="/components/Pricing" className={val === "/components/Pricing" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/components/Contact" className={val === "/components/Contact" ? "border-b-4 border-[#737373] text-[#4c9eb3] " : ""} onClick={toggleSidebar}>
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;
