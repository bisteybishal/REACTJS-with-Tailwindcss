import React from 'react'

const SelectCard = (props) => {
  return (
   
        <div className='relative flex flex-row'>
            <img className='w-full h-full object-cover' src={props.img}/>
            <div className='bg-gray-900/30 absolute left-0 top-0 w-full h-full'>
                <p className='right-4 bottom-4 text-white absolute  font-bold text-2xl'>{props.text}</p>
            </div>
           
        </div>
      
  )
}

export default SelectCard