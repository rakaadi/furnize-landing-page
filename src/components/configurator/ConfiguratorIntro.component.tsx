import React from "react";

import { ConfiguratorContainer, ContentContainer } from "./ConfiguratorIntro.styles";
import CustomButton from "../custom-button/CustomButton.component";

const ConfiguratorIntro = () => {
    return (
        <ConfiguratorContainer className="h-75">
            <ContentContainer>
                <p className="font-questrial">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere qui non placeat repellendus voluptates, quos amet velit dignissimos? Use Our Furniture configurator to start configure your own now.</p>
            </ContentContainer>
            <CustomButton>
                <i className="fas fa-pencil-ruler"></i> Configurator
            </CustomButton>
        </ConfiguratorContainer>
    )
}

export default ConfiguratorIntro;
