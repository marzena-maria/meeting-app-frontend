import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from "../shared/NavBar"
import Slider from '../Slider/Slider';
import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';
import DisplayResults from '../shared/DisplayResults/DisplayResults';
import Maps from './Maps/Maps';
import Footer from "../shared/Footer"

function Home() {
    const [events, setEvents] = React.useState([]);
    return (
        <div>
            <NavBar />  
            <Slider />
            <SearchFromNav setEvents={setEvents} />
            <SearchFromInput setEvents={setEvents} />
            <DisplayResults 
                listOfResults={events}/>
            <Link to='/event-form'>Create New Event</Link>
            <Maps /> 
            <Footer />      
        </div>
    )

};

export default Home;
