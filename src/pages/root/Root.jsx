import React, { createContext, Suspense, useState } from "react";
import Navbar from "../../components/header/Navbar";
import { Outlet, useLoaderData } from "react-router";
import Footer from "../../components/footer/Footer";
import { getLocalData } from "../../utils/localStorage";

export const ThemeContext = createContext("");

const Root = () => {
  const appsData = useLoaderData();
  const storedApp = getLocalData();
  const storedAppData = storedApp
    .map((appId) => appsData.find((app) => appId === app.id))
    .filter((app) => app !== undefined);
  const [installedApp, setInstalledApp] = useState(storedAppData);
  const contextValue = { appsData, installedApp, setInstalledApp };
  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="w-full h-200 bg-gray-600 text-5xl">Loading...</div>
        }
      >
        <div className="max-w-[1600px] mx-auto bg-[#F1F5E8]">
          <ThemeContext.Provider value={contextValue}>
            <Outlet />
          </ThemeContext.Provider>
        </div>
      </Suspense>
      <Footer />
    </>
  );
};

export default Root;
