import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

function ShopHeader() {
    const location = useLocation();
  return (
    <section>
        <div className='flex flex-col items-center gap-8 mt-[0.813rem] text-[#252B42] md:flex-row md:justify-between md:px-60 '>
            <span className="text-2xl font-bold">Shop</span>
            <div className='flex items-center gap-[0.25rem] text-sm '>
                <Link to="/" className="font-bold hover:underline">Home</Link>
                <ChevronRight/>
                {location.pathname === "/shop" ? (
                <span className="font-bold text-[#BDBDBD]">Shop</span>
                ) : (
                <Link to="/shop" className="font-bold hover:underline">Shop</Link>
                )}
            </div>
        </div>
    </section>
  )
}

export default ShopHeader