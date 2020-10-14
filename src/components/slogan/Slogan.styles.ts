import styled from "styled-components";
import tw from "twin.macro";

export const SloganContainer = styled.section.attrs({
    className: "flex flex-col place-items-center relative mx-auto p-2 max-h-screen",
})`& {
    p {
        ${tw`font-bold lg:font-medium text-center lg:w-full text-lg lg:text-2xl text-gray-900`}
    }
    h2 {
        ${tw`p-2 mt-0 lg:m-auto text-gray-900 text-lg lg:text-2xl font-bold lg:font-extrabold`}
    }
}`

export const LearnMoreBtn = styled.span.attrs({
    className: "bg-primary hover:text-secondary"
})` & {
    ${tw`rounded-full shadow-lg py-1 text-white px-2 mt-4 font-semibold cursor-pointer`}
}`