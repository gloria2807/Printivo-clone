import React, { useRef, useState, View, Text, TouchableOpacity } from 'react';
import Logo from '../../assets/download.svg';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { MdMenu } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';
import { GiNigeria } from 'react-icons/gi';
import { BsWhatsapp } from 'react-icons/bs';

const NavbarMenu = [
  {
    id: 1,
    title: "Cost Calculator",
    path: '#',
  },
  {
    id: 2,
    title: "Discover Stores",
    path: '#',
  },
  {
    id: 3,
    title: "Track Orders",
    path: '#',
  },
  {
    id: 4,
    titl: "Need help? Call:"
  },
  {
    id: 5,
    tit: "+2347069000083"
  },
  {
    id: 6,
    ti: "or"
  },
  {
    id: 7,
    t: "+2349035000505"
  }
];

const Navbar = () => {

  return(
  <div className='text-gray-700 py-2'>
    <div
    className="flex justify-between items-center md:ml-15">
     <div className='hidden md:block'>
        <ul className='flex items-center gap-6 relative z-40'>
          {NavbarMenu.map((item) => (
            <li>
              <Link to={item.path} className='inline-block text-sm text-gray-600 font-semibold py-2'>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='hidden md:block'>
        <ul className='flex items-center gap-6 relative z-40'>
          {NavbarMenu.map((item) => (
            <span className='font-semibold text-sm text-gray-600'>
              {item.titl}
              {item.tit}
            </span>
    
          ))}
  <button className="flex items-center gap-1 p-2 mr-12 text-gray-500">
  <BsWhatsapp className="text-green-500 text-3xl" />
</button>
          <button className="flex items-center gap-1 text-sm p-2 mr-12 border rounded-2xl text-gray-500">
  <GiNigeria className="text-green-500 text-2xl" />
  <span>Nigeria</span>
</button>
        </ul>
      </div>
      <div className='md:hidden'>
        <MdMenu className='text-4xl'/>
      </div>
    </div>
  </div>
  );
};

export default Navbar;