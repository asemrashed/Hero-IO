import React from 'react';
import notFound from '../../assets/App-Error.png'
import { Link } from 'react-router';

const NotFound = () => {
    const textColor = "bg-gradient-to-br from-[#632EE3] to-[#9F62F2]";

    return (
        <div className="w-full flex items-center justify-center">
            <div className='max-w-[1440px] mx-auto flex flex-col py-5 md:py-20 gap-3 md:gap-5 items-center justify-centerrounded-xl'>
                <div className="">
                    <img src={notFound} alt="not found" />
                </div>
                <div className="text-2xl md:text-5xl font-semibold text-{#001931}">OPPS!! APP NOT FOUND</div>
                <p className='text-md md:text-xl text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link 
                    to={'/apps'}
                    className={`btn btn-sm md:btn-md md:px-7 border-0 ${textColor} hover:from-[#5328D1] hover:to-[#8A52D9] transition-all duration-200`}
                >
                    Go Back!
                </Link>
            </div>
        </div>
    );
};

export default NotFound;