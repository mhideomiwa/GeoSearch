'use client';
import React, {useEffect, useState} from 'react';
import {
    APIProvider,
    Map,
    useMap,
    useMapsLibrary,
} from '@vis.gl/react-google-maps';
import HiderButton from '@/app/components/HiderButton';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const StreetViewWatcher = () => {
    const map = useMap();
    const streetViewLib = useMapsLibrary('streetView');
    const [isStreetView, setIsStreetView] = useState(false);
    const [pegmanPosition, setPegmanPosition] = useState({lat: 0, lng: 0});

    useEffect(() => { //I originally put this in by hand/with predictive AI, but it wasn't working, so chatGPT fixed it for me.  I have since added the listeners for the position.
        if (!map || !streetViewLib) return;

        const panorama = map.getStreetView(); //ChatGPT fixed this for me. I thought I did it more or less the same.  No sure what the problem was

        const pegmanListener = panorama.addListener('visible_changed', () => {
            const visible = panorama.getVisible();
            const position = panorama.getPosition();
            setIsStreetView(visible);
            setPegmanPosition(position ? {lat: position.lat(), lng: position.lng()} : {lat: 0, lng: 0});
            // console.log('STREET VIEW VISIBILITY:', visible);
            // console.log('POSITION:', position ? position.toJSON() : 'No position');
        });

        const positionListener = panorama.addListener('position_changed', () => {
            const position = panorama.getPosition();
            if (position) {
                setPegmanPosition({lat: position.lat(), lng: position.lng()});
                // console.log('STREET VIEW POSITION:', position.toJSON());
            }
        });

        return () => {
            positionListener.remove()
            pegmanListener.remove();
        };
    }, [map, streetViewLib]);

    if (!isStreetView) return null;

    return (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <HiderButton lat={pegmanPosition.lat} lng={pegmanPosition.lng} />
        </div>
    );
};

const HiderMap = () => {
    return (
        <APIProvider apiKey={API_KEY}>
            <Map
                mapId={'afb641b9e0b85f94'}
                style={{width: '100%', height: '100%'}}
                defaultCenter={{lat: 22.54992, lng: 0}}
                defaultZoom={3}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                streetViewControl={true}
            />
            <StreetViewWatcher />
        </APIProvider>
    );
};

export default HiderMap;
