"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSec() {
    const text = "Modern &"; 
    const text1 = " Digital-First"; 

    return (
        <div
            id="hero"
            className="relative max-w-[1370px] min-w-[280px] h-screen flex flex-col justify-center items-center text-center bg-black bg-cover bg-center"
            style={{ backgroundImage: "url('/study.jpg')" }}
        >
            
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            
            <div className="relative z-10">
                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#ff6347]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {text.split("").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.3,
                                ease: "easeOut"
                            }}
                        >
                            {letter}
                        </motion.span>
                    ))}

                    
                    <motion.span
                        className="text-[#1e90ff]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        {text1.split("").map((letter, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.3,
                                    ease: "easeOut"
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.span>
                </motion.h1>

                <p className="max-w-[800px] mt-2 mx-auto text-[1.1rem] md:text-[1rem] lg:text-[0.9rem] text-white">
                    <i>Explore, Learn, Grow: Your Library, Your Way</i>
                </p>
            </div>

          
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 max-w-[800px] mt-6 mx-auto text-[1.1rem] md:text-[1rem] lg:text-[0.9rem] text-white leading-relaxed"
            >
                <p>
                    Welcome to Bookverse where the digital meets the traditional. With our vast online resources and physical collections, knowledge is just a click away. From research articles to novels and audiobooks, access a world of literature and learning wherever you are. Our library is designed for the modern reader, blending the best of both worlds for a seamless, enriching experience.
                </p>
            </motion.div>

            <div className="relative z-10 mt-6">
                <button className="bg-[#ff6347] hover:bg-[#e55347] text-white font-semibold text-[1.2rem] md:text-[1rem] lg:text-[0.9rem] px-5 py-3 border border-[#333] rounded-[20px] transition-colors duration-300">
                    Explore more
                </button>
            </div>
        </div>
    );
}
