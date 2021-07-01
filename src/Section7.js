import styled from "styled-components";
import Img1 from "./resources/Groupedemasques12.png";
import Img2 from "./resources/Groupe de masques 11.png";
import { useState } from "react";

export default function Section7() {
  const [image, setImage] = useState(Img1);

  return (
    <Wrapper>
      <Buttons>
        <Title>
          <span>Les réservations</span>
          <br />
          <br />
          <span>sont commencées!</span>
        </Title>
        <button
          onClick={() => {
            setImage(Img1);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setImage(Img2);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setImage(Img1);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setImage(Img2);
          }}
        >
          1
        </button>
        <button>More Info</button>
      </Buttons>{" "}
      <ImgDiv>
        <Img src={image} />{" "}
      </ImgDiv>
      <BackgroundDiv> </BackgroundDiv>
    </Wrapper>
  );
}

const Title = styled.p`
  width: 700px;
  text-align: left;
  padding-bottom: 150px;
  span:nth-child(n) {
    font-size: 54px;
    color: white;
    background-color: #022943;
  }
`;

const Buttons = styled.div`
  width: 25px;
  position: relative;
  top: 125px;
  left: 14%;
  button:nth-child(n) {
    margin: 10px 0;
    border: none;
    height: 25px;
    width: 25px;
    font-size: 18px;
    color: #067ecf;
  }
  button:nth-child(6) {
    background-color: #009ad9;
    width: 300px;
    margin-top: 30px;
    height: 60px;
    border: none;
    font-size: 16px;
    color: white;
  }
`;

const Reservebtn = styled.button``;

const BackgroundDiv = styled.div`
  background-color: #009ad9;
  width: 85%;
  height: 75%;
  position: relative;
  top: -1425px;
  z-index: -2;
`;

const ImgDiv = styled.div`
  width: 85%;
  height: 80%;
  position: relative;
  z-index: -1;
  top: -540px;
  left: 10%;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
`;
