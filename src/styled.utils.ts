import { css } from "styled-components";

export const LargeContainerStyles = css`
    position: relative;
    width: clamp(25vw, 100%, 50vw);
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export const MediumContainerStyles = css`
    position: relative;
    width: clamp(12.5vw, 100%, 25vw);
    height: 35vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;