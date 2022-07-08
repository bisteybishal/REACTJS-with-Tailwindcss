import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='w-full py-16 bg-gray-100'>
            <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
                <div className='sm:flex items-center text-center justify-between'>
                    <h2>BEACHES.</h2>
                    <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                        <FaFacebook size={24} className="text-blue-600" />
                        <FaInstagram size={24} className="text-blue-600" />
                        <FaInstagram size={24} className="text-blue-600" />
                        <FaYoutube size={24} className="text-blue-600" />
                        <FaTwitter size={24} className="text-blue-600" />
                        <FaWhatsapp size={24} className="text-blue-600" />
                    </div>
                </div>
                <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            </div>
            </div>


        </div>
    )
}

export default Footer