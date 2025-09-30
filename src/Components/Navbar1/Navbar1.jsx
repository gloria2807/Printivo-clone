import React, { useRef, useState, View, Text, TouchableOpacity } from 'react';
import Logo from '../../assets/download.svg';
import { FaRegUser } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { MdMenu } from 'react-icons/md';
import { FaCartShopping } from 'react-icons/fa6';

const NavbarMenu = [
  {
    id: 1,
    title: "All Products",
    path: '#',
  },
  {
    id: 2,
    title: "Become a Reseller",
    path: '#',
  },
  {
    id: 3,
    title: "Merch Store",
    path: '#',
  },
  {
    id: 4,
    title: "Marketplace",
    path: '#',
  },
  {
    id: 5,
    titl: "Sign in",
    pat: '#',
  },
  {
    id: 6,
    tit: "Create Account",
    pa: '#',
  },
];

const Navbar1 = () => {

  return(
  <div className='text-gray-700 py-6'>
    <div
    className="flex justify-between items-center md:ml-15">
      <div>
        <img src={Logo} alt='' className='max-w-[150px]'/>
      </div>
      <div className='hidden md:block'>
        <ul className='flex items-center gap-6 relative z-40'>
          {NavbarMenu.map((item) => (
            <li>
              <Link to={item.path} className='inline-block text-base font-semibold py-2'>{item.title}</Link>
              <Link to={item.pat} className='inline-block text-base font-semibold py-2 pl-1 text-red-400'>{item.titl}</Link>
               <Link to={item.pa} className='inline-block text-base font-semibold py-2'>{item.tit}</Link>
            </li>
          ))}
          <button className='text-xl pr-14'>
            <FaCartShopping />
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

export default Navbar1;