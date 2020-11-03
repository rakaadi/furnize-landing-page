import React from "react"

import { MediumContainer } from "./MediumBox.styles";

const MediumBox = ({ children }: any) => {
    return (
        <MediumContainer>
            {children}
        </MediumContainer>
    )
}

export default MediumBox;
