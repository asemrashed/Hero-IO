import React, { Suspense, useState } from "react";
import AppCard from "../../components/AppCard";
import { ThemeContext } from "../root/Root";
import { useEffect } from "react";

const Applications = () => {
  const [ search, setSearch] = useState("");
  const [ apps, setApps] = useState([]);
  const [ totalApps, setTotalApps]= useState(0);
  const [ currentPage, setCurrentPage]= useState(0);
  const [ totalPages, setTotalPages]= useState(0);
  const [ sort, setSort] = useState('downloads')
  const [ order, setOrder] = useState('desc')
  const limit= 12;
  useEffect(()=>{
    fetch(`${import.meta.env.VITE_SERVER_URL}/apps?limit=${limit}&skip=${currentPage*limit}&sort=${sort}&order=${order}&search=${search}`)
      .then(res=>res.json())
      .then(data=>{
        setTotalApps(data.totalApps);
        setApps(data.apps);
      })
      .catch(err=>console.log(err))
    
    setTotalPages(Math.ceil(totalApps/limit));
    
  },[currentPage, totalApps, sort, order, search]);

  const handleSorting = (e) =>{
    const value = e.target.value;
    const [getSort, getOrder] = value.split("-");
    setSort(getSort);
    setOrder(getOrder);
  }
  // const filteredApps = apps.filter((app) =>
  //   app.title.toLowerCase().includes(search.toLowerCase())
  // );
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center p-5 md:p-20 gap-3 md:gap-6">
      <h2 className="text-2xl md:text-5xl font-bold">Our All Applications</h2>
      <p className="text-lg md:text-xl text-[#627382] text-center md:text-left">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>

      <div className="w-full flex items-center justify-between">
        <h1 className="text-lg md:text-2xl font-bold text-gray-800">
          {totalApps} Apps Found
        </h1>

        <div className="min-w-70">
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
        <div 
          onChange={handleSorting}
          className="w-60"
        >
          <select className="select bg-[#F1F5E8] border border-[#D2D2D2] flex items-center gap-2 px-3 py-2 rounded-md">
            <option selected disabled={true}>
              Sort by <span className="text-xs">R / S / D</span>
            </option>
            <option value={"rating-desc"}>Ratings : High - Low</option>
            <option value={"rating-asc"}>Ratings : Low - High</option>
            <option value={"size-desc"}>Size : High - Low</option>
            <option value={"size-asc"}>Size : Low - High</option>
            <option value={"downloads-desc"}>Downloads : High - Low</option>
            <option value={"downloads-asc"}>Downloads : Low - High</option>
          </select>
        </div>
      </div>

      {apps.length > 0 ? (
        <>
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
          <Suspense fallback='<span className="loading loading-ball loading-xl"></span>'>
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </Suspense>
        </div>
        <div className="flex col-span-2 flex-wrap gap-2 my-5">
            {currentPage > 0 && 
            <button 
              onClick={()=> setCurrentPage(currentPage-1)}
              className="btn btn-info"
            >pre
            </button>}
            {[...Array(totalPages).keys()].map((i) => 
            <button 
              onClick={() => setCurrentPage(i)}
              className={`btn ${currentPage==i && 'btn-primary'}`} 
              key={i}>
                {i+1}
            </button>
            )}
            {currentPage < totalPages -1 && 
            <button 
              onClick={()=> setCurrentPage(currentPage +1)}
              className="btn btn-info"
            >pre
            </button>}
          </div>
        </>
      ) : (
        <div className="w-full flex flex-col items-center justify-center gap-3 text-center py-10 text-gray-500 text-xl md:text-4xl font-bold">
          No App Found
        </div>
      )}
    </div>
  );
};

export default Applications;
