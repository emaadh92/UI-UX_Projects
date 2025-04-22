import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

function Contact() {
    return (
        <main className="max-w-[1500px] min-w-[280px] justify-center">
            <section id="cont-ma" className="mx-0 my-0 ">
                <div className="grid md:grid-cols-2 grid-cols-1 md:mx-52 sm:mx-32 mx-5 py-20 gap-7 md:order-1 order-2">
                    
                    <div id="cont" className="text-white p-3" >
                        <h1 className="font-semibold text-4xl">Contact Us</h1>
                        <p className="text-xl mb-7">Feel free to contact us.</p>
                       
                        <div className="flex gap-x-3">
                            <FaPhone />
                            <p className="mb-7 md:text-lg">+923283314412</p>
                        </div>
                       
                        <div className="flex gap-x-3">
                            <FaEnvelope />
                            <p className="mb-7 md:text-lg">emaadh92@gmail.com</p>
                        </div>
                       
                        <div className="flex gap-x-3">
                            <FaMapMarkedAlt />
                            <p className="mb-7 md:text-lg">Main Maymar Avenue near Tabish Lawn, Gulshan-e-Maymar, Karachi</p>
                        </div>
                      
                        <div className="flex gap-x-3 text-center">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                        </div>
                    </div>
                    
                    <div className="border-2 border-yellow-600 md:px-6 px-2 pt-3 md:order-2 order-1">
                        <form action="php">
                       
                            <input 
                                type="text" 
                                placeholder="Name" 
                                className="border-2 border-gray-600 bg-gray-900 placeholder-gray-400 text-white w-full p-2 mb-4 rounded"
                            />
                         
                            <div>
                                <select 
                                    name="Gender" 
                                    id="back" 
                                    className="border-2 border-gray-600 bg-gray-900 text-white placeholder-gray-400 w-full p-2 mb-4 rounded"
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Custom">Custom</option>
                                </select>
                            </div>
                            <input
                                type="email" 
                                placeholder="E-mail" 
                                className="border-2 border-gray-600 bg-gray-900 placeholder-gray-400 text-white w-full p-2 mb-4 rounded"
                            />
                          
                            <input 
                                type="number" 
                                placeholder="Phone Number" 
                                className="border-2 border-gray-600 bg-gray-900 placeholder-gray-400 text-white w-full p-2 mb-4 rounded"
                            />
                           
                            <textarea 
                                name="message" 
                                placeholder="Message" 
                                className="border-2 border-gray-600 bg-gray-900 placeholder-gray-400 text-white w-full p-2 mb-4 rounded"
                            ></textarea>
                           
                            <div className="flex gap-3">
                                <button 
                                    type="reset" 
                                    className="px-5 border-2 border-red-600 text-white bg-red-600 rounded-[5px] my-2"
                                >
                                    Reset
                                </button>
                                <button 
                                    type="submit" 
                                    className="px-5 border-2 border-yellow-500 text-white bg-yellow-500 rounded-[5px] my-2"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;
