function Table() {
    return (
        <main>
            <section>
                <div className="flex justify-center ">
                    <table className="border-2 border-black w-[13cm] my-16">
                        {/* table headinds */}
                        <thead className="gap-5">
                            <tr className="text-white bg-black">
                                <th className="border-2 border-black">Category</th>
                                <th className="border-2 border-black">Benefits</th>
                                <th className="border-2 border-black">Amount</th>
                            </tr>
                        </thead>
                        {/* table data */}
                        <tbody>
                            {/* 1st row */}
                            <tr className="text-center">
                                <td className="border-2 border-black">A</td>
                                <td className="border-2 border-black">Admission fee</td>
                                <td className="border-2 border-black">2000/-</td>
                            </tr>
                            {/* 2nd row */}
                            <tr className="text-center">
                                <td className="border-2 border-black">B</td>
                                <td className="border-2 border-black">Monthly training fee</td>
                                <td className="border-2 border-black">2000/-</td>
                            </tr>
                            {/* 3rd row */}
                            <tr className="text-center">
                                <td className="border-2 border-black">C</td>
                                <td className="border-2 border-black">Monthly fee</td>
                                <td className="border-2 border-black">2500/-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
            </section>
        </main>
    )
}

export default Table