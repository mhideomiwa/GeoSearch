'use client';
import React, { useState } from 'react';
import {AdvancedMarker, APIProvider, Map, MapMouseEvent, Pin} from '@vis.gl/react-google-maps';


const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GuessMap = () => {

    const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
    const CustomizedMarker = (markerPosition) => (
        <AdvancedMarker position={{lat: 53.54992, lng: 10.00678}}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
        </AdvancedMarker>
    );

    const handleMapClick = (event: MapMouseEvent) => {
        if ((event as MapMouseEvent).latLng) {
            setMarkerPosition({
                lat: event.latLng.lat,
                lng: event.latLng.lng
            });
            console.log("lat: " + event.latLng.lat, " lng: " + event.latLng.lng);
        } else {
            console.warn("event.latLng is null");
        }
    };


    // const mapOptions = {
    //     streetViewControl: false,
    //     styles: [
    //         {
    //             featureType: "poi",
    //             elementType: "labels",
    //             stylers: [{ visibility: "off" }]
    //         },
    //         {
    //             featureType: "landscape",
    //             elementType: "labels",
    //             stylers: [{ visibility: "off" }]
    //         }
    //     ]
    // };

    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                mapId={'afb641b9e0b85f94'}
                style={{width: '100vw', height: '100vh'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                onClick={handleMapClick}
            />
            <CustomizedMarker></CustomizedMarker>
        </APIProvider>
    );
};

export default GuessMap;
