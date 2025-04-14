export type GeoSearchDataContextType = {
    setGeoplaces: (geoplaces: GeoPlaces | null) => void;
    geoplaces: GeoPlaces | null;
    isLoading: boolean;
    isHidden: boolean;
    setIsHidden: (isHidden: boolean) => void;
};
export interface GeoPlace {
    latitude: number;
    longitude: number;
}
export interface GeoPlaces {
    [key: string]: GeoPlace;
}