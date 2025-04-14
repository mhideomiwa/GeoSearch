//reconfigured from in-class scriptures mapped

/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import { use } from "react";
import { GeoSearchDataContextType } from "../Types";
import {GeoSearchDataContext} from "./GeoSearchData";

/*----------------------------------------------------------------------
 *                      CUSTOM HOOK
 */
export function useGeoSearchContext(): GeoSearchDataContextType {
    const context = use(GeoSearchDataContext);

    if (!context) {
        throw new Error("useGeoSearchContext must be used within a GeoSeaarchDataProvider");
    }

    return context;
}