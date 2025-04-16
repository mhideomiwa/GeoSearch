'use client';

import React, { useEffect, useRef } from 'react';
import {
    APIProvider,
    Map,
    useMap,
    useMapsLibrary,
} from '@vis.gl/react-google-maps';
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import { useRandomStreetView } from "@/app/components/useRandomStreetView";

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const StreetViewInitializer = () => {
    const map = useMap();
    const streetViewLib = useMapsLibrary('streetView');
    const { hiderPosition } = useGeoSearchContext();
    const { generateHidingPosition } = useRandomStreetView();

    const hasGenerated = useRef(false);

    useEffect(() => {
        if (!map || !streetViewLib) return;

        if ((!hiderPosition || (hiderPosition.lat === 0 && hiderPosition.lng === 0)) && !hasGenerated.current) {
            hasGenerated.current = true;
            // console.log("Generating new hiding position...");
            generateHidingPosition();
            return;
        }

        if (hiderPosition && hiderPosition.lat !== 0 && hiderPosition.lng !== 0) {
            const streetView = map.getStreetView();
            if (!streetView) {
                console.error("No street view found");
                return;
            }
            streetView.setPosition(hiderPosition);
            streetView.setPov({ heading: 0, pitch: 0 });
            streetView.setOptions({
                addressControl: false,
                showRoadLabels: false,
                enableCloseButton: false
            });
            streetView.setVisible(true);
        }

    }, [map, streetViewLib, hiderPosition, generateHidingPosition]);

    return null;
};


const GuessView = () => {
    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                id="guessViewMap"
                mapId="afb641b9e0b85f94"
                style={{width: '100%', height: '100%'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling="greedy"
                disableDefaultUI={true}
                streetViewControl={true}
            >
                <StreetViewInitializer />
            </Map>
        </APIProvider>
    );
};

export default GuessView;
