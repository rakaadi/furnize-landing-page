import styled, { css } from "styled-components";
import tw from "twin.macro";

import LeftImage from "../../assets/img/bence-sofa.jpg";
import RightImage from "../../assets/img/naomi-sofa.jpg";

export const SectionContainer = styled.div`
    ${tw`grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-3 w-full`}
`;

export const SocialContainer = styled.div`
    ${tw`w-full flex flex-col place-items-center py-4 text-xl font-semibold bg-opacity-75 space-y-2`}
    outline: 1.5px solid white;
    outline-offset: -0.5rem;
    height: clamp(20vh, 25vh);

    span {
        ${tw`px-1 border-b border-white rounded-b-md`}
        font-family: "Courgette", "cursive";
    }
`;

export const LinkContainer = styled.ul`
    ${tw`flex justify-between mx-auto`}

    li {
        ${tw`mx-1 `}
    }
    a {
        ${tw`p-2 border-opacity-0 hover:rounded-full hover:border-opacity-100 hover:shadow-md`}
    }
`;

export const EmailContainer = styled.div`
    ${tw`space-y-2 text-base align-middle text-center`}

    & > :nth-child(1) {
        font-family: "Courgette", "cursive";
    }
`;

const CommonContainerStyles = css`
    ${tw`bg-cover bg-bottom h-full`}
`;

export const ImageContainerLeft = styled.div`
    background-image: url(${LeftImage});
    ${CommonContainerStyles}
    ${tw`hidden lg:block`}
`;

export const ImageContainerRight = styled.div`
    background-image: url(${RightImage});
    ${CommonContainerStyles}
`;