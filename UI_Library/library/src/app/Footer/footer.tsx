export default function Footer() {
    return (
        <div className="max-w-[1370px] min-w-[280px] p-[1.5rem] bg-[#aa2020] text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-10">
                
                <div className="flex flex-col items-center md:items-start">
                    <h1 className="text-2xl font-bold">BookVerse Library</h1>
                    <p className="mt-2 text-lg italic">&quot;Your Gateway to Infinite Knowledge&quot;</p>
                </div>

                
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold">Contact Info</h2>
                    <p className="mt-2">Phone: (123) 456-7890</p>
                    <p>Email: support@bookverse.com</p>
                    <p>Location: 123 Library Lane, Booktown, BK 56789</p>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-xl font-bold">Support</h2>
                    <p className="mt-2">FAQs</p>
                    <p>Membership</p>
                    <p>Online Resources</p>
                    <p>Social Media</p>
                </div>
            </div>

           
            <div className="text-center py-4 border-t border-gray-600">
                <p>&copy;-2024 BookVerse Library. All rights reserved.</p>
            </div>
        </div>
    );
}
