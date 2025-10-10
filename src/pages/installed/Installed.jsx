import React from "react";
import download from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import forest from "../../assets/demo-app (2).webp";

const Installed = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Your Installed Apps</h2>
      <p className="text-lg md:text-xl text-[#627382] text-center md:text-left">
       Explore All Trending Apps on the Market developed by us
      </p>
      <div className="w-full flex items-center justify-between">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-gray-800">
          132 Apps Found
        </h1>
        <div className="flex-1 flex justify-end">
          <select defaultValue="Sort by size" className="select bg-[#F1F5E8] border border-[#D2D2D2]">
            <option disabled={true}>Sort by size</option>
            <option>High-Low</option>
            <option>Low-High</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-4">
        <div className="w-full flex items-center justify-between p-2 md:p-4 rounded-lg bg-white">
            <div className="w-full flex items-center gap-2 md:gap-4">
                <img src={forest} alt="forest" className="w-20 h-20 rounded-md" />
                <div className="flex flex-col justify-around gap-1">
                    <p className="text-lg md:text-xl text-gray-800 font-semibold">Forest: Focus for Productivity</p>
                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <img src={download} alt="download" className="w-4 h-4" />
                            <p className="text-semibold text-[#00D390]">9M</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={star} alt="star" className="w-4 h-4" />
                            <p className="text-semibold text-[#FF8811]">5</p>
                        </div>
                        <p className="text-semibold text-[#627382]">259 MB</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-sm md:btn-md md:px-6 border-0 text-white bg-[#00D390] hover:bg-[#06a06f]">Uninstall</button>
        </div>
        <div className="w-full flex items-center justify-between p-2 md:p-4 rounded-lg bg-white">
            <div className="w-full flex items-center gap-2 md:gap-4">
                <img src={forest} alt="forest" className="w-20 h-20 rounded-md" />
                <div className="flex flex-col justify-around gap-1">
                    <p className="text-lg md:text-xl text-gray-800 font-semibold">Forest: Focus for Productivity</p>
                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <img src={download} alt="download" className="w-4 h-4" />
                            <p className="text-semibold text-[#00D390]">9M</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={star} alt="star" className="w-4 h-4" />
                            <p className="text-semibold text-[#FF8811]">5</p>
                        </div>
                        <p className="text-semibold text-[#627382]">259 MB</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-sm md:btn-md md:px-6 border-0 text-white bg-[#00D390] hover:bg-[#06a06f]">Uninstall</button>
        </div>
        <div className="w-full flex items-center justify-between p-2 md:p-4 rounded-lg bg-white">
            <div className="w-full flex items-center gap-2 md:gap-4">
                <img src={forest} alt="forest" className="w-20 h-20 rounded-md" />
                <div className="flex flex-col justify-around gap-1">
                    <p className="text-lg md:text-xl text-gray-800 font-semibold">Forest: Focus for Productivity</p>
                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <img src={download} alt="download" className="w-4 h-4" />
                            <p className="text-semibold text-[#00D390]">9M</p>
                        </div>
                        <div className="flex gap-1 items-center">
                            <img src={star} alt="star" className="w-4 h-4" />
                            <p className="text-semibold text-[#FF8811]">5</p>
                        </div>
                        <p className="text-semibold text-[#627382]">259 MB</p>
                    </div>
                </div>
            </div>
            <button className="btn btn-sm md:btn-md md:px-6 border-0 text-white bg-[#00D390] hover:bg-[#06a06f]">Uninstall</button>
        </div>
      </div>
    </div>
  );
};

export default Installed;
