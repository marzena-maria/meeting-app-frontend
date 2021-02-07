import React,{useState} from 'react';
// scss

const DisplayResults = ({ listOfResults}) => {
    const [visible,setVisible] = useState(1);

    console.log(listOfResults);
    const handleClick = () => {
        setVisible((prevValue)=>prevValue + 1);
     
        console.log(visible)
      };
     
      

    return (
        <div className='resultsContainer'>
            
            <ul className='displayResults'>
                { listOfResults.length ? (
                        listOfResults.slice(0,visible).map(eventData => (
                            <div>
                            <li key={eventData._id}> 
                                <p>{eventData.eventName}</p>   
                                <p>{eventData.startingDate}</p>
                                <p>{eventData.category}</p>  
                                                       
                            </li>
                               
                            </div>
                    )) ) : <p></p>
                   
                }
              {listOfResults.length > 0 && <button onClick={handleClick}>See More</button>}
            </ul>
      
        </div>
    )
};

export default DisplayResults;