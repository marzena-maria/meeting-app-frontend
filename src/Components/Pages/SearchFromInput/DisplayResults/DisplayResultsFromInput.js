import React from 'react';
// scss

const DisplayResultsFromInput = ({ listOfResults }) => {

    console.log(listOfResults)

    return (
        <div className='resultsContainer'>
            
            <ul className='displayResults'>
                { listOfResults.length ? (
                        listOfResults.map(eventData => (
                            <li key={eventData._id}> 
                                <p>{eventData.eventName}</p>   
                                <span>{eventData.startingDate}</span>  
                                {/* <span>{eventData.}</span>                              */}
                            </li>
                    ))) : <p>No result</p>
                }
            </ul>
        </div>
    )
};

export default DisplayResultsFromInput;