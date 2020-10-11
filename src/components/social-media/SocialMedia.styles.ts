import styled from "styled-components";
import tw from "twin.macro";

export const SocialContainer = styled.div`
    ${tw`mt-2 mx-auto flex p-1 text-xl font-semibold bg-opacity-75 shadow-2xl w-64`}
`;

export const LinkContainer = styled.ul.attrs({
    className: "flex justify-between mx-auto my-4",
})`& {
    li {
        ${tw`mx-1 `}
    }
    a {
        ${tw`p-2 border-opacity-0 hover:rounded-full hover:border-opacity-100 hover:shadow-md`}
    }
}`;