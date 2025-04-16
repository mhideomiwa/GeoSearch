export type GeoSearchDataContextType = {
    hiderPosition?: GeoPlace;
    setHiderPosition: (hiderPosition: GeoPlace) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    isHidden: boolean;
    setIsHidden: (isHidden: boolean) => void;
    guessPosition?: GeoPlace;
    setGuessPosition: (guessPosition: GeoPlace) => void;
};
export interface GeoPlace {
    lat: number;
    lng: number;
}
