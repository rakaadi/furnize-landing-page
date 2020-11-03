import styled from "styled-components";
import tw from "twin.macro";

export const FooterContainer = styled.footer`
    ${tw`flex flex-col`}
    background-color: #24292E;

    a {
        ${tw`my-3 text-white`}

        &:hover {
           color: #ffd009;
        }
    }
`;

export const InnerContainer = styled.div`
    ${tw`max-w-6xl m-auto grid grid-cols-2 lg:grid-cols-5`}

    a {
        ${tw`block`}
    }
`;

export const ColumnContainer = styled.div`
    ${tw`p-5 w-48`}

    div {
        ${tw`text-xs uppercase text-gray-500 font-medium`}
    }

    a {
        span {
            ${tw`text-teal-600 text-xs p-1`}
        }
    }
`;

export const DisclaimerContainer = styled.div`
    ${tw`flex flex-col lg:flex-row p-2 lg:pb-5 lg:px-3 lg:pt-5 m-auto border-t max-w-6xl`}

    & > div {
        ${tw`mt-2 text-white flex place-items-center justify-between w-full text-base`}
    }
`;