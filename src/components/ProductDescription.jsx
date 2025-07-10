import React from 'react'
import { Link } from 'react-router-dom'
import productDescription from "../assets/product-description.png";
import { ChevronRight } from 'lucide-react';

function ProductDescription() {
  return (
    <section className='flex flex-col md:px-[27rem]'>
        <div className='my-5'>
            <nav className='flex justify-center gap-3 md:gap-[5rem] text-[#737373] text-sm font-bold'>
                <Link>Description</Link>
                <Link>Additional Information</Link>
                <Link>Reviews <span className='text-[#23856D]'>(0)</span></Link>
            </nav>
            <hr className="border-t border-[#ECECEC] mt-10 "/>
        </div>
        <div className='flex flex-col md:flex-row justify-between pt-6 pb-20'>
            <div className="shadow w-[20.313rem] h-[17.625rem] md:w-[20.313rem] md:h-[23.875rem] bg-[#C4C4C433] rounded-[0.351rem] mx-auto md:mx-0">
                <img src={productDescription} className="rounded-[0.337rem] w-[20rem] md:w-[19.75] h-[17rem] md:h-[23.25rem] object-cover object-center"/>
            </div>
            <div className="flex flex-col py-6 gap-[1.5rem] w-[20rem] h-[28.25rem] md:h-[26.688rem] md:py-1 mx-auto md:mx-0">
                <h5 className="text-[#252B42] text-2xl font-bold">the quick fox jumps over</h5>
                <p className="text-[#737373] text-sm">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/><br/>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.<br/><br/>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                </p>
            </div>
            <div className="flex flex-col w-[20.75rem] h-[28.25rem] md:py-1 mx-auto md:mx-0">
                <div className="flex flex-col gap-7">
                    <h3 className="text-[#252B42] text-2xl font-bold">the quick fox jumps over</h3>
                    <ul className="text-[#737373] text-sm font-bold flex flex-col gap-2.5 mb-7">
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-7">
                    <h5 className="text-[#252B42] text-2xl font-bold">the quick fox jumps over</h5>
                    <ul className="text-[#737373] text-sm font-bold flex flex-col gap-2.5">
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                        <li className="flex gap-2.5"><ChevronRight />the quick fox jumps over the lazy dog</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductDescription