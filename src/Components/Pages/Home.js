import React from 'react'
import NavBar from "../shared/NavBar"

import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';
import Footer from "../shared/Footer"
import Slider from "../Slider/Slider"


function Home() {
    return (
        <div>
            <NavBar />  
            < Slider />
            <SearchFromNav />
            <SearchFromInput /> 
            <Footer />      
        </div>
    )
};

export default Home;
