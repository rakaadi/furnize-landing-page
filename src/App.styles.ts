import styled, { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

import backgroundImage from "./assets/img/jacalyn-beales-edit.jpg";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        ${tw`container`}
        font-family: "Questrial", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export const HeaderContainer = styled.header`
    ${tw`relative`}

    ::before {
        content: "";
        background-image: url(${backgroundImage});
        ${tw`absolute h-screen w-screen top-0 left-0 bg-bottom opacity-75 overflow-hidden`}
    }
`;