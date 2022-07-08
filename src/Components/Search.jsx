import React from 'react';
import { RiCustomerService2Fill } from "react-icons/ri";
import {MdTravelExplore} from "react-icons/md";
const Search = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 py-16 px-4'>

            <div className='lg:col-span-2 flex flex-col justify-evenly'>
                <div>
                    <h2 className='mb-3'>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className='text-xl mb-3'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, nam necessitatibus esse odit optio, laborum modi magnam
                        hic tempore sunt maiores natus corporis?
                        Alias soluta porro, rerum itaque architecto facere!

                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Assumenda, nam necessitatibus esse odit optio, laborum modi magnam
                        hic tempore sunt maiores natus corporis?
                        Alias soluta porro, rerum itaque architecto facere!
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 gap-8 py-4'>
                    <div className='lg:flex-row flex flex-col items-center text-center'>
                        <button>
                            <RiCustomerService2Fill size={50} className="bg-blue-500 text-white" />
                        </button>
                        <div>
                            <h4 className='py-2'>LEADING SERVICES</h4>
                            <p  className='py-1'>ALL-INCLUISVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>

                    <div className='lg:flex-row flex flex-col items-center text-center'>
                        <button>
                            <MdTravelExplore size={50} className="bg-blue-500 text-white" />
                        </button>
                        <div>
                            <h4 className='py-2'>LEADING SERVICES</h4>
                            <p  className='py-1'>ALL-INCLUISVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
            <div>
                <div className='text-center border pb-4 font-bold'>
                    <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
                    <p className='py-2'>12 HOURS LEFT</p>
                    <p className='bg-gray-800 text-gray-200 py-2'>BOOK NOW AND SAVE</p>
                </div>
                <form className='w-full font-sans'>
                    <div className='flex flex-col my-2'>
                        <label className='font-semibold text-xl'>Destination</label>
                        <select className="border rounded-md p-2">
                            <option>Nepal</option>
                            <option>Maldives</option>
                            <option>Dubai</option>
                            <option>Austrila</option>
                            <option>Singapore</option>
                            <option>Thailand</option>
                        </select>
                    </div>
                    <div className='flex flex-col my-2 '>
                        <label className='font-semibold text-xl' >Check-in</label>
                        <input className="border rounded-md p-2" type="date"/>
                    </div>
                    <div className='flex flex-col my-2'>
                        <label className='font-semibold text-xl'>Check-out</label>
                        <input className="border rounded-md p-2" type="date"/>
                    </div>
                    <div className='text-center items-center py-2 bg-blue-500 rounded-md'>
                        <button className=''><h4>Rates and Availabilities</h4></button>
                    </div>
                </form>
            </div>


        </div>
    )
}

export default Search