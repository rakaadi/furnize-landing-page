import React from "react";

import { SloganContainer, LearnMoreBtn } from "./Slogan.styles";

const Slogan = () => {
    return (
        <SloganContainer>
            <p>Your furniture doesn't have to look similar to those of your cousin or mother, doesn't it?</p>
            <div className="slogan-word">
                <h2>Customize <span>Your <span className="text-secondary">Own</span> Furniture</span> With Us</h2>
            </div>
            <LearnMoreBtn><a href="#popular-furniture">Learn More</a></LearnMoreBtn>
        </SloganContainer>
    )
}

export default Slogan;