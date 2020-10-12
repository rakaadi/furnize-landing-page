import styled from "styled-components";
import tw from "twin.macro";

export const ProjectsPreviewContainer = styled.section.attrs({
    className: "grid p-2 place-items-center sm:mx-6 lg:mx-40"
})` & {
        h4 {
            ${tw`text-gray-700 text-base lg:text-2xl mt-2 mb-1 mx-auto max-w-sm`}
        }
}`;

export const StoryCardContainer = styled.div`
    ${tw`grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 p-1 mt-3`}
`;

export const StoryCard = styled.div`
    ${tw`border-b-4 border-gray-600 flex flex-col overflow-hidden shadow-lg w-40 lg:w-full`}

    img {
        ${tw`h-32 lg:h-48 bg-cover`}
    }

    h5  {
        ${tw`font-semibold text-sm lg:text-base mx-auto mt-1 bg-gray-100`}
    }

    p {
        ${tw`p-3 text-xs lg:text-sm`}
    }
`;

export const StoryLink = styled.a`
    ${tw`ml-2 hover:underline text-sm lg:text-base`}
`;