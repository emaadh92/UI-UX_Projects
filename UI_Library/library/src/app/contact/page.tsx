import Image from "next/image";
import News_letter from "./../../../public/new_letters.jpg";
import { InstagramLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Contact() {
    return (
        <div
            id="contact-section"
            className="h-auto max-w-[1400px] min-w-[280px] w-full mx-auto flex flex-col items-center justify-center px-5 md:px-32 py-12 bg-gray-900 text-white"
        >
          
            <h2 className="text-red-700 font-bold text-5xl md:text-6xl mb-10 self-start ">
                Get In Touch
            </h2>

           
            <div className="flex flex-col md:flex-row items-center md:space-x-12 w-full md:w-[80%]">
                
                <div className="flex flex-col space-y-6 w-full md:w-[50%]">
                    <input
                        type="text"
                        placeholder="Enter Name"
                        className="border-b border-red-600 rounded-lg p-3 bg-black placeholder-gray-400 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <input
                        type="email"
                        placeholder="Enter e-mail"
                        className="border-b border-red-600 rounded-lg p-3 bg-black placeholder-gray-400 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                    <textarea
                        rows={5}
                        placeholder="Message"
                        className="border-b border-red-600 rounded-lg p-3 bg-black placeholder-gray-400 text-white shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    ></textarea>
                </div>

               
                <div className="flex flex-col items-center mt-8 md:mt-0 md:w-[50%] space-y-5">
                    <Image
                        src={News_letter}
                        alt="Newsletter"
                        className="rounded-xl shadow-2xl object-cover"
                        width={400}
                        height={400}
                        layout="responsive"
                    />
                    <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full text-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="justify-center md:mt-20 m-6 flex md:flex-row flex-col items-center space-y-3 md:space-y-0">
                <p className="text-red-500 font-bold text-xl md:px-5">Follow :</p>
                <div className="flex gap-x-4 items-center text-2xl">
                    <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-red-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <InstagramLogoIcon />
                    </div>
                    <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-red-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <LinkedInLogoIcon />
                    </div>
                    <div className="p-2 rounded-full bg-gray-800 text-white hover:bg-red-500 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <TwitterLogoIcon />
                    </div>
                </div>
            </div>

        </div>
    );
}
