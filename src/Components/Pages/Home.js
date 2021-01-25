import React from 'react'
import NavBar from "../shared/NavBar"

import SearchFromInput from './SearchFromInput/SearchFromInput';
import SearchFromNav from './SearchFromNav/SearchFromNav';
import DisplayResults from '../shared/DisplayResults/DisplayResults';

function Home() {
    const [events, setEvents] = React.useState([]);
    return (
        <div>
            <NavBar />  

            <SearchFromNav setEvents={setEvents} />
            <SearchFromInput setEvents={setEvents} />
            <DisplayResults 
                listOfResults={events}/>
        </div>
    )

};

export default Home;
