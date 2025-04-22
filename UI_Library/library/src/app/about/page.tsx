"use client"

import { motion } from "framer-motion";


export default function About() {
    return (
        <div className="flex flex-col items-center min-w-[280px] max-w-[1370px] mx-auto p-6 md:p-12 space-y-8">
           
            <motion.div
                className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
            >
                
                <div
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: "url('/about-bg.jpg')" }}
                />

               
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    
                    <motion.h1
                        className="text-white text-3xl md:text-5xl lg:text-6xl font-bold text-center"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        Welcome to BookVerse
                    </motion.h1>
                </div>
            </motion.div>

           
            <motion.div
                className="w-full max-w-3xl p-6 md:p-10 bg-white rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 0.8 }}
            >
                <motion.h2
                    className="text-2xl md:text-4xl font-semibold mb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    About BookVerse
                </motion.h2>
                <motion.p
                    className="text-gray-700 text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    BookVerse is a sanctuary for book lovers, providing an endless world of stories, knowledge, and
                    inspiration. We believe that books open doors to new adventures and perspectives. At BookVerse,
                    you&#8217;ll find not only classic literature but also modern, thought-provoking reads. Dive in and let
                    your journey begin&#33;
                </motion.p>
            </motion.div>
            
        </div>
    );
}
