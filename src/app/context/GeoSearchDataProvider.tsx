'use client';

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import {ReactNode, useState} from "react";
import {GeoSearchDataContext} from "@/app/context/GeoSearchData";

//reconfigured from in-class scriptures mapped
/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function GeoSearchDataProvider({children}: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [hiderPosition, setHiderPosition] = useState({lat: 0, lng: 0});
    const [guessPosition, setGuessPosition] = useState({lat: 0, lng: 0});
    const [isHidden, setIsHidden] = useState(false);
    const [isError, setIsError] = useState(false);

    return (
        <GeoSearchDataContext.Provider
            value={{
                hiderPosition,
                setHiderPosition,
                isLoading,
                setIsLoading,
                isHidden,
                setIsHidden,
                guessPosition,
                setGuessPosition,
                isError,
                setIsError,
            }}
        >
            {children}
        </GeoSearchDataContext.Provider>

    );
}

//hiderPosition: GeoPlace;
//     setHiderPosition: (hiderPosition: GeoPlace) => void;