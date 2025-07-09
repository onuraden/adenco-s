import React from 'react'
import { productCard } from "../data.js";
import ProductCard from "./ProductCard";

function ProductCards() {
    const firstFive = productCard.slice(0,5);
    const secondFive = productCard.slice(5,10);
  return (
    <section className="flex flex-col items-center mt-20">
      <div className="flex flex-col items-center gap-2.5">
        <h4 className="hidden md:block text-xl font-normal leading-[1.875rem] text-[#737373]">
          Featured Products
        </h4>
        <h3 className="text-2xl font-bold leading-8 text-[#252B42] w-[14.938rem] md:w-full text-center">
          BESTSELLER PRODUCTS
        </h3>
        <span className="text-sm font-normal leading-5 text-[#737373] w-[16.313rem] text-center md:hidden">
          Problems trying to resolve the
          <br /> conflict between
        </span>
        <span className="text-sm font-normal leading-5 text-[#737373] text-center hidden md:block">
          Problems trying to resolve the conflict between
        </span>
      </div>

      <div className="flex flex-col items-center mt-12">
        <div className="flex flex-col gap-[1.875rem] items-center md:flex-row md:flex-wrap md:justify-center">
          {firstFive.map((product) => (
            <ProductCard
              key={product.id}
              photo={product.photo}
              title={product.title}
              description={product.description}
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </div>

        {/* last 5 hidden on mobile */}
        <div className="hidden md:flex md:flex-row md:flex-wrap md:justify-center gap-[1.875rem] mt-8">
          {secondFive.map((product) => (
            <ProductCard
              key={product.id}
              photo={product.photo}
              title={product.title}
              description={product.description}
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </div>
      </div>

      <button className="text-[#23A6F0] text-sm font-bold leading-[1.375rem] border border-[#23A6F0] rounded-[0.313rem] w-[16rem] h-[3.25rem] hover:cursor-pointer block">
        LOAD MORE PRODUCTS
      </button>
    </section>
  );
}

export default ProductCards