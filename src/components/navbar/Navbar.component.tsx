import React from "react";

import { NavbarContainer, LogoContainer, AboutContainer } from "./Navbar.styles";

import { ReactComponent as Logo } from "../../assets/img/furnize-logo.svg";

const Navigationbar = () => {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo className="logo" />
            </LogoContainer>
            <AboutContainer>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
            </AboutContainer>
        </NavbarContainer>
    )
}

export default Navigationbar;