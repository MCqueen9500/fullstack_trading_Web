import React from 'react';
import Navbar from '../navBar';
import Hero from './hero';
import Brokerage from './brokerage';
import OpenAcc from '../openAccount';
import Footer from '../footer';
function PricingPage() {
    return ( <>
    <Navbar></Navbar>
    <Hero></Hero>
    <Brokerage></Brokerage>
    <OpenAcc></OpenAcc>
    <Footer></Footer></>
     );
}

export default PricingPage;