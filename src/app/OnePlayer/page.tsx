'use client';
import React, { useEffect } from 'react';
import GuessView from "@/app/components/GuessView";
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import { LoadingPage } from "@/app/components/LoadingPage";


const Page = () => {
    const { isLoading, } = useGeoSearchContext();
    //
    // if (isLoading) {
    //     return <LoadingPage />;
    // }

    return (
        <div className="relative w-full" style={{ height: 'calc(100vh - 70px)' }}>
            <GuessView />
        </div>
    );
};

export default Page;
