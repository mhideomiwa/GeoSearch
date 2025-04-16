'use client';
import React, { useState } from 'react';
import {AdvancedMarker, APIProvider, Map, MapMouseEvent, Pin} from '@vis.gl/react-google-maps';
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";
import Link from "next/link";


const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GuessMap = () => {
    const [showButton, setShowButton] = useState(false);
    const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
    const {setGuessPosition} = useGeoSearchContext()

    const handleMapClick = (event: MapMouseEvent) => {
        if (event.detail.latLng) {
            setMarkerPosition({
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng
            });
            setGuessPosition({
                lat: event.detail.latLng.lat,
                lng: event.detail.latLng.lng
            });
            setShowButton(true);

            // console.log("lat: " + event.detail.latLng.lat, " lng: " + event.detail.latLng.lng);
        } else {
            console.warn("event.latLng is null");
        }
    };



    return (
        <>
            <APIProvider apiKey={API_KEY}>
                <Map
                    mapId={'afb641b9e0b85f94'}
                    style={{width: '100%', height: '100%'}}
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
            <div className={`${showButton ? "block" : "hidden"} absolute bottom-1/32 left-1/2 transform -translate-x-1/2 z-10 button bg-blue-500 outline-white  text-white p-2 rounded-lg hover:bg-blue-700`}>
                <Link href={'/Score'}>
                    Confirm Guess
                </Link>
            </div>
        </>
    );
};

export default GuessMap;
