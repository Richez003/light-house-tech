import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../src/utils/slider.json";
import { sliderSettings } from "../../src/utils/common";
import { useNavigate, useParams } from "react-router-dom";

const Cards = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const onClick = (id) => {
    navigate(id);
  };
  return (
    <>
      <Swiper {...sliderSettings} className="swipper">
        <SliderButton />
        {data.map((card, i) => (
          <SwiperSlide key={i}>
            <div className=" flexColStart r-card">
              <img
                src={card.image}
                alt="home"
                flexCenter
                onClick={() => onClick(card.link)}
              />
              <span className="secondaryText r-price">
                <span style={{ color: "orange" }}>$</span>
                <span>{card.price}</span>
              </span>
              <span className="primaryText">{card.name}</span>
              <span className="secondaryText">{card.detail}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Cards;

const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <div className="r-button">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
