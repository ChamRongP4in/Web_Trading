import React, { useState } from 'react'; // <--- IMPORTANT: Add useState here
import Monday from "../../src/assets/02-6-25.png"

const Daily = () => {
    // State variable to control the visibility of the image for 02/6/2025
    const [showMondayImage, setShowMondayImage] = useState(false);

    // Handler for the button click
    const handleMondayImageButtonClick = () => {
        // Toggles the state: if true becomes false, if false becomes true
        setShowMondayImage(!showMondayImage);
    };

    return (
        <>
            <div className="mt-[200px] mb-[200px] w-full overflow-x-auto">
                <h1 className='text-white text-4xl font-bold text-center'>Daily Summery</h1>
                <table className="min-w-[600px] w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-4 py-3">Date</th>
                            <th scope="col" className="px-4 py-3">Winrate</th>
                            <th scope="col" className="px-4 py-3">Profit</th>
                            <th scope="col" className="px-4 py-3">Balance</th>
                            <th scope="col" className="px-4 py-3">Image</th> {/* This header is for the button */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <th scope="row" className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                30/5/2025
                            </th>
                            <td className="px-4 py-3 text-blue-500"></td>
                            <td className="px-4 py-3 text-blue-500"></td>
                            <td className="px-4 py-3 text-blue-500">+$50.00</td>
                            <td className="px-4 py-3 text-blue-500"></td> {/* Empty cell for the button column for this row */}
                        </tr>
                        <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                            <th scope="row" className=" px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                02/6/2025
                            </th>
                            <td className="px-4 py-3 text-white">Win5/Lose1</td>
                            <td className="px-4 py-3 text-red-500">-$1.23</td>
                            <td className="px-4 py-3 text-blue-500">$48.77</td>
                            <td className="px-4 py-3 ">
                                {/* Button to toggle image visibility */}
                                <button
                                    onClick={handleMondayImageButtonClick}
                                    style={{
                                        padding: '8px 12px', // Smaller padding for table cell
                                        fontSize: '14px',
                                        cursor: 'pointer',
                                        backgroundColor: '#007bff', // Blue button
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '4px'
                                    }}
                                >
                                    {showMondayImage ? 'Hide Image' : 'Show Image'} {/* Button text changes */}
                                </button>
                            </td>
                        </tr>
                        {/* New row for the image, directly below the 02/6/2025 row */}
                        {showMondayImage && (
                            <tr className="bg-white dark:bg-gray-900 border-b dark:border-gray-700">
                                <td colSpan="5" className="px-4 py-3 text-center"> {/* Use colSpan to center the image across columns */}
                                    <img
                                        src={Monday} // <--- CORRECTED IMAGE PATH
                                        alt="Monday Summary"
                                        style={{
                                            maxWidth: '400px', // Customize image size as needed
                                            height: 'auto',
                                            border: '1px solid #ccc',
                                            borderRadius: '8px',
                                            marginTop: '10px',
                                            marginBottom: '10px'
                                        }}
                                    />
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Daily