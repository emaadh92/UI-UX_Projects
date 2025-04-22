"use client"

import Link from "next/link"
import { useState } from "react";
import { AiOutlineMenu ,AiOutlineClose } from "react-icons/ai";
import {  FaShoppingBag } from "react-icons/fa"
import { VscAccount, VscHeart} from "react-icons/vsc"





function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const toggleMenu = () => setMenuOpen(!menuOpen);
  
    return (
        <main>
            <div className="text-blue-950 bg-yellow-400 font-serif text-center py-2 text-lg">
                <p>Get 50% Discount up to Rs.3000/- Limited Offer!</p>
            </div>
            <header className="flex justify-between items-center px-6 py-4 bg-slate-100 md:px-24">
                <div className="text-3xl font-bold">
                    <h1 className="text-blue-950">Fashion <span className="text-yellow-400">Era</span></h1>
                </div>
                <nav className="hidden md:flex gap-6 text-xl">
                    <ul className="flex gap-6">
                        <li><Link href="#">Men</Link></li>
                        <li><Link href="#">Women</Link></li>
                        <li><Link href="#">Kids</Link></li>
                        <li><Link href="#">Winter</Link></li>
                        <li><Link href="#">Lifestyle</Link></li>
                    </ul>
                </nav>
                <div className="flex items-center md:w-1/3">
                    {/* Responsive Search Input */}
                    <input 
                        type="search" 
                        placeholder="Search" 
                        className="border rounded-lg py-2 px-4 w-full md:w-auto md:block hidden"
                    />
                    {/* Search Icon */}
                    <button className="bg-blue-950 text-white rounded-lg px-4 ml-2 hidden md:flex items-center">
                        <VscHeart />
                    </button>
                </div>
                <div className="flex gap-4 text-2xl">
                    {/* Responsive Icons */}
                    <div className="hidden md:flex items-center">
                        <VscHeart />
                    </div>
                    <div className="hidden md:flex items-center">
                        <FaShoppingBag />
                    </div>
                    <div className="hidden md:flex items-center">
                        <VscAccount />
                    </div>
                </div>
                {/* Mobile Menu Button */}
                <div onClick={toggleMenu} className="md:hidden cursor-pointer">
                    {menuOpen ? <AiOutlineClose size={35}/> : <AiOutlineMenu size={30}/>}
                </div>
            </header>
            {/* Mobile Navigation */}
            <nav className={`${menuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300`}>
                <ul className="flex flex-col text-xl p-4 bg-slate-100 shadow-lg">
                    <li className="py-2"><Link href="#">Men</Link></li>
                    <li className="py-2"><Link href="#">Women</Link></li>
                    <li className="py-2"><Link href="#">Kids</Link></li>
                    <li className="py-2"><Link href="#">Winter</Link></li>
                    <li className="py-2"><Link href="#">Lifestyle</Link></li>
                </ul>
            </nav>
        </main>
    );
}

export default Header

