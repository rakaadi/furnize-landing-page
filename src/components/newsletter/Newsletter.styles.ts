import styled from "styled-components";
import tw from "twin.macro";

export const SectionContainer = styled.section`
    background-image: url("https://images.unsplash.com/photo-1595428774795-8e16f034a3d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
    ${tw`bg-top flex flex-col place-items-center mt-6 p-4 h-64 w-screen relative`}

    p {
        ${tw`font-semibold text-xl`}
    }
`;

export const ContentContainer = styled.div`
    ${tw`p-2 bg-white bg-opacity-50 my-auto`}
`;

export const FormContainer = styled.div`
    ${tw`p-2 grid grid-cols-3 place-items-center gap-8 relative mt-2`}

    div {
        ${tw`flex flex-col`}
    }

    label {
        ${tw`font-bold`}
    }

    input {
        ${tw`px-2 py-2 placeholder-gray-400 text-gray-700 text-sm shadow focus:outline-none focus:shadow-outline w-64`}
    }
`;
