import Image from "next/image";
// import nike from "/.  Public/nike1.jpg";
import nike from "./../../../Public/nike1.jpg"
import Puma from "./../../../Public/puma.jpg"
import levis from "./../../../Public/levis.jpg"
import parada from "./../../../Public/prada.jpg"


function Brands(){
    return(
        <main className="bg-teal-950 md:mx-44 md:my-5 m-3 rounded-[17px] text-white">
            <div>
                <div className="text-center py-5">
                <h1 className="font-bold text-3xl">Top Brands Deal</h1>
                <p>Up to <span className="text-yellow-500">60%</span> on brands</p>
                </div>
                
                <div className="grid md:grid-cols-4 grid-cols-2 px-5 gap-4 py-5">
                    <Image src={nike} alt="nike-logo" className="w-full h-24"/>
                    <Image src={Puma} alt="nike-logo" className="w-full h-24"/>
                    <Image src={parada} alt="nike-logo" className="w-full h-24"/>
                    <Image src={levis} alt="nike-logo" className="w-full h-24"/>
                </div>
            </div>
        </main>
    )
}

export default Brands