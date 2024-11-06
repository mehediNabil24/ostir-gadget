import React, { useState, useEffect } from 'react';
import { useCart } from './CartContextProvider'; 

const Dashboard = () => {
    const { cart, wishlist, setCart, setWishlist } = useCart(); 
    const [activeTab, setActiveTab] = useState('cart'); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [totalPrice, setTotalPrice] = useState(0); 


    useEffect(() => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        setTotalPrice(total);
    }, [cart]);

 
    const handleRemoveFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.product_id !== productId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

   
    const handleRemoveFromWishlist = (productId) => {
        const updatedWishlist = wishlist.filter(item => item.product_id !== productId);
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    
    const handleSortByPrice = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart); // Update cart state with sorted items
    };

  
    const handlePurchase = () => {
        setIsModalOpen(true); // Open the modal
    };

    // Close the modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close the modal
    };

    return (
        <div className="p-6">
            <div className="flex space-x-4 mb-6">
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'cart' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('cart')}
                >
                    Cart
                </button>
                <button
                    className={`px-4 py-2 rounded-lg ${activeTab === 'wishlist' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
                    onClick={() => setActiveTab('wishlist')}
                >
                    Wishlist
                </button>
            </div>
            <div>
                {activeTab === 'cart' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                        
                        {/* Display total price */}
                        <p className="text-gray-700 font-semibold mb-4">Total Price: ${totalPrice.toFixed(2)}</p>

                        {/* Sort by Price button */}
                        <button
                            className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
                            onClick={handleSortByPrice}
                        >
                            Sort by Price (High to Low)
                        </button>
                        {cart.length > 0 && (
                            <button
                                className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg ml-4"
                                onClick={handlePurchase}
                            >
                                Purchase
                            </button>
                        )}

                        {cart.length === 0 ? (
                            <p>No items in the cart.</p>
                        ) : (
                            <ul>
                                {cart.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
                                            <div className='flex gap-8'>
                                            <div className="relative">
                                                <img 
                                                    className="w-full h-40 bg-gray-300 rounded-lg mb-4 object-cover"
                                                    src={item.product_image} 
                                                    alt={item.product_title} 
                                                />
                                                {/* Close icon */}
                                                <button 
                                                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1"
                                                    onClick={() => handleRemoveFromCart(item.product_id)}
                                                >
                                                    ✖
                                                </button>
                                            </div>
                                            <div>
                                            <h3 className="font-semibold text-lg mb-2">{item.product_title}</h3>
                                            <p className="text-gray-500 mb-4">Price: ${item.price.toFixed(2)}</p>
                                        </div>
                                        </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                        
                    </div>
                )}
                {activeTab === 'wishlist' && (
                    <div>
                        <h2 className="text-xl font-semibold mb-4">Your Wishlist</h2>
                        {wishlist.length === 0 ? (
                            <p>No items in the wishlist.</p>
                        ) : (
                            <ul>
                                {wishlist.map((item, index) => (
                                    <li key={index} className="mb-2">
                                        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col">
                                            <div className='flex gap-8'>
                                            <div className="relative">
                                                <img 
                                                    className="w-full h-40 bg-gray-300 rounded-lg mb-4 object-cover"
                                                    src={item.product_image} 
                                                    alt={item.product_title} 
                                                />
                                                {/* Close icon */}
                                                <button 
                                                    className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-1"
                                                    onClick={() => handleRemoveFromWishlist(item.product_id)}
                                                >
                                                    ✖
                                                </button>
                                            </div>
                                            <div>
                                            <h3 className="font-semibold text-lg mb-2">{item.product_title}</h3>
                                            <p className="text-gray-500 mb-4">Price: ${item.price.toFixed(2)}</p>
                                        </div>
                                        </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                        <h2 className="text-2xl font-semibold mb-4">Purchase Successful!</h2>
                        <p className="text-gray-700 mb-6">You have successfully completed your purchase.</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                            onClick={handleCloseModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
