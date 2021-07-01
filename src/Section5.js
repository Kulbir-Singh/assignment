import styled from "styled-components";

export default function Section5() {
  return (
    <Wrapper>
      <Left>
        <Title>Un secteur de choix</Title>
        <SubTitle>Au centre-ville de Sainte-Marie</SubTitle>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
        <Button>See the plans</Button>
      </Left>
      <Right>
        <Ol>
          <Li>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </Li>
          <Li>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </Li>
          <Li>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </Li>
          <Li>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </Li>
          <Li>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </span>
          </Li>
        </Ol>
      </Right>
    </Wrapper>
  );
}

const Ol = styled.ol`
  width: 50%;
  list-style: none;
  counter-reset: li;

  li::before {
    content: counter(li);
    color: white;
    font-size: 18px;
    padding: 0 5px;
    display: inline-block;
    background-color: #009ad9;
    border-radius: 30px;
    margin-left: -1em;
  }
`;

const Li = styled.li`
  font-size: 18px;
  counter-increment: li;
  margin: 10% 0;
  span:nth-child(n) {
    position: relative;
    left: 20px;
  }
`;

const Button = styled.button`
  background-color: #009ad9;
  width: 300px;
  margin-top: 30px;
  height: 60px;
  border: none;
  font-size: 16px;
  color: white;
`;

const Right = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  color: #009ad9;
  font-size: 40px;
`;

const SubTitle = styled.p`
  font-size: 31px;
`;

const Left = styled.div`
  width: 40%;
`;

const Text = styled.p`
  font-size: 18px;
`;

const Wrapper = styled.div`
  height: 75vh;
  text-align: left;
  display: flex;
  padding-left: 10%;
`;
