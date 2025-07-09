import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookOpenReader, faArrowTrendUp} from '@fortawesome/free-solid-svg-icons';
import carbonBook from "../assets/carbon-book.png";



function FeaturedService() {
  return (
    <section className='flex flex-col items-center mt-20'>
        <div className="flex flex-col items-center gap-2.5 mb-10">
            <h2 className="text-[#737373] text-xl font-normal leading-[1.875rem]">Featured Products</h2>
            <h3 className="text-[#252B42] text-2xl font-bold leading-8">THE BEST SERVICES</h3>
            <p className="text-[#737373] text-sm font-normal leading-5">Problems trying to resolve the conflict between </p>
        </div>
        <div className='flex flex-col items-center text-center gap-[1.875rem] md:flex-row px-10 py-[2.188rem]'>
            <div className="icon text-[#23A6F0] flex flex-col items-center gap-5 md:w-[20.5rem] md:h-[15.875rem]">
                <FontAwesomeIcon icon={faBookOpenReader} className="text-5xl" />
                <h3 className="text-[#252B42] text-2xl font-bold leading-8">Easy Wins</h3>
                <p className="text-sm font-normal leading-5 text-[#737373] w-[14.063rem]">Get your best looking smile now!</p>
            </div>
            <div className="icon text-[#23A6F0] flex flex-col items-center gap-5 md:w-[20.5rem] md:h-[15.875rem]">
                <img src={carbonBook} className="w-[3.2rem] h-[3.2rem]"/>
                <h3 className="text-[#252B42] text-2xl font-bold leading-8">Concrete</h3>
                <p className="text-sm font-normal leading-5 text-[#737373] w-[14.063rem]">Defalcate is most focused in helping you discover your most beautiful smile</p>
            </div>
            <div className="icon text-[#23A6F0] flex flex-col items-center gap-5 md:w-[20.5rem] md:h-[15.875rem]">
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-5xl"/>
                <h3 className="text-[#252B42] text-2xl font-bold leading-8">Hack Growth</h3>
                <p className="text-sm font-normal leading-5 text-[#737373] w-[14.063rem]">Overcame any hurdle or any other problem.</p>
            </div>
        </div>
    </section>
  )
}

export default FeaturedService