import { useEffect, useRef } from "react"
import styled from "styled-components"

function RightSideImage({event, activeSlide, index, src, zIndex}) {
    
    const imgRef = useRef()

    useEffect(() => {
      if(event === "next") {
         if(index === activeSlide) {
           // imgRef.current.style.filter = "brightness(1.8)";
            setTimeout(() => {
                imgRef.current.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
            }, 100)
         }
      }

      if(event === "previous") {
         if(index - 1 === activeSlide) {
            imgRef.current.style.clipPath = "polygon(0 0, 100% 0, 99% 100%, 0 100%)";
            setTimeout(() => {
              ///  imgRef.current.style.filter = "brightness(1)";
            }, 450)
         }
      }
    }, [activeSlide, event])

    return (
        <Image
        ref={imgRef}
        zIndex={zIndex}
        src={src}/>
    )
}

const Image = styled.img`
width : 100%;
height : 100%;
object-fit : cover;
position: absolute;
z-index: ${(props) => props.zIndex};
top : 0;
left : 0;
transition: all 0.7s ease-in-out;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
`

export default RightSideImage
