import styled from "styled-components";
import logo from "./resources/Groupe 33.svg";

export default function Footer() {
  return (
    <Wrapper>
      <Text>More-Information Photos Contact-Us</Text>
      <SubText>
        <span> © Copyright 2020 - Your company name</span>
        <span></span>
      </SubText>
    </Wrapper>
  );
}

const Text = styled.p`
  height: 60%;
  display: flex;
  width: 95%;
  justify-content: center;
  word-spacing: 10px;
  align-items: center;
`;

const SubText = styled.p`
  width: 94%;
  font-size: 12px;
  height: 40%;
  border-top: 2px solid #e2e5e8;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  span:nth-child(1) {
    display: flex;
    align-items: center;
    width: 300px;
    height: 20px;
  }
`;

const Wrapper = styled.footer`
  height: 30vh;
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  background: #f1f1f2;
  padding-left: 10%;
`;
