import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the CartContext
const CartContext = createContext();

// CartContextProvider to wrap the app and provide global state
export const CartContextProvider = ({ children }) => {
    // Initialize cart and wishlist from localStorage or fallback to empty array
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [wishlist, setWishlist] = useState(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    // Update localStorage whenever the cart or wishlist changes
    useEffect(() => {
        if (cart.length > 0) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart]);

    useEffect(() => {
        if (wishlist.length > 0) {
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        }
    }, [wishlist]);

    // Add to Cart
    const addToCart = (product) => {
        setCart((prevCart) => {
            if (!prevCart.some(item => item.product_id === product.product_id)) {
                return [...prevCart, product];
            }
            return prevCart;
        });
    };

    // Add to Wishlist
    const addToWishlist = (product) => {
        setWishlist((prevWishlist) => {
            if (!prevWishlist.some(item => item.product_id === product.product_id)) {
                return [...prevWishlist, product];
            }
            return prevWishlist;
        });
    };

    return (
        <CartContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, setCart, setWishlist }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use CartContext
export const useCart = () => useContext(CartContext);
