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

import { PopularItemsContext } from "../../context/PopularItems.context";

const FeaturedProducts = () => {
    const popularItems = useContext(PopularItemsContext);

    return (
        <ProductsContainer>
            <h4>Featured Works</h4>
            <CardsContainer>
                {
                    popularItems.map(popularItem => (
                        <ProductCard key={popularItem.id}>
                            <FrontFace>
                                <img src={popularItem.link} alt={`featured work, ${popularItem.name}`} />
                                <div>
                                    <div>
                                        <p>Category</p>
                                        <ProductBadge>{popularItem.name}</ProductBadge>
                                    </div>
                                    <div>
                                        <p>Total Cost</p>
                                        <span>${popularItem.price}</span>
                                    </div>
                                </div>
                            </FrontFace>
                            <BackFace>
                                <div>
                                    <p>{popularItem.content}</p>
                                    <div>
                                        <p>Total Cost <span>${popularItem.price}</span></p>
                                    </div>
                                    <CustomButton>
                                        <i className="fas fa-dolly-flatbed"></i> Shop Now
                                    </CustomButton>
                                </div>
                                <img src={popularItem.link} alt={`featured work, ${popularItem.name}`} />
                            </BackFace>
                        </ProductCard>
                    ))
                }
            </CardsContainer>
        </ProductsContainer>
    )
}

export default FeaturedProducts;
