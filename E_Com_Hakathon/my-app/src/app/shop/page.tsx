
import ServicesComponent from "@/components/services";
import HeroShop from "@/components/shophero";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  oldprice?: number; // Optional old price
  newprice: number; // Required new price
  slug: {
    current: string; // Ensure slug's current property is always a string
  };
}

// Async function to fetch product data
async function fetchProducts() {
  return await client.fetch(`
    *[_type == "product"] {
      _id,
      title,
      slug {
        current
      },
      "imageUrl": productImage.asset->url,
      oldprice,
      newprice
    }
  `);
}

const ShopComponent = async () => {
  const products = await fetchProducts(); // Fetch product data

  return (
    <div className="max-w-[1440px] mx-auto px-4 py-8">
      {/* Heading */}
      <HeroShop />
      <div className="text-center mb-8 p-4">
        <h2 className="text-3xl font-bold">Our Products</h2>
        <p className="text-gray-600">Explore our exclusive collection of products.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product:Product)  => (
          <Link href={`/shop/${product.slug?.current}`} key={product._id}>
            <div className="bg-white shadow-md rounded-md p-4 flex flex-col hover:shadow-lg transition-shadow">
              {/* Product Image */}
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={500}
                height={500}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              {/* Product Name */}
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              {/* Product Prices */}
              <div className="flex justify-between items-center px-3">
                {product.oldprice && (
                  <p className="text-gray-500 line-through">${product.oldprice}</p>
                )}
                <p className="text-red-500 font-bold text-lg">${product.newprice}</p>
              </div>
              {/* Add to Cart Button */}
              <button className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition mt-4">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
      <ServicesComponent />
    </div>
  );
};

export default ShopComponent;
