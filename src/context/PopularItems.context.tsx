import React, { createContext, useState } from "react";

import { Props } from "../types";
import { IitemObject, popularItems } from "./PopularItems";

export const PopularItemsContext = createContext<IitemObject[]>([]);

const PopularItemsProvider = ({ children }: Props) => {
    const [popularItem, setPopularItem] = useState<IitemObject[]>(popularItems);

    console.log(setPopularItem);
    return (
        <PopularItemsContext.Provider value={popularItem}>
            {children}
        </PopularItemsContext.Provider>
    )
}

export default PopularItemsProvider;