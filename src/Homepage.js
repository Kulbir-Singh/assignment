import HomeImg from "./resources/Groupedemasques12.png";
import HomeImg2 from "./resources/Groupe de masques 11.png";
import styled from "styled-components";
import Logo from "./resources/Groupe 44.svg";

export default function Homepage() {
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("header").style.background = "white";
      document.getElementById("logo").style.color = "black";
      document.getElementById("header").style.color = "black";
      document.getElementById("headerBtn").style.color = "black";
      document.getElementById("headerBtn").style.border = "2px solid black";
      document.getElementById("header").style.height = "30px";
      document.getElementById("header").style.paddingTop = "10px";
    } else {
      document.getElementById("header").style.background = "transparent";
      document.getElementById("logo").style.color = "white";
      document.getElementById("headerBtn").style.color = "white";
      document.getElementById("headerBtn").style.border = "2px solid white";
      document.getElementById("header").style.color = "";
    }
  }

  return (
    <Wrapper>
      <Header id="header">
        <Title id="logo">Your Logo</Title>
        <SideBar>
          <a href="#accueil">Home</a>
          <a href="#edifice">The building</a>
          <a href="#secteur">The Sector</a>
          <a href="#plans">Plans</a>
          <a href="#joindre">Contact Us</a>
          <Reservation id="headerBtn">Reserve a unit</Reservation>
        </SideBar>
      </Header>
      <Img src={HomeImg} />
      <Img2 src={HomeImg2} />
      <SideText>
        <Subtext>
          <span>Quality</span>
        </Subtext>
        <Subtext>
          <span>Appartments</span>
        </Subtext>
        <Subtext>
          <span>Near (Location)</span>
        </Subtext>
      </SideText>
    </Wrapper>
  );
}

const Subtext = styled.p`
  display: inline-flex;
  span:nth-child(n) {
    margin: none;
    font-size: 70px;
    background-color: #022943;
  }
`;

const SideText = styled.div`
  position: relative;
  top: -905px;
  padding-left: 12%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Reservation = styled.button`
  width: 12vw;
  border: 1px solid white;
  font-size: 15px;
  height: 100%;
  color: white;
  background-color: transparent;
`;

const Title = styled.div`
  width: 40%;
  font-size: 20px;
  text-align: left;
  padding-left: 12.5%;
  letter-spacing: 10px;
`;

const SideBar = styled.div`
  width: 60%;
  display: flex;
  padding-right: 5%;
  align-items: center;
  justify-content: space-around;
`;

const Header = styled.header`
  position: fixed;
  display: flex;
  padding: 30px 0;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  overflow: hidden;
  scroll-behavior: smooth;
`;

const Img = styled.img`
  width: 100vw;
  height: 75vh;
  z-index: 0;
  animation: fade 4s infinite;
  @keyframes fade {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

const Img2 = styled.img`
  width: 100vw;
  position: relative;
  top: -75.5%;
  height: 75vh;
  z-index: -1;
`;
