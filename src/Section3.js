import styled from "styled-components";
import Logo from "./resources/bulletpoint.svg";

export default function Section2() {
  const icon = {
    backgroundImage: `url(${Logo})`,
  };
  return (
    <Wrapper>
      <RightSection>
        <p>Services and amenities at your fingertips : </p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. <Button>Discover the sector</Button>
      </RightSection>
      <LeftSection>
        <Ul>
          <li>
            <Img src={Logo} />
            Indoor and outdoor parking available
          </li>
          <li>
            <Img src={Logo} />
            Interior lockers available
          </li>
          <li>
            <Img src={Logo} />
            Heated outdoor pool, available in Phase 2
          </li>
          <li>
            <Img src={Logo} />
            Elevator
          </li>
          <li>
            <Img src={Logo} />
            Gym and community hall
          </li>
          <li>
            <Img src={Logo} />
            Independent air conditioning
          </li>
          <li>
            <Img src={Logo} />
            Superior soundproofing
          </li>
        </Ul>
      </LeftSection>
    </Wrapper>
  );
}

const Img = styled.img`
  margin-left: -1em;
  padding-right: 0.75em;
`;

const Ul = styled.ul`
  columns: 2;
  padding: 50px 5% 0 5%;
  width: 80%;
  li:nth-child(n) {
    background: url("/src/resources/bulletpoint.svg");
    background-repeat: no-repeat;
    margin: 20px 10px 10px 0;
    font-size: 16px;
    list-style: none;
    ::before {
      color: blue;
      margin-left: -1em;
      padding-right: 10px;
    }
    padding: 10px 0;
  }
`;

const Button = styled.button`
  background: #022943;
  width: 55%;
  height: 70px;
  color: white;
  font-size: 16px;
  border: none;
  content: "logo";
`;

const LeftSection = styled.div`
  width: 50%;
  height: 65%;
  background: white;
  position: relative;
  top: 20%;
  left: 8%;
`;

const RightSection = styled.div`
  width: 40%;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 8% 0;
  justify-content: space-evenly;
  margin-left: 12%;
  p:nth-child(n) {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  height: 70vh;
  width: 95%;
  background: #009ad9;
  display: flex;
  text-align: left;
  font-size: 23px;
  overflow: hidden;
`;
