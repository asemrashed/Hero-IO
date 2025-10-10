import React from "react";
import { useLoaderData } from "react-router";
import DetailsHead from "./DetailsHead";
import Chart from "./Chart";

const Details = () => {
  const app = useLoaderData("");
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="max-w-[1440px] flex flex-col gap-7 md:gap-10 p-5 md:p-20">
        <DetailsHead app={app}/>
        <hr className="text-gray-300"/>
        <Chart app={app}/>
        <hr className="text-gray-300"/>
        <div className="flex flex-col gap-3 md:gap-5">
            <h2 className="text-lg md:text-2xl font-bold">Description</h2>
            <p className="text-md md:text-xl text-[#627382]">{ app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
