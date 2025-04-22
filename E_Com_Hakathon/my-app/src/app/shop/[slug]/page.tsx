import AddToCart from "@/components/AddtoBasket";
import { client } from "@/sanity/lib/client";
import Image from "next/image";


interface Product {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  oldprice?: number;
  newprice: number;
}

// Dynamic route handler
async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Fetch product data using the slug
  const product: Product | null = await client.fetch(
    `*[_type == "product" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "imageUrl": productImage.asset->url,
      oldprice,
      newprice
    }`,
    { slug }
  );

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:space-x-10">
            {/* Left Side: Product Image */}
            <div className="lg:w-1/2 w-full flex justify-center items-start mb-6 lg:mb-0">
              <Image
                alt={product.title}
                className="object-cover object-center rounded-lg shadow-lg"
                src={product.imageUrl}
                width={500}
                height={500}
                priority
              />
            </div>

            {/* Right Side: Product Details */}
            <div className="lg:w-1/2 w-full">
              <h1 className="text-gray-900 text-4xl font-bold mb-4">{product.title}</h1>
              <div className="mb-6">
                {product.oldprice && (
                  <span className="text-gray-500 line-through text-xl mr-4">${product.oldprice}</span>
                )}
                <span className="text-red-500 font-bold text-3xl">${product.newprice}</span>
              </div>
              <div className="flex space-x-4 mb-6">
                <button className="flex-grow text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">
                  Buy Now
                </button>
                <button className="flex-grow text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded-md text-lg">
                  Add to Cart
                </button>
                <AddToCart product={product} />
              </div>
            </div>
          </div>

          {/* Bottom Section: Product Description */}
          <div className="mt-10 border-t pt-6">
            <h2 className="text-2xl font-semibold mb-4">Product Description</h2>
            <p className="leading-relaxed text-gray-700">{product.description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductPage;
