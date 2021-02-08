import React from 'react'
import NavBar from "../shared/NavBar"
import Slider from '../Slider/Slider';
import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';
import DisplayResults from '../shared/DisplayResults/DisplayResults';
import Maps from './Maps/Maps';
import { Link } from 'react-router-dom';
import Footer from "../shared/Footer"
import DisplayOnline from "../DisplayOnline";


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
            <Link to='/event-form'>Create New Event</Link>
            <Maps /> 
            {/* <DisplayHealth /> */}
            <Footer />      
        </div>
    )

};

export default Home;
