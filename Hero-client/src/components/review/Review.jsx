import React from 'react';

const Review = () => {
  const textColor = "bg-gradient-to-br from-[#632EE3] to-[#9F62F2]";

    return (
        <div className={`w-full mx-auto ${textColor} text-white`}>
            <div className="flex flex-col items-center justify-center p-5 md:p-20 gap-5 md:gap-10">
                <h1 className="text-2xl md:text-5xl font-bold text-center">Trusted by Millions, Built for You</h1>
                <div className="flex items-center justify center gap-5 md:gap-40">
                    <div className="flex flex-col gap-1 md:gap-4 text-center">
                        <p className='text-sm md:text-md'>Total Downloads</p>
                        <h1 className="text-3xl md:text-6xl font-bold">29.6M</h1>
                        <p className='text-sm md:text-md'>21% more than last month</p>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-4 text-center">
                        <p className='text-sm md:text-md'>Total Reviews</p>
                        <h1 className="text-3xl md:text-6xl font-bold">906K</h1>
                        <p className='text-sm md:text-md'>46% more than last month</p>
                    </div>
                    <div className="flex flex-col gap-1 md:gap-4 text-center">
                        <p className='text-sm md:text-md'>Active Apps</p>
                        <h1 className="text-3xl md:text-6xl font-bold">132+</h1>
                        <p className='text-sm md:text-md'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;