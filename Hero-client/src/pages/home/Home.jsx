import React from 'react';
import Hero from '../../components/hero/Hero';
import Review from '../../components/review/Review';
import Trending from '../../components/trending/Trending';

const Home = () => {
    return (
        <div className='max-w-[1600px] min-h-[50vh] mx-auto flex flex-col'>
            <Hero />
            <Review />
            <Trending />
        </div>
    );
};

export default Home;