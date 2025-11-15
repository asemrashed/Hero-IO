import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { removeFromLocal } from "../../utils/localStorage";
import InstalledCard from "../../components/InstalledCard";
import { getLocalData } from "../../utils/localStorage";

const Installed = () => {
  const [installedIds, setInstalledIds] = useState([]);     // only IDs
  const [installedApps, setInstalledApps] = useState([]);   // fetched app data
console.log('installedApps', installedApps);
  useEffect(() => {
    const ids = getLocalData();    
    setInstalledIds(ids);
  }, []);
  useEffect(() => {
    if (installedIds.length === 0) {
      setInstalledApps([]);
      return;
    }

    const fetchApps = async () => {
      try {
        const results = await Promise.all(
          installedIds.map(id =>
            fetch(`${import.meta.env.VITE_SERVER_URL}/apps/${id}`).then(res => res.json())
          )
        );
        setInstalledApps(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApps();
  }, [installedIds]);   

  const handleUninstall = (app) => {
    const updatedIds = installedIds.filter(id => id !== app._id);

    setInstalledIds(updatedIds); 
    removeFromLocal(app._id);
    toast(`${app.title} Uninstalled`);
  };

  const handleSort = (type) => {
    if (type === "Low-High") {
      setInstalledApps([...installedApps].sort((a, b) => a.rating - b.rating));
    } else {
      setInstalledApps([...installedApps].sort((a, b) => b.rating - a.rating));
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Your Installed Apps</h2>
      <p className="text-lg md:text-xl text-[#627382] text-center md:text-left">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="w-full flex items-center justify-between">
        <h1 className="flex-1 text-lg md:text-2xl font-bold text-gray-800">
          {installedApps.length} Apps Found
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
        {installedApps.map((app) => <InstalledCard key={app._id} handleUninstall={handleUninstall} appData={app}/>)}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Installed;
