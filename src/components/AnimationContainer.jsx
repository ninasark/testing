import text1 from "../assets/Text-1.svg";
import { AnimationComponent } from "../styles/AnimationComponent.styled";
import unionsFrame from "../assets/UnionsFrame.svg";
import { useContext, useRef, useState } from "react";
import AnimationImage from "./AnimationImage";
import { Context } from "../Context/Context";
import modernresume from "../assets/modernresume.png";
import markdowncv from "../assets/markdowncv.png";
import academic from "../assets/academic.png";
import welovedevs from "../assets/welovedevs.png";
import jarrekk from "../assets/jarrekk.png";
import resumetemplate from "../assets/resumetemplate.png";
import joesblog from "../assets/joesblog.png";
import styled from "styled-components";
import { FaHandPointUp } from "react-icons/fa";
import { isMobile } from "react-device-detect";
import icon from "../assets/Icon.svg";


function AnimationContainer() {
  const imagesData = [
    welovedevs,
    modernresume,
    academic,
    markdowncv,
    jarrekk,
    resumetemplate,
  ];

  const distance = 80;

  const images = useRef();

  let {
    lastSeenAt,
    setLastSeenAt,
    totalDistance,
    setTotalDistance,
  } = useContext(Context);

  const [xPosition, setXPosition] = useState(0);
  const [yPosition, setYPosition] = useState(0);
  let [i, setI] = useState(0);
  let [activeImages, setActiveImages] = useState([]);

  const handleMouseMove = (event) => {
    let rect = event.target.getBoundingClientRect();
    let x = event.clientX - 100;
    setXPosition(x);
    let y = event.clientY - rect.y;
    setYPosition(y);

    if (lastSeenAt.x) {
      setYPosition(y);
      totalDistance += Math.sqrt(
        Math.pow(lastSeenAt.y - yPosition, 2) +
          Math.pow(lastSeenAt.x - xPosition, 2)
      );
      setTotalDistance(totalDistance);
      if (totalDistance > distance) {
        if (i !== imagesData.length) {
          activeImages = [
            ...activeImages,
            { src: imagesData[i], position: { x: xPosition, y: yPosition } },
          ];
          setActiveImages(activeImages);
          i++;
          setI(i);
        } else {
          i = 0;
          setI(0);
        }
        lastSeenAt.x = null;
        lastSeenAt.y = null;
        setLastSeenAt(lastSeenAt);
        totalDistance = 0;
        setTotalDistance(totalDistance);
      }
    }
    lastSeenAt.x = xPosition;
    lastSeenAt.y = yPosition;
    setLastSeenAt(lastSeenAt);
  };


  const handleTouchMove = event => {
    let rect = event.target.getBoundingClientRect();
    let x = event.touches[0].clientX - 100;
    setXPosition(x);
    let y = event.touches[0].clientY - rect.y;
    setYPosition(y);
   

    if (lastSeenAt.x) {
      setYPosition(y);
      totalDistance += Math.sqrt(
        Math.pow(lastSeenAt.y - yPosition, 2) +
          Math.pow(lastSeenAt.x - xPosition, 2)
      );
      setTotalDistance(totalDistance);
      if (totalDistance > distance) {
        if (i !== imagesData.length) {
          activeImages = [
            ...activeImages,
            { src: imagesData[i], position: { x: xPosition, y: yPosition } },
          ];
          setActiveImages(activeImages);
          i++;
          setI(i);
        } else {
          i = 0;
          setI(0);
        }

        lastSeenAt.x = null;
        lastSeenAt.y = null;
        setLastSeenAt(lastSeenAt);
        totalDistance = 0;
        setTotalDistance(totalDistance);
      }
    }
    lastSeenAt.x = xPosition;
    lastSeenAt.y = yPosition;
    setLastSeenAt(lastSeenAt);
  }
  

  const handleMouseLeave = () => {
    lastSeenAt.x = null;
    lastSeenAt.y = null;
    setLastSeenAt(lastSeenAt);
    totalDistance = 0;
    setTotalDistance(totalDistance);
  }

  
  return (
    <AnimationComponent
      id="animation-container"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
     onTouchMove={handleTouchMove}
    >
      <div
        ref={images}
        style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
      >
        {activeImages.map(({ src, position }, index) => (
          <AnimationImage id="img" key={index} src={src} position={position} />
        ))}
      </div>

      <TypographyContainer>
        <Typography>Choose Creative Resumes</Typography>
      </TypographyContainer>
      <IconsContainer>
        <img
          style={{ pointerEvents: "none", mixBlendMode: "difference" }}
          src={unionsFrame}
        />
      </IconsContainer>
      <IconContainer>
        <img src={icon} style={{
          fontSize : "3em",
          color : "#ffffffc5",
          pointerEvents : "none",
          mixBlendMode : "difference"
        }}/>
      </IconContainer>
    </AnimationComponent>
  );
}

const IconContainer = styled.div`
  display : none;
  z-index: 10000;
  mix-blend-mode: difference;
  pointer-events: none;
  background : transparent;
  width : 100%;
  justify-content: center;

  @media screen and (max-width: 800px) {
    display: flex;
  }
`

const TypographyContainer = styled.div`
  display: block;

  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const IconsContainer = styled.div`
  display: block;
  z-index: 10000;
  mix-blend-mode: difference;

@media screen and (max-width: 800px) {
  display: none;
}

@media screen and (min-width : 800px) and (max-width : 1250px) {
     display: none;
    }
`

const Typography = styled.h1`
  font-family: sans-serif;
  font-weight: 700;
  position: relative;
  width: 100%;
  font-size: 37px;
  z-index: 10000;
  mix-blend-mode: difference;
  -webkit-text-stroke: 0.7px #ffffffc5;
  text-stroke: 0.7px #ffffffd6;
  -webkit-text-fill-color: transparent;
  pointer-events: none;
  transition: all 0.5s ease;
`;

export default AnimationContainer;
