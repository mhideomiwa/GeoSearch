import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";

export const useRandomStreetView = () => {
    const {setHiderPosition, setIsLoading, setIsError} = useGeoSearchContext();

    const generateHidingPosition = async (attempt: number = 1): Promise<void> => {
        if (attempt > 15) {
            console.error("Too many failed attempts");
            setIsLoading(false);
            setIsError(true);
            return;
        }

        try {
            const response = await fetch('/api/random-position');
            const {lat, lng}: { lat: number; lng: number } = await response.json();

            const streetViewService = new google.maps.StreetViewService();

            await streetViewService.getPanorama(
                {location: {lat, lng}, radius: 5000},
                (
                    data: google.maps.StreetViewPanoramaData | null,
                    status: google.maps.StreetViewStatus
                ): void => {
                    if (status === google.maps.StreetViewStatus.OK && data?.location?.latLng) {
                        const svLat = data.location.latLng.lat();
                        const svLng = data.location.latLng.lng();
                        setHiderPosition({lat: svLat, lng: svLng});
                        setIsLoading(false);
                    } else {
                        // console.log("Retrying... attempt", attempt);
                        generateHidingPosition(attempt + 1);
                    }
                }
            );
        } catch (error) {
            console.error("Error generating hiding position:", error);
            setIsLoading(false);
        }
    };

    return {generateHidingPosition};
};
