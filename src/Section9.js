import styled from "styled-components";

export default function Section9() {
  return (
    <Wrapper>
      <Left>
        <Title>Nous joindre</Title>
        <SubTitle>Réservez votre unité !</SubTitle>
        <SubTitle2>
          Des questions ? Notre
          <br /> équipe est là pour vous !
        </SubTitle2>
        <Address>
          265, Avenue St-Honoré # 104
          <br /> Sainte-Marie, Québec G6E 2P3
        </Address>
        <Phone>1 418 209-6183</Phone>
        <Text>
          Heures d’ouverture du bureau de location : en tout temps, sur
          rendez-vous.
        </Text>
        <Text>
          Les rencontres virtuelles sont possibles. Appelez-nous pour prendre
          rendez-vous!
        </Text>
      </Left>
      <Right>
        <Name>
          {" "}
          Nom complet
          <br />
          <NameInput />
        </Name>
        <SubInputs>
          <Email>
            {" "}
            Adresse courriel
            <br />
            <Input />
          </Email>
          <Number>
            {" "}
            Numéro de téléphone
            <br />
            <Input />
          </Number>
        </SubInputs>
        <Message>
          Message
          <br />
          <Textarea rows="12" />
        </Message>
        <Button>Envoyer</Button>
      </Right>
    </Wrapper>
  );
}

const SubInputs = styled.div`
  display: flex;
  margin-top: 30px;
  width: 93%;
`;

const Textarea = styled.textarea`
  background: #f1f1f2;
  border: 1px solid #70707040;
  resize: "none";
  width: 90%;
  margin-top: 10px;
  font-size: 18px;
`;

const NameInput = styled.input`
  background: #f1f1f2;
  margin-top: 10px;
  height: 40px;
  width: 90%;
  border: 1px solid #70707040;
`;
const Input = styled.input`
  background: #f1f1f2;
  margin: 10px 0 30px 0;
  height: 40px;
  font-size: 18px;
  width: 100%;
  border: 1px solid #70707040;
`;
const Right = styled.div`
  width: 70%;
  padding-top: 18%;
  padding-left: 40px;
  height: 75%;
  display: flex;
  flex-direction: column;
`;
const Name = styled.div``;
const Email = styled.div`
  margin-right: 75px;
  width: 45%;
`;
const Number = styled.div`
  width: 45%;
`;
const Message = styled.div``;
const Button = styled.button`
  background-color: #009ad9;
  width: 300px;
  margin-top: 30px;
  height: 60px;
  border: none;
  font-size: 16px;
  color: white;
`;
const Title = styled.p`
  color: #009ad9;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 0;
`;
const Left = styled.div`
  width: 30%;
  height: 75%;
  padding-left: 10%;
`;
const SubTitle = styled.p`
  font-size: 31px;
  margin-top: 10px;
  margin-bottom: 50px;
`;
const SubTitle2 = styled.p`
  font-size: 23px;
  color: #009ad9;
  font-weight: bold;
  margin-bottom: 50px;
`;
const Address = styled.p``;
const Phone = styled.p`
  border-bottom: 1px solid #067ecf;
  padding-bottom: 40px;
`;
const Text = styled.p``;
const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
`;
