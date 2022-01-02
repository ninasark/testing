import styled from "styled-components";
import { SliderComponent } from "../styles/SliderComponent.styled";
import { HiOutlineArrowNarrowLeft, HiTranslate } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import left from "../assets/left.png";
import right from "../assets/right.png";
import Screen from "../assets/Screen.svg";
import bottom from "../assets/bottom.svg";
import Resumes from "../assets/Resumes.png";
import SliderImage from "./SliderImage";
import { useRef, useState } from "react";
import { isMobile } from "react-device-detect";
import modernresume from "../assets/modernresume.png";
import markdowncv from "../assets/markdowncv.png";
import academic from "../assets/academic.png";
import welovedevs from "../assets/welovedevs.png";
import jarrekk from "../assets/jarrekk.png";
import resumetemplate from "../assets/resumetemplate.png";
import joesblog from "../assets/joesblog.png";
import hydejack from "../assets/hydejack.png";
import SideImage from "./SideImage";
import RightSideImage from "./RightSideImage";

function SliderContainer() {
  let slides = [
    {
      src: modernresume,
      link: "https://sproogen.github.io/modern-resume-theme/",
    },
    { src: markdowncv, link: "http://elipapa.github.io/markdown-cv/" },
    { src: academic, link: "https://academic-demo.netlify.app" },
    { src: welovedevs, link: "https://vincent-cotro.welovedevs.com" },
    { src: jarrekk, link: "https://jarrekk.github.io/Jalpc/" },
    { src: resumetemplate, link: "http://resume-template.joelglovier.com" },
    { src: joesblog, link: "https://hijiangtao.github.io" },
    { src: hydejack, link: "https://hydejack.com/resume/" },
  ];

  let data = [...slides].reverse();

  let parentRef = useRef();

  let [activeSlide, setActiveSlide] = useState(0);
  let [loading, setLoading] = useState(false);
  let [event, setEvent] = useState("start");
  let [round, setRound] = useState(0);

  const handleRightArrow = () => {
    if (activeSlide !== slides.length - 1) {
      activeSlide += 1;
      setActiveSlide(activeSlide);
      setEvent("next");
    }
  };

  const handleLeftArrow = () => {
    if (activeSlide !== 0) {
      activeSlide -= 1;
      setActiveSlide(activeSlide);
      setEvent("previous");
    }
  };

  const handleMouseClick = () => {
    if (isMobile) {
      if (round !== slides.length - 1) {
        if (activeSlide !== slides.length - 1) {
          activeSlide += 1;
          setActiveSlide(activeSlide);
          setEvent("next");
        } else {
          setRound(slides.length - 1);
        }
      } else {
        if (activeSlide !== 0) {
          activeSlide -= 1;
          setActiveSlide(activeSlide);
          setEvent("previous");
        } else {
          setRound(0);
        }
      }
    }
  };

  console.log(activeSlide);

  return (
    <SliderComponent>
      <section id="slider">
        <Side 
        style={{ 
             pointerEvents : activeSlide !== 0 && !loading ? "all" : "none"
        }}
        onClick={handleLeftArrow}>
          {activeSlide !== 0 &&
            data.map(({ src }, index) => (
              <SideImage
                data={data}
                zIndex={slides.length * 10 + 10 - (index + 1 * 10)}
                src={src}
                event={event}
                activeSlide={activeSlide}
                index={index}
              />
            ))}
        </Side>
        <Slides ref={parentRef} onClick={handleMouseClick}>
          {data.map(({ src, link }, i) => (
            <SliderImage
              loading={loading}
              setLoading={setLoading}
              parentRef={parentRef}
              zIndex={slides.length * 10 + 10 - (i + 1 * 10)}
              src={src}
              event={event}
              index={i}
              activeSlide={activeSlide}
              link={link}
            />
          ))}
          <img style={{ width: "100%" }} src={Screen} />
          <img style={{ width: "120%" }} src={bottom} />
        </Slides>
        <Side 
        style={{
            pointerEvents : activeSlide !== slides.length - 1 && !loading ? "all" : "none",
        }}
        onClick={handleRightArrow}>
          {data.map(
            ({ src }, index) =>
              index !== 0 && (
                <RightSideImage
                  event={event}
                  activeSlide={activeSlide}
                  index={index}
                  zIndex={data.length * 10 - index * 10}
                  src={src}
                />
              )
          )}
        </Side>
      </section>
      <section style={{ zIndex: 100 }} id="arrows">
        <HiOutlineArrowNarrowLeft
          onClick={handleLeftArrow}
          style={{
            fontSize: "2em",
            color: activeSlide !== 0 ? "#fff" : "#575656",
            pointerEvents: activeSlide !== 0 && !loading ? "all" : "none",
            cursor: activeSlide !== 0 && !loading && "pointer",
          }}
        />
        <HiOutlineArrowNarrowRight
          onClick={handleRightArrow}
          style={{
            fontSize: "2em",
            color: activeSlide !== slides.length - 1 ? "#fff" : "#575656",
            pointerEvents:
              activeSlide !== slides.length - 1 && !loading ? "all" : "none",
            cursor: activeSlide !== slides.length - 1 && !loading && "pointer",
          }}
        />
      </section>
    </SliderComponent>
  );
}

const Side = styled.div`
  width: 390px;
  height: 265px;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 600px) {
    width: 206px;
    height: 130px;
  }

  @media screen and (min-width: 900px) and (max-width: 1380px) {
    width: 350px;
    height: 220px;
  }
`;

const Slides = styled.div`
  position: relative;
  width: 500px;
  height: 385px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: filter 0.3s ease-in;

  @media screen and (max-width: 600px) {
    width: 280px;
    height: 190px;
    z-index: 100;
  }

  @media screen and (min-width: 600px) and (max-width: 1300px) {
    width: 480px;
    height: 370px;
  }
`;

export default SliderContainer;
