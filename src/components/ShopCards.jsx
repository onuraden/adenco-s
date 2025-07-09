import React from 'react'
import { shopCard } from "../data";

function ShopCards() {
  
  return (
    <section className='flex flex-col gap-4 items-center md:gap-[0.938rem] px-28 py-6 md:flex-row md:justify-center md:pb-12 md:px-44 '>
        {
            shopCard.map((card) => (
                <div key={card.id} className="hidden md:flex md:w-[12.813rem] md:h-[13.938rem] object-cover bg-cover bg-center flex-col gap-2 items-center justify-center text-[#FFFFFF]" 
                                   style={{backgroundImage:`url(${card.photo})`}}>
                    <h5 className='text-base font-bold'>{card.title}</h5>
                    <h6 className='text-sm font-bold'>{card.numberOfItem} Items</h6>
                </div>
            ))
        }
        {
            shopCard.map((card) => (
                <div key={card.id} className="block md:hidden w-[20.75rem] h-[18.75rem] object-cover bg-cover bg-center flex flex-col gap-2 items-center justify-center text-[#FFFFFF]" 
                                   style={{backgroundImage:`url(${card.mobilePhoto})`}}>
                    <h5 className='text-base font-bold'>{card.title}</h5>
                    <h6 className='text-sm font-bold'>{card.numberOfItem} Items</h6>
                </div>
            ))
        }
    </section>
  )
}

export default ShopCards