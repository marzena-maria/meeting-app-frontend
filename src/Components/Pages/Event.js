import React, { useState, useEffect } from 'react';
import './Event.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../shared/NavBar';
import Footer from '../shared/Footer';

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

    const dateFormatted = new Date(singleEvent.event?.startingDate).toDateString();
    // console.log(dateFormatted);

    const participants = singleEvent.event?.participants || [];
    // console.log(participants)


    return (
        <div className='eventContainer'>
            <NavBar />
            <div className='singleEvent'>
                <div className='singleEventBasicData'>
                     <span className='eventDate'>
                        {dateFormatted}
                    </span>
                    <span className='eventTime'>{`${singleEvent.event?.timeFrom} - ${singleEvent.event?.timeTo}`}</span>
                    <h1 className='eventName'>{singleEvent.event?.eventName}</h1>
                    <span>{`Hosted by: ${singleEvent.event?.organizer.username}`}</span>
                </div>
                <div className='singleEventDetailedData'>
                    <p className='eventDetails'>Details</p>
                    <p className='eventDescription'>{singleEvent.event?.description}</p>
                    <div className='eventAddress'>
                        <p className='eventAddress'>Address:  
                            {`  ${singleEvent.event?.place}, 
                            ${singleEvent.event?.street}, 
                            ${singleEvent.event?.postalCode} 
                            ${singleEvent.event?.city}, ${singleEvent.event?.country}`}
                        </p>
                    </div>
                    <div className='eventParticipants'>
                        { !participants.length
                        ?   <p>Be the first participant</p>
                        :   <div>
                                <p>Participants:</p>
                                {participants.map(participant => (   
                                    <p key={participant.email}>{`${participant.username} from ${participant.city}`}</p>
                                ))}
                            </div>
                        }
                    </div> 
                    <button 
                        onClick={attendEvent}
                        className='joinButton'> 
                            {attended ? 'You joined this event' : 'Join this event'}
                    </button>               
                </div>
            </div>
            <Footer /> 
        </div>
    )
}

export default Event;