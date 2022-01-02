import styled from "styled-components";

export const Checkbox = styled.div`
    border : 2px solid #FF490C;
    width : 24px;
    height : 24px;
    border-radius: 0.5em;
    background: ${(props) => props.active ? props.theme.main : "transparent"};
    cursor: pointer;
    display: grid;
    place-items: center;

    & > svg {
        pointer-events: none;
    }
`