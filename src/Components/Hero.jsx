import React from 'react';

const Hero = () => {
    return (
        <div className=" bg-purple-500 text-white ">
        <div className=" text-center py-16 px-4">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p className="text-lg lg:text-xl mb-8">
            Explore the latest gadgets that will take your experience to the next level.
            From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="btn btn-primary text-purple-500 bg-white hover:bg-gray-200 font-semibold py-2 px-6 rounded-full">
            Shop Now
        </button>
    </div>
    </div>
    );
};

export default Hero;