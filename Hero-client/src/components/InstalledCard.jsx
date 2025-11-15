import React from 'react';
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";

const InstalledCard = ({appData,handleUninstall}) => {
    return (
        <div
              key={appData.id}
              className="w-full flex items-center justify-between p-2 md:p-4 rounded-lg bg-white"
            >
              <div className="w-full flex items-center gap-2 md:gap-4">
                <img
                  src={appData.image}
                  alt={appData.title}
                  className="w-20 h-20 rounded-md"
                />
                <div className="flex flex-col justify-around gap-1">
                  <p className="text-lg md:text-xl text-gray-800 font-semibold">
                    {appData.title}y
                  </p>
                  <div className="flex gap-3">
                    <div className="flex gap-1 items-center">
                      <img src={download} alt="download" className="w-4 h-4" />
                      <p className="text-semibold text-[#00D390]">
                        {appData.downloads}
                      </p>
                    </div>
                    <div className="flex gap-1 items-center">
                      <img src={star} alt="star" className="w-4 h-4" />
                      <p className="text-semibold text-[#FF8811]">
                        {appData.ratingAvg}
                      </p>
                    </div>
                    <p className="text-semibold text-[#627382]">
                      {appData.size} MB
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(appData)}
                className="btn btn-sm md:btn-md md:px-6 border-0 text-white bg-[#00D390] hover:bg-[#06a06f]"
              >
                Uninstall
              </button>
            </div>
    );
};

export default InstalledCard;