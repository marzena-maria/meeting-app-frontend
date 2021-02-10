import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import  { debounce } from 'lodash';
import Input from './Input/Input';

const SearchFromInput = () => {

    const [events,setEvents] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [visible, setVisible] = useState(0);

    //console.log(inputValue);
    //console.log(events);

    const handleGetEvents = async inputValue => {
        try {
            const response = await axios.get(`/events/search-events/name/${inputValue}/3/0`);
            setEvents(response.data);
                 setVisible(1)
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

    const handleClick = async () => {
        try {
            setVisible(visible + 1);
            const response = await axios.get(
              `/events/search-events/name/${inputValue}/1/${visible}`
            );
            //   console.log(response);
            setEvents(events.concat(response.data));
            console.log(visible);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Input onChange={value => setInputValue(value)} />  
            <div className="resultsContainer">
            <ul className="displayResults">
                {events.length ? (
                events.map((eventData) => (
                    <div>
                        <li key={eventData._id}>
                            <span>{eventData.eventName}</span>    
                            <span>{`${eventData.city} - ${eventData.place}`}</span> 
                            <span>{new Date(eventData.startingDate).toDateString()}</span> 
                            <Link 
                                to={`/event/${eventData._id}`}
                                className='link'>
                                    See this event
                            </Link>                            
                        </li>
                    </div>
                ))
                ) : (
                <p></p>
                )}
                {events.length && <button onClick={handleClick}>See More</button>}
            </ul>
            </div>      
        </div>
    )

};

export default SearchFromInput;