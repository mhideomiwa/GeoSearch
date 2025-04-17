'use client';

import React, {useEffect, useState} from 'react';
import GuessView from "@/app/components/GuessView";
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import { LoadingPage } from "@/app/components/LoadingPage";
import Image from "next/image";
import GuessMap from "@/app/components/GuessMap";
import {OnePlayerInstructions} from "@/app/components/OnePlayerInstructions";
import {useRouter} from "next/navigation";

const Page = () => {
    const [makeGuess, setMakeGuess] = useState(false);
    const [ready, setReady] = useState(false);
    const { isLoading, isError } = useGeoSearchContext();
    const router = useRouter();

    useEffect(() => {
        const shouldSkip = localStorage.getItem('skipOnePlayerInstructions');
        if (shouldSkip === 'true') {
            setReady(true);
        }
    }, [setReady]);

    useEffect(() => {
        if(isError) {
            router.replace('/Error')
        }
    }, [isError, router]);

    if(!ready) {
        return <OnePlayerInstructions setReady = {setReady} />
    }

    return (
        <div className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 108px)' }}>
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

            <div
                className="absolute bottom-0 right-12 cursor-pointer"
                onClick={() => setMakeGuess(!makeGuess)}
            >
                <Image
                    src={'/mapIcon.svg'}
                    alt={'Map Icon'}
                    width={100}
                    height={100}
                    className="hover:scale-110 transform transition duration-200 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300"
                />
            </div>


            <LoadingPage isVisible={isLoading} />
        </div>
    );
};

export default Page;