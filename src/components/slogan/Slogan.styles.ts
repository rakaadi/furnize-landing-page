import styled from "styled-components";
import tw from "twin.macro";

export const SloganContainer = styled.section.attrs({
    className: "flex flex-col place-items-center relative mx-auto p-2 max-h-screen",
})`& {
    p {
        ${tw`font-bold lg:font-medium w-screen text-center lg:w-full text-lg text-gray-900`}
    }
    h2 {
        ${tw`p-2 mt-0 lg:m-auto text-gray-900 text-lg lg:text-2xl font-bold lg:font-extrabold`}
    }
}`