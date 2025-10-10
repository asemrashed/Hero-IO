import React, { createContext } from 'react';
import Navbar from '../../components/header/Navbar';
import { Outlet, useLoaderData } from 'react-router';
import Footer from '../../components/footer/Footer';

export const ThemeContext = createContext('')

const Root = () => {
    const appsData = useLoaderData('')
    const contextValue = appsData
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