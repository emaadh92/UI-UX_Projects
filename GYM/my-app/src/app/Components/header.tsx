import Link from "next/link"

function Header() {
    return (
        <main className="max-w-[1500px] min-w-[280px] justify-center">
            <section className="md:flex md:justify-between text-center md:px-10 text-white bg-black border-y-2 border-yellow-600">
                {/* logo */}
                <h1 className="text-4xl py-3">Core<span className="text-red-600">Xtreme</span></h1>
                {/* Navbar */}
                <nav className="flex flex-col md:flex-row items-center">
                    <ul className="flex flex-row gap-6 md:gap-6 mt-4 md:mt-0 md:ml-auto">
                        <li><Link href="/" className="hover:text-yellow-600">Home</Link></li>
                        <li><Link href="/about" className="hover:text-yellow-600">About Us</Link></li>
                        <li><Link href="/bmi" className="hover:text-yellow-600">BMI</Link></li>
                        <li><Link href="/join" className="hover:text-yellow-600">Join Us</Link></li>
                        <li><Link href="/contact" className="hover:text-yellow-600">Contact</Link></li>
                    </ul>
                </nav>
            </section>
        </main>
    )
}

export default Header
