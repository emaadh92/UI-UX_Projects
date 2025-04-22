import Image from "next/image"
import Catalogs from "./catalogs"
import baby from "./../../../Public/Baby.jpg"


function Cards() {
    return (
        <main>
            {/* Gecus Cards */}
            <div className="md:mx-28 md:my-5 mx-2 my-3 gap-6 grid md:grid-cols-2 grid-cols-1">
                <div className="bg-sky-400 flex rounded-[14px] text-white hover:scale-105 duration-[0.8s]">
                    <div className="md:basis-[50%] basis-[70] px-5 py-5">
                        <p className="font-semibold text-2xl">Collection For Grils</p>
                        <p>Up To <span className="text-yellow-400">40%</span> off</p>
                        <div>
                            <button className="px-5 rounded-[17px]  bg-white text-black my-3">Shop Now</button>
                        </div>
                    </div>
                    <div className="basis-[50%]">
                        {/* <Image src={} alt="Summer Collection " className=""/> */}
                    </div>
                </div>
                <div className="bg-yellow-400 flex rounded-[14px] text-white hover:scale-105 duration-[0.8s]">
                    <div className="md:basis-[50%] basis-[70%] px-5 py-5">
                        <p className="font-semibold text-2xl text-teal-900">Collection For Men</p>
                        <p>Up To <span className="text-emerald-800">40%</span> off</p>
                        <div>
                            <button className="px-5 rounded-[17px] bg-white text-black my-3">Shop Now</button>
                        </div>

                    </div>
                    <div className="basis-[50%]">
                        {/* <Image src={} alt="Summer Collection " className=""/> */}
                    </div>
                </div>
            </div>
            {/* Baby Cards */}
            <div className="flex flex-col-reverse md:flex-row md:mx-28 md:my-7 mx-5 my-3 bg-slate-200 rounded-[14px]">
                <div className="basis-[50%] md:px-16 p-3 md:py-5">
                    <p className="font-semibold text-3xl text-teal-900">Baby & Kids Fashion</p>
                    <div className="bg-yellow-400 w-28 md:w-44 px-3 py-4 rounded-[12px] md:my-6">
                        <p className="font-semibold text-xl md:text-2xl ">Sale!</p>
                        <p className="text-emerald-700 text-sm md:text-lg ">12 to 21 oct</p>
                    </div>
                    <div>
                        <button className="px-5 rounded-[17px] bg-emerald-950 text-white my-3">Shop Now</button>
                    </div>

                </div>
                <div className="basis-[50%] md:h-200 md:w-250 m-5 ">
                    <Image src={baby} alt="Baby-Collection" className="rounded-[10px]"/>
                </div>
            </div>

            <Catalogs />

        </main>
    )

}

export default Cards

