import styled from "styled-components";
import tw from "twin.macro";

export const SloganContainer = styled.section`
    ${tw`flex flex-col place-items-center relative text-white mx-auto p-2 h-16 lg:max-h-screen space-y-2 align-middle text-center`}

    p {
        ${tw`font-bold lg:font-medium lg:w-full text-base lg:text-2xl`}
    }

    h2 {
        ${tw`p-2 mt-2 lg:mt-0 lg:m-auto text-base lg:text-2xl font-semibold lg:font-extrabold tracking-wider`}
    }
`;