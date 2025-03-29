'use client';
import React, { MouseEvent } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '90vh',
};

const center = {
    lat: 0,
    lng: 0
};

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GuessMap = () => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey
    });

    const handleHideLocation = (event: MouseEvent<HTMLButtonElement>)  => void{
        console.log("clicked")
    }

    const mapOptions = {
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "landscape",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    };

    if (!isLoaded) return <p>Loading...</p>;

    return (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={2}
                options={mapOptions}
            >
            </GoogleMap>
            <div className='button bg-blue-500 text-white px-4 py-2 rounded' onClick={handleHideLocation}>

            </div>
        </>
    );
};

export default GuessMap;
