import React, { useState, useEffect } from 'react';
import './Maps.scss';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import axios from 'axios';


const apiKeys = process.env.REACT_APP_GOOGLE_MAPS_KEY;

Geocode.setApiKey(apiKeys);
Geocode.setRegion('de');

// Enable or disable logs. Its optional.
Geocode.enableDebug();


const libraries = ['places'];

const mapContainerStyle = {
    width: '100vw',
    height: '50vh',
};

const center = {
    lat: 53.551086,
    lng: 9.993682
};


function Maps() {

    const [events, setEvents] = useState([]);
    const [city, setCity] = useState('Hamburg');
    const [markers, setMarkers] = useState([]);
    // const [info, setInfo] = useState([]);

    const address = async () => { 
  
        try {
            const response = await axios.get(`/events/search-events/test/${city}/Germany`);
            setEvents(response.data);
        }
        catch(error) {
            console.log(error)
        }
    };

    useEffect(() => {
        city && address()
    }, [city]);

    useEffect(() => {
        try {
            const getMarkers = events.map(event => 
                axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json`, 
                    { params: { address: `${event.street} ${event.postalCode}`, key: apiKeys  }}
                ).then(response => ({ name: event.eventName ,...response.data.results[0].geometry.location }))
            )
            Promise.all(getMarkers).then(response => setMarkers(response));
            // console.log(events[0].eventName);
        } catch (error) {
            console.log(error)
        }
    }, [events]);

    

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries,
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div className="map">

            <div className='inputContainerCity'>
                <label 
                    htmlFor='byCity'
                    className='inputLabelCity'>
                    Find Events on Google Maps:
                </label>

                <input 
                    value={city}
                    onChange={event => setCity(event.target.value)}
                    className='inputFieldCity'
                    type='text'
                    id='byCity'>
                </input>
            </div>

            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}>
        
                {markers.map(({ name, lat, lng }) => console.log(name) || (
                    <>
                    {/* <Marker 
                        position={{ lat, lng }}
                    /> */}
                    <InfoWindow 
                        position={{ lat, lng }}>
                            <span>{name}</span>
                    </InfoWindow>
                    </>
                ))}
           
            </GoogleMap>
        </div>
    )
};

export default Maps;