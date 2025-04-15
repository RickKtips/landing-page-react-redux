// Styles
import * as Styles from "./styles";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Utilities

const SimpleSlider = ({ listItens, secTheme }) => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    speed: 2500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
<Styles.SliderContainer>
<Styles.SlideControl>
        <Styles.BtnControl className="btn-controls btn-controls--prev slick-arrow" onClick={previous}>
        <Styles.IconButton imageUrl={'arrow-left--active.svg'}>prev</Styles.IconButton>
        </Styles.BtnControl>
        <Styles.BtnControl className="btn-controls btn-controls--next slick-arrow" onClick={next}>
        <Styles.IconButton imageUrl={'arrow-right--active.svg'}>next</Styles.IconButton>
        </Styles.BtnControl>
      </Styles.SlideControl>
        <Slider ref={slider => {sliderRef = slider;}} {...settings}>
         {listItens.map(item =>  (
         <Styles.SlideItem key={item.idItem} theme={secTheme}>
          <Styles.SliderContainerBlock  secTheme={secTheme}>
          {item.img && (<Styles.Image imageUrl={item.img}></Styles.Image>)}
          {item.text && (<Styles.Text secTheme={secTheme}>{item.text}</Styles.Text>)}
          </Styles.SliderContainerBlock>
          {item.name && (<Styles.Name >{item.name}</Styles.Name>)}
          </Styles.SlideItem>))} 
       </Slider>
</Styles.SliderContainer>
  );
};

export default SimpleSlider;
