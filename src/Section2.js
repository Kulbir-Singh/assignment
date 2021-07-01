import styled from "styled-components";

export default function Section2() {
  return (
    <Wrapper>
      <RightSection>
        <Title>
          <p>
            {" "}
            <span>Reserve you unit</span>
          </p>
          <p>
            {" "}
            <span>as soon as posible</span>
          </p>
        </Title>
        <Subtitle1>
          A modern building
          <br /> and accessible building
        </Subtitle1>
        <Subtitle2>48 units for rent</Subtitle2>
      </RightSection>
      <LeftSection>
        <Text1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text1>
        <Text2>
          <p>Units available as of 2021</p>{" "}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </Text2>
      </LeftSection>
    </Wrapper>
  );
}

const Text2 = styled.div`
  text-align: left;
  margin-top: 50px;
  background-color: #f1f1f2;
  padding: 20px;
  p:nth-child(n) {
    font-size: 18px;
  }
  p:nth-child(1) {
    font-weight: bold;
  }
`;

const Text1 = styled.p`
  font-size: 18px;
  text-align: left;
  padding-top: 45%;
`;

const Subtitle2 = styled.p`
  font-size: 31px;
  margin: 0;
  text-align: left;
`;

const Subtitle1 = styled.p`
  color: #009ad9;
  font-size: 40px;
  padding-top: 25%;
  text-align: left;
  margin: 0;
`;

const LeftSection = styled.div`
  width: 50%;
`;

const RightSection = styled.div`
  width: 50%;
`;

const Title = styled.div`
  font-size: 54px;
  color: white;
  text-align: left;
  p:nth-child(n) {
    margin: 0;
    padding: 0;
    margin-bottom: 10px;
  }
  span:nth-child(n) {
    background-color: #022943;
  }
`;

const Wrapper = styled.div`
  padding: 5%;
  padding-bottom: 1%;
  padding-left: 12%;
  height: 100vh;
  display: flex;
  background: transparent
    linear-gradient(180deg, #f1f1f2 0%, #f1f1f200 100%, #808080 100%);
`;
