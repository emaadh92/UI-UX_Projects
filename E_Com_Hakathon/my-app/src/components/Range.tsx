import Image from "next/image";

const OurRange = () => {
    const rangeItems = [
      {
        id: 1,
        title: "Luxury Living",
        image: "/product-11.jpg", // Replace with your image paths
      },
      {
        id: 2,
        title: "Modern Designs",
        image: "/product-9.jpg", // Replace with your image paths
      },
      {
        id: 3,
        title: "Ber Room",
        image: "/product-8.jpg", // Replace with your image paths
      },
    ];
  
    return (
      <div className="w-full max-w-[1183px] h-auto mx-auto px-4 py-8">
        {/* Main Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800">Our Range</h2>
          <p className="text-gray-600 mt-2">
            Discover a collection that defines luxury&#44; comfort&#44; and modernity.
          </p>
        </div>
  
        {/* Range Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {rangeItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-4 "
            >
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={500}
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OurRange;
  