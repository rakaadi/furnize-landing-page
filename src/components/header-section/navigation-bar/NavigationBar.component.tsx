import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import { NavbarContainer, LogoContainer, LinkContainer } from "./NavigationBar.styles";

import { ReactComponent as Logo } from "../../../assets/img/furnize-logo-white-text.svg";

const Navigationbar = () => {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <NavbarContainer className="h-13 lg:h-16">
            <LogoContainer>
                <Logo className="logo" />
                <Hamburger
                    size={42}
                    easing="ease-in-out"
                    toggle={() => setOpen(!isOpen)}
                    toggled={isOpen}
                    color="lightgray"
                />
            </LogoContainer>
            <LinkContainer className={(isOpen ? "sm:block ml-auto" : "hidden")}>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/blogs">Blogs</a></li>
                <li><a href="/faq">FAQ</a></li>
                <li><a href="/contact">Contact</a></li>
            </LinkContainer>
        </NavbarContainer>
    )
}

export default Navigationbar;