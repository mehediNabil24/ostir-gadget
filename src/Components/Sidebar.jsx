import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Categories</h2>
            <ul>
                <li>
                    <NavLink to="/products/laptop" className="block p-2 text-lg">Laptops</NavLink>
                </li>
                <li>
                    <NavLink to="/products/phones" className="block p-2 text-lg">Phones</NavLink>
                </li>
                <li>
                    <NavLink to="/products/smart-watches" className="block p-2 text-lg">Smart Watches</NavLink>
                </li>
                <li>
                    <NavLink to="/products/all" className="block p-2 text-lg">All Products</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
