import React from 'react';
import './Maps.scss';
// import GetCoordinates from './GetCoordinates/GetCoordinates';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import axios from 'axios';



// import usePlacesAutocomplete, {
//     getGeocode,
//     getLatLng
// } from 'use-places-autocomplete';
// import {
//     Combobox,
//     ComboboxInput,
//     ComboboxPopover,
//     ComboboxList,
//     ComboboxOption
// } from '@reach/combobox';

const apiKeys = process.env.REACT_APP_GOOGLE_MAPS_KEY;
console.log(apiKeys);

Geocode.setApiKey(apiKeys);
Geocode.setRegion('de');

// Enable or disable logs. Its optional.
Geocode.enableDebug();

const url = `https://maps.googleapis.com/maps/api/geocode/json?address=Bauerberg%209%2022111%20Hamburg&key=${apiKeys}`;

const coordinates = async () => {
    try {
    const response = await axios(url);
    console.log(response.data);
    }
    catch(error) {
    console.log(error)
    }
};
coordinates();


const libraries = ['places'];

const mapContainerStyle = {
    width: '100vw',
    height: '50vh',
};

const center = {
    lat: 53.55099,
    lng: 10.0793
};

const Maps = () => {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div>
            <h1>Find meetings on Google Maps</h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}>
            </GoogleMap>
            {/* <GetCoordinates /> */}
        </div>
    )
};

export default Maps;