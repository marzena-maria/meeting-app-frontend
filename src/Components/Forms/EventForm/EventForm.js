import React, { useState } from 'react';
import './EventForm.scss';
import axios from 'axios';

function EventForm() {

    async function saveEventForm() {
        const response = await axios.post('/add-new-event', {
            eventName,
            startingDate,
            // online,
            description,
            category
        })
        if(response) {
            console.log(response);
        }
    };

    //const [organizer, setOrganizer] = React.useState('');
    const [eventName, setEventName] = React.useState('');
    const [startingDate, setStartingDate] = React.useState('');
    //const [finishingDate, setFinishingDate] = React.useState('');
    //const [inOnline, setIfOnline] = React.useState(false);
    // const [location, setLocation] = React.useState(locationInitialState);
    const [description, setDescription] = React.useState('');

    // categories 
    const [category, setCategory] = React.useState([ '', 'culture', 'sport', 'learning languages', 'other' ]);

    const Options = category.map(Options => Options);

    function handleOptions(event) {
        console.clear()
        console.log((category[event.target.value]))
    };

    // participants
    //const [participants, setParticipants] = React.useState('');

    return (
        <>
        <form>
            
            <label htmlFor='eventName'>Event Name:</label>
            <input 
                onChange={event => {setEventName(event.target.value)}}
                className='eventNameInput'
                type='text'
            />

            <label htmlFor='startingDate'>Starts at:</label>
            <input 
                onChange={event => {setStartingDate(event.target.value)}}
                className='startingDateInput'
                type='date'
            />

            {/* <label htmlFor='ifOnline'>Online:</label>
            <input 
                onChange={event => {setIfOnline()}}
                className='ifOnlineInput'
                type='checkbox'
            /> */}

            <label htmlFor='description'>Description:</label>
            <input 
                onChange={event => {setDescription(event.target.value)}}
                className='descriptionInput'
                type='text'
            />

            <label htmlFor='category'>Category:</label>
            <select onChange={event => handleOptions(event)}>
                {Options.map((test, key) => 
                <option key={key} value={key}>
                    {test}
                </option>)}
            </select>

            {/*  participants????  */}
        </form>

        <button onClick={saveEventForm}>Create New Event</button>
        </>
    )   
     
}

export default EventForm;