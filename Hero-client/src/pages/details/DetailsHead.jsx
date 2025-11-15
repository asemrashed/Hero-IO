import React, { useContext, useState } from 'react';
import dwonload from "../../assets/icon-downloads.png";
import star from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";
import { ThemeContext } from '../root/Root';
import { ToastContainer, toast } from 'react-toastify'
import { addToLocal }from '../../utils/localStorage';

const DetailsHead = ({ app }) => {
  const { installedApp, setInstalledApp } = useContext(ThemeContext)
  const installedLocally = installedApp.find(a => a.id === app.id)? true:false
  const [installed, setInstall] = useState(installedLocally? true:false)
  const handleInstall = (data) => {
    if (!installed) {
      setInstall(true)
      setInstalledApp([...installedApp, data])
      toast(`${data.title} Installing`)
      addToLocal(data.id)
    }
  }
    return (
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
          <div className="flex items-center justify-center bg-white w-2/3 md:w-1/4 min-h-[300px] rounded-md">
            <img src={app.image} alt={app.title} className="p-3 md:p-6" />
          </div>
          <div className="flex-grow flex flex-col justify-between gap-2 md:gap-4">
            <h2 className="text-xl md:text-3xl font-bold text-[#001931]">
              {app.title}
            </h2>
            <p className="text-md md:text-xl text-gray-500">
              Developed by{" "}
              <span className="font-semibold text-[#9F62F2]">
                {app.companyName}
              </span>
            </p>
            <hr className="text-gray-300" />
            <div className="flex items-center gap-3 md:gap-10">
              <div className="flex flex-col justify-between gap-2 md:gap-4">
                <img
                  src={dwonload}
                  alt="download"
                  className="h-5 md:h-10 w-5 md:w-10"
                />
                <p className="text-[#001931] text-sm md:text-md">Downloads</p>
                <h1 className="text-2xl md:text-4xl font-bold">
                  {app.downloads}
                </h1>
              </div>
              <div className="flex flex-col justify-between gap-2 md:gap-4">
                <img
                  src={star}
                  alt="star"
                  className="h-5 md:h-10 w-5 md:w-10"
                />
                <p className="text-[#001931] text-sm md:text-md">
                  Average Ratings
                </p>
                <h1 className="text-2xl md:text-4xl font-bold">
                  {app.ratingAvg}
                </h1>
              </div>
              <div className="flex flex-col justify-between gap-2 md:gap-4">
                <img
                  src={review}
                  alt="review"
                  className="h-5 md:h-10 w-5 md:w-10"
                />
                <p className="text-[#001931] text-sm md:text-md">
                  Total Review
                </p>
                <h1 className="text-xl md:text-4xl font-bold">{app.reviews}</h1>
              </div>
            </div>
            <div>
              <button
               onClick={()=> handleInstall(app)}
               className={`btn  btn-sm md:btn-md md:px-6 border-0 text-white bg-${installed? 'gray-400':'[#00D390]'} cursor-${installed?'not-allowed':'pointer'} hover:bg-${installed?'gray-400':'[#06a06f]'}`}>
                {!installed? `Install Now (${app.size}MB)`: 'Installed'}
              </button>
              <ToastContainer />
            </div>
        </div>
        </div>
    );
};

export default DetailsHead;