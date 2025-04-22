import Image, { StaticImageData } from "next/image"


function Products({ image, tittle, catagorie, newPrice, OldPrice }:
    {
        image: string |StaticImageData,
        tittle: string,
        catagorie: string,
        newPrice: number,
        OldPrice: number,
    }
) {
    return (
        <main>
            <div className="rounded-[13px] shadow-lg">
                <div className="rounded-t-[13px] bg-slate-200">
                    <Image src={image} alt={tittle} className="w-full h-60 rounded-t-[13px]"/>
                </div>
                <div className="px-3">
                    <h3 className=" text-gray-400">{catagorie}</h3>
                    <h1 className="text-semibold text-xl">{tittle}</h1>
                    <div>
                        <span className="text-green-500 text-xl text-smibold">${newPrice}</span>
                        <span className="text-gray-300 line-through ml-3">${OldPrice}</span>
                    </div>

                </div>
            </div>
        </main>
    )
}

export default Products