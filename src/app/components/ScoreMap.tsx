//Idea for this page found at https://mapsplatform.google.com/resources/blog/how-calculate-distances-map-maps-javascript-api/
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

// Separate component that runs *inside* APIProvider
const MarkersAndLine = () => {
    const map = useMap();
    const { hiderPosition, guessPosition } = useGeoSearchContext();

    useEffect(() => {
        if (!map || !hiderPosition || !guessPosition) return;

        const scoreLine = new google.maps.Polyline({
            path: [
                { lat: hiderPosition.lat, lng: hiderPosition.lng },
                { lat: guessPosition.lat, lng: guessPosition.lng },
            ],
            geodesic: true,
            strokeColor: '#f6b816',
            strokeOpacity: 0.8,
            strokeWeight: 2,
        });//found at https://github.com/visgl/react-google-maps/issues/105

        scoreLine.setMap(map);

        return () => scoreLine.setMap(null); // cleanup
    }, [map, hiderPosition, guessPosition]);

    return (
        <>
            <AdvancedMarker position={hiderPosition}>
                <Pin background={`#ff0000`} borderColor={'#ffffff'} glyphColor={'#ffffff'} />
            </AdvancedMarker>
            <AdvancedMarker position={guessPosition}>
                <Pin background={`#00ff00`} borderColor={'#ffffff'} glyphColor={'#ffffff'} />
            </AdvancedMarker>
        </>
    );
};

const ScoreMap = () => {
    const { hiderPosition, guessPosition } = useGeoSearchContext();

    if (!hiderPosition || !guessPosition) {
        return (
            <div className={'bg-red-600 text-center'}>
                <h1>Error loading positions. You should never see this page.</h1>
            </div>
        );
    }

    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                mapId="afb641b9e0b85f94"
                style={{ width: '100vw', height: '90vh' }}
                defaultCenter={{ lat: 22.54992, lng: 0 }}
                defaultZoom={3}
                gestureHandling="greedy"
                disableDefaultUI={true}
            >
                <MarkersAndLine/>
            </Map>
        </APIProvider>
    );
};

export default ScoreMap;
