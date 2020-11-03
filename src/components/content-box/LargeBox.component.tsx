import React from "react";

import { LargeContainer } from "./LargeBox.styles";

const LargeBox = ({ children }: any) => {
    return (
        <LargeContainer>
            {children}
        </LargeContainer>
    )
}

export default LargeBox;