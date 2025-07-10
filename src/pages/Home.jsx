import React from 'react'
import Hero from '../components/Hero'
import Clients from '../components/Clients'
import ShopCard from '../components/ShopCard'
import ProductCards from '../components/ProductCards'
import FeaturedProducts from '../components/FeaturedProducts'
import FeaturedService from '../components/FeaturedService'
import FeaturedPosts from '../components/FeaturedPosts'

function Home() {
  return (
    <>
      <Hero/>
      <Clients/>
      <ShopCard/>
      <ProductCards/>
      <FeaturedProducts/>
      <FeaturedService/>
      <FeaturedPosts/>
    </>
  )
}

export default Home