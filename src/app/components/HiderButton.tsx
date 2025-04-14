import React from 'react';
import {useGeoSearchContext} from "@/app/context/GeoSearchContextHookData";

const HiderButton = () => {
    const {setIsHidden} = useGeoSearchContext();
    function setHidingPlace() {
        setIsHidden(true);
        // setGeoplaces();
    }
    return (
        <div className={"button bg-blue-500 text-white p-2 rounded hover:bg-blue-700"} onClick={setHidingPlace}>
            Confirm Hiding Place
        </div>
    );
};

export default HiderButton;
