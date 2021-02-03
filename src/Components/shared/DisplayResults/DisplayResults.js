import React from 'react';
import './DisplayResults.scss';

const DisplayResults = ({ listOfResults }) => {

    console.log(listOfResults);

    return (
        // <div className='resultsContainer'>
            
        <ul className='displayResults'>
            { listOfResults.length ? (
                    listOfResults.map(eventData => (
                        <li key={eventData._id}> 
                            <p>{eventData.eventName}</p>   
                            <p>{eventData.startingDate}</p>  
                            <p>{eventData.category}</p>                             
                        </li>
                ))) : <p>No result</p>
            }
        </ul>
        // </div>
    )
};

export default DisplayResults;