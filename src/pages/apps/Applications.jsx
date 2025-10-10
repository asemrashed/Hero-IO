import React, { useContext } from "react";
import AppCard from "../../components/AppCard";
import { ThemeContext } from "../root/Root";
// import { ThemeContext } from "./Layout";

const Applications = () => {
  const appsData = useContext( ThemeContext )
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Our All Applications</h2>
      <p className="text-lg md:text-xl text-[#627382] text-center md:text-left">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="w-full flex items-center justify-between">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-gray-800">
          {appsData.length} Apps Found
        </h1>
        <div className="flex-1 flex justify-end">
          <label className="input bg-[#F1F5E8] border border-[#D2D2D2]">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {appsData.map((app) => {
          return <AppCard key={app.id} app={app} />
        })}
      </div>
    </div>
  );
};

export default Applications;
