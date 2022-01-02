import styled from "styled-components";

export const PageContainer = styled.div`
    padding: 3em 4em;

    @media screen and (max-width : 775px) {
       padding : 1em 1em 1.5em 1em;
    }

    @media screen and (min-width : 775px) and (max-width : 1450px) {
        padding : 2.5em;
    }

    @media screen and (min-width : 775px) and (max-width : 1200px) {
        padding : 1.5em;
    }
`
