import React from 'react';
import play from '../../assets/play.png'
import apple from '../../assets/apple.png'
import hero from '../../assets/hero.png'

const Hero = () => {
    const textColor = "bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent";
    return (
        <div className='w-full mx-auto'>
            <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-5 md:gap-10 text-center px-5 md:px-20 pt-5 md:pt-20">
                <h1 className="text-4xl md:text-7xl font-bold"> We Build <br /> <span className={textColor}>Productive</span> Apps</h1>
                <p className="text-md md:text-xl text-[#627382] w-full md:w-[70%]">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex gap-5">
                    <button className='btn btn-sm md:btn-lg btn-ghost border-gray-300 hover:bg-gray-200 hover:text-black'>
                        <img src={play} alt="playStore" className='w-5 h-5 md:w-8 md:h-8' />
                        Google Play
                    </button>
                    <button className='btn btn-sm md:btn-lg btn-ghost border-gray-300 hover:bg-gray-200 hover:text-black'>
                        <img src={apple} alt="appleStore" className='w-5 h-5 md:w-8 md:h-8'/>
                        App Store
                    </button>
                </div>
                <div className="flex items-center justify-center w-full md:w-[70%]">
                    <img src={hero} alt="hero" />
                </div>
            </div>
        </div>
    );
};

export default Hero;