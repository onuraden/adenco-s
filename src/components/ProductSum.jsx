import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductInfo from './ProductInfo';
import ProductPhotoCarousel from './ProductPhotoCarousel';



function ProductSum() {
    const location = useLocation();
  return (
    <section className='flex flex-col gap-5 px-28 items-center mb-[1.5rem] py-5 md:flex-col md:justify-between md:px-60 bg-[#FAFAFA]'>
        <div className='flex md:self-start gap-[0.25rem] text-sm text-[#252B42] mb-10'>
            <Link to="/" className="font-bold hover:underline">Home</Link>
            <ChevronRight/>
            {location.pathname === "/shop" ? (
            <span className="font-bold text-[#BDBDBD]">Shop</span>
            ) : (
            <Link to="/shop" className="font-bold hover:underline">Shop</Link>
            )}
        </div>
        <div className='flex flex-col md:flex-row gap-5 '>
            <ProductPhotoCarousel/>
            <ProductInfo/>
        </div>
    </section>
  )
}

export default ProductSum