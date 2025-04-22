import Image from "next/image"
import Stren from "./../../../Public/strength.jpg"
import High from "./../../../Public/intensity.jpg"
import Body from "./../../../Public/body.jpg"
import Flexibi from "./../../../Public/flexi.jpg"
import Nurit from "./../../../Public/nutrition.jpg"
import clas from "./../../../Public/class.jpg"

function Cards() {
    return (
        <main className="max-w-[1500px] min-w-[280px] justify-center">
            <section>
                {/* main div */}
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-12 py-20 gap-7 ">
                    {/* strength */}
                    <div className="shadow-2xl mb-10 rounded-[7px] hover:scale-105 duration-[.5s]">
                        <Image src={Stren} alt="Core_Strength" className="h-64 rounded-t-[7px]" />
                        {/* content */}
                        <div className="px-5 py-3">
                            <h1 className="font-bold">Core Strength Training</h1>
                            <p>Build your core muscles with targeted exercises that enhance stability and performance.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className="border-2 border-black rounded-[7px] px-3 my-3 text-white bg-black mx-5">View more</button>
                        </div>
                    </div>
                    {/* High-Intensity */}
                    <div className="shadow-2xl mb-10 rounded-[7px] hover:scale-105 duration-[.5s]">
                        <Image src={High} alt="Core_Strength" className="h-64 rounded-t-[7px]" />
                        {/* content */}
                        <div className="px-5 py-3">
                            <h1 className="font-bold">High-Intensity Interval Training</h1>
                            <p>Experience quick bursts of intense exercise followed by rest to maximize calorie burn.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className="border-2 border-black rounded-[7px] px-3 my-3 text-white bg-red-600 mx-5">View more</button>
                        </div>
                    </div>
                    {/* Total Body */}
                    <div className="shadow-2xl mb-10 rounded-[7px] hover:scale-105 duration-[.5s]">
                        <Image src={Body} alt="Core_Strength" className="h-64 rounded-t-[7px]" />
                        {/* content */}
                        <div className="px-5 py-3">
                            <h1 className="font-bold">Total Body Conditioning</h1>
                            <p>Full-body workouts designed to improve strength, endurance, and overall fitness for all levels.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className="border-2 border-black rounded-[7px] px-3 my-3 text-white bg-green-600 mx-5">View more</button>
                        </div>
                    </div>
                    {/* Flexibility */}
                    <div className="shadow-2xl mb-10 rounded-[7px] hover:scale-105 duration-[.5s]">
                        <Image src={Flexibi} alt="Core_Strengt" className="h-64 rounded-t-[7px]" />
                        {/* content */}
                        <div className="px-5 py-3">
                            <h1 className="font-bold">Flexibility and Mobility</h1>
                            <p>Enhance your flexibility and mobility with dedicated stretching routines to prevent injuries.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className="border-2 border-black rounded-[7px] px-3 my-3 text-white bg-yellow-600 mx-5">View more</button>
                        </div>
                    </div>
                    {/* Nutrition */}
                    <div className="shadow-2xl mb-10 rounded-[7px] hover:scale-105 duration-[.5s]">
                        <Image src={Nurit} alt="Core_Strength" className="h-64 rounded-t-[7px]" />
                        {/* content */}
                        <div className="px-5 py-3">
                            <h1 className="font-bold">Nutrition Coaching</h1>
                            <p>Get personalized nutrition advice to fuel your workouts and support your fitness goals.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className="border-2 border-black rounded-[7px] px-3 my-3 text-white bg-blue-600 mx-5">View more</button>
                        </div>
                    </div>
                    {/*Group Fitness Classes */}
                    <div className="shadow-2xl mb-10 rounded-[7px] hover:scale-105 duration-[.5s]">
                        <Image src={clas} alt="Core_Strength" className="h-64 rounded-t-[7px]" />
                        {/* content */}
                        <div className="px-5 py-3">
                            <h1 className="font-bold">Group Fitness Classes</h1>
                            <p>Join a community of fitness enthusiasts in dynamic classes that motivate and inspire you.</p>
                        </div>
                        {/* Button */}
                        <div>
                            <button className="border-2 border-black rounded-[7px] px-3 my-3 text-white bg-gray-600 mx-5">View more</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Cards