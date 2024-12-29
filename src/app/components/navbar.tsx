import React from 'react';
import Hero from './hero';
import Image from 'next/image';



const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      href: "#",
    },
    {
      name: "Shop",
      href: "#",
    },
    {
      name: "Blog",
      href: "#",
    },
    {
      name: "Contact",
      href: "#",
    },
  ];

  return (
    <div className="flex justify-between items-center h-[100px] w-[1440px] t-6px left-54px">Home
    <div className="flex justify-evenly space-5 justify- items-center px-6 grid-cols-4">
      <div className="flex items-center space-x-8 h-[100px] w-[1440px] " >
        <Hero />
      <div>
      
      <h2 className="font-montserrat text-[24px] font-bold">Furniro</h2>
      
      </div>
      <ul className="flex items-center space-x-8 font-poppins text-[16px]">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-[#B8B8B8]">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
      
      </div>
      <div>
        <ul className="flex items-center space-x-8 font-poppins text-[16px]">
          
          <li className="hover:text-[#B8B8B8]">Login</li>
          <li className="hover:text-[#B8B8B8]">Register</li>
        </ul>
        <div className="flex items-center space-x-8">
          <Image
            src="/assets/search.png"
            alt="Search"  // Required alt    
            width={100} // Required width
            height={200} // Required height
            className="w-[24px] h-[24px]"
          />
          <Image
            src="/assets/bag.png"
            alt="Bag"  // Required alt    
            width={100} // Required width 
            height={200} // Required height
            className="w-[24px] h-[24px]"
          />
        </div>
        </div>
    </div>
    </div>
  );
};

export default Navbar;
