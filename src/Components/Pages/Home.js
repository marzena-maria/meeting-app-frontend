import React from 'react'
import NavBar from "../shared/NavBar"
import Slider from '../Slider/Slider';
import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';
import DisplayResults from '../shared/DisplayResults/DisplayResults';
import Maps from './Maps/Maps';
import Footer from "../shared/Footer"
import DisplayOnline from "../DisplayOnline";
import { Link } from 'react-router-dom';


function Home() {
    const [events, setEvents] = React.useState([]);
    // const [id, setId] = useState('');

    return (
        <div>
            <NavBar />  
            <Slider />
            <SearchFromNav events={events} setEvents={setEvents} />
            <SearchFromInput setEvents={setEvents} />
            <DisplayResults 
                // setId={setId}
                listOfResults={events}
                />
            <Link to='/event-form'>Create New Event</Link>
            {/* <DisplayResults 
                listOfResults={events} /> */}
            {/* <Maps />  */}
            {/* <DisplayHealth /> */}
            <Footer />      
        </div>
    )

};

export default Home;
