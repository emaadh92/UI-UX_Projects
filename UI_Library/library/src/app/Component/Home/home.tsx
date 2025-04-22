"use client";

import { motion } from "framer-motion";
import Booksprop from "./bookprop";

export default function HomeContent() {
    const books = [
        {
            image: "/nexu.jpg",
            author: "Yuval Noah Harari",
            bookn: "Nexus",
            description: "Yuval Noah Harari takes on AI...",
            imagePosition: "left",
            bookLink: "/downloads/nexus.pdf",
        },
        {
            image: "/think.jpg",
            author: "Napoleon Hill",
            bookn: "Think and Grow Rich",
            description: "The Think and Grow Rich summary's core idea...",
            imagePosition: "right",
            bookLink: "/downloads/think-and-grow-rich.pdf",
        },
        {
            image: "/atomic.jpg",
            author: "James Clear",
            bookn: "Atomic Habits",
            description: "Atomic Habits is a book written by James Clear...",
            imagePosition: "left",
            bookLink: "/downloads/atomic-habits.pdf",
        },
        {
            image: "/dast.jpg",
            author: "Anayat Ullah Tamish",
            bookn: "Dastan Iman Faroshon Ki",
            description: "The book is a history book written...",
            imagePosition: "right",
            bookLink: "/downloads/dastan-iman-faroshon-ki.pdf",
        }
    ];

    return (
        <div className=" max-w-[1370px] min-w-[280px] md:px-14 md:py-10 px-6">
            <div>
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-red-700 self-start flex text-wrap transition-opacity pb-12  pt-4">Most Popular Books</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:pb-10 pb-5" >
                {books.map((bookData, index) => (
                    <motion.div
                        key={index}
                        className="book-container flex flex-col bg-white border-2 border-gray-200 rounded-lg shadow-md p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        
                        <div className="order-1 mb-4">
                            <Booksprop
                                image={bookData.image}
                                author={bookData.author}
                                bookn={bookData.bookn}
                                description={bookData.description}
                                imagePosition={bookData.imagePosition}
                                bookLink={bookData.bookLink}
                            />
                        </div>
                        <div className="order-2 p-4 flex flex-col justify-center border-t-2 mt-4">
                            <h2 className="font-bold text-xl md:text-2xl">{bookData.bookn}</h2>
                            <p className="text-gray-600 mt-2">Author: {bookData.author}</p>
                            <p className="mt-2 text-gray-700">{bookData.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}



