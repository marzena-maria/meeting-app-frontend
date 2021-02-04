import React from 'react';
import './DisplayResults.scss';
import { Link } from 'react-router-dom';

const DisplayResults = ({ listOfResults }) => {

    console.log(listOfResults);

    return (
        // <div className='resultsContainer'>
            
        <ul className='displayResults'>
            { listOfResults.length ? (
                    listOfResults.map(eventData => (
                        <li key={eventData._id}> 
                            <span>{eventData.eventName}</span>    
                            <span>{`${eventData.city} -
                            ${eventData.place}`}</span> 
                            <span>{eventData.startingDate}</span> 
                            <Link 
                                to={`/event/${eventData._id}`}
                                className='link'>
                                    See this event
                            </Link>                            
                        </li>
                ))) : <p>No result</p>
            }
        </ul>
        // </div>
    )
};

export default DisplayResults;