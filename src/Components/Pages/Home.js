import React from 'react'
import NavBar from "../shared/NavBar"

import SearchFromNav from './SearchFromNav/SearchFromNav';
import SearchFromInput from './SearchFromInput/SearchFromInput';

function Home() {
    return (
        <div>
            <NavBar />      
            <SearchFromNav />
            <SearchFromInput />
            
        </div>
    )
};

export default Home;
