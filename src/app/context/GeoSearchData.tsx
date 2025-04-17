//reconfigured from in-class scriptures mapped

'use client';
/*----------------------------------------------------------------------
 *                      IMPORTS
 */
import {createContext} from "react";
import {GeoSearchDataContextType} from "../Types";

/*----------------------------------------------------------------------
 *                      PUBLIC VARIABLE
 */
export const GeoSearchDataContext = createContext<GeoSearchDataContextType | null>(null);
