import styled, { css } from "styled-components";
import tw from "twin.macro"

export const ProductsContainer = styled.div`
    ${tw`grid place-items-center p-2 w-full block relative`}
    background-color: #24292E;

    & > h4 {
        font-family: "Questrial", sans-serif;
        ${tw`text-white text-2xl my-2 mx-auto max-w-xs text-center`}
    }
`;

export const CardsContainer = styled.div`
    ${tw`grid grid-cols-2 lg:grid-cols-4 gap-4 mx-auto p-2`}
`;

export const ProductCard = styled.div`
    ${tw`relative shadow-xl`}
    cursor: pointer;
    height: clamp(220px, 30vw, 400px);
    width: clamp(100px, 45vw, 300px);
    transition: all 1s linear;
    transform-style: preserve-3d;
    perspective: 1000px;

    &:hover {
        transform: rotateY(180deg);
    }
`;

const FaceStyles = css`
    ${tw`absolute h-full w-full grid rounded-sm`}
`;

const BorderBottom = css`
    border-bottom: 2px solid #ffd009;
`;

export const FrontFace = styled.div`
    ${FaceStyles}
    z-index: 2;
    overflow: hidden;
    backface-visibility: hidden;
    //? fix backface-visibility bug for firefox
    transform: rotateY(0deg);

    img {
        position: absolute;
        size: cover;
    }

    & > div {
        ${tw`bg-white absolute p-1 lg:p-2 grid grid-cols-2 mb-auto w-full`}
        ${BorderBottom}

        div {
            ${tw`m-0 flex flex-col items-center`}

            p {
                ${tw`text-xs text-gray-600`}
            }

            span {
                ${tw`font-bold`}
            }
        }
    }
`;

export const BackFace = styled.div`
    ${FaceStyles}
    transform: rotateY(180deg);
    z-index: 1;
    overflow: hidden;

    img {
        width: 100%;
        background-size: cover;
        background-position: center;
    }

    & > div {
        ${BorderBottom}
        background-color: white;
        position: absolute;
        margin-top: auto;
        display: grid;
        place-items: center;

        p {
            padding: .5rem;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden
        }

        button {
            ${tw`w-3/4 lg:w-1/2 text-sm lg:text-base`}
            margin-bottom: 6px;
        }

        & > div {
            p {
                ${tw`text-xs lg:text-sm text-gray-600 p-0`}
            }

            span {
                ${tw`text-black font-bold`}
            }
        }
    }
`;

export const ProductBadge = styled.span`
    ${tw`text-xs lg:text-sm font-medium lg:font-bold text-gray-200 py-1 px-2 rounded uppercase shadow-md`}
    background-color: #002c73;
`;