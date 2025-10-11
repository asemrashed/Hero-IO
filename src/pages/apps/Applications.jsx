import React, { useContext, useState } from "react";
import AppCard from "../../components/AppCard";
import { ThemeContext } from "../root/Root";

const Applications = () => {
  const { appsData } = useContext(ThemeContext);
  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Our All Applications</h2>
      <p className="text-lg md:text-xl text-[#627382] text-center md:text-left">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      {/* Search header */}
      <div className="w-full flex items-center justify-between">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-gray-800">
          {filteredApps.length} Apps Found
        </h1>

        <div className="flex-1 flex justify-end">
          <label className="input bg-[#F1F5E8] border border-[#D2D2D2] flex items-center gap-2 px-3 py-2 rounded-md">
            <svg
              className="h-5 w-5 opacity-50"
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
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search apps..."
              className="bg-transparent outline-none w-full text-gray-700 placeholder:text-gray-400"
            />
          </label>
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          {filteredApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-3 text-center py-10 text-gray-500 text-xl md:text-4xl font-bold">
          No App Found
        </div>
      )}
    </div>
  );
};

export default Applications;
