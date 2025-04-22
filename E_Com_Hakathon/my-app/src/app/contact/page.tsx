import ContactHeroSection from "@/components/contact-bg";
import ServicesComponent from "@/components/services";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactComponent = () => {
    return (
        <div>
            <ContactHeroSection />
            <div className="max-w-[1000px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Left Side: Contact Form */}
                <div className="p-6 ">
                    <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                    <ul className="space-y-4">
                        {/* Address */}
                        <li className="flex items-center">
                            <MapPin className="text-yellow-600 w-6 h-6 mr-4" />
                            <div>
                                <p className="font-semibold">Address</p>
                                <p>123 Main Street&#44; City&#44; Country</p>
                            </div>
                        </li>
                        {/* Phone */}
                        <li className="flex items-center">
                            <Phone className="text-yellow-600 w-6 h-6 mr-4" />
                            <div>
                                <p className="font-semibold">Phone</p>
                                <p>+1 234 567 890</p>
                            </div>
                        </li>
                        {/* Email */}
                        <li className="flex items-center">
                            <Mail className="text-yellow-600 w-6 h-6 mr-4" />
                            <div>
                                <p className="font-semibold">Email</p>
                                <p>contact@example.com</p>
                            </div>
                        </li>
                    </ul>
                </div>
                {/* Right Side: Contact Information */}
                <div>
                    <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
                    <form className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>
                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                placeholder="Enter the subject"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            />
                        </div>
                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                id="message"
                                placeholder="Enter your message"
                                rows={4}
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            ></textarea>
                        </div>
                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>


            </div>
            <ServicesComponent />
        </div>
    );
};

export default ContactComponent;
