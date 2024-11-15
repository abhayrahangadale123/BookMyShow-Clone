import React, { useEffect, useState } from 'react'
import slaid_one from "../../assets/slaid_one.avif"
import slaid_Two from "../../assets/slaid_Two.avif"
import slaid_Three from "../../assets/slaid_Three.avif"
import slaid_four from "../../assets/slaid_four.jpg"
import slaid_five from "../../assets/slaid_five.avif"
import { GiFastBackwardButton } from "react-icons/gi";
import { GiFastForwardButton } from "react-icons/gi";

 

const Slaid_Bar = () => {
    const images = [slaid_one, slaid_Two, slaid_Three,slaid_four,slaid_five];
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatic transition every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [images.length]);

    // Handle manual navigation
    const goToNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const goToPrevious = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative overflow-x-hidden">
            {/* Image slider */}
            <div className="flex justify-center bg-[#F5F5F5] py-2 gap-2 border rounded shadow-md overflow-hidden">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="border h-80  rounded-md w-full" />
            </div>

            {/* Navigation controls */}
            <div className="flex justify-evenly absolute top-32 px-4 gap-[92vw]">
                <GiFastBackwardButton
                    onClick={goToPrevious}
                    className="text-3xl  rounded cursor-pointer text-white bg-[#F5F5F5] w-10 "
                />
                <GiFastForwardButton
                    onClick={goToNext}
                    className="text-3xl  rounded cursor-pointer text-white bg-[#F5F5F5] w-10 "
                />
            </div>
        </div>
    );
};

export default Slaid_Bar;
