import styled from "styled-components"

function CircleComponent() {
    return (
        <Circle></Circle>
    )
}

const Circle = styled.div`
    width : 6px;
    height : 6px;
    border-radius: 50%;
    background : ${(props) => props.theme.main}
`

export default CircleComponent
