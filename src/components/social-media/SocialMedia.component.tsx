import React from "react";

import { SocialContainer, LinkContainer } from "./SocialMedia.styles";

const SocialMedia = () => {
    return (
        <SocialContainer className="font-questrial bg-secondary">
            <LinkContainer>
                <li><span>Find Us</span></li>
                <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
            </LinkContainer>
        </SocialContainer>
    )
}

export default SocialMedia;