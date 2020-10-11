import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.footer`
    ${tw`p-4 text-gray-700 grid grid-rows-2`}

    hr {
        ${tw`m-4`}
    }

    div {
        ${tw`mx-auto font-semibold text-base`}
    }
`;