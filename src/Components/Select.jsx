import React from 'react';
import nep1 from "../assets/nep1.jpg"
import nep2 from "../assets/nep2.jpg"
import nep3 from "../assets/nep3.jpg"
import nep4 from "../assets/nep4.jpg"
import nep5 from "../assets/nep5.jpg"
import nep6 from "../assets/nep6.jpg"
import SelectCard from './SelectCard';


const Select = () => {
  return (
    <div className='grid max-w-[1240px] mx-auto px-4 lg:grid-cols-3 sm:grid-cols-2 py-16 gap-4'>
   <SelectCard img={nep1} text="Khapttad"/>
   <SelectCard img={nep2} text="Thailand"/>
   <SelectCard img={nep3} text="Annapurna"/>
   <SelectCard img={nep4} text="Lumbini"/>
   <SelectCard img={nep5} text="Lumbini"/>
   <SelectCard img={nep6} text="PanchPokhari"/>
   </div>
       
  )
}

export default Select
