'use client';
import React, {useEffect} from 'react';
import {
    AdvancedMarker,
    APIProvider,
    Map,
    Pin,
    useMap
} from '@vis.gl/react-google-maps';
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const MarkersAndLine = () => {
    const map = useMap();
    const {hiderPosition, guessPosition} = useGeoSearchContext();

    useEffect(() => {
        if (!map || !hiderPosition || !guessPosition) return;

        // Draw the line
        const scoreLine = new google.maps.Polyline({
            path: [
                {lat: hiderPosition.lat, lng: hiderPosition.lng},
                {lat: guessPosition.lat, lng: guessPosition.lng},
            ],
            geodesic: true,
            strokeColor: '#facc15',
            strokeOpacity: 0.9,
            strokeWeight: 3,
        });

        scoreLine.setMap(map);

        // Center the map between the two points
        const bounds = new google.maps.LatLngBounds();
        bounds.extend(hiderPosition);
        bounds.extend(guessPosition);
        map.fitBounds(bounds, 100); // 100px padding

        return () => scoreLine.setMap(null); // cleanup
    }, [map, hiderPosition, guessPosition]);


    return (
        <>
            <AdvancedMarker position={hiderPosition}>
                <Pin
                    background="#ef4444" // Tailwind red-500
                    borderColor="#ffffff"
                    glyphColor="#ffffff"
                />
            </AdvancedMarker>
            <AdvancedMarker position={guessPosition}>
                <Pin
                    background="#2563eb" // Tailwind green-500
                    borderColor="#ffffff"
                    glyphColor="#ffffff"
                />
            </AdvancedMarker>
        </>
    );
};

const ScoreMap = () => {
    const {hiderPosition, guessPosition} = useGeoSearchContext();

    if (!hiderPosition || !guessPosition) {
        return (
            <div className="bg-red-600 text-white text-center p-8 rounded-xl m-8 shadow-lg">
                <h1 className="text-2xl font-bold">Error loading positions</h1>
                <p className="text-lg">You shouldn&#39;t be here! Try starting a new game.</p>
            </div>
        );
    }

    return (
        <div className="relative w-full h-[90vh]">
            <APIProvider apiKey={API_KEY}>
                <Map
                    mapId="afb641b9e0b85f94"
                    style={{width: '100%', height: '100%'}}
                    gestureHandling="greedy"
                    disableDefaultUI={true}
                    defaultCenter={{lat: 0, lng: 0}}
                    defaultZoom={10}
                >
                    <MarkersAndLine/>
                </Map>
            </APIProvider>
        </div>
    );
};

export default ScoreMap;
