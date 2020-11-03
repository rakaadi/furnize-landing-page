import React, { useContext } from "react";

import {
    ProductsContainer,
    CardsContainer,
    ProductBadge,
    ProductCard,
    FrontFace,
    BackFace
} from "./ProductCard.styles";

import CustomButton from "../custom-button/CustomButton.component";

import { FeaturedWorksContext } from "../../context/FeaturedWorks.context";

const FeaturedProducts = () => {
    const featuredWorks = useContext(FeaturedWorksContext);

    return (
        <ProductsContainer>
            <h4>Featured Works</h4>
            <CardsContainer>
                {
                    featuredWorks.map(featuredWork => (
                        <ProductCard key={featuredWork.id}>
                            <FrontFace>
                                <img src={featuredWork.link} alt={`featured work, ${featuredWork.name}`} />
                                <div>
                                    <div>
                                        <p>Category</p>
                                        <ProductBadge>{featuredWork.name}</ProductBadge>
                                    </div>
                                    <div>
                                        <p>Total Cost</p>
                                        <span>${featuredWork.price}</span>
                                    </div>
                                </div>
                            </FrontFace>
                            <BackFace>
                                <div>
                                    <p>{featuredWork.content}</p>
                                    <div>
                                        <p>Total Cost <span>${featuredWork.price}</span></p>
                                    </div>
                                    <CustomButton>
                                        <i className="fas fa-dolly-flatbed"></i> Shop Now
                                    </CustomButton>
                                </div>
                                <img src={featuredWork.link} alt={`featured work, ${featuredWork.name}`} />
                            </BackFace>
                        </ProductCard>
                    ))
                }
            </CardsContainer>
        </ProductsContainer>
    )
}

export default FeaturedProducts;
