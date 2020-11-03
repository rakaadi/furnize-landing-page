import styled from "styled-components";
import tw from "twin.macro";

export const PerksContainer = styled.div`
    ${tw`w-full grid grid-cols-2 lg:grid-cols-5 grid-rows-3 lg:grid-rows-1 border-b border-gray-100 border-opacity-25`}
    background-color: #24292E;

    & > :nth-child(even) {
        ${tw`border-l border-r border-gray-100 border-opacity-25`}
    }

    & > :nth-child(3) {
        ${tw`col-span-2 lg:col-span-1 p-4`}
    }
`;

export const PerkBox = styled.div`
    height: clamp(25vh, 35vh);
    gap: 0.25rem;
    ${tw`grid grid-cols-1 place-content-start auto-cols-min align-middle text-center text-white text-base p-2 lg:p-4 hover:bg-gray-800`}

    span {
        ${tw`text-3xl`}
        color: #ffd009;
    }

    h3 {
        font-family: "Courgette", "cursive";
    }

    p {
        ${tw`text-sm`}
    }

    button {
        ${tw`mx-auto text-sm font-medium tracking-wider rounded-full py-1 px-4 text-white transition ease-in-out duration-700`}
    }
`;

export const SpacerComponent = styled.div`
    height: 1rem;
`;