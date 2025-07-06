import React from 'react'
import FeaturedPost from './FeaturedPost'
import { featuredPost } from "../data.js";

function FeaturedPosts() {
  return (
    <section className='mt-20'>
        <div className="features-posts-titles flex flex-col gap-2.5 items-center mb-10" >
            <h6 className='text-[#23A6F0] text-sm font-bold leading-6'>Practice Advice</h6>
            <h3 className='text-[#252B42] text-[2.5rem] leading-[3.125rem] mb-15'>Featured Posts</h3>
        </div>
        <div className='flex flex-col md:flex-row md:gap-[1.875rem] justify-center'>
            {featuredPost.map((post) => (
                <FeaturedPost
                    key={post.id}
                    photo={post.photo}
                    mobilePhoto={post.mobilePhoto}
                    frame={post.frame}
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    discountedPrice={post.discountedPrice}
                />
            ))}
        </div>
    </section>
  )
}

export default FeaturedPosts