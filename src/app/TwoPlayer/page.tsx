'use client';
import React, {useEffect, useState} from 'react';
import HiderMap from "@/app/components/HiderMap";
import {useGeoSearchContext} from "../context/GeoSearchContextHookData";
import GuessView from "@/app/components/GuessView";
import GuessMap from "@/app/components/GuessMap";
import Image from "next/image";
import {TwoPlayerInstructions} from "@/app/components/TwoPlayerInstructions";
import {TwoPlayerCountDown} from "@/app/components/TwoPlayerCountDown";
import {router} from "next/client";


const Page = () => {
    const {isHidden, isError} = useGeoSearchContext();
    const [makeGuess, setMakeGuess] = useState(false);
    const [ready, setReady] = useState(false);
    const [countdownFinished, setCountdownFinished] = useState(false);
    const [fadeOutCountdown, setFadeOutCountdown] = useState(false);
    const [showGame, setShowGame] = useState(false);

    useEffect(() => {
        const shouldSkip = localStorage.getItem('skipTwoPlayerInstructions');
        if (shouldSkip === 'true') {
            setReady(true);
        }
    }, []);

    // Fade out and delay game show
    useEffect(() => {
        if (countdownFinished) {
            setFadeOutCountdown(true);
            const timer = setTimeout(() => {
                setShowGame(true);
            }, 500); // Match with fade duration

            return () => clearTimeout(timer);
        }
    }, [countdownFinished]);

    useEffect(() => {
        if (isError) {
            router.replace('/Error'); // Or navigate to whatever your error route is
        }
    }, [isError]);

    if (!ready) {
        return <TwoPlayerInstructions setReady={setReady}/>;
    }

    if (!showGame) {
        return (
            <div className={`transition-opacity duration-500 ${fadeOutCountdown ? 'opacity-0' : 'opacity-100'}`}>
                <TwoPlayerCountDown onComplete={() => setCountdownFinished(true)}/>
            </div>
        );
    }

    return (
        <div className="relative w-full" style={{height: 'calc(100vh - 108px)'}}>
            {!isHidden ? (
                <HiderMap/>
            ) : (
                <>
                    <div
                        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                        style={{
                            opacity: makeGuess ? 0 : 1,
                            pointerEvents: makeGuess ? 'none' : 'auto',
                        }}
                    >
                        <GuessView/>
                    </div>

                    <div
                        className="absolute inset-0 transition-opacity duration-500 ease-in-out"
                        style={{
                            opacity: makeGuess ? 1 : 0,
                            pointerEvents: makeGuess ? 'auto' : 'none',
                        }}
                    >
                        <GuessMap/>
                    </div>

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

                </>
            )}
        </div>
    );
};

export default Page;
