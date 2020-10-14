import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.nav`
    ${tw`relative px-6 bg-gray-100 bg-opacity-25 text-gray-900 h-32 lg:h-20 flex flex-col lg:flex-row justify-around lg:justify-between w-screen top-0 left-0`};
`;

export const LogoContainer = styled.div.attrs({
    className: "lg:max-w-full",
})`& {
    svg {
        ${tw`w-screen lg:w-48`}
    }
}`

export const AboutContainer = styled.ul.attrs({
    className: "flex lg:justify-between lg:place-items-center text-sm lg:text-base font-bold lg:font-semibold",
})`& {
    li {
        ${tw`mx-1 lg:mx-2`}
    }
    a {
        ${tw`lg:mx-2 sm:text-xs lg:text-lg py-1 px-2 border-opacity-0 hover:rounded-full hover:border-opacity-100 hover:shadow-md`}
    }
}`;
