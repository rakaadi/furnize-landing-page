import styled from "styled-components";
import tw from "twin.macro";

export const SloganContainer = styled.section.attrs({
    className: "flex flex-col place-items-center relative p-2 max-h-screen",
})`& {
    p {
        ${tw`font-medium text-lg text-gray-900`}
    }
    h2 {
        ${tw`p-2 m-auto text-gray-900 text-2xl font-extrabold`}
    }
}`