import React from 'react'
import { productCard } from '../data';
import ShopProductCard from './ShopProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical, faList } from '@fortawesome/free-solid-svg-icons';

function ShopProductCards() {
    const firstFour = productCard.slice(10,14);
    const secondFour = productCard.slice(14,18);
    const lastFour = productCard.slice(18,22);
  return (
    <section>
      <div className="flex flex-col md:flex-row md:justify-between py-6 md:px-[27rem] gap-6 items-center">
                <div>
                    <h6 className="text-[#737373] text-sm font-bold leading-6">Showing all 12 results</h6>
                </div>
                <div className="flex gap-[0.938rem] px-[0.063rem] items-center">
                    <h6 className="text-sm leading-6 font-bold text-[#737373]">Views:</h6>
                    <div className="border rounded-[0.313rem] border-[#ECECEC] text-[#252B42] p-[1.1rem] w-[2.875rem] h-[2.875rem] flex items-center">
                        <FontAwesomeIcon icon={faGripVertical}/>
                    </div>
                    <div className="border rounded-[0.313rem] border-[#ECECEC] text-[#737373] p-[0.9rem] w-[2.875rem] h-[2.875rem] flex items-center">
                        <FontAwesomeIcon icon={faList} />
                    </div>
                </div>
                <div className="flex gap-[0.938rem]">
                    <select className="h-[3.125rem] w-[8.813rem] bg-[#F9F9F9] text-[#737373] text-sm rounded-[0.313rem] border border-[#DDDDDD] text-center">
                        <option>Popularity</option>
                    </select>
                    <button className="bg-[#23A6F0] text-white text-center font-bold py-2.5 px-5 rounded-[0.313rem]">Filter</button>
                </div>
            </div>
      <div className="flex flex-col items-center mt-8 md:gap-12 md:py-12">
        <div className="flex flex-col gap-[1.875rem] items-center md:flex-row md:justify-center ">
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

        <div className="hidden md:flex md:flex-row md:justify-center md:gap-[1.875rem]">
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

        <div className="hidden md:flex md:flex-row md:justify-center md:gap-[1.875rem]">
          {lastFour.map((product) => (
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
      <div className="flex justify-center mt-4 mb-4">
      <button className="px-5 py-6 border rounded text-sm text-[#BDBDBD] font-bold bg-gray-100">
        Prev
      </button>

      <button className="px-4 py-1 border text-[#23A6F0] font-bold">
        1
      </button>
      <button className="px-4 py-1 border bg-[#23A6F0] font-bold text-white">
        2
      </button>
      <button className="px-4 py-1 border text-[#23A6F0] font-bold">
        3
      </button>
      <button className="px-5 py-6 border rounded text-sm text-[#23A6F0] font-bold">
        Next
      </button>
    </div>
    </section>
    
  )
}

export default ShopProductCards