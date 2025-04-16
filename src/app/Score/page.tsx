'use client'
import React, { useEffect, useState } from 'react';
import ScoreMap from "@/app/components/ScoreMap";
import { GeoPlace } from "@/app/Types";
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import Link from "next/link";

const Page = () => {
    const [distance, setDistance] = useState(0);
    const { hiderPosition, guessPosition, setHiderPosition, setIsHidden, setGuessPosition, setIsLoading } = useGeoSearchContext();

    function haversine_distance(mk1: GeoPlace, mk2: GeoPlace) {
        const R = 3958.8;
        const rlat1 = mk1.lat * (Math.PI / 180);
        const rlat2 = mk2.lat * (Math.PI / 180);
        const difflat = rlat2 - rlat1;
        const difflon = (mk2.lng - mk1.lng) * (Math.PI / 180);

        const d = 2 * R * Math.asin(Math.sqrt(
            Math.sin(difflat / 2) ** 2 +
            Math.cos(rlat1) * Math.cos(rlat2) *
            Math.sin(difflon / 2) ** 2
        ));
        return d;
    }

    useEffect(() => { //ChatGPT suggested to use useEffect to calculate distance
        if (hiderPosition && guessPosition) {
            const d = haversine_distance(hiderPosition, guessPosition);
            setDistance(parseFloat(d.toFixed(2)));
        }
    }, [hiderPosition, guessPosition]);

    if (!hiderPosition || !guessPosition) {
        return (
            <div className={'bg-red-600 text-center'}>
                <h1>Error loading positions.</h1>
            </div>
        );
    }

    const reset = () => {
        setIsHidden(false);
        setHiderPosition({lat: 0, lng: 0});
        setGuessPosition({lat: 0, lng: 0});
        setIsLoading(true);
    }

    return (
        <div>
            <div className="relative w-full" style={{ height: 'calc(100vh - 70px)' }}>
                <ScoreMap />
            </div>
            <div className="absolute bottom-1/8 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 px-4 py-2 rounded-2xl text-white">
                <h1 className="text-xl font-semibold">Distance: {distance} Miles</h1>
            </div>
            <div className="absolute flex bottom-1/16 left-1/2 -translate-x-1/2 justify-between">
                <div className="flex space-x-4" onClick={reset}>
                    <Link href="/OnePlayer" className="bg-blue-500 text-white px-4 py-2 rounded-lg button">
                        Play Again One Player
                    </Link>
                    <Link href="/TwoPlayer" className="bg-green-500 text-white px-4 py-2 rounded-lg button">
                        Play Again Two Player
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
