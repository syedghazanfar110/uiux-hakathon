import React from 'react';

const Footer = () => {
  return (
    <div className="flex justify-between items-center h-[505px] w-[1440px] t-29px left-54px">
      <div>
        <div className="flex justify-between items-center h-[100px] w-[1440px] t-29px left-54px">
          <div className="flex justify-between items-center h-[41px] w-[1286px] t-29px left-54px">
            <h2 className="w-[85px] h-[36px] font-montserrat text-[24px] font-bold size-[34px]">Furniro</h2>
            <div className="flex justify-end items-center h-[72px] w-[285px] t-[134px] left-[102.01px]">
              <p className="font-poppins font-[400] text-[16px] h-[24px] text-end">
                400 University Drive Suite 200 Coral Gables, FL 33134 USA
              </p>
            </div>
            <div className="flex justify-between items-center h-[41px] w-[1286px] t-29px left-54px">
              <ul className="m-[66px] flex items-center h-[24px] w-[500px] font-poppins text-[16px] space-x-8">
                <li className="hover:text-[#B8B8B8]">Home</li>
                <li className="hover:text-[#B8B8B8]">Shop</li>
                <li className="hover:text-[#B8B8B8]">About</li>
                <li className="hover:text-[#B8B8B8]">Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex justify-between items-center h-[100px] w-[1440px] t-29px left-54px text-end'>
          <p className="font-poppins font-[400] text-[16px] h-[24px] text-center">Copyright © 2023 Furniro</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
