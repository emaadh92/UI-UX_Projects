import Image from "next/image";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      image: "/modern-interior.jpg",
      title: "Modern Interior Design Trends",
      description:
        "Discover the latest trends in interior design to make your space look modern and stylish.",
      author: "Jane Smith",
      readMoreLink: "/blog/modern-interior-design",
    },
    {
      id: 2,
      image: "/perfect.jpg",
      title: "Choosing the Perfect Furniture",
      description:
        "A guide to selecting the ideal furniture for your home that combines comfort and style.",
      author: "John Doe",
      readMoreLink: "/blog/choosing-perfect-furniture",
    },
    {
      id: 3,
      image: "/room-ideas.jpg",
      title: "Room Decoration Ideas",
      description:
        "Transform your living space with these creative room decoration tips.",
      author: "Emily Johnson",
      readMoreLink: "/blog/room-decoration-ideas",
    },
  ];

  const categories = [
    { id: 1, name: "Interior Design" },
    { id: 2, name: "Furniture" },
    { id: 3, name: "Room Decoration" },
    { id: 4, name: "Loan" },
  ];

  const recentBlogs = [
    {
      id: 1,
      image: "/product-1.jpg",
      title: "How to Maximize Small Spaces",
    },
    {
      id: 2,
      image: "/perfect.jpg",
      title: "Top Furniture Trends in 2024",
    },
    {
      id: 3,
      image: "/room-ideas.jpg",
      title: "Tips for Budget-Friendly Room Makeovers",
    },
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Side: Blogs */}
      <div className="max-w-[820px]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-md mb-8 p-6 flex flex-col items-start"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={300}
              height={200}
              className="rounded-lg mb-4 w-full h-64"
            />
            <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
            <p className="text-sm text-gray-500 mt-2">{blog.description}</p>
            <p className="text-sm text-gray-600 mt-4">Author: {blog.author}</p>
            <a
              href={blog.readMoreLink}
              className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg"
            >
              Read More
            </a>
          </div>
        ))}
      </div>

      {/* Right Side: Category and Recent Blog */}
      <div>
        {/* Category Section */}
        <section className="mb-16">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Category</h1>
          <div className="grid grid-cols-2 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="bg-yellow-100 hover:bg-yellow-200 text-center py-4 px-6 rounded-lg shadow-sm"
              >
                <h2 className="text-lg font-semibold text-gray-700">
                  {category.name}
                </h2>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Blog Section */}
        <section>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Recent Blog</h1>
          <div className="space-y-6">
            {recentBlogs.map((blog) => (
              <div key={blog.id} className="flex items-center">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={80}
                  height={80}
                  className="rounded-lg"
                />
                <h3 className="ml-4 text-lg font-medium text-gray-700">
                  {blog.title}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
