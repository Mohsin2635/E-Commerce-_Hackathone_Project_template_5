"use client"
import { useProductContext } from "@/app/context/context";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Image from "next/image";
import Rating_Star from "../../Rating_Star";

const Page = () => {
  const { isSingleLoading, singleProduct, GetSingleProduct } = useProductContext();
  const { slug } = useParams<{ slug: string }>();
  // console.log("slug", slug);
  // console.log("SSSSSingleProduct", singleProduct);
  const {
    _id,
    rating,
    reviewsCount,
    title,
    price,
    dicountPercentage,
    description,
    isNew,
    tags,
    // productImage: {
    //   asset: { url: imageUrl }  // Nested destructuring to access image URL
    // },



} = singleProduct;
// console.log("Image shgsajjh", imageUrl);

useEffect(() => {
  GetSingleProduct(slug)

}, [slug])

// console.log("id", slug);
if (isSingleLoading) {
  return <div>.......   Loading</div>
}
return (
  <>

    <div className="space-y-10 sm:flex justify-between w-full h-full my-10 px-[5%] sm:px-[7%] overflow-hidden">
      <div className="w-full sm:w-[40%] rounded-lg">
        <Image
          src={""}
          width={200}
          height={200}
          alt={title}
          className="w-full rounded-lg"
        />
        <div className="w-full text-center mt-12 sm:mt-24">
          {/* <Link href={`/Add_Cart/${data.id}`}> */}
          <button
            className="bg-yellow-300 w-52 h-12 rounded-lg font-bold hover:bg-yellow-500 active:bg-yellow-300 duration-500"
          // onClick={addToCart}
          >
            Add to Cart
          </button>
          {/* </Link> */}
        </div>
      </div>
      <div className="w-full sm:w-[57%]">
        <h1 className="text-3xl">{title}</h1>
        <hr />
        <p className="text-lg mt-2">
          Price:{" "}
          <span className="text-orange-700 font-semibold">
            ${price}
          </span>
        </p>
        <Rating_Star stars={rating} />

        <p className="text-lg mt-2">
          Color: <span className="font-medium text-black">Trippy</span>
        </p>
        <p className="text-lg mt-2">Size</p>
        <select
          name="Size"
          id=""
          className="mt-1 w-20 h-7 text-center bg-pink-50 outline-none border border-black rounded-md "
        >
          <option value="Xl" className="flex justify-center items-center">
            Select
          </option>
        </select>
        <h1 className="mt-3 text-2xl font-bold">Product Details</h1>
        <pre className="text-lg font-bold mt-3">
          Fabric Type{" "}:
          <span className="text-black font-normal ">
            {/* {data.product_detail.fabric} */}
          </span>
        </pre>
        <pre className="text-lg font-bold">
          Care Instructions{" "}:
          <span className="text-black font-normal ">
            {/* {data.product_detail.instruction} */}
          </span>
        </pre>
        <pre className="text-lg font-bold">
          Origin{" "}:
          <span className="text-black font-normal ">
            {/* {data.product_detail.origin} */}
          </span>
        </pre>
        <hr />
        <h1 className="mt-3 font-bold text-2xl">About This Item</h1>
        <ul className="font-serif list-outside pl-5 pt-3">
          <li>{description}</li>
        </ul>
      </div>
    </div>
  </>
)
}

export default Page;
