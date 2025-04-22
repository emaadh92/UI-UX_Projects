import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  // Sample product data fetched from Sanity
  const products = await client.fetch(`
    *[_type == "product" && tags == "our-product"][0...8] {
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

  return (
    <div className="max-w-[1280px] mx-auto px-4 py-8">
      {/* Main Heading */}
      <h2 className="text-center text-2xl font-bold mb-8">Our Products</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product: { 
          _id: string; 
          title: string; 
          slug: { current: string }; 
          imageUrl: string; 
          oldprice?: number; 
          newprice: number; 
        }) => (
          <div
            key={product._id}
            className="hover:shadow-lg  border border-gray-200 rounded-lg p-4  transition-shadow"
          >
            {/* Product Image */}
            <Image
              src={product.imageUrl}
              alt={product.title}
              width={500}
              height={500}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Product Info */}
            <Link href={`/shop/${product.slug?.current}`} key={product._id}>
              <h3 className="mt-4 text-lg font-semibold hover:underline">{product.title}</h3>
            </Link>
            <div className="text-gray-600 flex justify-between">
              {product.oldprice && (
                <p className="line-through text-gray-400">${product.oldprice}</p>
              )}
              <p className="text-red-500 font-bold">${product.newprice}</p>
            </div>

            {/* Add to Cart Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
             
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link href={`/shop`}>
        <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-500 hover:text-white transition-colors">
          View More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
