'use client';
import React, {useEffect} from 'react';
import GuessView from "@/app/components/GuessView";
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";
import {LoadingPage} from "@/app/components/LoadingPage";


const Page = () => {
    const {isLoading, setIsLoading, setHiderPosition} = useGeoSearchContext();

    useEffect(() => { //ChatGPT reminded me this had to be in a useEffect.
        if (!isLoading) return;

        const generateHidingPosition = async () => {
            try {
                const response = await fetch("/api/random-position");
                const xml = await response.text();
                if (setHiderPosition && xml.lat && xml.lng) {
                    setHiderPosition({xml.lat, xml.lng});
                    setIsLoading(false);
                }
                else {
                    throw new Error("Error setting hider position");
                }

            } catch (error) {
                console.error("Error fetching random position:", error);
            }
        };

        generateHidingPosition();
    }, [isLoading, setHiderPosition, setIsLoading]);

    if (isLoading) {
        return <LoadingPage />;
    }

    return (
        <div className="relative w-full" style={{ height: 'calc(100vh - 70px)' }}>
            <GuessView />
        </div>
    );
};

export default Page;
