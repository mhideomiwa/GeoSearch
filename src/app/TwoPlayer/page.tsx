    'use client';
    import React from 'react';
    import HiderMap from "@/app/components/HiderMap";
    import {useGeoSearchContext} from "../context/GeoSearchContextHookData";
    import GuessView from "@/app/components/GuessView";
    import GuessMap from "@/app/components/GuessMap";
    import Image from "next/image";


    const Page = () => {
        const {isHidden} = useGeoSearchContext();
        const [makeGuess, setMakeGuess] = React.useState(false);



        if (!isHidden) {
            return (
                <div className="relative w-full" style={{ height: 'calc(100vh - 70px)' }}>
                    <HiderMap />
                </div>
            );
        }
        else {
            return (
                <div className="relative w-full" style={{ height: 'calc(100vh - 70px)' }}>
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

                    <div className={`absolute button bottom-0 right-12`} onClick={() => setMakeGuess(!makeGuess)}>
                        <Image src={'./mapIcon.svg'} alt={'Map Icon'} width='100' height='100' />
                    </div>

                </div>
            )
        }
    };

    export default Page;
