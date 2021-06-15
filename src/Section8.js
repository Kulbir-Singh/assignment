import styled from "styled-components";
import Img from "./resources/8445b94314398961584593edb0f29e41@2x.png";

export default function Section8() {
  return (
    <Wrapper>
      <Banner src={Img} />
    </Wrapper>
  );
}

const Banner = styled.img`
  height: 140%;
`;

const Wrapper = styled.div`
  padding: 100px 0;
  overflow: hidden;

  height: 50vh;
`;
