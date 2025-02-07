"use client";

import { useProductContext } from "@/app/context/context";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Rating_Star from "../../Rating_Star";

const Page = () => {
  const { isSingleLoading, singleProduct, GetSingleProduct } =
    useProductContext();
  const { slug } = useParams();
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (slug) {
      GetSingleProduct(slug as string);
    }
  }, [slug]);

  const handleAddToCart = () => {
    if (quantity < 1) {
      alert("Quantity must be at least 1.");
      return;
    }
    // addToCart({ ...singleProduct, quantity });
  };

  if (isSingleLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold">Loading...</p>
      </div>
    );
  }

  if (!singleProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-semibold text-red-600">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10 sm:flex justify-between w-full h-full my-10 px-5 sm:px-10 overflow-hidden">
      {/* Left Section: Product Image */}
      <div className="w-full sm:w-[40%] rounded-lg">
        <Image
          src={singleProduct.productImage.asset.url}
          width={500}
          height={500}
          alt={singleProduct.title}
          className="w-full rounded-lg object-cover"
          priority
        />
        <div className="w-full text-center mt-12 sm:mt-24">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <label htmlFor="quantity" className="text-lg font-medium">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-16 text-center bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-yellow-400 w-52 h-12 rounded-lg font-bold hover:bg-yellow-500 active:bg-yellow-300 duration-300 shadow-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full sm:w-[57%]">
        <h1 className="text-3xl font-bold mb-4">{singleProduct.title}</h1>
        <hr className="mb-4" />

        {/* Price and Rating */}
        <p className="text-lg mt-2">
          Price:{" "}
          <span className="text-orange-700 font-semibold text-xl">
            ${singleProduct.price}
          </span>
        </p>
        <div className="mt-2">
          <Rating_Star stars={singleProduct.rating} />
        </div>

        {/* Product Options */}
        <p className="text-lg mt-5 font-medium">
          Color: <span className="font-normal text-gray-600">Trippy</span>
        </p>
        <p className="text-lg mt-2 font-medium">Size:</p>
        <select
          name="Size"
          id="size"
          className="mt-2 w-32 h-10 text-center bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="Select" disabled>
            Select
          </option>
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">Extra Large</option>
        </select>

        {/* Product Details */}
        <h2 className="mt-8 text-2xl font-bold">Product Details</h2>
        <ul className="mt-4 space-y-2 text-lg">
          <li>
            <span className="font-semibold">Fabric Type:</span>{" "}
            <span className="text-gray-700">100% Cotton</span>
          </li>
          <li>
            <span className="font-semibold">Care Instructions:</span>{" "}
            <span className="text-gray-700">Machine Wash</span>
          </li>
          <li>
            <span className="font-semibold">Origin:</span>{" "}
            <span className="text-gray-700">Imported</span>
          </li>
        </ul>

        {/* Description with "Read More" / "Read Less" */}
        <h2 className="mt-8 font-bold text-2xl">About This Item</h2>
        <p className="font-serif mt-3 text-lg text-gray-700 leading-relaxed">
          {showFullDescription
            ? singleProduct.description
            : `${singleProduct.description.slice(0, 150)} ......`}
        </p>
        <button
          className="text-blue-500 font-semibold hover:underline mt-2 outline-none border-none"
          onClick={() => setShowFullDescription(!showFullDescription)}
        >
          {showFullDescription ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Page;
