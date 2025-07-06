import { useState } from "react";
import { User, Search, ShoppingCart, Menu, Phone, Mail, Instagram, Youtube, Facebook, Twitter, Heart } from 'lucide-react';
import ShopDropdown from "../components/ShopDropdown";

function Header() {

  const [isOpen, setIsOpen] = useState(false);

    const toogleNavbar = () => {
        setIsOpen(!isOpen);
    };

  return (
     <header className="md:mb-10">
            <section>
                <div className="mt-[2.388rem] block md:hidden">
                    <div className="flex justify-between items-center px-[2.375rem] mb-2.5">
                        <div>
                            <span className="text-2xl font-bold text-[#252B42]">Bandage</span>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={toogleNavbar}><Menu /></button>
                        </div>
                    </div>
                    {isOpen && (<div>
                        <nav className="flex flex-col items-center gap-[1.25rem] text-3xl font-semibold text-[#737373] my-[4rem]">
                            <a href="/">Home</a>
                            <a href="/">Shop</a>
                            <a href="/">About</a>
                            <a href="/">Blog</a>
                            <a href="/">Contact</a>
                            <a href="/">Pages</a>
                            <a href="/" className="text-[#23A6F0] flex flex-row items-center gap-1.5" ><User/><span>Login / Register</span></a>
                            <a href="/" className="text-[#23A6F0]"><Search/></a>
                            <a href="/" className="text-[#23A6F0]"><ShoppingCart/></a>
                            <a href="/" className="text-[#23A6F0]"><Heart/></a>
                        </nav>
                    </div>)}
                </div>
                <div className="hidden md:block">
                    <div className="bg-[#252B42] text-white px-6 flex justify-between items-center py-2.5 text-sm font-bold leading-6">
                        <div className="flex gap-8 p-2.5">
                            <div className="flex gap-[0.5rem]">
                                <Phone />
                                <span>(225) 555-0118</span>
                            </div>
                            <div className="flex gap-[0.5rem]">
                                <Mail />
                                <span>michelle.rivera@example.com</span>
                            </div>
                        </div>
                        <div>
                            <span>Follow Us and get a chance to win 80% off!</span>
                        </div>
                        <div className="flex gap-2.5 p-2.5">
                            <span>Follow Us:</span>
                            <Instagram />
                            <Youtube />
                            <Facebook />
                            <Twitter />
                        </div>
                    </div>
                    <div className="flex items-center px-[2rem] mt-[0.813rem]">
                        <div className="flex-none">
                            <span className="text-2xl font-bold text-[#252B42]">Bandage</span>
                        </div>
                        <div className="flex grow justify-between items-center ml-40">
                            <nav className="flex gap-[0.938rem] text-sm font-bold leading-6 text-[#737373]">
                                <a href="/">Home</a>
                                <a href="/"><ShopDropdown/></a>
                                <a href="/">About</a>
                                <a href="/">Blog</a>
                                <a href="/">Contact</a>
                                <a href="/">Pages</a>
                            </nav>
                            <div className="flex text-[#23A6F0] text-sm font-bold leading-6 gap-8">
                                <div className="flex gap-[0.5rem]">
                                    <User />
                                    <span>Login / Register</span>
                                </div>
                                <Search />
                                <ShoppingCart />
                                <Heart />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </header>
  )
}

export default Header