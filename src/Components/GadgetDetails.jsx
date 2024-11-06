import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useCart } from './CartContextProvider';

const GadgetDetails = () => {
    const { data, productId } = useLoaderData();
    const { addToCart, addToWishlist } = useCart();  // Get addToCart and addToWishlist functions from context

    // Log the data and productId to check the fetched data structure
    console.log("Fetched data:", data);
    console.log("Product ID from URL:", productId);

    // Ensure product_id comparison is type-safe (string or integer match)
    const gadget = data.find(gadget => String(gadget.product_id) === String(productId));

    // Display a message if no gadget is found
    if (!gadget) {
        return <p className="text-center mt-6">Gadget not found.</p>;
    }

    return (
        <div className="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
            <div className="flex">
                <div className="w-1/3">
                    <img src={gadget.product_image} alt="" className="w-full h-32 bg-gray-200 rounded-lg object-cover" />
                </div>
                <div className="w-2/3 pl-4">
                    <h2 className="text-2xl font-semibold">{gadget.product_title}</h2>
                    <p className="text-lg font-bold text-gray-700">Price: ${gadget.price}</p>
                    <span className={`inline-block px-3 py-1 mt-2 rounded-full text-sm font-semibold ${
                        gadget.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                        {gadget.availability ? 'In Stock' : 'Out of Stock'}
                    </span>
                    <p className="text-gray-500 mt-2">{gadget.description}</p>
                    <h3 className="font-semibold mt-3">Specification:</h3>
                    <ul className="list-decimal list-inside text-gray-700">
                        {gadget.Specification.map((spec, index) => (
                            <li key={index}>{spec}</li>
                        ))}
                    </ul>
                    <div className="flex items-center mt-4">
                        <span className="mr-1">Rating</span> 
                        <span className="text-yellow-500 mr-1">⭐</span>
                        <span className="text-gray-700 font-medium">{gadget.rating}</span>
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
                        onClick={() => addToCart(gadget)}  // Add product to cart
                    >
                        Add To Cart
                    </button>
                    <button
                        className="mt-4 ml-3 p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                        onClick={() => addToWishlist(gadget)}  // Add product to wishlist
                    >
                        ❤️
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GadgetDetails;
