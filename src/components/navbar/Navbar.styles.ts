import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.nav`
    ${tw`relative bg-gray-100 bg-opacity-25 text-gray-900 h-20 flex justify-between text-base font-semibold w-screen top-0 left-0 right-0`};
`;

export const LogoContainer = styled.div.attrs({
    className: "p-1 max-w-full ml-2",
})`& {
    svg {
        ${tw`w-48`}
    }
}`

export const AboutContainer = styled.ul.attrs({
    className: "flex justify-between place-items-center mr-2",
})`& {
    li {
        ${tw`mx-2`}
    }
    a {
        ${tw`mx-1 py-1 px-2 border-opacity-0 hover:rounded-full hover:border-opacity-100 hover:shadow-md`}
    }
}`;
