import Link from "next/link"
import Products from "./products"
import Kurti from "./../../../Public/kurti.jpg"
import women from "./../../../Public/women.jpg"
import Men from "./../../../Public/Men.jpg"
import kids from "./../../../Public/kids.jpg"




function Catalogs(){
    return(
        <main>
            <section className="md:mx-28 my-4 mx-9 md:my-8 ">
                <div className="text-center">
                    {/* Header Content */}
                    <h1 className="font-bold md:text-4xl text-2xl">New Arrivals</h1>
                    <p className="text-gray-400">Check out most promising product bought by our buyers</p>
                </div>
                <div className="my-7">
                    {/* Catalogs Linka */}
                    <ul className="flex gap-3 justify-center ">
                        <Link className="rounded-[12px] border-2 hover:bg-yellow-400 px-3" href="">All</Link>
                        <Link className="rounded-[12px] border-2 hover:bg-yellow-400 px-3" href="">Men</Link>
                        <Link className="rounded-[12px] border-2 hover:bg-yellow-400 px-3" href="">Women</Link>
                        <Link className="rounded-[12px] border-2 hover:bg-yellow-400 px-3" href="">Kids</Link>
                    </ul>
                </div>

               
                <div className="grid md:grid-cols-4 grids-cols-2 gap-3">
                    {/* Products */}
                    <Products image={kids} tittle="Ladies Kurtii"catagorie="Kids" newPrice={499} OldPrice={749}/>
                    <Products image={Kurti} tittle="Ladies Kurtii"catagorie="Women" newPrice={599} OldPrice={850}/>
                    <Products image={women} tittle="Ladies Kurtii"catagorie="women" newPrice={549} OldPrice={690}/>
                    <Products image={Men} tittle="Ladies Kurtii"catagorie="Men" newPrice={499} OldPrice={699}/>
                </div>

                
            </section>
        </main>
    )
}

export default Catalogs