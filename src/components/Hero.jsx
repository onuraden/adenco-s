import React from 'react'
import heroDesktop from "../assets/hero-cover-desktop.png";
import heroMobile from "../assets/hero-cover-mobile.png";

function Hero() {
  return (
        <section className="bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] pt-20 md:pt-0 rounded-[1.25rem] mx-5 md:mx-[5rem] flex flex-col md:flex-row md:mt-5 md:h-[38.688rem]">
            <div className="flex flex-col items-center gap-8 md:gap-[1.875rem] md:ml-[12.875rem] md:justify-center md:items-start">
                <span className="text-[#2A7CC7] text-base font-bold leading-6">SUMMER 2020</span>
                <div className="text-[#252B42] text-[2.5rem] md:text-[3.625rem] font-bold leading-[3.125rem] md:leading-20 flex flex-col items-center md:flex-row md:gap-4">
                    <span>NEW</span>
                    <span>COLLECTION</span>
                </div>
                    <span className="text-[#737373] text-xl leading-[1.875rem] font-normal text-center w-2xs h-[5.625rem] block md:hidden">We know how large objects<br/> will act, but things on a<br/> small scale.</span>
                    <span className="text-[#737373] text-xl leading-[1.875rem] font-normal hidden md:block">We know how large objects will act,<br/> but things on a small scale.</span>
                    <button className="w-[13.813rem] h-[3.875rem] bg-[#23A6F0] text-white text-2xl font-bold leading-8 rounded-[0.313rem] hover:cursor-pointer">SHOP NOW</button>
            </div>
            <div className="flex justify-center">
                <img className="hidden md:block md:w-[43.563rem] md:h-[38.688rem] md:absolute md:right-[1.5rem] md:top-[9rem]" src={heroDesktop}/>
                <img className="md:hidden w-full" src={heroMobile}/>
            </div>
        </section>
    );
}

export default Hero