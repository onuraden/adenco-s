import React from 'react'
import ProductSum from '../components/ProductSum'
import ProductDescription from '../components/ProductDescription'
import BestSellerProducts from '../components/BestSellerProducts'


function ProductDetail() {
  return (
    <>
      <ProductSum/>
      <ProductDescription/>
      <BestSellerProducts/>
    </>
  )
}

export default ProductDetail