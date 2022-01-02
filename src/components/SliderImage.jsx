import { useEffect, useRef, useState } from "react"
import styled from "styled-components";
import gsap from "gsap";


function SliderImage({loading, setLoading, parentRef, src, event, index, activeSlide, zIndex, link}) {

    const imgRef = useRef()
    let [upcomingSlide, setUpcomingSlide] = useState(null);

    useEffect(() => {
    if(event === "next") {

        if(index === activeSlide) {
            imgRef.current.style.filter = "brightness(800%)";
            setTimeout(() => {
                imgRef.current.style.filter = "brightness(100%)";
            }, 300)
        }

        if(index === activeSlide - 1) {
            setLoading(true)
           setTimeout(() => {
            imgRef.current.style.filter = "brightness(800%)";
           }, 50)
            imgRef.current.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)";
            setTimeout(() => {
              imgRef.current.style.filter = "brightness(100%)"; 
            }, 500)
            setTimeout(() => {
                setLoading(false)
            }, 500)
        }

            
     }

     if(event === "previous") {
         if(activeSlide + 1 === index) {
             console.log(imgRef.current)
             imgRef.current.style.filter = "brightness(800%)";

             setTimeout(() => {
                 imgRef.current.style.filter = "brightness(100%)";
             }, 500)
         }
         if(index === activeSlide) {
                setLoading(true)
                  imgRef.current.style.filter = "brightness(800%)";
              setTimeout(() => {
                imgRef.current.style.filter = "brightness(100%)";
              }, 320)
                setTimeout(() => {
                    imgRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";  
                }, 100)
                setTimeout(() => {
                    setLoading(false)
                }, 550)
         }
     }
    }, [activeSlide, event])

    return (
        <a href={link} target="_blank">
            <Image 
        zIndex={zIndex}
        ref={imgRef} 
        src={src}/>
        </a>
    )
}

const Image = styled.img`
    position: absolute;
    top : 50%;
    left : 50%;
    transform: translate(-50%, -50%);
    width : 93%;
    opacity : 1;
    z-index: ${(props) => props.zIndex};
    height : 80%;
    transition: all 0.7s ease-in-out;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);


    @media screen and (max-width : 600px) {
       height : 90%;
    }
`

export default SliderImage
