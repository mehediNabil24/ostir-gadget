import React from 'react';
import bannerImage from '../assets/banner.jpg'

const Banner = () => {
    return (
        <div className="w-full flex justify-center mt-2">
        <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg">
            <img
                src={bannerImage}
                alt="VR Headset"
                className="rounded-lg"
            />
        </div>
    </div>
    );
};

export default Banner;

