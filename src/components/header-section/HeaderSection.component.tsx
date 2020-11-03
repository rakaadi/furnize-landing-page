import React from "react";

import { HeaderContainer, ArrowBtn, SpacerComponent } from "./HeaderSection.styles";
import NavigationBar from "./navigation-bar/NavigationBar.component";
import Slogan from "./slogan/Slogan.component";
import SearchBar from "./search-bar/SearchBar.component";

const HeaderSection = () => {
    return (
        <HeaderContainer>
            <NavigationBar />
            <SpacerComponent />
            <Slogan />
            <SearchBar />
            <ArrowBtn className="bg-blueLogo hover:text-yellowLogo">
                <i className="fas fa-angle-double-down"></i>
            </ArrowBtn>
        </HeaderContainer>
    )
}

export default HeaderSection;