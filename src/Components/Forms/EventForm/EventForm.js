import React, { useContext } from 'react';
import './EventForm.scss';
import axios from 'axios';
import { NotificationContext } from '../../Notifications';
import NavBar from '../../shared/NavBar';
import Footer from '../../shared/Footer';

const EventForm = () => {

    const setMessage = useContext(NotificationContext);

    const onSubmitForm = async () => {
        try {
            const response = await axios.post('/events/add-new-event', {
                eventName,
                startingDate,
                timeFrom,
                timeTo,
                online,
                place,
                street,
                postalCode,
                city,
                country,
                place,
                description,
                category
            })
            console.log(response);
            if(response) {
                console.log(response);
                setMessage('New event created');
            }
        }
        catch (error) {
            console.error(error);
            // if(email && msg) {
            //     return setMessage("We will get back to you as soon as possible. Thank you for your interest.")
            // }
        }
    };


    const [eventName, setEventName] = React.useState('');
    const [startingDate, setStartingDate] = React.useState('');
    const [timeFrom, setTimeFrom] = React.useState('');
    const [timeTo, setTimeTo] = React.useState('');
    const [online, setOnline] = React.useState(false);

    //address - start
    const [place, setPlace] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [postalCode, setPostalCode] = React.useState('');
    const [city, setCity] = React.useState('');
    const [country, setCountry] = React.useState('');
    //address - end

    const [description, setDescription] = React.useState('');
    const [category, setCategory] = React.useState('');


    return (
        <div className='formContainer'>

            <NavBar />  

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

                <div className='timeFromTo'>
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
                </div>

                <label htmlFor='online'>Online:</label>
                <input 
                    onChange={event => {setOnline(event.target.checked)}}
                    className='ifOnlineInput'
                    type='checkbox'
                    checked={online}
                />

                {/* <p>Location</p> */}

                <label htmlFor='place'>Place:</label>
                <input 
                    onChange={event => {setPlace(event.target.value)}}
                    className='placeInput'
                    type='text'
                />

                <label htmlFor='street'>Street:</label>
                <input 
                    onChange={event => {setStreet(event.target.value)}}
                    className='streetInput'
                    type='text'
                />

                <label htmlFor='postalCode'>Postal Code:</label>
                <input 
                    onChange={event => {setPostalCode(event.target.value)}}
                    className='postalCodeInput'
                    type='text'
                />

                <label htmlFor='city'>City:</label>
                <input 
                    onChange={event => {setCity(event.target.value)}}
                    className='cityInput'
                    type='text'
                />

                <label htmlFor='city'>Country:</label>
                <input 
                    onChange={event => {setCountry(event.target.value)}}
                    className='countryInput'
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
                    <option value="empty"></option>
                    <option value="music">music</option>
                    <option value="books">books</option>
                    <option value="sport">sport</option>
                    <option value="languages">languages</option>
                    <option value="other">other</option>
                </select>

            </form>

            <button 
                className='newEventButton'
                onClick={onSubmitForm}>
                    Create New Event
            </button>

            <Footer /> 

        </div>
    )   
     
}

export default EventForm;