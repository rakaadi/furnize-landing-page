import styled from "styled-components";
import tw from "twin.macro";

// import { LargeContainerStyles } from "../../styled.utils";

import kitchenImage from "../../assets/img/heftiba-kitchen.jpg"

export const SectionContainer = styled.div`
    ${tw`w-full grid grid-cols-2`}
`;

export const PreviewPostContainer = styled.div`
    ${tw`flex flex-col place-items-center justify-center text-center align-middle w-full p-4 lg:p-6 col-span-2 lg:col-span-1`}
    height: clamp(50vh, 75vh);
    outline: 1.5px solid #ffd009;
    outline-offset: -0.5rem;

    & > span {
        ${tw`text-3xl font-medium`}
    }

    & > h3 {
        ${tw`px-1 text-2xl font-semibold border-b border-yellow-500 rounded-b-md`}
        font-family: "Courgette", "cursive"
    }
`;

export const BlogPostContainer = styled.div`
    h3 {
        ${tw`text-xl font-bold tracking-wide hover:underline`}
    }

    p {
        ${tw`text-gray-600`}
    }

    span {
        ${tw`text-black font-semibold`}
    }
`;

export const ImageContainer = styled.div`
    background-image: url(${kitchenImage});
    height: 75vh;
    ${tw`hidden lg:block bg-cover bg-center w-full`}
`;

export const SpacerComponent = styled.div`
    height: 2rem;
    width: 100%;
`;