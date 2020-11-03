import styled from "styled-components";
import tw from "twin.macro";

export const NavbarContainer = styled.nav`
    ${tw`relative bg-gray-100 bg-opacity-25 py-1 lg:py-2 px-0 lg:px-4 text-gray-900 w-full flex flex-col lg:flex-row place-items-center justify-between w-full top-0 left-0`};
`;

export const LogoContainer = styled.div`
    ${tw`px-2 lg:px-0 w-full lg:max-w-full h-full flex justify-between items-center place-items-center`}

    svg {
        ${tw`w-1/2 lg:w-48 lg:h-full cursor-pointer`}
    }

    & > :nth-child(2) {
        ${tw`lg:hidden`}
    }
`;

export const LinkContainer = styled.ul`
    ${tw`lg:flex flex-col lg:flex-row place-items-center text-white tracking-wider font-bold lg:font-medium`}

    li {
        ${tw`mx-3 my-3 lg:my-0 sm:border border-white border-solid border-b lg:border-none`}
    }

    a {
        ${tw`text-sm text-xl p-2 border-opacity-0 hover:(rounded-sm border-opacity-100 shadow-md)`}
    }
`;
