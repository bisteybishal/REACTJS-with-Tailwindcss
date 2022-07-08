import React, { useState } from 'react';
import { BiRightArrow } from "react-icons/bi";
import { BiLeftArrow } from "react-icons/bi";

const sliderData = [
    {
        url: "  https://image.shutterstock.com/image-photo/beautiful-vile-nainital-place-hot-600w-1400841650.jpg"
    },

    {
        url: " https://image.shutterstock.com/image-photo/two-people-walking-castle-hill-600w-1407423677.jpg"
    },

    {
        url: " https://image.shutterstock.com/image-photo/colorful-row-boats-docked-on-600w-1150677788.jpg "
    },
    {
        url: " https://image.shutterstock.com/image-photo/view-sunset-over-river-chitwan-600w-1430735858.jpg "
    },

];
const Carousel = () => {
    const [slider, setSlider] = useState(0);
    const length = sliderData.length;
    // console.log(length);

    const prevSlide = () => {
        setSlider(slider === length - 1 ? 0 : slider + 1);
    };

    const nextSlide = () => {
        setSlider(slider === 0 ? length - 1 : slider - 1);
    };
    return (

        <div className='max-w-[1240px] mx-auto px-4 relative py-16 flex justify-center items-center'>
            <BiLeftArrow onClick={prevSlide} className='top-[50%] left-80  absolute text-white text-4xl cursor-pointer' />
            <BiRightArrow onClick={nextSlide} className='top-[50%] absolute right-80  text-white text-4xl cursor-pointer' />
            {sliderData.map((item, index) => (
                <div className={index === slider ? 'opacity-100' : 'opacity-0'}>
                    {index === slider && (<img className='w-full   rounded-md' src={item.url}   alt="/" />)}
                </div>
            ))}
        </div>
    );
};

export default Carousel