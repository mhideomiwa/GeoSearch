'use client';

import React from 'react';
import GuessView from "@/app/components/GuessView";
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import { LoadingPage } from "@/app/components/LoadingPage";
import Image from "next/image";
import GuessMap from "@/app/components/GuessMap";

const Page = () => {
    const [makeGuess, setMakeGuess] = React.useState(false);
    const { isLoading } = useGeoSearchContext();

    return (
        <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 70px)' }}>
            {/* Transition Container */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                 style={{ opacity: makeGuess ? 0 : 1, pointerEvents: makeGuess ? 'none' : 'auto' }}>
                <GuessView />
            </div>

            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                 style={{ opacity: makeGuess ? 1 : 0, pointerEvents: makeGuess ? 'auto' : 'none' }}>
                <GuessMap />
            </div>
            {/*ChatGPT helped with the transition*/}

            <div className={`absolute bottom-0 right-12 cursor-pointer`} onClick={() => setMakeGuess(!makeGuess)}>
                <Image src={'/mapIcon.svg'} alt={'Map Icon'} width={100} height={100} />
            </div>

            <LoadingPage isVisible={isLoading} />
        </div>
    );
};

export default Page;