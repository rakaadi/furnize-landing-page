import React from "react";

import { AboutSectionContainer, AboutImage, AboutContent, WorkImage, WorkContent } from "./AboutSection.styles";

const AboutSection = () => {
    return (
        <AboutSectionContainer>
            <AboutImage>
                <img src={"https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"} alt="about section" />
            </AboutImage>
            <AboutContent>
                <h1 className="font-courgette">Who We Are</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dicta porro non explicabo, labore sequi laudantium!</p>
                <ul>
                    <li><a href="/furniture"><i className="fas fa-couch"></i>Custom Furniture</a></li>
                    <li><a href="/interior-design"><i className="fas fa-pencil-ruler"></i>Interior Design</a></li>
                    <li><a href="/repair"><i className="fas fa-toolbox"></i>Repair Services</a></li>
                </ul>
                <button className="hover:text-yellowLogo bg-blueLogo">
                    <a href="/shop"><i className="fas fa-dolly-flatbed"></i> Shop</a>
                </button>
            </AboutContent>
            <WorkContent>
                <h1 className="font-courgette">How We Work</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, perspiciatis? Corrupti debitis fuga magni molestias beatae.</p>
                <p>Read our blog post to learn more</p>
                <button className="hover:text-yellowLogo bg-blueLogo">
                    <a href="/blog"><i className="fas fa-blog"></i> Blog</a>
                </button>
            </WorkContent>
            <WorkImage>
                <img src={"https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1396&q=80"} alt="how we work section" />
            </WorkImage>
        </AboutSectionContainer>
    )
}

export default AboutSection;
