import { useEffect, useRef } from "react"
import styled from "styled-components"
import gsap from "gsap";
import { isMobile } from "react-device-detect";


function AnimationImage({src, position}) {

    const imgRef = useRef()


    useEffect(() => {
        gsap.to(imgRef.current, {
           left : `${position.x + (40 + Math.random() * 10)}px`,
        })
        gsap.to(imgRef.current, 
            {
              delay : 0.8,
           opacity : 0,
           scale : isMobile ? 1.2 : 1.4,
          stagger : 0.001
         })
         setTimeout(() => {
          imgRef.current.remove()
         }, 2000)
         
    }, [src, position])

    return (
        <Image
        ref={imgRef}
        src={src}
        top={position?.y}
        left={position?.x}
        />
    )
}

const Image = styled.img`
    width : 210px;
    height : 210px;
    position: absolute;
    opacity : 1;
    transform: scale(1);
    top : ${(props) => props.top - 50}px;
    left : ${(props) => props.left}px;
    pointer-events: none;
    transition: all ease 0.5s;
    z-index : 1;
    object-fit: cover;
    filter: none;

    @media screen and (max-width: 800px) {
       width : 130px;
       height : 130px;
       z-index : -1;
  }
`

export default AnimationImage
