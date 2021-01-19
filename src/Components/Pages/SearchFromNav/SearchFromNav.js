import React, { useState, useEffect } from 'react';
//import '/SearchFromNav.scss';

import axios from 'axios';

import DisplayResults from '../../shared/DisplayResults/DisplayResults';

const SearchFromNav = () => {

    const [events, setEvents] = useState([]);
    const [clicked, setClicked] = useState('');
    const [category, setCategory] = useState('');
    console.log(events);
    console.log(category);

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


    return (
        <div>
            <p>Search From Nav</p>
            {allCategories}
            <DisplayResults listOfResults={events}/>
        </div>
    )
};

export default SearchFromNav;
