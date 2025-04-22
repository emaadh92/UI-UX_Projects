
import Services from "./Components/services";
import { FaShippingFast,   FaGift, FaMoneyCheck, FaHeadset } from "react-icons/fa";
import Cards from "./Components/cards";
import Brands from "./Components/brands";
import Products from "./Components/products";
import coat from "./../../Public/coat.jpeg";
import Shall from "./../../Public/shal.jpeg";
import Kidz_coat from "./../../Public/kidz-coat.jpeg";
import jacket from "./../../Public/jacket.jpeg";
import Review from "./Components/review";
// import Image from "next/image";
// import hero from "./../../Public/hero.jpg";





export default function Home() {
  return (
    <main>
      <div className="bg-slate-200 flex md:px-24 md:py-28 px-5 py-10" >
        {/* Content left Side */}
        <div className="basis-[45%]">
          <p className="font-sans text-gray-500">TRENDING COLLECTION</p>
          <h1 className="text-teal-900 font-bold text-5xl py-6">Explore Summer Collection</h1>
          <div>
            <button className="text-white bg-emerald-900 px-4 rounded-[17px] text-xl">Shop Now</button>
          </div>
        </div>
        {/* Picture Side */}
        {/* <div className="basis-[35%] md:mx-32">
           <Image src={hero} alt="hero"/>
        </div> */}
      </div>

      {/*     SERVICES    */}
      <div className="grid md:grid-cols-4 grid-cols-2 md:mx-20 mx-3 my-3 gap-3 ">

        <Services Icons={FaShippingFast}
          tittle="Free Shipping"
          description="Orders over $100" />

        <Services Icons={FaGift}
          tittle="Smart Gift Cards"
          description="Buy $1000 to get card" />

        <Services Icons={FaMoneyCheck}
          tittle="Quick Payment"
          description="100% secure payment" />

        <Services Icons={FaHeadset}
          tittle="24/7 customer Support"
          description="Quick support" />

      </div>
      {/* Cards */}
      <div>
        <Cards />
      </div>

      {/* Deals */}
      <div>
        <Brands />
      </div>

      {/* Trending Products */}
      <div>
        <div className="text-center md:py-5 py-3">
          <h1 className="font-bold md:text-4xl text-2xl">Trending Collection</h1>
          <p>Check out most promising product by our buyers</p>
        </div>
        <div className="grid md:mx-28 mx-5 md:my-7 md:grid-cols-4 grids-cols-2 gap-3">

          <Products image={jacket} tittle="Custom Jacket" catagorie="Men" newPrice={399} OldPrice={449} />
          <Products image={coat} tittle="Winter long Coats" catagorie="women" newPrice={399} OldPrice={449} />
          <Products image={Shall} tittle="Winter_Shalls" catagorie="Ladies" newPrice={399} OldPrice={449} />
          <Products image={Kidz_coat} tittle="Kidz Casual Coat" catagorie="Kidz" newPrice={399} OldPrice={449} />
        </div>
      </div>

      <Review/>
    </main>
  );
}
