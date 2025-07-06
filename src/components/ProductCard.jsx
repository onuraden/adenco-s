import React from 'react'



function ProductCard({photo, title, description, price, discountedPrice}) {
  return (
    <section className="flex flex-col md:w-[11.438rem] md:h-[25rem]">
      <div>
        <img src={photo} alt={title} />
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
      </div>
    </section>
  );
}

export default ProductCard