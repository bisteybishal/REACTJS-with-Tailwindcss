import React from 'react'
import beachvid from "../assets/beachvid.mp4";
import{AiOutlineSearch} from"react-icons/ai";

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={beachvid} autoPlay loop muted />
            <div className='w-full absolute h-full left-0 top-0 bg-gray-900/30'></div>
            <div className='absolute top-0 w-full h-full flex flex-col  justify-center text-center text-white p-4'>
                <h3>First class Travel</h3>
                <h4 className='py-4'>Top 1% Locations WorldWide</h4>
                <form className='w-full flex justify-between mx-auto max-w-[768px] border p-1 items-center text-center rounded-md text-black bg-gray-100/90'>
                    <div>
                        <input className='bg-transparent focus:outline-none w-[300px] sm:w-[400px]' type="text" placeholder="Search Destination"/>
                    </div>
                    <div>
                        <button><AiOutlineSearch size={24} className="text-blue-700"/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero