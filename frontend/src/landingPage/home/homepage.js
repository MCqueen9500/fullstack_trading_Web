import React from 'react';
import Education from './education';
import Hero from './hero';
import Navbar from '../navBar';
import Awards from './Awards';
import Stats from './stats';
import Pricing from './pricing';
import OpenAcc from '../openAccount';
import Footer from '../footer';
function HomePage() {
    return ( 
        <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Awards></Awards>
        <Stats></Stats>
        <Pricing></Pricing>
        <Education></Education>
        <OpenAcc></OpenAcc>
        <Footer></Footer>
        </>
     );
}

export default HomePage;