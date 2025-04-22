import Table from "../Components/Table"

function Join() {
    return (
        <main className="max-w-[1500px] min-w-[280px] justify-center">
            <section id="join">
                <Table />
                
                <div className="text-center md:mx-48 mx-5">
                    <h1 className="font-bold text-4xl">CoreXtreme Membership Program aur Services</h1>
                    
                    <div>
                        <h3 className="font-semibold text-2xl mt-5">Category A - Admission Fee</h3>
                        <ul>
                            <li>&bull; <strong>Benefit:</strong> Covers the entry fee and gives you access to CoreXtreme facilities and services.</li>
                            <li>&bull; <strong>Amount:</strong> 2000/- (One-time)</li>
                        </ul>
                    </div>
                  
                    <div>
                        <h3 className="font-semibold text-2xl mt-5">Category B - Monthly Training Fee</h3>
                        <ul>
                            <li>&bull; <strong>Benefit:</strong> Each month, get personalized workout sessions with professional trainers.</li>
                            <li>&bull; <strong>Amount:</strong> 2000/- (One-time)</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-2xl mt-5">Category C - Monthly Fee (General Membership)</h3>
                        <ul>
                            <li>&bull; <strong>Benefit:</strong> Access to all gym facilities, including exercise equipment and workout areas.</li>
                            <li>&bull; <strong>Amount:</strong> 2000/- (One-time)</li>
                        </ul>
                    </div>
                </div>
               
                <div className="text-center py-7 md:mx-48 mx-6">
                    <h2 className="font-bold text-4xl">Diet Plans and Weekly Payment Options</h2>
                    <p>At CoreXtreme, we also offer diet plans based on your fitness goals. You can pay for these diet plans on a weekly basis, so it&#39;s flexible for you.</p>
                    <p>&bull; Custom meal plans made for your fitness goals</p>
                    <p>&bull; 500/- per week</p>
                </div>
            </section>
        </main>
    )
}

export default Join
