import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { CartContextProvider } from './CartContextProvider';
  // Import CartContextProvider

const Root = () => {
    return (
        <CartContextProvider>
            <div className='max-w-6xl mx-auto'>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </CartContextProvider>
    );
};

export default Root;
