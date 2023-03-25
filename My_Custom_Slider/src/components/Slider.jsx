import React, { useState } from 'react'
import Carousel from "./Carousel"

const ToggleTheme = () => {
   
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  const toggleDarkMode = () =>{
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
        <div className={`px-10 flex items-center flex-col ${isDarkMode ? "bg-gradient-to-r from-pink-300 via-red-300 to-orange-300" : "bg-gradient-to-r from-teal-900 via-blue-900 to-indigo-900"} w-full h-max m-auto py-16 px-4 relative`}>
            
            <button className="px-2 py-1 rounded bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 " onClick={toggleDarkMode}>
            {isDarkMode ? "Light Mode" : "Dark Mode"}
             </button>
            <div className="p-4">
            <h1 className={`text-3xl ${isDarkMode ? "text-orange-800" : "text-lime-500"}`}>Beyond the Horizon!</h1>
            <p className={`text-lg mt-4 ${isDarkMode ? "text-slate-900" : "text-violet-400"}`}>
            From the stunning natural beauty of the Swiss Alps to the picturesque landscapes of New Zealand, our planet is home to a wealth of awe-inspiring destinations. Whether you're looking to explore the rugged terrain of Patagonia or bask in the crystal clear waters of the Maldives, there's no shortage of breathtaking scenery to discover. From the otherworldly beauty of Iceland's geothermal hot springs to the vibrant colors of the Great Barrier Reef, every corner of the earth offers something unique and unforgettable. Whether you're drawn to the towering peaks of the Himalayas or the golden sands of the Sahara, there's no limit to the wonders that await those who venture beyond their doorstep. So why not pack your bags and set out on an adventure to discover the most fantastic and scenic places our world has to offer?........
            </p>
            
            </div>
            <Carousel />
        </div>

    </>
  )
}

export default ToggleTheme