import React from 'react'

function ShopProductCard({photo, mobilePhoto, title, description, price, discountedPrice, color}) {
  return (
    <section className="flex flex-col items-center w-[21.75rem] h-[38.438rem] md:w-[15rem] md:h-[30.5rem]">
      <div className="hidden md:block">
        <img src={photo}/>
      </div>
      <div className="block md:hidden">
        <img src={mobilePhoto}/>
      </div>
      <div className="flex flex-col items-center gap-2.5 py-[1.563rem]">
        <h5 className="text-base font-bold leading-6 text-[#252B42]">
          {title}
        </h5>
        <span className="text-sm font-bold leading-6 text-[#737373]">
          {description}
        </span>
        <div className="flex gap-[0.313rem]">
          <h5 className="text-base font-bold leading-6 text-[#BDBDBD]">
            {price}
          </h5>
          <h5 className="text-base font-bold leading-6 text-[#23856D]">
            {discountedPrice}
          </h5>
        </div>
        <div>
          <img src={color} />
        </div>
      </div>
    </section>
  )
}

export default ShopProductCard