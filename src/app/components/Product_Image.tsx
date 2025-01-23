"use client"
import Image from "next/image";
import Rating_Star from "./Rating_Star";
import { useProductContext } from "../context/context";
import Link from "next/link";

export interface Product {
  _id: string;
  title: string;
  price: number;
  dicountPercentage: number;
  rating: number;
  reviewsCount: number;
  description: string;
  isNew: boolean;
  tags: string[];
  productImage: ProductImage;
}
interface ProductImage {
  asset: {
    _ref: string;
    url: string;
  };
}


const Product_Image = () => {
  const { products, isLoading } = useProductContext();
  // const product = products;
  // console.log(product);

  // Render Component
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <div className="h-full cursor-pointer place-items-center relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {products?.map((product: Product, index: number) => (
          <div key={product._id} className="hover:-translate-y-1 duration-500">
            <Link href={`/components/SingleProduct/${product._id}`}>
              <div className="w-[350px] xl:w-[240px] h-[322px]">
                <Image src={product.productImage.asset.url} width={200} height={200} alt="Product" className="w-full h-full object-cover rounded" />
              </div>
            </Link>
            <div className="h-[188px] pt-[25px] pb-[35px] px-[25px] space-y-[10px] place-items-center">
              <h5 className="text-center font-bold text-[#252B42]">{product.title}</h5>
              <p className="text-center font-bold text-[#737373]">Discount {product.dicountPercentage}%</p>

              <h5 className="text-[#23856D] font-bold text-center">${product.price}</h5>

              {/* Replaced <p> with <div> */}
              <div><Rating_Star stars={product.rating} /></div>
            </div>
            {/* <div className="absolute top-5 right-5 ">
              <FaRegHeart size={24} color="#737373" className={`hover:fill-black ${color}`} onClick={() => setcolor("bg-red-500")} />
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
}

export default Product_Image;
