import React from 'react';
import { useGeoSearchContext } from "@/app/context/GeoSearchContextHookData";
import { GeoPlace } from "@/app/Types";

const HiderButton = ({ lat, lng }: GeoPlace) => {
    const { setIsHidden, setHiderPosition } = useGeoSearchContext();

    function setHidingPlace() {
        if (setHiderPosition) {
            setIsHidden(true);
            setHiderPosition({ lat, lng });
            // console.log("Hiding place set to: ", lat, lng);
        } else {
            console.error("setHiderPosition is not defined");
        }
    }

    return (
        <div
            className="font-semibold cursor-pointer bg-blue-500 text-white py-3 px-6 rounded-xl hover:bg-blue-700 hover:scale-105 transform transition duration-200 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            onClick={setHidingPlace}
        >
            Confirm Hiding Place
        </div>
    );
};

export default HiderButton;
//tailwind improvements by chatGPT