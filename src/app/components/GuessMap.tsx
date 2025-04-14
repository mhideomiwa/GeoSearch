'use client';
import React, { useState } from 'react';
import {AdvancedMarker, APIProvider, Map, MapMouseEvent, Pin} from '@vis.gl/react-google-maps';


const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GuessMap = () => {

    const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);


    const handleMapClick = (event: MapMouseEvent) => {
        if (event.detail.latLng) {
            setMarkerPosition({
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng
            });
            console.log("lat: " + event.detail.latLng.lat, " lng: " + event.detail.latLng.lng);
        } else {
            console.warn("event.latLng is null");
        }
    };

    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                mapId={'afb641b9e0b85f94'}
                style={{width: '100vw', height: '90vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                onClick={handleMapClick}
            />
            <AdvancedMarker position={markerPosition}>
                <Pin
                    background={`#ff0000`}
                    borderColor={'#ffffff'}
                    glyphColor={'#ffffff'}
                />
            </AdvancedMarker>

        </APIProvider>
    );
};

export default GuessMap;
