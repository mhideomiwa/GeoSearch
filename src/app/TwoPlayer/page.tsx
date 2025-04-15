    'use client';
    import React from 'react';
    import HiderMap from "@/app/components/HiderMap";
    import {useGeoSearchContext} from "../context/GeoSearchContextHookData";


    const Page = () => {
        const {isHidden, setIsHidden} = useGeoSearchContext();


        if (!isHidden) {
            return (
                <div className="relative w-full" style={{ height: 'calc(100vh - 70px)' }}>
                    <HiderMap />
                </div>
            );
        }
        else {
            return (
                <div className="text-center mt-10">
                    <h1 className="text-2xl font-bold">Hiding Place Confirmed!</h1>
                    {/*Just for testing.  Delete when done.*/}
                    <div className="button bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-4" onClick={() => setIsHidden(false)}>
                        Reset
                    </div>
                </div>
            );
        }
    };

    export default Page;
