import Cards from "./Components/Cards";
import Link from "next/link";
import Table from "./Components/Table";
import BmiCalculator from "./Components/calculater";

export default function Home() {
  return (
    <main className="max-w-[1500px] min-w-[280px] justify-center"> 
      <section id="hero" className="flex">
        
        <div className="md:basis-[60%] basis-[90%] my-14">
          <h1 className="text-white text-5xl md:mx-12 mx-2">
            <p>Unleash Your Core Strengt.</p> Reach the Extreme.
          </h1>
          <p className="text-white mt-8 md:px-12 px-2">
            Transform your body, push your limits, and redefine what&#39;s possible with CoreXtreme. Whether you&#39;re a beginner or a pro, our high-intensity core and total body workouts will take you beyond the ordinary.
          </p>
          
          <div>
            <button className="text-white px-3 rounded-[4px] bg-red-600 md:mx-12 mx-2 my-6">
              <Link href="./about">Read more</Link>
            </button>
          </div>
        </div>
       
        <div className="md:basis-[40%] basis-0"></div>
      </section>
      <div>
        <Table />
      </div>
      <div>
        <Cards />
      </div>
      <div>
        <BmiCalculator />
      </div>

    </main>
  );
}
