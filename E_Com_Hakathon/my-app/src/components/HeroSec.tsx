const HeroSection = () => {
    return (
      <div
        className="w-full max-w-[1440px] h-[716px] mx-auto bg-cover bg-center flex items-center text-center px-4"
        style={{
          backgroundImage: "url('/hero-bg.jpg')", // Replace with your actual image path
        }}
      >
        <div className="ml-auto bg-pink-300 bg-opacity-80 p-9 rounded-lg shadow-md max-w-[400px] text-left">
          <p className="text-sm font-semibold  uppercase tracking-widest mb-2">
            New Arrival
          </p>
          <h3 className="text-3xl font-bold text-yellow-700 mb-4">
            Discover Our New Collection
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat accusamus conseq</p>
          <button className="px-6 py-3 bg-yellow-700 text-white text-sm font-medium rounded-md shadow-md ">
            Buy Now
          </button>
        </div>
      </div>
    );
  };
  
  export default HeroSection;
  