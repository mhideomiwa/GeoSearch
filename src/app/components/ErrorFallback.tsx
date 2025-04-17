// app/components/ErrorFallback.tsx
'use client';
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";
import React from "react";



export default function ErrorFallback() {
    const {  setIsError} = useGeoSearchContext();

    function onClick() {
        setIsError(false);
        window.location.href ="/"
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-800 text-center px-4">
            <h1 className="text-4xl font-bold mb-4">Oops...</h1>
            <p className="mb-6">Something went wrong.</p>
            <p className='mb-6 cursor-pointer' onClick={onClick}>Click Here to go home</p>
        </div>
    );
}
