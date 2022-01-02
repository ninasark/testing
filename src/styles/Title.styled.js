import styled from "styled-components";

export const Title = styled.div`
    width : 980px;
    font-size : 70px;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 0.4em;
    color : #fff;

    & > span {
        color : ${(props) => props.theme.main};
    }

    @media screen and (min-width : 775px) and (max-width : 1280px) {
        width : 100%;
        font-size: 40px;
        line-height: 40px;
    }

    @media screen and (max-width : 775px) {
        width : 95%;
        font-size: 30px;
        height : max-content;
        margin-top: 0.5em;
    }
`