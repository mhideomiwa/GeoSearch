import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: 0,
    lng: 0
};

if (!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY) {
    throw new Error('Missing Google Maps API key ');
}
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const Map = () => {
    return (
        <>
            <LoadScript googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={2}
                >
                    <Marker position={{ lat: 0, lng: 0 }} />
                </GoogleMap>
            </LoadScript>
        </>
    );
};

export default Map;