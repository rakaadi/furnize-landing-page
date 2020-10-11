import styled from "styled-components";
import tw from "twin.macro";

// import backgroundImageConfigurator from "../../assets/img/kari-shea.jpg";

export const ConfiguratorContainer = styled.section`
    background-image: url("https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1396&q=80");
    ${tw`w-screen grid grid-cols-2 place-items-center bg-center`}
`;

export const ContentContainer = styled.div.attrs({
    className: "p-4",
})`& {
    p {
        ${tw`p-2 bg-white bg-opacity-75 mx-12 font-medium text-lg shadow-lg`}
    }
}`