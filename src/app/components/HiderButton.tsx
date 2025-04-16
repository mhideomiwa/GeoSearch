import React from 'react';
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";
import {GeoPlace} from "@/app/Types";


const HiderButton = ({lat,lng} : GeoPlace) => {
    const {setIsHidden, setHiderPosition} = useGeoSearchContext();

    function setHidingPlace() {
        if (setHiderPosition) {
            setIsHidden(true);
            setHiderPosition({lat, lng});
            // console.log("Hiding place set to: ", lat, lng);
        }
        else {
            console.error("setHiderPosition is not defined");
        }
    }


    return (
        <div className={"button bg-blue-500 text-white p-2 rounded hover:bg-blue-700"} onClick={setHidingPlace}>
            Confirm Hiding Place
        </div>
    );
};

export default HiderButton;
