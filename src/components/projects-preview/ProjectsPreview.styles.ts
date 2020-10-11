import styled from "styled-components";
import tw from "twin.macro";

export const ProjectsPreviewContainer = styled.section.attrs({
    className: "grid p-2 place-items-center mx-40"
})` & {
        h4 {
            ${tw`text-gray-700 text-2xl mt-2 mb-1 mx-auto max-w-sm`}
        }
}`;

export const StoryCardContainer = styled.div`
    ${tw`grid grid-cols-4 gap-4 p-1 mt-3`}
`;

export const StoryCard = styled.div`
    ${tw`border-b-4 border-gray-600 flex flex-col overflow-hidden shadow-lg`}

    img {
        ${tw`h-48 bg-cover`}
    }

    h5  {
        ${tw`font-semibold mx-auto mt-1 bg-gray-100`}
    }

    p {
        ${tw`p-3 text-sm`}
    }
`;

export const StoryLink = styled.a`
    ${tw`ml-2 hover:underline`}
`;