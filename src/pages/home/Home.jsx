import React, { useContext } from 'react';
import Hero from '../../components/hero/Hero';
import Review from '../../components/review/Review';
import Trending from '../../components/trending/Trending';
import { ThemeContext } from '../root/Root';
// import { ThemeContext } from '../apps/Layout';

const Home = () => {
  const apps = useContext(ThemeContext)
  const filtered = apps.slice(0,8)
    return (
        <div className='max-w-[1600px] min-h-[50vh] mx-auto flex flex-col'>
            <Hero />
            <Review />
            <Trending appsData={ filtered} />
        </div>
    );
};

export default Home;