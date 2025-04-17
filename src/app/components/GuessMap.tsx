'use client';
import React, { useState } from 'react';
import {
    AdvancedMarker,
    APIProvider,
    Map,
    MapMouseEvent,
    Pin,
} from '@vis.gl/react-google-maps';
import { useGeoSearchContext } from '@/app/context/GeoSearchContextHookData';
import Link from 'next/link';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GuessMap = () => {
    const [showButton, setShowButton] = useState(false);
    const [markerPosition, setMarkerPosition] = useState<{ lat: number; lng: number } | null>(null);
    const { setGuessPosition } = useGeoSearchContext();

    const handleMapClick = (event: MapMouseEvent) => {
        const coords = event.detail.latLng;
        if (coords) {
            const pos = { lat: coords.lat, lng: coords.lng };
            setMarkerPosition(pos);
            setGuessPosition(pos);
            setShowButton(true);
        } else {
            console.warn("No position found on click.");
        }
    };

    return (
        <div className="relative w-full h-full">
            <APIProvider apiKey={API_KEY}>
                <Map
                    mapId="afb641b9e0b85f94"
                    style={{ width: '100%', height: '100%' }}
                    defaultCenter={{ lat: 22.54992, lng: 0 }}
                    defaultZoom={3}
                    gestureHandling="greedy"
                    disableDefaultUI={true}
                    onClick={handleMapClick}
                />

                {markerPosition && (
                    <AdvancedMarker position={markerPosition}>
                        <Pin
                            background="#2563eb" // Tailwind blue-600
                            borderColor="#ffffff"
                            glyphColor="#ffffff"
                        />
                    </AdvancedMarker>
                )}
            </APIProvider>

            {/* Confirm Button */}
            {showButton && (
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <Link href="/Score">
                        <button className="bg-blue-600 text-white font-bold px-6 py-3 rounded-full hover:bg-blue-700 hover:scale-105 transform transition duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300">
                            Confirm Guess
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default GuessMap;
//styling help from ChatGPT