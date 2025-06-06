import React, { useState } from 'react';
import Monday from "../../src/assets/02-6-25.png";

const Daily = () => {
    const [showMondayImage, setShowMondayImage] = useState(false);

    return (
        <div className="mt-[200px] mb-[200px] w-full overflow-x-auto">
            <h1 className='text-white text-4xl font-bold text-center'>Daily Summary</h1>
            <table className="min-w-[600px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th className="px-4 py-3">Date</th>
                        <th className="px-4 py-3">Winrate</th>
                        <th className="px-4 py-3">Profit</th>
                        <th className="px-4 py-3">Balance</th>
                        <th className="px-4 py-3">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                        <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            30/5/2025
                        </th>
                        <td className="px-4 py-3 text-blue-500"></td>
                        <td className="px-4 py-3 text-blue-500"></td>
                        <td className="px-4 py-3 text-blue-500">+$50.00</td>
                        <td className="px-4 py-3 text-blue-500"></td>
                    </tr>

                    <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                        <th className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            02/6/2025
                        </th>
                        <td className="px-4 py-3 text-white">Win5/Lose1</td>
                        <td className="px-4 py-3 text-red-500">-$1.23</td>
                        <td className="px-4 py-3 text-blue-500">$48.77</td>
                        <td className="px-4 py-3">
                            <button
                                onClick={() => setShowMondayImage(prev => !prev)}
                                style={{
                                    padding: '8px 12px',
                                    fontSize: '14px',
                                    cursor: 'pointer',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                            >
                                {showMondayImage ? 'Hide Image' : 'Show Image'}
                            </button>
                        </td>
                    </tr>
                    {showMondayImage && (
                        <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <td colSpan="5" className="px-4 py-3 text-center">
                                <img
                                    src={Monday}
                                    alt="Monday Summary"
                                    style={{
                                        maxWidth: '400px',
                                        height: 'auto',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        margin: '10px auto'
                                    }}
                                />
                            </td>
                        </tr>
                    )} */}

                </tbody>
            </table>
        </div>
    );
};

export default Daily;
