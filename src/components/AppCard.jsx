import React from "react";
import download from "../assets/icon-downloads.png";
import star from "../assets/icon-ratings.png";
import { Link, useNavigate } from "react-router";

const AppCard = ({app}) => {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`${app.id}`)}
      className="flex flex-col justify-between gap-5 rounded-lg bg-white p-3 cursor-pointer hover:translate-y-[-5px] duration-200"
    >
      <div className="flex items-center justify-center h-[166px]">
        <img src={app.image} alt={app.companyName} className="h-full" />
      </div>
      <p className="text-lg md:text-xl font-semibold text-gray-800">
        {app.title}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center p-1 gap-1 bg-[#F1F5E8] rounded-md">
          <img src={download} alt="download" className="w-4" />
          <p className="text-sm md:text-md text-[#00D390] font-semibold">
            {app.downloads}
          </p>
        </div>
        <div className="flex items-center p-1 gap-1 bg-[#FFF0E1] rounded-md">
          <img src={star} alt="star" className="w-4" />
          <p className="text-sm md:text-md text-[#FF8811] font-semibold">
            {app.ratingAvg}
          </p>
        </div>
      </div>
      </div>
  );
};

export default AppCard;
