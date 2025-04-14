'use client';
import React from 'react';
import {APIProvider, Map} from '@vis.gl/react-google-maps';



const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

const GuessMap = () => {


    // const handleHideLocation = (event: MouseEvent<HTMLButtonElement>)  => void{
    //     console.log("clicked")
    // }

    // const mapOptions = {
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

    // if (!isLoaded) return <p>Loading...</p>;

    return (
        <>
            <APIProvider apiKey={API_KEY}>
                <Map
                    style={{width: '100vw', height: '87vh'}}
                    defaultCenter={{lat: 22.54992, lng: 0}}
                    defaultZoom={3}
                    gestureHandling={'greedy'}
                    disableDefaultUI={true}
                    streetViewControl={true}
                    // streetViewControlOptions={{
                    //     position: google.maps.ControlPosition.RIGHT_BOTTOM // Positioning the Street View control at the bottom right
                    // }}
                />
            </APIProvider>
        </>
    );
};

export default GuessMap;
