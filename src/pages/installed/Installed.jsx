import React, { useContext } from "react";
import { ThemeContext } from "../root/Root";
import { ToastContainer, toast } from "react-toastify";
import { removeFromLocal } from "../../utils/localStorage";
import InstalledCard from "../../components/InstalledCard";

const Installed = () => {
  const { installedApp, setInstalledApp } = useContext(ThemeContext);
  const handleUninstall = (data) => {
    const filtered = installedApp.filter((app) => app.id !== data.id);
    setInstalledApp(filtered);
    removeFromLocal(data.id)
    toast(`${data.title} Unstalling`);
  };
  const handleSort =(type)=>{
    if(type === "Low-High"){
        const sorted = [...installedApp].sort((a, b) => a.installed - b.installed);
        setInstalledApp(sorted);
    }else{
        const sorted = [...installedApp].sort((a, b) => b.installed - a.installed);
        setInstalledApp(sorted);
    }
    
  }
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Your Installed Apps</h2>
      <p className="text-lg md:text-xl text-[#627382] text-center md:text-left">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="w-full flex items-center justify-between">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-gray-800">
          {installedApp.length} Apps Found
        </h1>
        <div className="flex-1 flex justify-end">
          <select
            defaultValue="Sort by size"
            className="select bg-[#F1F5E8] border border-[#D2D2D2]"
          >
            <option disabled={true}>Sort by size</option>
            <option onClick={()=> handleSort('High-Low')} className="hover:bg-white!">High-Low</option>
            <option onClick={()=> handleSort('Low-High')} className="hover:bg-white!">Low-High</option>
          </select>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 md:gap-4">
        {installedApp.map((app) => <InstalledCard key={app.id} handleUninstall={handleUninstall} appData={app}/>)}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installed;
