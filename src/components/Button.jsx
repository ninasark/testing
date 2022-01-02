import { Button } from "../styles/Button.styled"

function ButtonComponent({title}) {
    return (
        <Button responsiveWidth="100%" expand={true} width="188px">{title}</Button>
    )
}

export default ButtonComponent
