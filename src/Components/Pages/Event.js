import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Event = () => {

    const [singleEvent, setSingleEvent] = useState({});
    const { eventId } = useParams()

    const getEvent = async () => {
        try { 
            const response = await axios.get(`/events/get-event/${eventId}`);
            setSingleEvent(response.data);
            // console.log(singleEvent.event.startingDate.toDateString())
        }
        catch(error) {
            console.log(error)
        }
    }

    useEffect( () => getEvent(), []);

    return (
        <div className='eventContainer'>
            <Link to='/'>Go back to the Homepage</Link>
            <div className='singleEvent'>
                <div className='singleEventBasicData'>
                    <span>{singleEvent.event?.startingDate}</span>
                    <span>{`${singleEvent.event?.timeFrom} - ${singleEvent.event?.timeTo}`}</span>
                    <h1>{singleEvent.event?.eventName}</h1>
                    <p>Host: ADD HOST HERE</p>
                </div>
                <div className='singleEventDetailedData'>
                    <p>Details</p>
                    <p>{singleEvent.event?.description}</p>
                    <div>
                        <p>Address: 
                            {`${singleEvent.event?.place}, 
                            ${singleEvent.event?.street}, 
                            ${singleEvent.event?.postalCode}, 
                            ${singleEvent.event?.city}, ${singleEvent.event?.country}`}
                        </p>
                    </div>
                    <div>
                        <p>{singleEvent.event?.category}</p>
                        <span>ADD ICON HERE</span>
                    </div>
                    <div>PARTICIPANTS</div> 
                    <button>JOIN THIS EVENT</button>               
                </div>
            </div>
        </div>
    )
}

export default Event;