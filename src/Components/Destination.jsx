import React from 'react';
import mal1 from "../assets/mal1.jpg";
import mal2 from "../assets/mal2.jpg";
import mal3 from "../assets/mal3.jpg";
import mal4 from "../assets/mal4.jpg";
import mal5 from "../assets/mal5.jpg";

const Destination = () => {
    return (
        <div className='max-w-[1248px] mx-auto py-16 px-4 text-center'>
            <h2>All-Inclusive Resorts</h2>
            <p className='py-2'>On the Caribbean's Best Beaches</p>
            <div className='grid grid-rows-none md:grid-cols-5 md:gap-4 py-4 '>
                <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={mal1} alt=""/>
                <img className='w-full h-full object-cover' src={mal2} alt=""/>
                <img className='w-full h-full object-cover' src={mal3} alt=""/>
                <img className='w-full h-full object-cover' src={mal3} alt=""/>
                <img className='w-full h-full object-cover' src={mal5} alt=""/>

            </div>


        </div>
    )
}

export default Destination