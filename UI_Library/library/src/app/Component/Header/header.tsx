import Link from "next/link";
import styles from "./Header.module.css";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function Header() {
    return (
        <header className={styles["header-container"]}>
            
            <div className="md:hidden flex justify-between items-center w-full p-4 bg-[#aa2020] text-white">
                <div className={`${styles.logo}`}>BookVerse</div>
                <Sheet >
                    <SheetTrigger><HamburgerMenuIcon className="text-5xl cursor-pointer " /></SheetTrigger>
                    <SheetContent className="bg-red-600">
                        <SheetHeader>
                            <SheetTitle className="text-3xl font-bold text-white">BookVerse</SheetTitle>
                            <SheetDescription>
                                <nav>
                                    <ul className="flex flex-col space-y-4 mt-4 text-white ">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/book">Books</Link></li>
                                        <li><Link href="/about">About</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </nav>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            
            <div className="hidden md:flex justify-between items-center w-full p-6 bg-[#aa2020] text-white">
                <div className={styles.logo}>BookVerse</div>
                <nav className={styles.navbar}>
                    <ul className="flex space-x-8">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/book">Books</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
