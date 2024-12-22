import React from 'react';


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
    <div className="flex justify-between items-center h-[100px] w-full px-6">
      <div>
      
      </div>
      <h2 className="font-montserrat text-[24px] font-bold">Furniro</h2>
      <ul className="flex items-center space-x-8 font-poppins text-[16px]">
        {navItems.map((item, index) => (
          <li key={index} className="hover:text-[#B8B8B8]">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
