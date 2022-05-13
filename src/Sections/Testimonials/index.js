import React, { lazy } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const Card = lazy(() => import("../../components/Card/index"));

const Section = styled.div`
          overflow-x: hidden;


          overflow-y: hidden;


  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 5rem;
`;

const Title = styled.h1`
  padding-top: 5rem;
  color: #0a0b10;
  display: inline-block;
  font-size: calc(1.5rem + 2vw);
  margin-top: 1.5rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid var(--purple);
  }
`;

const Carousal = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;
  @media only Screen and (max-width: 40em) {
    width: 90%;
    .slick-slider .slick-arrow {
      display: none;
    }
  }
  .slick-slider .slick-arrow:before {
    color: #04e824;
    font-size: 1.9rem;
    @media only Screen and (max-width: 40em) {
      display: none;
    }
  }
  .slick-slider .slick-dots button:before {
    margin-top: 4rem;
    color: #138a36;
    font-size: 1.5rem;
  }
  .slick-slide.slick-active {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
    padding: 0;
    margin-bottom: 1.2rem;
  }
`;

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Section data-aos="fade-left" data-aos-duration="2200">
      <Title>Nuestras Reseñas:</Title>
      <Carousal>
        <Slider {...settings}>
          <Card
            text="Mollit dolor nostrud magna nostrud aute ipsum do aliquip qui esse fugiat officia veniam."
            name="Ernesto"
            image="avatar-1"
          />

          <Card
            text="Laborum nulla incididunt anim veniam culpa eiusmod magna ea."
            name="Alfredo"
            image="avatar-2"
          />

          <Card
            text="Sunt amet tempor voluptate cillum exercitation mollit in officia exercitation amet esse."
            name="Sofia"
            image="avatar-3"
          />

          <Card
            text="CodeBucks has been essential part of our business. I would definetly recommend CodeBucks. It has been amazing to have them."
            name="Jenny (CodeCall)"
            image="avatar-4"
          />
        </Slider>
      </Carousal>
    </Section>
  );
};

export default Testimonials;
