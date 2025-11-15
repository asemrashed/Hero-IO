import React, { createContext, Suspense, useState } from "react";
import Navbar from "../../components/header/Navbar";
import { Outlet } from "react-router";
import Footer from "../../components/footer/Footer";
import { getLocalData } from "../../utils/localStorage";

export const ThemeContext = createContext("");

const Root = () => {
  const storedApp = getLocalData();
  const [installedApp, setInstalledApp] = useState(storedApp || []);
  const contextValue = { installedApp, setInstalledApp };
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
