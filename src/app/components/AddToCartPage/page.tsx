import React from 'react'

const page = () => {
  return (
    <div>
      this is cart page
    </div>
  )
}

export default page

// "use client";

// import { useProductContext } from "@/app/context/context";
// import Image from "next/image";

// const AddToCartPage = () => {
//   const { cart, removeFromCart } = useProductContext();

//   const calculateTotal = () =>
//     cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-xl font-semibold text-gray-700">Your cart is empty.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="p-5 sm:p-10">
//       <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
//       <div className="space-y-5">
//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-sm"
//           >
//             {/* Product Image and Details */}
//             <div className="flex items-center space-x-4">
//               <Image
//                 src={item.productImage.asset.url}
//                 alt={item.title}
//                 width={80}
//                 height={80}
//                 className="rounded-md"
//               />
//               <div>
//                 <h2 className="font-bold text-lg">{item.title}</h2>
//                 <p className="text-gray-600">Price: ${item.price}</p>
//                 <p className="text-gray-600">Quantity: {item.quantity}</p>
//               </div>
//             </div>

//             {/* Remove Button */}
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//               onClick={() => removeFromCart(item.id)}
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Total Price */}
//       <div className="mt-6">
//         <h2 className="text-2xl font-bold">
//           Total: <span className="text-orange-700">${calculateTotal().toFixed(2)}</span>
//         </h2>
//       </div>
//     </div>
//   );
// };

// export default AddToCartPage;
