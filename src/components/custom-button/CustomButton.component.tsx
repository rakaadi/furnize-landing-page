import React from "react"

import { Props } from "../../types";
import { CustomButtonContainer } from "./CustomButton.styles";

const CustomButton = ({ children }: Props) => {
    return (
        <CustomButtonContainer className="hover:text-yellowLogo bg-blueLogo font-questrial">
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton;
