// "use client"

// import React, { useState, useEffect } from "react";
// import Rating_Star from "./Rating_Star";
// import Image from "next/image";
// import Link from "next/link";

// // Define types for the product data
// interface ProductImage {
//     asset: {
//         _ref: string;
//         url: string;
//     };
// }

// interface Product {
//     _id: string;
//     title: string;
//     price: number;
//     dicountPercentage: number;
//     rating: number;
//     reviewsCount: number;
//     description: string;
//     isNew: boolean;
//     tags: string[];
//     productImage: ProductImage;
// }


// const SanityData = () => {
//     const [products, setProducts] = useState<Product[]>([]); // State with Product type
//     const [loading, setLoading] = useState<boolean>(true); // Loading state with type
//     const [error, setError] = useState<string | null>(null); // Error state with type

//     // GROQ Query to fetch data from Sanity
//     const query = encodeURIComponent(`
//     *[_type == "product"]{
//    _id,
//     rating,
//     reviewsCount,
//    title,
//    price,
//    dicountPercentage,
//    description,
//    isNew,
//    tags,
//    productImage {
//     asset->{
//       _ref,
//       url
//     }
//   }
// }
//   `);

//     const sanityUrl: any = `https:${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`;

//     // Fetch data from Sanity using plain fetch
//     const fetchData = async () => {
//         try {
//             const response = await fetch(sanityUrl);
//             const result = await response.json();
//             if (response.ok) {
//                 setProducts(result.result); // TypeScript will infer type based on state
//             } else {
//                 throw new Error("Failed to fetch data from Sanity");
//             }
//             setLoading(false);
//         } catch (err: any) { // Specify error type
//             console.error("Error fetching data:", err);
//             setError(err.message);
//             setLoading(false);
//         }
//     };
//     useEffect(() => {
    
//         fetchData();
//     }, []);

//     // Render Component
//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>Error: {error}</div>;

//     return (

//         <div>
//             <ul className="w-full h-full hover:-translate-y-1 duration-500 cursor-pointer place-items-center relative">
//                 {products.map((product) => (
//                     <li key={product._id} className="p-4 border rounded-lg shadow-md">
//                         <Link href={`/Shop_detail/${product._id}`}>
//                         <div className="w-full md:w-[350px] xl:w-[240px] h-[422px] ">
//                             <Image src={product.productImage.asset.url} alt={product.title} width={200} height={200} className="w-full h-full object-cover" />
//                         </div>
//                         </Link>
                        
                        
//                         <h2 className="text-lg font-semibold">{product.title}</h2>
//                         {/* <p className="text-sm text-gray-600">{product.description}</p> */}
//                         <p><Rating_Star stars={product.rating} /></p>
//                         <p className="text-md font-medium text-green-600">
//                             Price: ${product.price}
//                         </p>
//                         <p className="text-sm text-gray-500">
//                             Discount: {product.dicountPercentage}%
//                         </p>
//                         <p className="text-sm">Tags: {product.tags && product.tags.join(", ")}</p>
//                         <p className="text-sm">New Product: {product.isNew ? "Yes" : "No"}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default SanityData;