import React, { createContext, useState } from "react";

import { Props } from "../types";
import { IitemObject, featuredWorks } from "./featuredWorks";

export const FeaturedWorksContext = createContext<IitemObject[]>([]);

const FeaturedWorksProvider = ({ children }: Props) => {
    const [featuredWork, setFeaturedWork] = useState<IitemObject[]>(featuredWorks);

    console.log(setFeaturedWork);
    return (
        <FeaturedWorksContext.Provider value={featuredWork}>
            {children}
        </FeaturedWorksContext.Provider>
    )
}

export default FeaturedWorksProvider;