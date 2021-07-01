import styled from "styled-components";
import Img from "./resources/map.png";

export default function Section8() {
  return (
    <Wrapper>
      <Banner src={Img} />
    </Wrapper>
  );
}

const Banner = styled.img`
  height: 120%;
  width: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 100px 0;
  overflow: hidden;
  height: 50vh;
`;
