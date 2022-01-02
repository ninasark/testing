import { useEffect, useRef } from "react";
import styled from "styled-components"

function SideImage({zIndex, src, event, activeSlide, index, data}) {

    let imgRef = useRef();

    useEffect(() => {
       if(event === "next") {
        if(index === activeSlide - 2) {
         //   imgRef.current.style.filter = "brightness(1.8)";
            setTimeout(() => {
               imgRef.current.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
            }, 100)
        }
 }

 if(event === "previous") {
    if(index === activeSlide - 1) {
       imgRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
           setTimeout(() => {
           // imgRef.current.style.filter = "brightness(1)";
           }, 450)
    }
}


    }, [activeSlide, event])

    return (
        <Image
        zIndex={zIndex}
        ref={imgRef}
        src={src}/>
    )
}

const Image = styled.img`
width : 100%;
height : 100%;
object-fit : cover;
z-index: ${(props) => props.zIndex};
position: absolute;
top : 0;
left : 0;
transition: all 0.7s ease-in-out;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`

export default SideImage;
