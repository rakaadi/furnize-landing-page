import React from "react";

import { SectionContainer, ImageContainerLeft, ImageContainerRight, SocialContainer, LinkContainer, EmailContainer } from "./SocialMedia.styles";

const SocialMedia = () => {
    return (
        <SectionContainer>
            <ImageContainerLeft />
            <SocialContainer className="font-questrial bg-yellowLogo">
                <span>Find Us On</span>
                <LinkContainer>
                    <li><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="https://pinterest.com"><i className="fab fa-pinterest"></i></a></li>
                    <li><a href="https://instagram.com"><i className="fab fa-instagram-square"></i></a></li>
                    <li><a href="https://youtube.com"><i className="fab fa-youtube"></i></a></li>
                </LinkContainer>
                <EmailContainer>
                    <p>Customer Support Email</p>
                    <p>customer-support@furnizestore.com</p>
                </EmailContainer>
            </SocialContainer>
            <ImageContainerRight />
        </SectionContainer>
    )
}

export default SocialMedia;