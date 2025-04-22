import Link from "next/link"
import { FaInstagram, FaFacebook, FaYoutube, FaPhone } from "react-icons/fa"

function Footer() {
    return (
        <main className="max-w-[1500px] min-w-[280px] justify-center">
            <footer className="bg-black text-white">
                <div className="grid md:grid-cols-3 grid-cols-1 gap-y-8 px-12 py-10">
                    {/* Xtreme info */}
                    <div>
                        <h1 className="text-4xl ">Core<span className="text-red-500">Xtreme</span></h1>
                        <p>Since 2016</p>
                    </div>
                    {/* Social media Links */}
                    <div>
                        <ul>
                            {/* youtube */}
                            <li key="youtube" className="flex gap-3">
                                <FaYoutube />
                                <span>Youtube</span>
                            </li>
                            {/* facebook */}
                            <li key="facebook" className="flex gap-3">
                                <FaFacebook />
                                <span>Facebook</span>
                            </li>
                            {/* Instagram */}
                            <li key="instagram" className="flex gap-3">
                                <FaInstagram />
                                <span>Instagram</span>
                            </li>
                            {/* PhoneNumber */}
                            <li key="phone" className="flex gap-3">
                                <FaPhone />
                                <span>923283314412</span>
                            </li>
                        </ul>
                    </div>
                    {/* Services Policy */}
                    <div>
                        <ul>
                            <li><Link href="/CoreXtreme_FAQs.doc">FAQ&apos;s</Link></li>
                            <li><Link href="/CoreXtreme_Rules.doc">Rules</Link></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </main>
    )
}

export default Footer
