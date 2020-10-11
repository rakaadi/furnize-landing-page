import React, { useState, useContext } from "react";

import {
    PopularItemsContainer,
    CategoryContainer,
    ItemContainer,
    BadgeContainer
} from "./PopularFurniture.styles";

import { PopularItemsContext } from "../../context/PopularItems.context";

const PopularFurniture = () => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const popularItems = useContext(PopularItemsContext);

    return (
        <PopularItemsContainer>
            <h4>Popular Furniture Category</h4>
            <CategoryContainer
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                {
                    popularItems.map(popularItem => {
                        return (
                            <ItemContainer key={popularItem.id}>
                                <img src={popularItem.link} alt={`popular category, ${popularItem.name}`} />
                                {
                                    isHover && <BadgeContainer>{popularItem.name}</BadgeContainer>
                                }
                            </ItemContainer>
                        )
                    })
                }
            </CategoryContainer>
        </PopularItemsContainer>
    )
}

export default PopularFurniture;
