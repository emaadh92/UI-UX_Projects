// import { FaFacebook , FaInstagram , FaTwitter} from "react-icons/fa"


function Footer(){
    return(
        <main className="bg-slate-100">
            {/* <div className="flex md:gap-7 gap-3 text-xl">
                <div >
                    <FaFacebook/>
                </div>
                <div>
                    <FaInstagram/>
                </div>
                <div>
                    <FaTwitter/>
                </div>
            </div> */}
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5 md:mx-20 mx-6 py-4 text-center md:text-left ">
                <div className="md:border-e-2 border-black">
                    <h1 className="font-semibold text-xl text-teal-900 my-5">Fashion <span className="text-yellow-500">Era</span></h1>
                    <p>There are many variations of passagr of lorem ipsum availblle but the majority have surffered alternation in some.</p>
                </div>
                <div className="md:border-e-2 border-black">
                    <h3 className="font-semibold text-xl my-5">Help</h3>
                    <p>Privacy Policy</p>
                    <p>Shipping & Delivery</p>
                    <p>Refund Policy</p>
                    <p>Track your Order</p>
                </div>
                <div className="md:border-e-2 border-black">
                    <h3 className="font-semibold text-xl my-5">Store</h3>
                    <p>Men Fashion</p>
                    <p>Women Fashions</p>
                    <p>Kidz Fashon</p>
                    <p>Other</p>
                </div>
                <div>
                    <h3 className="font-semibold text-xl my-5">Support</h3>
                    <p>Feedback</p>
                    <p>Contact us</p>
                    <p>Download app</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
        </main>
    )
}

export default Footer