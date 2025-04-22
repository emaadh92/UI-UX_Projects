import Image from "next/image";
import Link from "next/link";

interface BookProps {
    image: string;
    author: string;
    description?: string;
    bookn: string;
    imagePosition?: "left" | "right" | any;
    bookLink?: string;
}
export default function Booksprop({ image, author, bookn, bookLink }:BookProps) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={image}
                alt={`${bookn} cover`}
                className="rounded-md shadow-md w-full h-auto max-h-60 object-cover"
            />
            <a
                href={bookLink}
                download
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-lg text-sm hover:bg-red-600 transition"
            >
                Download Book
            </a>
        </div>
    );
}
