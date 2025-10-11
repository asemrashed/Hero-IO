import React, { createContext, useState } from 'react';
import Navbar from '../../components/header/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../../components/footer/Footer';
import { getLocalData } from '../../utils/localStorage';

export const ThemeContext = createContext('')

const Root = () => {
    const appsData = useLoaderData('')
    const storedApp = getLocalData()
    const storedAppData = storedApp
        .map(appId => appsData.find(app => appId === app.id))
        .filter(app => app !== undefined)
    const [installedApp, setInstalledApp] = useState(storedAppData)
    const contextValue = {appsData, installedApp, setInstalledApp}
    return (
        <>
            <Navbar />
            <div className='max-w-[1600px] mx-auto bg-[#F1F5E8]'>
                <ThemeContext value={contextValue}>
                    <Outlet />
                </ThemeContext>
            </div>
            <Footer />
        </>
    );
};

export default Root;