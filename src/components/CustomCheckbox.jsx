import { useState } from "react";
import vector from "../assets/Vector.svg";
import { Checkbox } from "../styles/Checkbox.styled";

function CustomCheckbox({checked}) {

    const [active, setActive] = useState(checked);

    const handleToggle = () => {
        setActive(!active);
    }

    return (
        <Checkbox id="Custom_Checkbox" active={active} onClick={handleToggle}>
            {active && <img src={vector}/>}
        </Checkbox>
    )
}

export default CustomCheckbox
