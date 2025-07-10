import React from 'react'
import Clients from '../components/Clients'
import ShopHeader from '../components/ShopHeader'
import ShopCards from '../components/ShopCards'
import ShopProductCards from '../components/ShopProductCards'

function Shop() {
  return (
    <>
        <div className='bg-[#FAFAFA]'>
          <ShopHeader/>
          <ShopCards/>
        </div>
        <ShopProductCards/>
        <Clients/>
    </>
  )
}

export default Shop