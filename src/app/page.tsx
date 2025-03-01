import Image from "next/image";
import hero_image from "../../public/Product_Image/shop-hero-1-product-slide-1.png";
import Man from "../../public/Product_Image/filter.png";
import woman from "../../public/Product_Image/filter (1).png";
import assoseries from "../../public/Product_Image/filter (2).png";
import kids from "../../public/Product_Image/filter (3).png";
import Product_Image from "./components/Product_Image";
import summer from "../../public/Product_Image/png-cover.2.png";
import summer2 from "../../public/Product_Image/asian-woman-man-with-winter-clothes 1.png";
import Future_card from "./components/Future_card";
import image9 from "../../public/Product_Image/unsplash_CuEvrPd3NYc.png";
import image10 from "../../public/Product_Image/unsplash_gEZkP23pLZ4.png";
import image11 from "../../public/Product_Image/unsplash_k0rVudBoB4c.png";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden ">
       

        {/* Hero Section */}
        <div className="relative" >
          <Image src={hero_image} alt="" priority className="w-full h-screen object-cover xl:object-fill" />
          <div className="md:w-[1044px] md:h-[427px] h-[361px] space-y-[35px] text-[#FFFFFF] place-items-center md:place-items-start absolute md:top-20 2xl:top-44 top-56 left-10 md:left-[197px] 2xl:left-[400px] place-content-center z-30">
            <h5 className="font-bold">SUMMER 2020</h5>
            <h2 className="text-[40px] leading-[50px] w-[268px] h-[100px] md:w-full text-center md:text-start font-bold">NEW COLLECTION</h2>
            <p className="text-[20px] leading-[30px] w-[291px] md:w-[376px] md:h-[60px] h-[90px] text-center md:text-start font-normal">We know how large objects
              will act, but things on a small scale.</p>
            <button className="py-[15px] px-10 text-[24px] leading-[32px] font-bold bg-[#2DC071] hover:bg-[#37ac6d] duration-300 rounded-[5px] ">SHOP NOW</button>
          </div>
        </div>
        {/* Catogory */}
        <div className="w-full h-full bg-[#FAFAFA] lg:px-[11%] xl:px-[12%] px-[2%] place-items-center">
          <div className="py-20 w-[333px] md:w-full h-full space-y-12">
            <div className="w-full h-[82px] place-items-center space-y-[10px]">
              <h3 className="text-[#252B42] text-2xl font-bold">EDITOR’S PICK</h3>
              <p className="w-[196px] md:w-full h-[40px] text-center text-sm">Problems trying to resolve
                the conflict between </p>
            </div>
            <div className="w-full h-full space-y-[30px] xl:space-y-0 xl:flex gap-5 place-content-center">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:flex gap-5 justify-evenly place-items-center">
              <div className="w-full xl:w-[510px] md:w-[400px] h-[500px] xl:px-12 relative bg-[#b4abab40]">
                <Image src={Man} alt="" style={{width:"100%",height:"100%"}} className="w-full h-full" />
                <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[426px] left-[31px] hover:bg-[#ee4c37] duration-300 cursor-pointer">MEN</p>
              </div>
              <div className="w-full h-[500px] md:w-[400px] xl:w-[240px] 2xl:w-[510px] relative">
                <Image src={woman} alt="" style={{width:"100%",height:"100%"}} className="w-full h-full" />
                <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[426px] left-[31px] hover:bg-[#ee4c37] duration-300 cursor-pointer">WOMEN</p>
              </div>
              </div>
              <div className=" h-full md:flex xl:flex-col xl:h-[500px] space-y-[30px] md:space-y-0 gap-10 xl:gap-5 place-content-center">
                <div className="w-full md:w-[400px] xl:w-[240px] 2xl:w-[300px] h-[242px] relative place-items-center">
                  <Image src={assoseries} style={{width:"100%",height:"100%"}} alt="" className="w-full h-full" />
                  <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[171px] left-[14px] hover:bg-[#ee4c37] duration-300 cursor-pointer">ACCESSORIES</p>
                </div>
                <div className="w-full md:w-[400px] xl:w-[240px] h-[242px] 2xl:w-[300px] relative">
                  <Image src={kids} alt="" style={{width:"100%",height:"100%"}} className="w-full h-full" />
                  <p className="w-[170px] h-[48px] bg-white text-[#252B42] font-bold flex items-center justify-center rounded absolute top-[171px] left-[14px] hover:bg-[#ee4c37] duration-300 cursor-pointer ">KIDS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Future Product */}
        <div className="w-full h-full sm:h-full flex justify-center items-center lg:px-[12%] px-[2%]">
          <div className="h-full w-[328px] md:w-full space-y-[48px] md:space-y-0 py-20 place-items-center ">
            <div className="w-[261px] md:w-full h-[154px] space-y-[10px]">
              <h4 className="text-xl text-center">Featured Products</h4>
              <h3 className="text-2xl font-bold text-center">BEST SELLER PRODUCTS</h3>
              <p className="text-sm text-center">Problems trying to resolve the conflict between </p>
            </div>
            <div className="h-full space-y-[30px] sm:space-y-0  items-center justify-between">
              <Product_Image  />
              
            </div>
            
          </div>
        </div>
        {/* Summer Section */}
        <div className="w-full h-full rounded-[5px] border-[1px] border-[#DEDEDE] bg-[#23856D] px-[2%] overflow-hidden">
          <div className="pt-[80px] lg:px-[12%] px-[2%] space-y-[80px] md:space-y-0 w-full h-full md:flex gap-[15%] place-items-center">
            <div className="h-[429px] space-y-[35px] place-items-center md:place-items-start text-white">
              <h4 className="text-xl">SUMMER 2020</h4>
              <h2 className="w-[246px] h-[100px] font-bold text-[40px] leading-[50px] text-center md:text-start">Vita Classic Product</h2>
              <p className="w-[291px] h-[90px] md:w-[341px] md:text-start text-xl text-center ">We know how large objects
                will act, but things on a
                small scale.</p>
              <div className="w-[184px] h-[104px] md:w-[295px] md:h-full space-y-[20px] md:space-y-0 place-items-center md:place-items-start md:flex justify-between items-center">
                <h2 className="text-2xl font-bold md:text-start text-center">$16.48</h2>
                <button className="px-[40px] py-[15px] text-[14px] bg-[#2DC071] rounded-[5px]  hover:bg-[#37ac6d] duration-300">ADD TO CART</button>
              </div>
            </div>

            <div className="w-[316px] md:w-[510px] h-full">
              <Image src={summer} alt=""  className="w-auto h-auto object-cover" />
            </div>

          </div>

        </div>
        {/* universe section */}
        <div className="w-full h-full pt-[120px] md:pt-0 md:flex md:flex-row-reverse gap-5 xl:gap-[10%] place-content-center items-center px-[2%]">
          <div className="h-[476px] md:w-[573px] md:h-[326px] space-y-[32px] place-items-center md:place-items-start md:px-10">
            <h5 className="font-bold text-[#BDBDBD]">SUMMER 2020</h5>
            <h2 className="w-[303px] md:w-[375px] h-[140px] text-[40px] leading-[50px] font-bold text-center md:text-start">Part of the
              Neural
              Universe</h2>
            <p className="w-[262px] h-[84px] text-xl text-center md:text-start text-[#737373]">We know how large objects will act, but things on a small scale.</p>
            <div className="w-[165px] md:w-[339px] h-[129px] space-y-[25px] md:space-y-0 place-items-center md:place-items-start md:flex">
              <button className="px-[40px] py-[15px] text-[14px] bg-[#23A6F0] rounded-[5px] text-white  hover:bg-[#2e8fc7] duration-300">BUY NOW</button>
              <button className=" h-[52px] px-[40px] py-[15px] text-[14px] text-[#23A6F0] border-[1px] border-[#23A6F0] hover:text-white hover:bg-[#3f90be] duration-300 rounded-[5px]">Learn More</button>
            </div>
          </div>
          <div className="w-full h-[407px] md:w-[604px] md:h-[550px] ">
            <Image src={summer2} alt="" style={{width:"100%",height:"100%"}} className="w-full h-full object-fill" />
          </div>
        </div>
        {/* Futured Section */}
        <div className="w-full bg-white h-full flex justify-center items-center lg:px-[12%] px-[2%]">
          <div className="h-full w-[328px] md:w-full space-y-[48px] md:space-y-0 py-20 place-items-center ">
            <div className="w-[261px] h-[154px] md:w-[691px] place-items-center space-y-[10px]">
              <h4 className="text-sm text-center text-[#23A6F0]">Practice Advice</h4>
              <h3 className="text-2xl font-bold text-center">Featured Products</h3>
              <p className="text-sm text-center md:w-[469px]">Problems trying to resolve the conflict between
                the two major realms of Classical physics: Newtonian mechanics  </p>
            </div>
            <div className=" h-[1878px] sm:h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between items-center gap-10">
              <Future_card image={image9} />
              <Future_card image={image10} />
              <Future_card image={image11} />
            </div>
          </div>
        </div>


      </div>
    </>
  );
}
