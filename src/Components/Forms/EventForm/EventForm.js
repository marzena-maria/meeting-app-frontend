import React, { useState } from 'react';
import './EventForm.scss';
import axios from 'axios';

const EventForm = () => {

    const onSubmitForm = async () => {
        try {
            const response = await axios.post('/events/add-new-event', {
                eventName,
                startingDate,
                timeFrom,
                timeTo,
                online,
                //location,
                //address,
                place,
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

    const [eventName, setEventName] = React.useState('');
    const [startingDate, setStartingDate] = React.useState('');
    const [timeFrom, setTimeFrom] = React.useState('');
    const [timeTo, setTimeTo] = React.useState('');
    const [online, setOnline] = React.useState(false);
    //const [location, setLocation] = React.useState('locationInitialState');

    //address - start
    const [place, setPlace] = React.useState('');
    // const [street, setStreet] = React.useState('');
    // const [city, setCity] = React.useState('');
    // const [country, setCountry] = React.useState('');
    // const [postalCode, setPostalCode] = React.useState('');
    //address - end

    const [description, setDescription] = React.useState('');
    const [category, setCategory] = React.useState('');

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

                <label htmlFor='time'>From:</label>
                <input 
                    onChange={event => {setTimeFrom(event.target.value)}}
                    className='timeFromInput'
                    type='time'
                />

                <label htmlFor='time'>To:</label>
                <input 
                    onChange={event => {setTimeTo(event.target.value)}}
                    className='timeToInput'
                    type='time'
                />

                <label htmlFor='online'>Online:</label>
                <input 
                    onChange={event => {setOnline(event.target.checked)}}
                    className='ifOnlineInput'
                    type='checkbox'
                    checked={online}
                />

                {/* <label htmlFor='location'>Location / Address:</label>
                <input 
                    onChange={event => {setLocation(event.target.value)}}
                    className='locationInput'
                    type='text'
                /> */}

                <label htmlFor='place'>Place:</label>
                <input 
                    onChange={event => {setPlace(event.target.value)}}
                    className='placeInput'
                    type='text'
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