import React from 'react'

const Body = () => {
    return (
        <>
            <div className="mt-[200px] mb-[200px] w-full overflow-x-auto">
                <h1 className=' text-4xl font-bold text-center mt-3'>Today</h1>
                <table className="min-w-[600px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Trading</th>
                            <th scope="col" className="px-4 py-3">Buy/Sell</th>
                            <th scope="col" className="px-4 py-3">TP/SL</th>
                            <th scope="col" className="px-4 py-3">PIP</th>
                            <th scope="col" className="px-4 py-3">Profit</th>
                            <th scope="col" className="px-4 py-3">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                30/5/2025
                            </th>
                            <td className="px-4 py-3 text-blue-500">Buy</td>
                            <td className="px-4 py-3 text-blue-500">TP</td>
                            <td className="px-4 py-3 text-blue-500">50pip</td>
                            <td className="px-4 py-3 text-blue-500">+$10</td>
                            <td className="px-4 py-3 text-blue-500">$60.00</td>
                        </tr>

                        <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                30/5/2025
                            </th>
                            <td className="px-4 py-3 text-red-500">Sell</td>
                            <td className="px-4 py-3 text-red-500">SL</td>
                            <td className="px-4 py-3 text-red-500">-50pip</td>
                            <td className="px-4 py-3 text-red-500">-$10</td>
                            <td className="px-4 py-3 text-red-500">$40.00</td>
                        </tr> */}

                    </tbody>
                </table>
            </div>


        </>
    )
}

export default Body
