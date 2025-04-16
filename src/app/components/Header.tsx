'use client'
import React from 'react'
import Link from "next/link";
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";

function Header() {
    const { setIsHidden, setHiderPosition, setGuessPosition, setIsLoading } = useGeoSearchContext();

    const reset = () => {
        setIsHidden(false);
        setHiderPosition({ lat: 0, lng: 0 });
        setGuessPosition({ lat: 0, lng: 0 });
        setIsLoading(true);
    }

    return (
        <div className="space-x-4 p-2.5">
            <Link href='/' onClick={reset} className="flex items-center">
                <img src="/logo.svg" alt="Logo" className="w-16 h-16" />
                <div>
                    <h1 className="text-4xl font-bold">Geo Search</h1>
                </div>
            </Link>


        </div>
    );
}

export default Header
