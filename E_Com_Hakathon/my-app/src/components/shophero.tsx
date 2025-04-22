import Link from "next/link";

const HeroShop = () => {
    return (
      <div
        className="w-full max-w-[1440px] h-[316px] mx-auto bg-gray-200 flex flex-col justify-center items-center text-center"
        style={{
          backgroundImage: "url('/shophero.jpg')", // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-gray-800">Shop</h1>
  
        {/* Breadcrumb Navigation */}
        <nav className="mt-4">
          <ul className="flex items-center space-x-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <span className="text-gray-800 font-medium">Shop</span>
            </li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default HeroShop;
  