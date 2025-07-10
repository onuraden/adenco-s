import React from 'react'
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as fasStar, faCircle} from '@fortawesome/free-solid-svg-icons';
import {faStar as farStar} from '@fortawesome/free-regular-svg-icons';

function ProductInfo() {
  return (
    <section className='flex flex-col gap-5 w-[21.75rem] md:w-[31.875rem]'>
        <h4 className='text-xl text-[#252B42] font-normal'>Floating Home</h4>
        <div className='flex flex-row gap-[0.5rem] text-[#F3CD03]'> 
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={fasStar} />
            <FontAwesomeIcon icon={farStar} />
            <h6 className='text-sm text-[#737373] font-bold'>10 Reviews</h6>
        </div>
        <h3 className='text-2xl font-bold text-[#252B42]'>$1,139.33</h3>
        <div className='flex flex-row gap-[0.313rem]'>
            <h6 className='text-sm font-bold text-[#737373]'>Availability: </h6>
            <h6 className='text-sm font-bold text-[#23A6F0]'>In Stock</h6>
        </div>
        <p className="text-sm text-[#858585]">Met minim Mollie non desert Alamo est sit cliquey dolor 
        do met sent. RELIT official consequent door ENIM RELIT Mollie. 
        Excitation venial consequent sent nostrum met.</p>
        <hr className="border-t border-[#BDBDBD] my-6"/>
        <div className="flex flex-row gap-[0.625rem] text-[#F3CD03] mb-8">
            <FontAwesomeIcon icon={faCircle} size="xl" style={{color: "#23A6F0"}} />
            <FontAwesomeIcon icon={faCircle} size="xl" style={{color: "#2DC071"}} />
            <FontAwesomeIcon icon={faCircle} size="xl" style={{color: "#E77C40"}} />
            <FontAwesomeIcon icon={faCircle} size="xl" style={{color: "#252B42"}} />
        </div>
        <div className="flex flex-row gap-[0.625rem] items-center">
            <button className="w-[9.25rem] h-[2.75rem] bg-[#23A6F0] text-white text-sm rounded-[0.3125rem] font-bold px-[1.25rem] py-[0.625rem]">
                Select Options
            </button>
            <div className='border border-[#E8E8E8] rounded-full w-12 h-12 flex items-center justify-center'>
                <Heart />
            </div>
            <div className='border border-[#E8E8E8] rounded-full w-12 h-12 flex items-center justify-center'>
                <ShoppingCart />
            </div>
            <div className='border border-[#E8E8E8] rounded-full w-12 h-12 flex items-center justify-center'>
                <Eye />
            </div>            
        </div>
        </section>
    
  )
}

export default ProductInfo