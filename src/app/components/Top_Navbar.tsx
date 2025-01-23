"use client"
import Image from "next/image";
import logo1 from "../../../public/Icons/logos_twitter.png";
import logo2 from "../../../public/Icons/logos_facebook.png";
import logo3 from "../../../public/Icons/instagram.png";
import logo4 from "../../../public/Icons/logos_linkedin-icon.png";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";
import { IoIosMailUnread } from "react-icons/io";


const Top_Navbar = () => {

    const val: string = usePathname();

    return (
        <>
            <div className={val === "/" ? "w-full h-16 bg-[#252B42] font-bold text-white hidden lg:flex justify-between items-center px-[12%] text-xs" : "w-full h-16 bg-[#23856D] font-bold text-white hidden lg:flex justify-between items-center px-[12%] text-xs"}>
                <div className="w-[370px] flex place-items-center justify-between">
                    <div className="w-40 flex items-center gap-3">
                        <IoCall size={16} />
                        <h6>(225) 555-0118</h6>
                    </div>
                    <div className="w-[228px] flex items-center gap-3">
                        <IoIosMailUnread size={16} />
                        <h6>michelle.rivera@example.com</h6>
                    </div>
                </div>
                <div className="w-[332px] place-items-center">
                    Follow Us  and get a chance to win 80% off
                </div>
                <div className="w-[233px] flex justify-around items-center bg[#142a66]">
                    <p>Follow Us  :</p>
                    <div className="w-[120px] flex gap-3">
                        <Image src={logo1} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={logo2} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={logo3} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />
                        <Image src={logo4} alt="" className="w-4 h-4 hover:-translate-y-1 duration-500 cursor-pointer" />

                    </div>

                </div>

            </div>
        </>
    )
}

export default Top_Navbar;
