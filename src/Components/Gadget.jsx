import React from 'react';
import { NavLink } from 'react-router-dom';

const Gadget = ({ gadget }) => {
    const { product_id, price, product_title, product_image } = gadget;
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col ">
            <img className="w-full h-40 bg-gray-300 rounded-lg mb-4 object-fit" src={product_image} alt="" />
            <h3 className="font-semibold text-lg mb-2">{product_title}</h3>
            <p className="text-gray-500 mb-4">Price: {price}</p>
            
            <NavLink to={`/gadget/${product_id}`} className="text-purple-500 border border-purple-500 rounded-full px-4 py-2 font-medium">
                View Details
            </NavLink>
        </div>
    );
};

export default Gadget;
