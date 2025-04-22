"use client";

import { useState } from "react";
// import useStore from "@/app/cart/store";
import { User, Heart, ShoppingCart, AlignCenter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  // const itemCount = useStore((state) => state.getItemCount());
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="max-w-[1286px] mx-auto w-full px-4 sm:px-8 p-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image
            src="/logo.jpg"
            alt="funiro"
            width={500}
            height={500}
            className="w-[120px] h-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger>
              <AlignCenter className="cursor-pointer w-6 h-6" />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/logo.jpg"
                    alt="funiro"
                    width={500}
                    height={500}
                    className="w-[120px] h-auto"
                  />
                </SheetTitle>
                <SheetDescription>
                  <ul className="flex flex-col space-y-4 mt-4">
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">
                      <Link href="/">Home</Link>
                    </li>
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">
                      <Link href="/shop">Shop</Link>
                    </li>
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">
                      <Link href="/blog">Blog</Link>
                    </li>
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">
                      <Link href="/contact">Contact</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        {/* Search Bar */}
        <div className="flex-grow w-full md:max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 text-sm border rounded-md outline-none focus:ring focus:ring-gray-300"
          />
        </div>

        {/* Icon Links */}
        <div className="flex space-x-4">
          <div className="flex flex-col items-center">
            <User className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            <span className="text-xs mt-1">Profile</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/checklist">
              <Heart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
            </Link>
            <span className="text-xs mt-1">Wishlist</span>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:scale-110 transition-transform" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
                  {/* {itemCount} */}
                </span>
              </div>
            </Link>
            <span className="text-xs mt-1">Cart</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
