'use client';
import React, { useEffect } from 'react';
import GuessView from "@/app/components/GuessView";
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import { LoadingPage } from "@/app/components/LoadingPage";

const Page = () => {
    const { isLoading, setIsLoading, setHiderPosition } = useGeoSearchContext();
    // setTimeout(() => setIsLoading(true), 500);

    useEffect(() => {
        console.log("[DEBUG] useEffect triggered. isLoading:", isLoading);
        if (!isLoading) return;

        const generateHidingPosition = async () => {
            try {
                const response = await fetch("/api/random-position");


                if (!isNaN(response.lat) && !isNaN(response.lng)) {
                    setHiderPosition!({ lat, lng });
                    setIsLoading!(false);
                } else {
                    await generateHidingPosition();
                }
            } catch (error) {
                console.error("Error fetching or parsing random position:", error);
            }
        };

        generateHidingPosition();
    }, [isLoading, setIsLoading, setHiderPosition]);

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
