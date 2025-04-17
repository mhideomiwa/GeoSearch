'use client'
import React, {useEffect, useState} from 'react';
import ScoreMap from "@/app/components/ScoreMap";
import {GeoPlace} from "@/app/Types";
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Page = () => {
    const router = useRouter();
    const [distance, setDistance] = useState(0);
    const {
        isError,
        hiderPosition,
        guessPosition,
        setHiderPosition,
        setIsHidden,
        setGuessPosition,
        setIsLoading
    } = useGeoSearchContext();

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

    useEffect(() => {
        if (isError) {
            router.replace('/Error')
        }
    }, [isError, router]);

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
            <div className="relative w-full" style={{height: 'calc(100vh - 108px)'}}>
                <ScoreMap/>
            </div>
            <div
                className="absolute top-1/6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-6 py-3 rounded-2xl shadow-lg backdrop-blur z-10">
                <h1 className="text-2xl font-semibold tracking-wide">
                    Distance: <span className="text-yellow-400">{
                        distance < 1
                        ? `${Math.round(distance * 52580 )} feet`
                            : `${distance} miles`
                    }</span>
                </h1>
            </div>
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 items-center">
                    <Link
                        href="/OnePlayer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl transition-all duration-200 shadow-md font-semibold hover:scale-110"
                        onClick={reset}
                    >
                        One Player
                    </Link>
                    <Link
                        href="/TwoPlayer"
                        className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-2xl transition-all duration-200 shadow-md hover:scale-110"
                        onClick={reset}
                    >
                        Two Player
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Page;
