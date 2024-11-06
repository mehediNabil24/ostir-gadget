import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Gadget from './Gadget';
import Sidebar from './Sidebar'; // Assuming you have a Sidebar component
import Gadgetss from '../assets/gadgets.json'

const Gadgets = () => {
    const [gadgets, setGadgets] = useState(Gadgetss);
    const [filteredGadgets, setFilteredGadgets] = useState([]);
    const { category } = useParams();
    

    // Fetch all gadgets from 'gadgets.json'
    useEffect(() => {
        // fetch('/public/gadgets.json')
            // .then(res => res.json())
            // .then(data => setGadgets(data))
            // .catch(error => console.error("Error fetching gadgets:", error));
    }, []);

    // Filter gadgets based on category from URL
    useEffect(() => {
        if (category) {
            const filtered = gadgets.filter(gadget => gadget.category.toLowerCase() === category.toLowerCase());
            setFilteredGadgets(filtered);
        } else {
            setFilteredGadgets(gadgets);
        }
    }, [category, gadgets]);

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-1/4 p-4">
                <Sidebar />
            </div>

            {/* Gadgets List */}
            <div className="w-3/4 p-4">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredGadgets.length === 0 ? (
                        <p>No products found in this category.</p>
                    ) : (
                        filteredGadgets.map(gadget => (
                            <Gadget key={gadget.product_id} gadget={gadget} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Gadgets;
