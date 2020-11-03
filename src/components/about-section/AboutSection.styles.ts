import styled, { css } from "styled-components";
import tw from "twin.macro";

import { LargeContainerStyles } from "../../styled.utils";

export const AboutSectionContainer = styled.div`
    ${tw`grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-0 lg:h-full relative`}

    h1 {
        ${tw`text-2xl font-semibold`}
    }
`;

export const AboutImage = styled.div`
    ${LargeContainerStyles}
    ${tw`hidden lg:block w-screen lg:w-full`}

    img {
        ${tw`w-full h-full overflow-hidden object-cover`}
    }
`;

const BoxCommonStyling = css`
    ${tw`p-4 lg:p-12 w-full flex-col space-y-4`}
    outline: 1.5px solid #ffd009;
    outline-offset: -0.5rem;

    h1 {
        ${tw`px-1 border-b border-yellow-500 rounded-b-md`}
    }

    p {
        ${tw`align-middle text-center text-base lg:text-lg font-medium`}
    }

    button {
        ${tw`mx-auto text-base font-semibold tracking-wider border rounded-full py-1 px-4 text-white transition ease-in-out duration-700`}
    }
`;

export const AboutContent = styled.div`
    ${LargeContainerStyles}
    ${BoxCommonStyling}

    & > ul {
        ${tw`flex flex-row justify-between space-x-8`}

        a {
            ${tw`p-2 rounded-sm inline-flex flex-col place-items-center justify-center align-middle text-center`}
        }
    }
`;

export const WorkContent = styled.div`
    ${LargeContainerStyles}
    ${BoxCommonStyling}

    & :nth-child(3) {
        ${tw`text-base`}
    }
`;

export const WorkImage = styled.div`
    ${LargeContainerStyles}
    ${tw`row-start-2 lg:col-start-2 w-screen lg:w-full`}

    img {
        ${tw`w-screen lg:w-full h-full overflow-hidden object-cover`}
    }
`;