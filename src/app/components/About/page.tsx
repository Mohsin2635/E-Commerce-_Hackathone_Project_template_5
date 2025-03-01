import Link from "next/link";
import Image from "next/image";
import None from "../../../../public/Product_Image/none (1).png";
import Team from "../Team";
import Team_image1 from "../../../../public/Product_Image/user.1.png";
import Team_image2 from "../../../../public/Product_Image/media.png";
import Team_image3 from "../../../../public/Product_Image/media (1).png";
import imaeg10 from "../../../../public/Icons/col-md-3.png";
import imaeg11 from "../../../../public/Icons/col-md-3 (1).png";
import imaeg12 from "../../../../public/Icons/col-md-3 (2).png";
import imaeg13 from "../../../../public/Icons/col-md-3 (3).png";
import imaeg14 from "../../../../public/Icons/col-md-3 (4).png";
import imaeg15 from "../../../../public/Icons/col-md-3 (5).png";
import product1 from "../../../../public/Product_Image/unsplash_vjMgqUkS8q8.png";
import { FaAngleRight } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="overflow-hidden">
        
       
        {/* About section */}
        <div className="w-full h-full space-y-[41px] lg:space-y-0 bg-white place-items-center lg:px-[12%] px-[2%] lg:flex justify-between xl:justify-around 2xl:justify-evenly place-content-center">
          <div className=" py-6 space-y-5 place-items-center place-content-center lg:place-items-start">
            <p className="text-[#252B42] font-bold ">ABOUT COMPANY</p>
            <div className="w-full h-[80px] py-6 text-[#252B42] text-3xl lg:text-start text-center font-bold md:text-5xl">
              About Us
            </div>
            <div className="w-full h-[44px] flex justify-center items-center lg:hidden">
              <div className="w-[117px] h-full py-[10px] flex justify-between">
                <Link href="/">
                  <p className="text-[#252B42] font-bold text-sm">Home</p>
                </Link>
                <FaAngleRight size={20} />
                
                {/* <Image src={greater} alt="greater" height={18} /> */}
                <p className="text-[#737373] font-bold text-sm">About</p>
              </div>
            </div>
            <p className="w-[277px] h-[120px] text-center lg:text-start">We know how large objects will act, but thing son a small scale just do not act that way.</p>
            <div className="w-[195px] h-[52px] rounded py-[15px] px-10 bg-[#23A6F0] text-white flex justify-center items-center hover:bg-[#2e8fc7] duration-300">
              <button className="text-sm text-center font-bold">Get Quote Now</button>

            </div>

          </div>
          <div className="place-items-center">
            <Image src={None} alt="None" style={{width:"100%",height:"100%"}} className="w-[620px] h-full object-fill" />
          </div>

        </div>
        {/* problems trying */}

        <div className="w-full h-[500px] md:h-full py-[80px] md:py-6 lg:px-[12%] bg-white px-[2%]">
          <div className="w-full h-[340px] md:h-full space-y-[60px] place-content-center place-items-center md:flex justify-between 2xl:justify-evenly">
            <div className="space-y-10 place-items-center">
              <p className="text-[#E74040] text-sm">Problems trying</p>
              <h3 className="w-[269px] md:w-[350px] lg:w-[450px] h-full text-[#252B42] font-bold text-center md:text-start text-2xl">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
            </div>
            <p className="w-[306px] md:w-[300px] lg:w-[400px] text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        </div>
        {/* customer reviews */}
        <div className="w-full h-full py-[50px] md:py-10 place-items-center bg-white lg:px-[12%] px-[2%]">
          <div className="w-[329px] h-full md:w-full space-y-[100px] md:space-y-0 text-[#252B42] place-items-center md:flex justify-between 2xl:justify-evenly items-center">
            <div className="w-[238px] h-[104px] place-items-center space-y-3">
              <h1 className="text-6xl font-bold text-center">15K</h1>
              <h5 className="text-[#737373] font-bold">Happy Customers</h5>
            </div>
            <div className="w-[238px] h-[104px] place-items-center space-y-3">
              <h1 className="text-6xl font-bold text-center">150K</h1>
              <h5 className="text-[#737373] font-bold">Monthly Visitors</h5>
            </div>
            <div className="w-[238px] h-[104px] place-items-center space-y-3">
              <h1 className="text-6xl font-bold text-center">15</h1>
              <h5 className="text-[#737373] font-bold">Countries  Worldwide</h5>
            </div>
            <div className="w-[238px] h-[104px] place-items-center space-y-3">
              <h1 className="text-6xl font-bold text-center">100+</h1>
              <h5 className="text-[#737373] font-bold">Top Partners</h5>
            </div>
          </div>
        </div>
        {/* Video Section */}
        <div className="w-full h-full py-16 place-items-center bg-white place-content-center lg:px-[12%] px-[5%]">
          <video controls preload="metadata" className="w-auto h-auto rounded-2xl ">
            <source src="/video.mp4" type="video/mp4" ></source>
          </video>
        </div>
        {/* our team */}
        <div className="w-full h-full place-items-center bg-white lg:px-[12%] px-[2%]">
          <div className="w-[316px] h-[280px] md:w-full md:h-full py-[45px] place-items-center space-y-[20px]">
            <h1 className="text-5xl text-[#252B42] font-bold text-center">Meet Our Team
            </h1>
            <p className="text-sm font-bold text-center text-[#737373] md:w-[500px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div className="w-[316px] h-full sm:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 place-items-center">
            <Team image={Team_image1} />
            <Team image={Team_image2} />
            <Team image={Team_image3} />
          </div>
        </div>
        {/* Companies */}
        <div className="w-full h-full place-items-center">
          <div className="w-[325px] h-[240px] md:w-full md:h-full space-y-10 place-items-center md:py-10">
            <h1 className="text-[#252B42] text-[48px] leading-[50px] text-center font-bold">Big Companies Are Here</h1>
            <p className="font-bold text-sm text-[#737373] text-center md:w-[400px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
        </div>
        <div className="w-full h-[1173px] md:h-[175px] md:py-0 py-10 place-items-center md:pt-0 pt-[110px] bg-[#FAFAFA] md:space-y-0 space-y-20 md:flex justify-between 2xl:justify-evenly items-center lg:px-[12%] px-[2%]">
          <Image src={imaeg10} alt="" className="" />
          <Image src={imaeg11} alt="" className="" />
          <Image src={imaeg12} alt="" className="" />
          <Image src={imaeg13} alt="" className="" />
          <Image src={imaeg14} alt="" className="" />
          <Image src={imaeg15} alt="" className="" />
        </div>
        {/* Work with us */}
        <div className="flex">
          <div className="w-full h-[520px] bg-[#2A7CC7] place-items-center place-content-center">
            <div className="w-[328px] h-[288px] md:w-[500px] space-y-[36px] text-white font-bold text-center place-items-center md:text-start md:place-items-start 2xl:text-center 2xl:place-items-center">
              <h5>WORK WITH US</h5>
              <h5 className="text-5xl leading-[50px]">Now Let’s grow Yours</h5>
              <p className="text-sm">The gradual accumulation of information about atomic and
                small-scale behavior during the first quarter of the 20th </p>
              <button className="border-[1px] border-[#FAFAFA] py-4 px-10 rounded hover:bg-[#3370a8] duration-300">Try Now</button>
            </div>
          </div>
          <div className="w-[450px] h-[520px] lg:w-[590px] 2xl:w-[700px] hidden md:block 2xl:hidden">
            <Image src={product1} alt="" style={{width:"100%",height:"100%"}} className="w-full h-full object-cover" />
          </div>
        </div>
       






      </div>
    </>
  )
}

export default page;
