import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
//import { Map, GoogleApiWrapper } from 'google-maps-react';
import dotenv from 'dotenv';
dotenv.config();

const Maps = () => {

    const mapStyles = {        
        height: "100vh",
        width: "100%"
    };
      
    const defaultCenter = {
        lat: 53.551086, lng: 9.993682
    }

    return (
        <div>
           <LoadScript
            googleMapsApiKey={process.env.GOOGLE_MAPS_KEY}>
                <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={defaultCenter}
                />
            </LoadScript>
        </div>
    )
};

export default Maps;