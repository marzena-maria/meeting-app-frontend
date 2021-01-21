import React, { useState, useEffect } from 'react';
//import '/SearchFromNav.scss';

import axios from 'axios';

import DisplayResults from '../../shared/DisplayResults/DisplayResults';

const SearchFromNav = () => {

    const [events, setEvents] = useState([]);

    const categories = ['music', 'books', 'sport', 'learning languages', 'other', 'online'];

    const getCategory = async (category) => {
        try {
            let response;
            switch(category) {
                case 'online':
                    response = await axios.get(`/events/search-events/online`);
                    break;
                // case 'location':
                //     response = await axios.get(`/events/search-events/location/${location}`);
                //     break;
                    default:
                    response = await axios.get(`/events/search-events/category/${category}`);
                    break;
            }
            setEvents(response.data);
        }
        catch (error) {
            console.log(error)
        }      
    }



    return (
        <div>
            <div>
                {categories.map(category => (
                <button
                    className='categoryButton'
                    onClick={() => getCategory(category)}>
                    {category}
                </button>))}
            </div>
            <DisplayResults 
                listOfResults={events}/>
        </div>
    )
};

export default SearchFromNav;
