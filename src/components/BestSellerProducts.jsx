import React from 'react'
import { productCard } from '../data';
import ShopProductCard from './ShopProductCard';

function BestSellerProducts() {
    const firstFour = productCard.slice(22,26);
    const secondFour = productCard.slice(26,30);
  return (
    <section className="flex flex-col py-12 gap-6 md:px-[27rem] bg-[#FAFAFA]">
        <h3 className="text-[#252B42] text-2xl font-bold leading-8 text-center md:text-start">BESTSELLER PRODUCTS</h3>
        <div>
            <div className="border border-t-[#ECECEC] border-r-0 border-l-0 border-b-0 w-96 mx-auto mb-6 md:w-[65rem] md:mx-0"></div>
            <div className="flex flex-col gap-7 items-center md:flex-row pb-6">
                {firstFour.map((product) => (
                <ShopProductCard
                    key={product.id}
                    photo={product.photo}
                    mobilePhoto={product.mobilePhoto}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                    color={product.color}
                />
                ))}
            </div>
            <div className="hidden md:flex gap-7 items-center">
                {secondFour.map((product) => (
                <ShopProductCard
                    key={product.id}
                    photo={product.photo}
                    mobilePhoto={product.mobilePhoto}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    discountedPrice={product.discountedPrice}
                    color={product.color}
                />
                ))}
            </div>
        </div>
    </section>
  )
}

export default BestSellerProducts