import React from 'react';
import B1 from '../../assets/Blogs/1.png';
import B2 from '../../assets/Blogs/2.png';
import B3 from '../../assets/Blogs/3.png';
import B4 from '../../assets/Blogs/4.png';
import B5 from '../../assets/Blogs/5.jpg';
import B6 from '../../assets/Blogs/6.png';
import B7 from '../../assets/Blogs/7.png';
import B8 from '../../assets/Blogs/8.png';
import B9 from '../../assets/Blogs/9.png';
import B10 from '../../assets/Blogs/10.png';
import B11 from '../../assets/Blogs/11.png';
import B12 from '../../assets/Blogs/12.jpeg';

const BlogsData = [
  {
    id: 1,
    title: "Two-sided Business Cards",
    desc: "STARTING AT",
    descr: "₦15,000 ",
    des: "per 100",
    buy: "Browse Two-sided Business Cards",
    link: "#",
    image: B1,
  },
  {
    id: 2,
    title: "A5 flyers (Single Sided)",
    desc: "STARTING AT",
    descr: "₦25,800 ",
    des: "per 100",
    buy: "Browse A5 flyers (Single Sided)",
    link: "#",
    image: B2,
  },
  {
    id: 3,
    title: 'Round Stickers (3.5" Diameter)',
    desc: "STARTING AT",
    descr: "₦17,000 ",
    des: "per 100",
    buy: 'Browse Round Stickers (3.5" Diameter)',    
    link: "#",
    image: B3,
  },
  {
    id: 4,
    title: "Simple Mugs",
    desc: "STARTING AT",
    descr: "₦4,800 ",
    des: "per 1",
    buy: "Browse Simple Mugs",
    link: "#",
    image: B4,
  },
   {
    id: 5,
    title: "Postcards (A6)",
    desc: "STARTING AT",
    descr: "₦22,300 ",
    des: "per 50",
    buy: "Browse Postcards (A6)",
    link: "#",
    image: B5,
  },
  {
    id: 6,
    title: "Roll Up Banners (Big Base)",
    desc: "STARTING AT",
    descr: "₦65,500 ",
    des: "per 1",
    buy: "Browse Roll Up Banners (Big Base)",
    link: "#",
    image: B6,
  },
  {
    id: 7,
    title: 'A2 Posters',
    desc: "STARTING AT",
    descr: "₦711,000 ",
    des: "per 100",
    buy: 'A2 Posters',    
    link: "#",
    image: B7,
  },
  {
    id: 8,
    title: "Trifold Brochures",
    desc: "STARTING AT",
    descr: "₦47,500 ",
    des: "per 1",
    buy: "Browse Trifold Brochures",
    link: "#",
    image: B8,
  },
   {
    id: 9,
    title: "Landscape ID Cards",
    desc: "STARTING AT",
    descr: "₦4,500 ",
    des: "per 1",
    buy: "Browse Landscape ID Cards",
    link: "#",
    image: B9,
  },
  {
    id: 10,
    title: "Off White T-Shirts",
    desc: "STARTING AT",
    descr: "₦6,000 ",
    des: "per 1",
    buy: "Browse Off White T-Shirts",
    link: "#",
    image: B10,
  },
  {
    id: 11,
    title: 'A4 Branded Paper Bags',
    desc: "STARTING AT",
    descr: "₦115,280 ",
    des: "per 100",
    buy: 'Browse A4 Branded Paper Bags',    
    link: "#",
    image: B11,
  },
  {
    id: 12,
    title: "A4 Courier Bags",
    desc: "STARTING AT",
    descr: "₦27,500 ",
    des: "per 100",
    buy: "Browse A4 Courier Bags",
    link: "#",
    image: B12,
  },
];

const Blogs = () => {
  return (
    <section id='blog' className='bg-gray-50'>
      <div className="py-14 md:mx-10">
        <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-bold pb-8'>Popular Products</h1></div>
        <div className='md:block'>
        <h1 className='flex items-center relative text-xl font-semibold text-orange-300 cursor-pointer'>
          See All Products</h1></div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {
            BlogsData.map((item) => (
              <div key={item.id} className='flex flex-col items-center justify-center gap-6 max-w-[300px] max-h-[500px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300'>
              <img src={item.image} alt='' className='h-[200px] w-[300px]'/>
              <div className='space-y-2 px-2 md:px-5 '>
                <h1 className='text-l font-semibold line-clamp-2'>{item.title}</h1>
                <p className='line-clamp-2 font-semibold text-sm text-gray-600'>{item.desc}</p>
                <p className='line-clamp-2 font-bold text-xl text-gray-800'>{item.descr}<span className="text-gray-600">{item.des}</span></p>
                 <button className='!mt-5 mb-5 cursor-pointer bg-primary text-white text-sm px-2 py-1 w-[200px] h-[50px] rounded-md hover:bg-primary hover:text-white duration-200'>
                        {item.buy}
                    </button>
              </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blogs