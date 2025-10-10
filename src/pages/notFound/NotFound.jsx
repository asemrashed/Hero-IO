import React from 'react';

const NotFound = () => {
    return (
        <div className="w-full min-h-[60vh] flex items-center justify-center m-7">
            <div className='w-5xl h-70 flex flex-col items-center justify-center bg-red-100 rounded-xl'>
                <div className="text-4xl font-bold text-red-800">404</div>
                <div className="text-4xl font-bold text-red-700">Apps not found . . !</div>
            </div>
        </div>
    );
};

export default NotFound;