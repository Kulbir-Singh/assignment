import { useEffect } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "./resources/Groupe de masques 11.png";
import Img2 from "./resources/Groupe de masques 15.png";
import Img3 from "./resources/Groupedemasques12.png";
import "swiper/swiper-bundle.css";

export default function Section4() {
  const Swip = {
    height: "100%",
    width: "100vw",
    padding: "10px 0px 0 5%",
  };
  const singleSlide = {
    height: "120%",
    cursor: "pointer",
    maxwidth: "500px",
    margin: "0 100px",
    overflow: "hidden",
  };
  return (
    <Wrapper>
      <Swiper style={Swip} spaceBetween={50} slidesPerView={1.5}>
        <SwiperSlide style={singleSlide}>
          <Img src={Img1} />
        </SwiperSlide>
        <SwiperSlide style={singleSlide}>
          <Img src={Img2} />
        </SwiperSlide>
        <SwiperSlide style={singleSlide}>
          <Img src={Img3} />
        </SwiperSlide>
        <SwiperSlide style={singleSlide}></SwiperSlide>
      </Swiper>
      <Text>
        <span>
          Discover the possibilities
          <br />
          available to you
        </span>
      </Text>
    </Wrapper>
  );
}

const Text = styled.div`
  text-align: left;
  margin: 10% 0;
  margin-left: 10%;
  span:nth-child(n) {
    background: #022943;
    color: white;
    font-size: 54px;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  z-index: -1;
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
  /* align-items: center; */
  flex-direction: column;
  /* justify-content: center; */
  padding-top: 5%;
`;
