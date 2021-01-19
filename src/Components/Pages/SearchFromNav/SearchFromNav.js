import React, { useState, useEffect } from 'react';
//import '/SearchFromNav.scss';

import axios from 'axios';

import DisplayResults from '../../shared/DisplayResults/DisplayResults';

const SearchFromNav = () => {

    const [events, setEvents] = useState([]);
    const [clicked, setClicked] = useState('');
    console.log(events);
    console.log(clicked);

    // --- CATEGORIES - START --- //
    const categories = ['music', 'books', 'sport', 'learning languages', 'other'];
    
    const allCategories = categories.map(element => (
        <button
            className='categoryButton'
            onClick={() => setClicked(element)}>
            {element}
        </button>
    ));

    console.log(allCategories);

    //localhost:4014/events/search-events?category=sport

    useEffect(() => {

        const getCategory = async () => {
            try {
                const response = await axios.get(`/events/search-events?category=${clicked}`);
                setEvents(response.data);
                console.log(events);
            }
            catch (error) {
                console.log(error)
            }      
        }
        getCategory();

    }, [clicked]);

    // --- CATEGORIES - END --- //

    // --- ONLINE EVENTS - START --- //



    // --- CATEGORIES - END --- //

    return (
        <div>
            <p>Search From Nav</p>
            <div>
                {allCategories} 
                <button>online</button>
            </div>
            <DisplayResults listOfResults={events}/>
        </div>
    )
};

export default SearchFromNav;
