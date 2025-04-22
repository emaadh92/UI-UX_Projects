import { FaMale, FaArrowLeft, FaArrowRight } from "react-icons/fa"




function Review() {
    return (
        <main>
            <div className="md:mx-56 mx-3 mb-11">
                <div className="text-center my-5 ">
                    <h2 className="font-bold md:text-3xl text-2xl">Reviews</h2>
                    <p>This is what our customer have to say</p>
                </div>
                <div className="flex shadow-lg">
                    <div className="felx gap-3 p-3">
                        <FaMale className="text-4xl" />
                        <p>Here on Fsashion have a lot of variety of summer and winter collection aslo fashion era have best customer support service thats availble 24/7. Shipping Services are so good , i will recommend to you all take own winter collection by fashion era</p>
                    </div>
                    <div className="flex gap-4 p-3">
                        <FaArrowLeft />
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Review