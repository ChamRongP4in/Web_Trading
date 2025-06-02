import React from 'react'

const Yearly = () => {
    return (
        <>
            <div className="mt-[200px] mb-[200px] w-full overflow-x-auto">
                <h1 className='text-white text-4xl font-bold text-center mt-3 '>Yearly Summery</h1>
                <table className="min-w-[600px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3">Winrate</th>
                            <th scope="col" className="px-4 py-3">PIP</th>
                            <th scope="col" className="px-4 py-3">Profit</th>
                            <th scope="col" className="px-4 py-3">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <th scope="row" className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                30/5/2025
                            </th>
                            <td className="px-4 py-3 text-blue-500"></td>
                            <td className="px-4 py-3 text-blue-500"></td>
                            <td className="px-4 py-3 text-blue-500"></td>
                            <td className="px-4 py-3 text-blue-500">+$50.00</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Yearly
