/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { ReactNode, useState } from "react";
import { GeoPlaces } from "../Types";
import {GeoSearchDataContext} from "@/app/context/GeoSearchData";

//reconfigured from in-class scriptures mapped
/*----------------------------------------------------------------------
 *                      COMPONENT
 */
export function GeoSearchDataProvider({ children }: { children: ReactNode }) {
    const { isLoading } = { isLoading: false };
    const [geoplaces, setGeoplaces] = useState(null as GeoPlaces | null);

    return (
        <GeoSearchDataContext
            value={{
                geoplaces,
                setGeoplaces,
                isLoading,
            }}
        >
            {children}
        </GeoSearchDataContext>
    );
}
