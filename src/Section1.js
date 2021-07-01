import styled from "styled-components";
import Pic from "./resources/Groupe de masques 13.png";

export default function Section1() {
  return (
    <Wrapper>
      <Text>
        <H3>Quality Appartments for sale near you !</H3>
        <H4>Appartements for Rent</H4>
        <p>
          <strong> Lorem Ipsum is simply dummy text of the printing </strong>
          <br /> Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
          <br />
          <br />
          <strong>
            3 ½ / 4 ½ / some units adapted for people with diabilities.
          </strong>
        </p>
        <ButtonDiv>
          <Button1>See the plans</Button1>
          <Button2>Reserve a spot</Button2>
        </ButtonDiv>
      </Text>
      <Image>
        <GreyDiv>
          <Img src={Pic} />
        </GreyDiv>
      </Image>
    </Wrapper>
  );
}

const ButtonDiv = styled.div`
  display: flex;
  justify-content: left;
`;

const Button2 = styled.button`
  width: 35%;
  height: 55px;
  border: none;
  color: white;
  background-color: #009ad9;
`;

const Button1 = styled.button`
  width: 35%;
  margin-right: 15%;
  height: 55px;
  border: none;
  color: white;
  background-color: #009ad9;
`;

const H4 = styled.div`
  font-size: 31px;
  margin: none;
  text-align: left;
`;

const H3 = styled.div`
  color: #009ad9;
  font-size: 40px;
  text-align: left;
  margin: none;
`;

const GreyDiv = styled.div`
  background-color: rgba(191, 196, 199, 0.25);
  width: 450px;
  height: 600px;
`;

const Img = styled.img`
  width: 450px;
  position: relative;
  top: 40px;
  left: -30px;
  background-color: lightgrey;
`;

const Text = styled.div`
  width: 30%;
  display: flex;
  text-align: left;
  flex-direction: column;
  padding-left: 12%;
  padding-top: 5%;
  overflow: auto;
  /* justify-content: center; */
`;

const Image = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  color: black;
  display: flex;
  height: 100vh;
  font-size: 18px;
  width: 100%;
`;
