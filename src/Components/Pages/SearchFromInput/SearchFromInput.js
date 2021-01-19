import React, { useState, useEffect, useCallback } from 'react';
//import '/SearchFromInput.scss';

import axios from 'axios';
import  { debounce } from 'lodash';

import Input from './Input/Input';
import DisplayResults from '../../shared/DisplayResults/DisplayResults';

const SearchFromInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [events, setEvents] = useState([]); 

    //console.log(inputValue);
    //console.log(events);

    const handleGetEvents = async inputValue => {
        try {
            const response = await axios.get(`/events/search-events/${inputValue}`);
            setEvents(response.data);
        }
            catch(error) {
            console.log(error)
        }
    };

    const handleDelay = useCallback(
        debounce
        (query => handleGetEvents(query), 700),
    []);

    useEffect(() => {
        handleDelay(inputValue);
    }, [inputValue, handleDelay]);

    console.log(events);

    return (
        <div>
            <Input onChange={value => setInputValue(value)} />
            <DisplayResults listOfResults={events}/>
        </div>
    )

};

export default SearchFromInput;