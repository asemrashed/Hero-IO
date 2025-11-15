import React from "react";
import AppCard from "../AppCard";
import { Link } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../loader/Loader";

const Trending = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading]= useState(false);
  useEffect(()=>{
    try{
      setLoading(true);
      fetch(`${import.meta.env.VITE_SERVER_URL}/apps?limit=8&skip=0&sort=rating&order=desc`)
        .then(res=>res.json())
        .then(data=>{
          setAppsData(data.apps)
          setLoading(false);
        })  
    }catch(err){
      console.log(err);
      setLoading(false);
    }
  },[])
  const textColor = "bg-gradient-to-br from-[#632EE3] to-[#9F62F2]";
  if(loading) return <Loader/>
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Trending Apps</h2>
      <p className="text-lg md:text-xl text-[#627382]">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {appsData.map((app) => {
          return <AppCard key={app.id} app={app}/>
        })}
      </div>
      <Link
        to={'/apps'}
        className={`btn btn-sm md:btn-md md:px-7 border-0 ${textColor} hover:from-[#5328D1] hover:to-[#8A52D9] transition-all duration-200`}
      >
        Show All
      </Link>
    </div>
  );
};

export default Trending;
