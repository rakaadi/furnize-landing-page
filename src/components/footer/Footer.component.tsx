import React from "react";

import { FooterContainer, InnerContainer, ColumnContainer, DisclaimerContainer } from "./Footer.styles";

const Footer = () => {
    return (
        <FooterContainer>
            <div>
                <InnerContainer>
                    <ColumnContainer>
                        <div>Home</div>
                        <a href="/#">Shop </a>
                        <a href="/#">Blog </a>
                        <a href="/#">About Us</a>
                    </ColumnContainer>
                    <ColumnContainer>
                        <div>Resources</div>
                        <a href="/#">Tutorials</a>
                        <a href="/#">Catalog <span>New</span></a>
                    </ColumnContainer>
                    <ColumnContainer>
                        <div>Services</div>
                        <a href="/#">Custom Furniture</a>
                        <a href="/#">Interior Design <span>New</span></a>
                        <a href="/#">Repair Services </a>
                    </ColumnContainer>
                    <ColumnContainer>
                        <div>Support</div>
                        <a href="/#">FAQ</a>
                        <a href="/#">Privacy Policy</a>
                        <a href="/#">Career <span>We're hiring</span></a>
                    </ColumnContainer>
                    <ColumnContainer>
                        <div>Contact us</div>
                        <a href="/#">XXX XXXX Somewhere, at Someplace </a>
                        <a href="/#">talktous@furnize.com </a>
                    </ColumnContainer>
                </InnerContainer>
            </div>
            <div>
                <DisclaimerContainer>
                    <div>
                        <div>© Copyright 2020. All Rights Reserved.</div>
                        <div>All image courtesy of <a href="https://unsplash.com"><i className="fab fa-unsplash"></i> Unsplash.</a></div>
                    </div>
                </DisclaimerContainer>
            </div>
        </FooterContainer>
    )
}

export default Footer;
