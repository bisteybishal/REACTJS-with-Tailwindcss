import React from 'react';
import{BsPerson} from"react-icons/bs";
import{BiSearch} from"react-icons/bi";
import{AiOutlineMenu} from"react-icons/ai";
import{AiOutlineClose} from"react-icons/ai";


const Navbar = () => {
    return (
        <div className='flex  items-center h-20 px-4 absolute z-10 text-white justify-between'>
            <div>
                <h2>BEACHES.</h2>
            </div>
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className='hidden md:flex '>
                <BiSearch size={24}/>
                <BsPerson className='mr-2' size={24}/>
            </div>
            <div className='md:hidden'>
               
                <AiOutlineMenu size={25}/>
            </div>


        </div>
    )
}

export default Navbar