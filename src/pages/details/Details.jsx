import React from "react";
import { useLoaderData } from "react-router";
import DetailsHead from "./DetailsHead";

const Details = () => {
  const app = useLoaderData("");
  return (
    <div className="max-w-[1600px] mx-auto">
      <div className="max-w-[1440px] flex flex-col gap-7 md:gap-10 p-5 md:p-20">
        <DetailsHead app={app}/>
      </div>
    </div>
  );
};

export default Details;
