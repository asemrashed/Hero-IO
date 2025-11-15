import React from 'react';

const Loader = () => {
    return (
        <div className='w-full min-h-[70vh] flex flex-col items-center justify-center gap-5'>
            <h1 className="text-2xl md:text-5xl font-bold text-primary">Loading</h1>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loader;