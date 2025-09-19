import React from 'react';
import HomeHero from './HomeHero';
import Ecosystem from './Ecosystem';
import Stats from './Stats';
import Pricing from './Pricing';
import Educatin from './Education';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
import Footer from '../Footer';


function HomePage() {
    return ( 
        <>
            <HomeHero />
            <Ecosystem />
            <Pricing />
            <Educatin />
            <OpenAccount />
        
        </>
     );
}

export default HomePage;