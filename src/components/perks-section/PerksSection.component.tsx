import React from "react";

import { PerksContainer, PerkBox, SpacerComponent } from "./PerksSection.styles";

const PerksSection = () => {
    return (
        <PerksContainer>
            <PerkBox>
                <span><i className="far fa-smile-beam"></i></span>
                <h3>Satisfaction Guarantee</h3>
                <SpacerComponent />
                <p>What is the point of doing business with us if we cannot guarantee your satisfaction?</p>
            </PerkBox>
            <PerkBox>
                <span><i className="far fa-thumbs-up"></i></span>
                <h3>Excellent Craftmanship</h3>
                <SpacerComponent />
                <p>There is no work that we do without trying with the best of our ability, no compromise.</p>
            </PerkBox>
            <PerkBox>
                <span><i className="fas fa-tree"></i></span>
                <h3>Give Back To Nature</h3>
                <p>With every single product we sold, we committed to planting a single tree as our commitment to a sustainable environment.</p>
                <button className="hover:text-yellowLogo bg-blueLogo">
                    <a href="/tree">Learn More</a>
                </button>
            </PerkBox>
            <PerkBox>
                <span><i className="fas fa-hand-holding-usd"></i></span>
                <h3>Competitive Prices</h3>
                <SpacerComponent />
                <p>An excellent works do not always equal an eye-watering price tag.</p>
            </PerkBox>
            <PerkBox>
                <span><i className="fas fa-shipping-fast"></i></span>
                <h3>Fast Shipping</h3>
                <SpacerComponent />
                <p>Being late is not an option, We always finish and delivered the best of our works within schedule.</p>
            </PerkBox>
        </PerksContainer>
    )
}

export default PerksSection;
