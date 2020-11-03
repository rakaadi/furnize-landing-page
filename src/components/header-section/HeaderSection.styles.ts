import styled from "styled-components";
import tw from "twin.macro";

import backgroundImage from "../../assets/img/jacalyn-beales-edit.jpg";

export const HeaderContainer = styled.header`
    ${tw`relative h-screen w-full grid bg-cover bg-bottom`}
    background-image: url(${backgroundImage});

    &::before {
        content: "";
        ${tw`w-full absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50`}
    }
`;

export const ArrowBtn = styled.span`
    ${tw`rounded-full mx-auto relative max-h-full inline-flex place-self-center shadow-lg py-1 text-white px-2 text-xl font-semibold cursor-pointer animate-bounce`}
`;

export const SpacerComponent = styled.div`
    width: 100%;
    height: 10vh;
`;