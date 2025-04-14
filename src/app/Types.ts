export type GeoSearchDataContextType = {
    setGeoplaces: (geoplaces: GeoPlaces | null) => void;
    geoplaces: GeoPlaces | null;
    isLoading: boolean;
};
export interface GeoPlace {
    latitude: number;
    longitude: number;
}
export interface GeoPlaces {
    [key: string]: GeoPlace;
}