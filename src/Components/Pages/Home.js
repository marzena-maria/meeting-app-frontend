import React from 'react'
import NavBar from "../shared/NavBar"
import Slider from '../Slider/Slider';
import { Link } from "react-router-dom";
import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';
import DisplayResults from '../shared/DisplayResults/DisplayResults';

import Footer from "../shared/Footer"
import DisplayOnline from "../DisplayOnline";
import Maps from '../Pages/Maps/Maps';


function Home() {
    // const [events, setEvents] = React.useState([]);
    return (
        <div>
            <NavBar />  
            <Slider />
            <SearchFromNav  />
            <SearchFromInput />
            {/* <DisplayResults 
                listOfResults={events} /> */}
            <Maps /> 
            {/* <DisplayHealth /> */}
            <Footer />      
        </div>
    )

};

export default Home;
