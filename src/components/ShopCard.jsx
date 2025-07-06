import React from 'react'
import shopCard1 from "../assets/shop-card-1.jpg";
import shopCard2 from "../assets/shop-card-2.jpg";
import shopCard3 from "../assets/shop-card-3.jpg";


function ShopCard() {
  return (
    <section className="flex flex-col gap-[0.938rem] mx-[2.563rem] py-6 md:flex-row md:mx-[8.031rem] md:justify-center">
            <div className="shop-card-big h-[34.75rem] md:h-[35.75rem] flex flex-col items-center">
                <div className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[38.188rem] relative" style={{backgroundImage: `url(${shopCard1})`}}>
                    <div className="card-content bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[30rem]">
                        <span className="mt-[3.75rem] ml-[2.563rem] text-2xl leading-8 font-bold">Top Product of<br/> the Week</span>
                        <span className="border border-white py-[0.938rem] px-[2.5rem] w-[14rem] ml-[2.594rem] text-center text-sm font-bold leading-[1.375rem] mt-3 hover:cursor-pointer">EXPLORE ITEMS</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[0.938rem] md:gap-[1.3rem]">
                <div className="h-[24.875rem] md:h-[18.063rem] md:w-[34.813rem]">
                    <div className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[34.813rem] relative" style={{backgroundImage: `url(${shopCard2})`}}>
                    <div className="bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[21.688rem] md:h-[10.813rem]">
                        <span className="mt-[3.75rem] ml-[2.563rem] text-2xl leading-8 font-bold block md:hidden">Top Product of<br/> the Week</span>
                        <span className="ml-[2.563rem] text-xl leading-[1.875rem] font-bold md:mt-[1.875rem] hidden md:block">Top Product of the Week</span>
                        <span className="border border-white py-[0.938rem] px-[2.5rem] w-[14rem] ml-[2.594rem] text-center text-sm font-bold leading-[1.375rem] mt-3 hover:cursor-pointer">EXPLORE ITEMS</span>
                    </div>
                </div>
                </div>
                <div className="h-[24.875rem] md:h-[16.313rem] md:w-[34.813rem] items-center">
                    <div className="bg-no-repeat bg-center bg-cover h-full w-[21.563rem] md:w-[34.813rem] relative" style={{backgroundImage: `url(${shopCard3})`}}>
                    <div className="bg-[#2D8BC0BF] flex flex-col opacity-[75%] absolute bottom-0 w-full h-[14.875rem] text-white md:w-[22.5rem] md:h-[9.563rem]">
                        <span className="mt-[3.75rem] ml-[2.563rem] text-2xl leading-8 font-bold block md:hidden">Top Product of<br/> the Week</span>
                        <span className="ml-[2.563rem] text-xl leading-[1.875rem] font-bold md:mt-[1.875rem] hidden md:block">Top Product of the Week</span>
                        <span className="border border-white py-[0.938rem] px-[2.5rem] w-[14rem] ml-[2.594rem] text-center text-sm font-bold leading-[1.375rem] mt-3 hover:cursor-pointer">EXPLORE ITEMS</span>
                    </div>
                </div>
                </div>
            </div>
        </section>
  )
}

export default ShopCard