import React from 'react';
import Navbar from '../Navbar1/Navbar1';
import { FaSearch } from 'react-icons/fa';
import hand from '../../assets/handc.png';

const Hero = () => {
  return (
    <section id='home'>
      <div className='bg-amber-100'>
      <Navbar />
    
        <div className="md:ml-15 grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
      <div className="flex flex-col text-gray-600 justify-center md:py-0 xl:max-w-[500px] order-2 md:order-1 relative z-40">
        <h1 className='text-gray-600 font-handwriting text-7xl font-bold'>Quality Prints</h1>
        <div className="space-y-5 text-center md:text-left">
        <h3
          className='px-4 py-2 text-2xl font-semibold text-gray-500 inline-block'>
            Shipped to your doorstep
          </h3>
          <div
          className='flex items-center justify-center md:justify-start gap-4 md:mt-8'>
            <div className='w-20 h-[1px] bg-white'></div>
            <p className='font-semibold text-gray-500'>What would you like to print today?</p>
            <div className='w-20 h-[1px] bg-white'></div>
          </div>
           <div className='relative text-gray-500 inline-block w-full'>
              <input className='border-0 rounded-sm bg-white py-8 px-5 w-full focus:border-0'
              type='text' placeholder='Search for Business Cards, T-shirts, Mugs etc'/>
              <FaSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-2xl font-normal text-gray-700'/>
            </div>
      </div>
       </div>
         <div
           className="order-2 flex justify-end w-full">
               <img src={hand} alt='' className='max-w-[450px]'/>
             </div>
    </div>
       </div>

 
    </section>
  )
}

export default Hero