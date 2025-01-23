import { TiTick } from "react-icons/ti";

interface PricingCardProps {
    bg: string;        // Background class, like 'bg-white' or 'bg-[#252B42]'
    name: string;      // Name of the pricing plan, e.g., "FREE", "STANDARD", "PREMIUM"
    price: string;     // Price as a string, since it's coming as a string ("9.99", "19.99")
    text: string;      // Text color class, e.g., 'text-[#252B42]' or 'text-white'
    pt?: string;       // Optional padding-top class (e.g., 'lg:pt-8')
  }
const Pricing_card: React.FC<PricingCardProps> = ({ bg, name, price, text, pt }) => {
    return (
        <>
            <div className={`${pt}`}>
                <div className={`w-full ${bg} ${text} h-[664px] md:w-[327px] xl:w-[380px] py-[50px] px-10 space-y-[35px] place-items-center rounded hover:scale-105 duration-500 cursor-pointer`}>
                    <h2 className=" text-2xl text-center font-bold">{name}</h2>
                    <p className="font-bold text-center">Organize across all
                        apps by hand</p>
                    <div className="w-[210px] h-[56px] space-x-[10px] flex ">
                        <h2 className="text-4xl text-[#23A6F0] font-bold">{price} <sup>$</sup></h2>
                        <p className="text-[#23A6F0] text-sm pt-5">per Month</p>
                    </div>
                    <div className="w-[236px] h-[247px] space-y-[15px]">
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#2DC071]">

                                <TiTick color="white" size={26} />

                            </div>
                            <p className="text-sm ">Unlimited product updates
                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#2DC071]">
                                <TiTick color="white" size={26} />

                            </div>
                            <p className="text-sm ">Unlimited product updates
                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#2DC071]">
                                <TiTick color="white" size={26} />

                            </div>
                            <p className="text-sm ">Unlimited product updates
                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#BDBDBD]">
                                <TiTick color="white" size={26} />

                            </div>
                            <p className="text-sm  text-left">1GB  Cloud storage and More

                            </p>
                        </div>
                        <div className="w-full h-[32px] space-x-[10px] flex items-center justify-between">
                            <div className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#BDBDBD]">
                                <TiTick color="white" size={26} />

                            </div>
                            <p className="text-sm ">Email and community
                                support

                            </p>
                        </div>

                    </div>
                    <div className="w-[246px] h-[52px] rounded py-[15px] px-10 bg-[#23A6F0] text-white flex justify-center items-center hover:bg-[#2e8fc7] duration-300">
                        <button className="text-sm text-center font-bold">Try For {name}</button>

                    </div>

                </div>
            </div>

        </>
    )
}

export default Pricing_card;
