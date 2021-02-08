import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Event = () => {

    const [singleEvent, setSingleEvent] = useState({});
    const { eventId } = useParams();
    const [attended, setAttended] = useState(false);

    const attendEvent = async () => {
        try {
            const response = await axios.get(`/user/attend-an-event/${eventId}` ,{withCredentials: true} );
            console.log(response.data);
            if(response.data.user); {
                setAttended(true);
            }       
        } catch (error) {
        console.log(error)           
        }
    }

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

    // const dateFormatted = new Date(singleEvent.event.startingDate).toDateString();
    // console.log(dateFormatted);

    return (
        <div className='eventContainer'>
            <Link to='/'>Go back to the Homepage</Link>
            <div className='singleEvent'>
                <div className='singleEventBasicData'>
                     {/* <span>
                        {dateFormatted}
                    </span> */}
                    <span>{`${singleEvent.event?.timeFrom} - ${singleEvent.event?.timeTo}`}</span>
                    <h1>{singleEvent.event?.eventName}</h1>
                    {/* <span>{singleEvent.event?.organizer.username}</span> */}
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
                    </div>
                    <div>{singleEvent.event?.participants}</div> 
                    <button onClick={attendEvent}> {attended ? 'You joined this event' : 'Join this event'}</button>               
                </div>
            </div>
        </div>
    )
}

export default Event;