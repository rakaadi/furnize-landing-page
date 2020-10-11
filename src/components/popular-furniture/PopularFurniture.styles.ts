import styled from "styled-components";
import tw from "twin.macro"

export const PopularItemsContainer = styled.section.attrs({
    className: "font-questrial relative grid place-items-center p-1 mt-32 mx-auto w-11/12"
})`& {
    h4 {
        ${tw`text-gray-700 text-2xl mt-2 mb-1 mx-auto max-w-xs`}
    }
}`;

export const CategoryContainer = styled.div`
    ${tw`grid grid-cols-5 place-items-center p-2`}
    cursor: pointer;
`;

export const ItemContainer = styled.div`
    ${tw`overflow-hidden flex flex-col place-items-center shadow-lg`}
    img {
        size: cover;
        filter: grayscale(100%);

        &:hover {
            filter: grayscale(0);
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }
    }
`;

export const BadgeContainer = styled.span`
    ${tw`absolute mt-2 text-xs font-semibold text-gray-100 py-1 px-2 rounded uppercase shadow-lg`}
    background-color: #002c73;
`;