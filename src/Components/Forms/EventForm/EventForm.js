import React, { useState } from 'react';
import './EventForm.scss';
import axios from 'axios';

const EventForm = () => {

    const onSubmitForm = async () => {
        try {
            const response = await axios.post('/events/add-new-event', {
                eventName,
                startingDate,
                online,
                description,
                category
            })
            console.log(response);
            if(response) {
                console.log(response);
            }
        }
        catch (error) {
            console.error(error);
        }
    };


    //const [organizer, setOrganizer] = React.useState('');
    const [eventName, setEventName] = React.useState('');

    const [startingDate, setStartingDate] = React.useState('');
    //const [finishingDate, setFinishingDate] = React.useState('');
    const [online, setOnline] = React.useState(false);
    // const [location, setLocation] = React.useState(locationInitialState);
    const [description, setDescription] = React.useState('');

    // categories 
    //const [category, setCategory] = React.useState([ '', 'culture', 'sport', 'learning languages', 'other' ]);
    //const Options = category.map(Options => Options);

    const [category, setCategory] = React.useState('');

    // function handleOptions(event) {
    //     console.clear()
    //     console.log((category[event.target.value]))
    // };

    return (
        <div className='formContainer'>
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

                <label htmlFor='online'>Online:</label>
                <input 
                    onChange={event => {setOnline(event.target.checked)}}
                    className='ifOnlineInput'
                    type='checkbox'
                    checked={online}
                />

                <label htmlFor='description'>Description:</label>
                <textarea 
                    onChange={event => {setDescription(event.target.value)}}
                    className='descriptionInput'
                    type='text'
                />

                <label htmlFor='category'>Category:</label>
                <select onChange={event => setCategory(event.target.value)}>
                    <option value="music">music</option>
                    <option value="books">books</option>
                    <option value="sport">sport</option>
                    <option value="learning languages">learning languages</option>
                    <option value="other">other</option>
                </select>

            </form>

            <button onClick={onSubmitForm}>Create New Event</button>
        </div>
    )   
     
}

export default EventForm;