import React from "react";

import { SectionContainer, ContentContainer, FormContainer } from "./Newsletter.styles";
import CustomButton from "../custom-button/CustomButton.component";

const Newsletter = () => {
    return (
        <SectionContainer>
            <ContentContainer>
                <p>Sign Up for our newsletter for weekly updates on our works and special offers exclusive for the mailing list member!</p>
                <FormContainer>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" placeholder="Jane" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="jane@gmail.com" />
                    </div>
                    <CustomButton>
                        Join
                    </CustomButton>
                </FormContainer>
            </ContentContainer>
        </SectionContainer>
    )
}

export default Newsletter;
